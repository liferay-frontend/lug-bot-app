import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import React from 'react';

import TaskFilter from '../../components/TaskFilter';
import TaskList from '../../components/TaskList';
import API_ENDPOINT from '../../constants/apiEndoint';
import cancelTask from '../../utils/cancelTask';

export default function Tasks({project, taskStateFilter}) {
	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol expand>
					{!project.local && (
						<h1>
							<a href={project.url} target="blank">
								{project.name}
							</a>
						</h1>
					)}

					<ClayLayout.ContentRow
						className={
							project.local ? 'justify-content-end mb-3' : ''
						}
					>
						{!project.local && (
							<ClayLayout.ContentCol expand>
								<p>Git: {project.location}</p>
							</ClayLayout.ContentCol>
						)}

						<ClayLayout.ContentCol>
							<ClayButton
								className="btn-danger mr-2"
								onClick={() => {
									const tasks = [
										...project.completedTasks,
										...project.pendingTasks,
										...project.runningTasks,
									];

									tasks.forEach((task) => {
										cancelTask(task.id);
									});
								}}
								small
							>
								<span className="inline-item inline-item-before">
									<ClayIcon symbol="trash" />
								</span>

								{'Cancel all tasks'}
							</ClayButton>
						</ClayLayout.ContentCol>

						<TaskFilter taskStateFilter={taskStateFilter} />
					</ClayLayout.ContentRow>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<TaskList project={project} taskStateFilter={taskStateFilter} />
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const project = await fetch(API_ENDPOINT).then((res) => res.json());

	return {
		props: {
			project,
			taskStateFilter: context.query.status || '',
		},
	};
}
