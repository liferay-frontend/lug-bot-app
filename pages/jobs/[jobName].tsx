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
				{job.recomendations && (
					<>
						<h2>{job.totalRecomendations} Issues: </h2>

						{Object.entries(job.recomendations).map(
							([file, comments]: any) => (
								<ClayPanel
									collapsable
									displayTitle={
										<span style={{textTransform: 'none'}}>
											({comments.length}) {file}
										</span>
									}
									displayType="secondary"
									style={{width: '100%'}}
									showCollapseIcon={true}
									key={file}
								>
									{comments.map((comment, i) => (
										<>
											<ClayPanel.Header>
												<h3>
													{comment.title}
													<br /> Line: {comment.line}
												</h3>
											</ClayPanel.Header>
											<ClayPanel.Body>
												{comment.description && (
													<ReactMarkdown>
														{comment.description}
													</ReactMarkdown>
												)}
												<CodeBlock
													language="diff"
													value={comment.diff}
													startingLineNumber={
														comment.line
													}
												/>
												{i !== comments.length - 1 && (
													<hr />
												)}
											</ClayPanel.Body>
										</>
									))}
								</ClayPanel>
							)
						)}
					</>
				)}

				{!job.recomendations && <p>No Recomendations</p>}
			</ClayLayout.Row>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const APIOrigin = getAPIOrigin(context.req);

	const job = await fetch(
		`${`${APIOrigin}`}/api/jobs/${context.query.jobName}`
	).then((res) => res.json());

	return {
		props: {job},
	};
}
