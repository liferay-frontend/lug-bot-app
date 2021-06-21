import ClayBreadcrumb from '@clayui/breadcrumb';
import ClayLayout from '@clayui/layout';
import ClayLabel from '@clayui/label';
import ClayPanel from '@clayui/panel';
import ReactMarkdown from 'react-markdown';

import getAPIOrigin from '../../utils/getAPIOrigin';
import CodeBlock from '../../components/CodeBlock';

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

export default function Job({files, job}) {
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
								displayTitle={
									<span style={{textTransform: 'none'}}>
										{`${comment.file}#${comment.line}`}
									</span>
								}
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
									<hr />
									<CodeBlock
										language="java"
										value={files[
											`${comment.file}#${comment.line}`
										].join('\n')}
									/>
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
	const APIOrigin = getAPIOrigin(context.req);

	const job = await fetch(
		`${`${APIOrigin}`}/api/jobs/${context.query.jobName}`
	).then((res) => res.json());

	let files = {};

	if (job.comments) {
		(
			await Promise.all(
				job.comments.map(({file, line}) =>
					fetch(`${APIOrigin}/api/files`, {
						headers: {
							'Content-Type': 'application/json',
						},
						method: 'POST',
						body: JSON.stringify({file, line}),
					}).then((res) => res.json())
				)
			)
		).forEach(({locator, content}) => {
			files[locator] = content;
		});
	}

	return {
		props: {job, files},
	};
}
