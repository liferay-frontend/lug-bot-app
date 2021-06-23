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
import io from 'socket.io-client';

import CodeBlock from '../../components/CodeBlock';
import getAPIOrigin from '../../utils/getAPIOrigin';

const STATES = {
	1: {
		displayType: 'secondary',
		name: 'Sleeping',
	},
	2: {
		displayType: 'info',
		name: 'Waiting to Start',
	},
	3: {
		displayType: 'success',
		name: 'Completed',
	},
	4: {
		displayType: 'warning',
		name: 'Running',
	},
};

export default function Job({initialStagedChanges, job}) {
	const [stagedChanges, setStagedChanges] = useState(initialStagedChanges);

	const terminalRef = useRef(null);
	const {displayType, name} = STATES[job.state];

	const isCompleted = job.state === 3;

	function postStaged(add, locator) {
		fetch(`/api/jobs/${job.name.toLowerCase()}/staged`, {
			body: JSON.stringify({add, locator}),
			method: 'POST',
		});
	}

	useEffect(() => {
		if (!isCompleted) {
			fetch(`/api/jobs/${job.name.toLowerCase()}/status`).finally(() => {
				const socket = io();

				socket.on('connect', () => {
					terminalRef.current.pushToStdout('You connected!');
				});

				socket.on('new-user', () => {
					terminalRef.current?.pushToStdout('A user connected');
				});
			});
		}
	}, []);

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol>
					<ClayBreadcrumb
						ellipsisBuffer={1}
						items={[
							{
								href: '/jobs',
								label: 'Jobs',
							},
							{
								active: true,
								label: job.name,
							},
						]}
					/>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow containerElement="h1" float>
				<ClayLayout.ContentCol>{job.name}</ClayLayout.ContentCol>

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
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow style={{marginBottom: 4}}>
				<ClayLayout.ContentCol>
					<ClayLabel displayType={displayType} large>
						{name}
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
						{job.recomendations && (
							<>
								<h2>{job.totalRecomendations} Issues: </h2>

								{Object.entries(job.recomendations).map(
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
														`${file}#${comment.line}`
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
																				`${file}#${comment.line}`
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
																						`${file}#${comment.line}`
																					),
																					1
																				);
																			} else {
																				newArray.push(
																					`${file}#${comment.line}`
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

						{!job.recomendations && <p>No Recomendations</p>}
					</ClayLayout.ContentCol>
				)}
			</ClayLayout.ContentRow>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const APIOrigin = getAPIOrigin(context.req);

	const job = await fetch(
		`${`${APIOrigin}`}/api/jobs/${context.query.jobName}`
	).then((res) => res.json());

	const stagedChanges = await fetch(
		`${`${APIOrigin}`}/api/jobs/${context.query.jobName}/staged`
	).then((res) => res.json());

	return {
		props: {initialStagedChanges: stagedChanges, job},
	};
}
