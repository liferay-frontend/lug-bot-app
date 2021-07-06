import ClayBreadcrumb from '@clayui/breadcrumb';
import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import ClayPanel from '@clayui/panel';
import React, {useEffect, useRef, useState} from 'react';
import Terminal from 'react-console-emulator';
import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';

import CodeBlock from '../../components/CodeBlock';
import STATES from '../../constants/taskStates';
import getAPIOrigin from '../../utils/getAPIOrigin';

const fetcher = (args) => fetch(args).then((res) => res.json());

export default function Task({initialStagedChanges, project, task}) {
	const [stagedChanges, setStagedChanges] = useState(initialStagedChanges);
	const terminalRef = useRef(null);

	const {data} = useSWR(`/api/tasks/${task.id}/log`, fetcher, {
		refreshInterval: 1000,
	});

	const {displayType, label} = STATES.byId[task.state];

	const isCompleted = task.state === STATES.byName.complete.id;
	const isRunning = task.state === STATES.byName.running.id;

	function postStaged(add, locator) {
		fetch(`/api/tasks/${task.id}/staged`, {
			body: JSON.stringify({add, locator}),
			method: 'POST',
		});
	}

	async function cancelRunningTask(taskId, states) {
		const currentTask = await fetch(`/api/tasks/${taskId}`).then(
			(response) => response.json()
		);

		currentTask.state = states.byName.waiting.id;

		await fetch(`/api/tasks/${taskId}`, {
			body: JSON.stringify(currentTask),
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
			mode: 'cors',
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
		});

		await fetch(`/api/tasks/${taskId}`).then((response) => response.json());
	}

	useEffect(() => {
		if (!isCompleted) {
			terminalRef.current.pushToStdout(data?.log);
		}
	}, [data]);

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol>
					<ClayBreadcrumb
						ellipsisBuffer={1}
						items={[
							{
								href: `/tasks`,
								label: `${project.name} Tasks`,
							},
							{
								active: true,
								label: task.name,
							},
						]}
					/>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow containerElement="h1" float>
				<ClayLayout.ContentCol expand>
					{task.name}
				</ClayLayout.ContentCol>

				{isCompleted && (
					<>
						<ClayLayout.ContentCol expand>
							<ClayLink
								button
								displayType="secondary"
								href="#"
								style={{marginLeft: 'auto'}}
							>
								{'Download Report'}
							</ClayLink>
						</ClayLayout.ContentCol>

						<ClayLayout.ContentCol style={{marginLeft: 4}}>
							<ClayButton
								disabled={!stagedChanges.length}
								// @ts-ignore
								displayType={
									stagedChanges.length
										? 'success'
										: 'secondary'
								}
								onClick={() =>
									alert(
										`Sending PR with the following changes:\n ${stagedChanges.join(
											'\n'
										)}`
									)
								}
							>
								{`Send Pull Request (${stagedChanges.length})`}
							</ClayButton>
						</ClayLayout.ContentCol>
					</>
				)}

				{isRunning && (
					<ClayLayout.ContentCol>
						<ClayLink
							button
							className="btn-danger"
							href={`/tasks`}
							onClick={() => cancelRunningTask(task.id, STATES)}
						>
							{`Cancel ${task.name}`}
						</ClayLink>
					</ClayLayout.ContentCol>
				)}
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow style={{marginBottom: 4}}>
				<ClayLayout.ContentCol>
					<ClayLabel displayType={displayType} large>
						{label}
					</ClayLabel>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow>
				{!isCompleted && (
					<ClayLayout.ContentCol expand>
						<Terminal
							commands={{}}
							readOnly
							ref={terminalRef}
							style={{
								flex: 1,
								maxHeight: '300px',
							}}
							welcomeMessage="Running..."
						/>
					</ClayLayout.ContentCol>
				)}

				{isCompleted && (
					<ClayLayout.ContentCol expand>
						{task.recommendations && (
							<>
								<h2>{task.totalRecommendations} Issues: </h2>

								{Object.entries(task.recommendations).map(
									([file, comments]: any) => (
										<ClayPanel
											collapsable
											displayTitle={
												<span
													style={{
														textTransform: 'none',
													}}
												>
													({comments.length}) {file}
												</span>
											}
											displayType="secondary"
											key={file}
											showCollapseIcon={true}
										>
											{comments.map((comment, i) => {
												const isStaged =
													stagedChanges.indexOf(
														comment.id
													) !== -1;

												return (
													<React.Fragment key={i}>
														<ClayPanel.Header>
															<ClayLayout.ContentRow
																containerElement="h3"
																float
															>
																<ClayLayout.ContentCol>
																	{`Line ${comment.line}: ${comment.title}`}
																</ClayLayout.ContentCol>
																<ClayLayout.ContentCol
																	expand
																>
																	<ClayButton
																		// @ts-ignore
																		displayType={
																			isStaged
																				? 'success'
																				: 'secondary'
																		}
																		onClick={() => {
																			postStaged(
																				!isStaged,
																				comment.id
																			);

																			const newArray =
																				[
																					...stagedChanges,
																				];

																			if (
																				isStaged
																			) {
																				newArray.splice(
																					newArray.indexOf(
																						comment.id
																					),
																					1
																				);
																			} else {
																				newArray.push(
																					comment.id
																				);
																			}

																			setStagedChanges(
																				newArray
																			);
																		}}
																		small
																		style={{
																			marginLeft:
																				'auto',
																		}}
																	>
																		{isStaged
																			? 'Staged'
																			: 'Stage Change'}

																		{isStaged && (
																			<ClayIcon
																				symbol="check"
																				style={{
																					marginLeft: 4,
																				}}
																			/>
																		)}
																	</ClayButton>
																</ClayLayout.ContentCol>
															</ClayLayout.ContentRow>
														</ClayPanel.Header>

														<ClayPanel.Body>
															{comment.description && (
																<ReactMarkdown>
																	{
																		comment.description
																	}
																</ReactMarkdown>
															)}
															<CodeBlock
																language="diff"
																startingLineNumber={
																	comment.line
																}
																value={
																	comment.diff
																}
															/>
															{i !==
																comments.length -
																	1 && <hr />}
														</ClayPanel.Body>
													</React.Fragment>
												);
											})}
										</ClayPanel>
									)
								)}
							</>
						)}

						{!task.recommendations && <p>No Recommendations</p>}
					</ClayLayout.ContentCol>
				)}
			</ClayLayout.ContentRow>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const APIOrigin = getAPIOrigin(context.req);

	const task = await fetch(
		`${`${APIOrigin}`}/api/tasks/${context.query.taskId}`
	).then((res) => res.json());

	const initialStagedChanges = await fetch(
		`${`${APIOrigin}`}/api/tasks/${context.query.taskId}/staged`
	).then((res) => res.json());

	const project = await fetch(
		`${getAPIOrigin(context.req)}/api/project`
	).then((res) => res.json());

	return {
		props: {
			initialStagedChanges,
			project,
			task,
		},
	};
}
