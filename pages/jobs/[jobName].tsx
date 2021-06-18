import ClayBreadcrumb from '@clayui/breadcrumb';
import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayPanel from '@clayui/panel';

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

/**
 * let myAdd: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
 */

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

			{job.comments.map((comment) => (
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

							{comment.description ? (
								<pre>{formatCode(comment.description)}</pre>
							) : (
								<p>No comments</p>
							)}
						</ClayPanel.Body>
					</ClayPanel>
				</ClayLayout.Row>
			))}
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const host = context.req.headers.host;
	const protocol = context.req.headers.referer.split('://')[0];

	const job = await fetch(
		`${`${protocol}://${host}`}/api/jobs/${context.query.jobName}`
	).then((res) => res.json());

	return {
		props: {job},
	};
}
