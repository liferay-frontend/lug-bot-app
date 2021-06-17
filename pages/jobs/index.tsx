import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';

const STATES = {
	1: {
		name: 'Sleeping',
		displayType: 'secondary',
	},
	2: {
		name: 'Waiting',
		displayType: 'info',
	},
	4: {
		name: 'Running',
		displayType: 'success',
	},
};

const Job = ({job}) => {
	const {displayType, name} = STATES[job.state];
	return (
		<li className="job">
			<ClayLabel displayType={displayType}>{name}</ClayLabel>

			{job.name}

			{job.state === 4 && (
				<ClayLabel className="time-label" displayType="info">
					{new Date(job.runningTime * 1000)
						.toISOString()
						.substr(11, 8)}
				</ClayLabel>
			)}
		</li>
	);
};

export default function Jobs({items}) {
	return (
		<>
			<ClayLayout.ContainerFluid view>
				<ClayLayout.Row justify="center">
					<h1>Jobs</h1>
				</ClayLayout.Row>

				<ClayLayout.Row justify="start">
					<ClayLayout.Col size={6}>
						<h2>Pending jobs</h2>

						<ul className="jobs-list">
							{items.pendingJobs.map((pendingJob) => (
								<Job job={pendingJob} key={pendingJob.name} />
							))}
						</ul>
					</ClayLayout.Col>
					<ClayLayout.Col size={6}>
						<h2>Running jobs</h2>

						<ul className="jobs-list">
							{items.runningJobs.map((runningJob) => (
								<Job job={runningJob} key={runningJob.name} />
							))}
						</ul>
					</ClayLayout.Col>
				</ClayLayout.Row>
			</ClayLayout.ContainerFluid>
		</>
	);
}

export async function getServerSideProps(context) {
	const items = await fetch(`${process.env.API_HOST}/api/jobs`).then((res) =>
		res.json()
	);

	return {
		props: {items},
	};
}
