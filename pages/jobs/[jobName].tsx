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

export default function Job({job}) {
	const {displayType, name} = STATES[job.state];

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.Row>
				<ClayLabel displayType={displayType}>{name}</ClayLabel>

				{job.name}

				{job.state === 4 && (
					<ClayLabel className="time-label" displayType="info">
						{new Date(job.runningTime * 1000)
							.toISOString()
							.substr(11, 8)}
					</ClayLabel>
				)}
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const job = await fetch(
		`${process.env.API_HOST}/api/jobs/${context.query.jobName}`
	).then((res) => res.json());

	return {
		props: {job},
	};
}
