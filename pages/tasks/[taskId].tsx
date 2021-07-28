import ClayBreadcrumb from '@clayui/breadcrumb';
import ClayButton from '@clayui/button';
import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import React, {useEffect, useRef, useState} from 'react';
import Terminal from 'react-console-emulator';
import useSWR from 'swr';

import TaskProposal from '../../components/TaskProposal';
import API_ENDPOINT from '../../constants/apiEndpoint';
import cancelTask from '../../utils/cancelRunningTask';

const fetcher = (args) => fetch(args).then((res) => res.json());

export default function Task({lugbot, project, states, task, taskLog}) {
	const terminalRef = useRef(null);

	const {data: log} = useSWR(
		`${API_ENDPOINT}/tasks/${task.id}/log`,
		fetcher,
		{
			initialData: taskLog,
			refreshInterval: 1000,
		}
	);

	const {displayType, label} = states.byState[task.state];

	const isCompleted = task.state === states.byName.completedSuccess.state;
	const isLocalInstance = lugbot.mode === 'LOCAL';

	useEffect(() => {
		if (!isCompleted) {
			log.map((logLine) => {
				terminalRef.current.pushToStdout(logLine);
			});
		}
	}, [log]);

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol>
					<ClayBreadcrumb
						ellipsisBuffer={1}
						items={[
							{
								href: `/tasks`,
								label: project.name
									? `${project.name} Tasks`
									: 'Tasks',
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
							<ClayButton onClick={() => alert(`Sending a PR`)}>
								{isLocalInstance
									? 'Merge Proposed Changes'
									: 'Send Pull Request'}
							</ClayButton>
						</ClayLayout.ContentCol>
					</>
				)}

				{!isCompleted && (
					<ClayLayout.ContentCol>
						<ClayLink
							button
							className="btn-danger"
							href={`/tasks`}
							onClick={() => cancelTask(task.id)}
						>
							{'Cancel Task'}
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
						<TaskProposal proposal={task.proposal} />
					</ClayLayout.ContentCol>
				)}
			</ClayLayout.ContentRow>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const task = await fetch(
		`${API_ENDPOINT}/tasks/${context.query.taskId}`
	).then((res) => res.json());

	const {lugbot, projects} = await fetch(`${API_ENDPOINT}/status`).then(
		(res) => res.json()
	);

	const {taskLog} = await fetch(`${API_ENDPOINT}/tasks/${task.id}/log`).then(
		(res) => res.json()
	);

	const states = await fetch(`${API_ENDPOINT}/taskStateUI`).then((res) =>
		res.json()
	);

	return {
		props: {
			lugbot,
			project: projects[0],
			states: {
				byName: states,
				byState: Object.values(states).reduce((acc, state) => {
					acc[state.state] = state;

					return acc;
				}, {}),
				completedFailureState: states.completedFailure,
				completedSuccessState: states.completedSuccess,
				pendingState: states.pending,
				runningState: states.running,
			},
			task,
			taskLog,
		},
	};
}
