import ClayBreadcrumb from '@clayui/breadcrumb';
import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayPanel from '@clayui/panel';
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

const formatCode = (code: string): string => {
	if (!code) {
		return;
	}

	return code.replace(new RegExp(/\s*\n[\t\s]*/, 'g'), '\n');
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

			<ClayLayout.Row>
				<h1>{job.name}</h1>
			</ClayLayout.Row>

			<ClayLayout.Row>
				<ClayLabel displayType={displayType} large>
					{name}
				</ClayLabel>
			</ClayLayout.Row>

			<ClayLayout.Row>
				{job.comments ? (
					job.comments.map((comment) => (
						<ClayLayout.Row key={`${comment.file}#${comment.line}`}>
							<ClayPanel
								collapsable
								displayTitle={`${comment.file}#${comment.line}`}
								displayType="secondary"
								style={{width: '100%'}}
								showCollapseIcon={true}
							>
								<ClayPanel.Body>
									<h4>{comment.title}</h4>

									{comment.description && (
										<pre>
											{formatCode(comment.description)}
										</pre>
									)}
								</ClayPanel.Body>
							</ClayPanel>
						</ClayLayout.Row>
					))
				) : (
					<p>No comments</p>
				)}
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
