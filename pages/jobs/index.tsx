import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';

export default function Jobs() {
	const jobs = {
		pendingJobs: [
			{
				name: 'Niflheim',
				state: 1,
				runningTime: 2160,
			},
			{
				name: 'Helheim',
				state: 2,
				runningTime: 2220,
			},
			{
				name: 'Asgard',
				state: 1,
				runningTime: 2102,
			},
			{
				name: 'Svartalfheim',
				state: 4,
				runningTime: 2199,
			},
		],
		runningJobs: [
			{
				name: 'Alfheim',
				state: 4,
				runningTime: 754,
			},
			{
				name: 'Vanaheim',
				state: 1,
				runningTime: 781,
			},
			{
				name: 'Jotunheim',
				state: 2,
				runningTime: 2187,
			},
			{
				name: 'Muspelheim',
				state: 2,
				runningTime: 3300,
			},
			{
				name: 'Midgard',
				state: 4,
				runningTime: 3362,
			},
			{
				name: 'Ygdrassil',
				state: 2,
				runningTime: 2227,
			},
		],
	};

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
							{jobs.pendingJobs.map((pendingJob) => (
								<Job job={pendingJob} key={pendingJob.name} />
							))}
						</ul>
					</ClayLayout.Col>
					<ClayLayout.Col size={6}>
						<h2>Running jobs</h2>

						<ul className="jobs-list">
							{jobs.runningJobs.map((runningJob) => (
								<Job job={runningJob} key={runningJob.name} />
							))}
						</ul>
					</ClayLayout.Col>
				</ClayLayout.Row>
			</ClayLayout.ContainerFluid>
		</>
	);
}

const Job = ({job}) => {
	const states = {
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

	return (
		<li className="job">
			<ClayLabel displayType={states[job.state].displayType}>
				{states[job.state].name}
			</ClayLabel>

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
