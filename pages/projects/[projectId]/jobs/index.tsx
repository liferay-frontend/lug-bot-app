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

import STATES from '../../../../constants/jobStates';
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

export default function Jobs({items, jobStateFilter, project}) {
	const [filterOpen, setFilterOpen] = useState(false);

	const {data: jobs} = useSWR(`/api/jobs`, fetcher, {
		initialData: items,
		refreshInterval: 5000,
	});

	const router = useRouter();
	const basePath = router.pathname;

	const isCompletedStateRoute = jobStateFilter === STATES.completedState.id;
	const isPendingStateRoute = jobStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = jobStateFilter === STATES.runningState.id;

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
											jobStateFilter
												? STATES.byId[jobStateFilter]
														.label
												: 'All'
										}`}
									</ClayButton>
								}
							>
								<ClayDropDown.ItemList>
									<ClayDropDown.Group header="Filter by status">
										<ClayLink href={basePath}>
											<ClayDropDown.Item
												symbolRight={
													!jobStateFilter && 'check'
												}
											>
												{'All'}
											</ClayDropDown.Item>
										</ClayLink>

										{Object.values(STATES.byName).map(
											(state) => (
												<ClayLink
													href={`${basePath}?status=${state.id}`}
													key={state.id}
												>
													<ClayDropDown.Item
														symbolRight={
															jobStateFilter ===
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
								<ClayList.Header>Running Jobs</ClayList.Header>

								{jobs.runningJobs.map((job) => (
									<ClayList.Item flex key={job.id}>
										<ClayList.ItemField expand>
											<Link
												href={`/projects/${project.id}/jobs/${job.id}`}
												passHref
											>
												<ClayList.ItemTitle>
													{job.name}
												</ClayList.ItemTitle>
											</Link>
										</ClayList.ItemField>

										<ClayList.ItemField>
											<CountUp
												startTime={job.startTime}
											/>
										</ClayList.ItemField>

										<ClayList.ItemField>
											<ClayLabel
												displayType={
													STATES.byId[job.state]
														.displayType
												}
											>
												{STATES.byId[job.state].label}
											</ClayLabel>
										</ClayList.ItemField>
									</ClayList.Item>
								))}
							</>
						)}

						{!isCompletedStateRoute && !isRunningStateRoute && (
							<>
								<ClayList.Header>Pending Jobs</ClayList.Header>

								{jobs.pendingJobs.map((job) => (
									<ClayList.Item flex key={job.id}>
										<ClayList.ItemField expand>
											<Link
												href={`/jobs/${job.id}`}
												passHref
											>
												<ClayList.ItemTitle>
													{job.name}
												</ClayList.ItemTitle>
											</Link>
										</ClayList.ItemField>

										<ClayList.ItemField>
											<ClayLabel
												displayType={
													STATES.byId[job.state]
														.displayType
												}
											>
												{STATES.byId[job.state].label}
											</ClayLabel>
										</ClayList.ItemField>
									</ClayList.Item>
								))}
							</>
						)}

						{!isPendingStateRoute && !isRunningStateRoute && (
							<>
								<ClayList.Header>
									Completed Jobs
								</ClayList.Header>

								{jobs.completedJobs.map((job) => (
									<ClayList.Item flex key={job.id}>
										<ClayList.ItemField expand>
											<Link
												href={`/jobs/${job.id}`}
												passHref
											>
												<ClayList.ItemTitle>
													{job.name}
												</ClayList.ItemTitle>
											</Link>

											<ClayList.ItemText>
												{job.totalRecommendations}{' '}
												Recommendations
											</ClayList.ItemText>
										</ClayList.ItemField>

										<ClayList.ItemField>
											{formatDuration(
												new Date(
													job.finishedTime
												).getTime() -
													new Date(
														job.startTime
													).getTime()
											)}
										</ClayList.ItemField>

										<ClayList.ItemField>
											<ClayLabel
												displayType={
													STATES.byId[job.state]
														.displayType
												}
											>
												{STATES.byId[job.state].label}
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
	const items = await fetch(`${getAPIOrigin(context.req)}/api/jobs`).then(
		(res) => res.json()
	);

	const project = await fetch(
		`${getAPIOrigin(context.req)}/api/projects/${context.query.projectId}`
	).then((res) => res.json());

	return {
		props: {
			items,
			jobStateFilter: context.query.status || '',
			project,
		},
	};
}
