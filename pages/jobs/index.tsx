import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayList from '@clayui/list';
import Link from 'next/link';

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

export default function Jobs({items}) {
	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.Row justify="center">
				<h1>Jobs</h1>
			</ClayLayout.Row>

			<ClayLayout.Row justify="start">
				<ClayLayout.Col size={6}>
					<ClayList>
						<ClayList.Header>Pending Jobs</ClayList.Header>

						{items.pending.map((job) => (
							<ClayList.Item flex key={job.name}>
								<ClayList.ItemField expand>
									<Link href={`/jobs/${job.name}`} passHref>
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
									{new Date(job.runningTime * 1000)
										.toISOString()
										.substr(11, 8)}
								</ClayList.ItemField>
							</ClayList.Item>
						))}
					</ClayList>
				</ClayLayout.Col>

				<ClayLayout.Col size={6}>
					<ClayList>
						<ClayList.Header>Completed Jobs</ClayList.Header>

						{items.completed.map((job) => (
							<ClayList.Item flex key={job.name}>
								<ClayList.ItemField expand>
									<ClayList.ItemTitle>
										{job.name}
									</ClayList.ItemTitle>
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
									{new Date(job.runningTime * 1000)
										.toISOString()
										.substr(11, 8)}
								</ClayList.ItemField>
							</ClayList.Item>
						))}
					</ClayList>
				</ClayLayout.Col>
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
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
