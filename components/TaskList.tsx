import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import React from 'react';
import useSWR from 'swr';

import API_ENDPOINT from '../constants/apiEndoint';
import STATES from '../constants/taskStates';
import TaskListItem from './TaskListItem';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TaskList = ({project, taskStateFilter}) => {
	const {data: projectData} = useSWR(API_ENDPOINT, fetcher, {
		initialData: project,
		refreshInterval: 5000,
	});

	const isCompletedStateRoute = taskStateFilter === STATES.completedState.id;
	const isPendingStateRoute = taskStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = taskStateFilter === STATES.runningState.id;

	return (
		<ClayLayout.ContentRow>
			<ClayLayout.ContentCol expand>
				{projectData.runningTasks.length !== 0 &&
					!isCompletedStateRoute &&
					!isPendingStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-warning">
								{'Running Tasks'}
							</ClayList.Header>

							{projectData.runningTasks.map((task) => (
								<TaskListItem
									key={task.id}
									task={task}
									taskState={STATES.runningState}
								/>
							))}
						</ClayList>
					)}

				{projectData.pendingTasks.length !== 0 &&
					!isCompletedStateRoute &&
					!isRunningStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-info">
								{'Pending Tasks'}
							</ClayList.Header>

							{projectData.pendingTasks.map((task) => (
								<TaskListItem
									key={task.id}
									task={task}
									taskState={STATES.pendingState}
								/>
							))}
						</ClayList>
					)}

				{projectData.completedTasks.length !== 0 &&
					!isPendingStateRoute &&
					!isRunningStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-success">
								{'Completed Tasks'}
							</ClayList.Header>

							{projectData.completedTasks.map((task) => (
								<TaskListItem
									key={task.id}
									task={task}
									taskState={STATES.completedState}
								/>
							))}
						</ClayList>
					)}
			</ClayLayout.ContentCol>
		</ClayLayout.ContentRow>
	);
};

export default TaskList;
