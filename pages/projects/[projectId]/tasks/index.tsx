import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import ClayList from '@clayui/list';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import useSWR from 'swr';

import STATES from '../../../../constants/taskStates';
import getAPIOrigin from '../../../../utils/getAPIOrigin';

const fetcher = (args) => fetch(args).then((res) => res.json());

const formatDuration = (duration: number) => {
	let seconds: string | number = Math.floor((duration / 1000) % 60);
	let minutes: string | number = Math.floor((duration / (1000 * 60)) % 60);
	const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

	minutes = minutes < 10 ? `${hours > 0 ? '0' : ''}${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;

	if (hours > 0) {
		return `${hours}h ${minutes}m`;
	}

	if (minutes !== '00') {
		return `${minutes}m`;
	}

	if (seconds) {
		return `${seconds}s`;
	}
};

const CountUp = ({startTime}) => {
	const [time, setTime] = React.useState(new Date(startTime).getTime());

	React.useEffect(() => {
		setInterval(() => {
			setTime((time) => time + 1000);
		}, 1000);
	}, []);

	return <span>{new Date(time).toISOString().substr(11, 8)}</span>;
};

export default function Tasks({items, project, taskStateFilter}) {
	const [filterOpen, setFilterOpen] = useState(false);

	const {data: tasks} = useSWR(`/api/projects/${project.id}/tasks`, fetcher, {
		initialData: items,
		refreshInterval: 5000,
	});

	const router = useRouter();
	const basepath = router.asPath.split('?')[0];

	const isCompletedStateRoute = taskStateFilter === STATES.completedState.id;
	const isPendingStateRoute = taskStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = taskStateFilter === STATES.runningState.id;

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol expand>
					<h1>
						<a href={project.url} target="blank">
							{project.name}
						</a>
					</h1>

					<ClayLayout.ContentRow>
						<ClayLayout.ContentCol expand>
							<p>Git: {project.location}</p>
						</ClayLayout.ContentCol>

						<ClayLayout.ContentCol>
							<ClayDropDown
								active={filterOpen}
								alignmentPosition={3}
								onActiveChange={setFilterOpen}
								trigger={
									<ClayButton displayType="secondary" small>
										<span className="inline-item inline-item-before">
											<ClayIcon symbol="filter" />
										</span>

										{`Filter: ${
											taskStateFilter
												? STATES.byId[taskStateFilter]
														.label
												: 'All'
										}`}
									</ClayButton>
								}
							>
								<ClayDropDown.ItemList>
									<ClayDropDown.Group header="Filter by status">
										<ClayLink href={basepath}>
											<ClayDropDown.Item
												symbolRight={
													!taskStateFilter && 'check'
												}
											>
												{'All'}
											</ClayDropDown.Item>
										</ClayLink>

										{Object.values(STATES.byName).map(
											(state) => (
												<ClayLink
													href={`${basepath}?status=${state.id}`}
													key={state.id}
												>
													<ClayDropDown.Item
														symbolRight={
															taskStateFilter ===
																state.id &&
															'check'
														}
													>
														{state.label}
													</ClayDropDown.Item>
												</ClayLink>
											)
										)}
									</ClayDropDown.Group>
								</ClayDropDown.ItemList>
							</ClayDropDown>
						</ClayLayout.ContentCol>
					</ClayLayout.ContentRow>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol expand>
					<ClayList>
						{!isCompletedStateRoute && !isPendingStateRoute && (
							<>
								<ClayList.Header>Running Tasks</ClayList.Header>

								{tasks.runningTasks.map((task) => (
									<ClayList.Item flex key={task.id}>
										<ClayList.ItemField expand>
											<Link
												href={`/projects/${project.id}/tasks/${task.id}`}
												passHref
											>
												<ClayList.ItemTitle>
													{task.name}
												</ClayList.ItemTitle>
											</Link>
										</ClayList.ItemField>

										<ClayList.ItemField>
											<CountUp
												startTime={task.startTime}
											/>
										</ClayList.ItemField>

										<ClayList.ItemField>
											<ClayLabel
												displayType={
													STATES.byId[task.state]
														.displayType
												}
											>
												{STATES.byId[task.state].label}
											</ClayLabel>
										</ClayList.ItemField>
									</ClayList.Item>
								))}
							</>
						)}

						{!isCompletedStateRoute && !isRunningStateRoute && (
							<>
								<ClayList.Header>Pending Tasks</ClayList.Header>

								{tasks.pendingTasks.map((task) => (
									<ClayList.Item flex key={task.id}>
										<ClayList.ItemField expand>
											<Link
												href={`/projects/${project.id}/tasks/${task.id}`}
												passHref
											>
												<ClayList.ItemTitle>
													{task.name}
												</ClayList.ItemTitle>
											</Link>
										</ClayList.ItemField>

										<ClayList.ItemField>
											<ClayLabel
												displayType={
													STATES.byId[task.state]
														.displayType
												}
											>
												{STATES.byId[task.state].label}
											</ClayLabel>
										</ClayList.ItemField>
									</ClayList.Item>
								))}
							</>
						)}

						{!isPendingStateRoute && !isRunningStateRoute && (
							<>
								<ClayList.Header>
									Completed Tasks
								</ClayList.Header>

								{tasks.completedTasks.map((task) => (
									<ClayList.Item flex key={task.id}>
										<ClayList.ItemField expand>
											<Link
												href={`/projects/${project.id}/tasks/${task.id}`}
												passHref
											>
												<ClayList.ItemTitle>
													{task.name}
												</ClayList.ItemTitle>
											</Link>

											<ClayList.ItemText>
												{task.totalRecommendations}{' '}
												Recommendations
											</ClayList.ItemText>
										</ClayList.ItemField>

										<ClayList.ItemField>
											{formatDuration(
												new Date(
													task.finishedTime
												).getTime() -
													new Date(
														task.startTime
													).getTime()
											)}
										</ClayList.ItemField>

										<ClayList.ItemField>
											<ClayLabel
												displayType={
													STATES.byId[task.state]
														.displayType
												}
											>
												{STATES.byId[task.state].label}
											</ClayLabel>
										</ClayList.ItemField>
									</ClayList.Item>
								))}
							</>
						)}
					</ClayList>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const items = await fetch(
		`${getAPIOrigin(context.req)}/api/projects/${
			context.query.projectId
		}/tasks`
	).then((res) => res.json());

	const project = await fetch(
		`${getAPIOrigin(context.req)}/api/projects/${context.query.projectId}`
	).then((res) => res.json());

	return {
		props: {
			items,
			project,
			taskStateFilter: context.query.status || '',
		},
	};
}
