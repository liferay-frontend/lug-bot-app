import ClayLabel from '@clayui/label';
import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import Link from 'next/link';

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

export default function Jobs({items, project}) {
	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol>
					<h1>
						<a href={project.url} target="blank">
							{project.name}
						</a>
					</h1>

					<p>Git: {project.location}</p>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol expand>
					<ClayList>
						<ClayList.Header>Running Jobs</ClayList.Header>

						{items.runningJobs.map((job) => (
							<ClayList.Item flex key={job.name}>
								<ClayList.ItemField expand>
									<Link
										href={`/jobs/${job.name.toLowerCase()}`}
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
											STATES[job.state].displayType
										}
									>
										{STATES[job.state].name}
									</ClayLabel>
								</ClayList.ItemField>

								<ClayList.ItemField>
									{new Date(job.startTime * 1000)
										.toISOString()
										.substr(11, 8)}
								</ClayList.ItemField>
							</ClayList.Item>
						))}

						<ClayList.Header>Pending Jobs</ClayList.Header>

						{items.pendingJobs.map((job) => (
							<ClayList.Item flex key={job.name}>
								<ClayList.ItemField expand>
									<Link
										href={`/jobs/${job.name.toLowerCase()}`}
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
											STATES[job.state].displayType
										}
									>
										{STATES[job.state].name}
									</ClayLabel>
								</ClayList.ItemField>
							</ClayList.Item>
						))}

						<ClayList.Header>Completed Jobs</ClayList.Header>

						{items.completedJobs.map((job) => (
							<ClayList.Item flex key={job.name}>
								<ClayList.ItemField expand>
									<Link href={`/jobs/${job.name}`} passHref>
										<ClayList.ItemTitle>
											{job.name}
										</ClayList.ItemTitle>
									</Link>

									<ClayList.ItemText>
										{job.totalRecomendations} Recomendations
									</ClayList.ItemText>
								</ClayList.ItemField>

								<ClayList.ItemField>
									<ClayLabel
										displayType={
											STATES[job.state].displayType
										}
									>
										{STATES[job.state].name}
									</ClayLabel>
								</ClayList.ItemField>

								<ClayList.ItemField>
									{formatDuration(
										job.finishedTime - job.startTime
									)}
								</ClayList.ItemField>
							</ClayList.Item>
						))}
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
		`${getAPIOrigin(context.req)}/api/project`
	).then((res) => res.json());

	return {
		props: {items, project},
	};
}
