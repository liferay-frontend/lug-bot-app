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
import STATES from '../../constants/jobStates';
import getAPIOrigin from '../../utils/getAPIOrigin';

export default function Job({initialStagedChanges, job}) {
	const [stagedChanges, setStagedChanges] = useState(initialStagedChanges);

	const terminalRef = useRef(null);
	const {displayType, name} = STATES.byId[job.state];

	const isCompleted = job.state === STATES.byName.complete.id;

	function postStaged(add, locator) {
		fetch(`/api/jobs/${job.id}/staged`, {
			body: JSON.stringify({add, locator}),
			method: 'POST',
		});
	}

	useEffect(() => {
		if (!isCompleted) {
			fetch(`/api/jobs/${job.id}/status`).finally(() => {
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
						{job.recommendations && (
							<>
								<h2>{job.totalRecommendations} Issues: </h2>

								{Object.entries(job.recommendations).map(
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

						{!job.recommendations && <p>No Recommendations</p>}
					</ClayLayout.ContentCol>
				)}
			</ClayLayout.ContentRow>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const APIOrigin = getAPIOrigin(context.req);

	const job = await fetch(
		`${`${APIOrigin}`}/api/jobs/${context.query.jobId}`
	).then((res) => res.json());

	const stagedChanges = await fetch(
		`${`${APIOrigin}`}/api/jobs/${context.query.jobId}/staged`
	).then((res) => res.json());

	return {
		props: {initialStagedChanges: stagedChanges, job},
	};
}