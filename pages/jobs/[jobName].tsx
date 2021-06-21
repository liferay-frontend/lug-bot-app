import ClayBreadcrumb from '@clayui/breadcrumb';
import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayPanel from '@clayui/panel';
import ReactMarkdown from 'react-markdown';

import getAPIOrigin from '../../utils/getAPIOrigin';

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
			<ClayLayout.Row>
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
			</ClayLayout.Row>

			<ClayLayout.Row containerElement="h1">{job.name}</ClayLayout.Row>

			<ClayLayout.Row style={{marginBottom: 4}}>
				<ClayLabel displayType={displayType} large>
					{name}
				</ClayLabel>
			</ClayLayout.Row>

			<ClayLayout.Row>
				{job.comments && (
					<>
						<h2>Issues:</h2>

						{job.comments.map((comment) => (
							<ClayPanel
								collapsable
								displayTitle={`${comment.file}#${comment.line}`}
								displayType="secondary"
								style={{width: '100%'}}
								showCollapseIcon={true}
								key={`${comment.file}#${comment.line}`}
							>
								<ClayPanel.Header>
									<h3>{comment.title}</h3>
								</ClayPanel.Header>
								<ClayPanel.Body>
									{comment.description ? (
										<ReactMarkdown>
											{comment.description}
										</ReactMarkdown>
									) : (
										'No Description'
									)}
								</ClayPanel.Body>
							</ClayPanel>
						))}
					</>
				)}

				{!job.comments && <p>No comments</p>}
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const job = await fetch(
		`${`${getAPIOrigin(context.req)}`}/api/jobs/${context.query.jobName}`
	).then((res) => res.json());

	return {
		props: {job},
	};
}
