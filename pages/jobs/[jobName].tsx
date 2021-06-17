import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayBreadcrumb from '@clayui/breadcrumb';

const STATES = {
	1: {
		name: 'Sleeping',
		displayType: 'secondary',
	},
	2: {
		name: 'Waiting to Start',
		displayType: 'info',
	},
	3: {
		name: 'Completed',
		displayType: 'success',
	},
	4: {
		name: 'Running',
		displayType: 'warning',
	},
};

export default function Job({job}) {
	const {displayType, name} = STATES[job.state];

	return (
		<ClayLayout.ContainerFluid view>
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

			<ClayLayout.Row>
				<h1>{job.name}</h1>
			</ClayLayout.Row>

			<ClayLayout.Row>
				<ClayLabel displayType={displayType} large>
					{name}
				</ClayLabel>
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
