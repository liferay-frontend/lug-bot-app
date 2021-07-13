import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import React from 'react';

import TaskFilter from '../../components/TaskFilter';
import TaskList from '../../components/TaskList';
import API_ENDPOINT from '../../constants/apiEndpoint';
import cancelTask from '../../utils/cancelTask';

export default function Tasks({
	initialTasks,
	lugbot,
	project,
	taskStateFilter,
}) {
	const isLocalInstance = lugbot.mode === 'LOCAL';

	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol expand>
					<h1>
						<a href={project.url} target="blank">
							{project.name}
						</a>
					</h1>

					<ClayLayout.ContentRow
						className={
							isLocalInstance ? 'justify-content-end mb-3' : ''
						}
					>
						{!isLocalInstance && (
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

			<TaskList
				initialTasks={initialTasks}
				taskStateFilter={taskStateFilter}
			/>
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const initialTasks = await fetch(`${API_ENDPOINT}/tasks`).then((res) =>
		res.json()
	);

	const {project} = await fetch(`${API_ENDPOINT}/status`).then((res) =>
		res.json()
	);

	const {lugbot} = await fetch(`${API_ENDPOINT}/status`).then((res) =>
		res.json()
	);

	return {
		props: {
			initialTasks,
			lugbot,
			project,
			taskStateFilter: context.query.status || '',
		},
	};
}
