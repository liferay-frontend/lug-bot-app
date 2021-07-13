import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import React from 'react';
import useSWR from 'swr';

import API_ENDPOINT from '../constants/apiEndoint';
import STATES from '../constants/taskStates';
import TaskListItem from './TaskListItem';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TaskList = ({initialTasks, taskStateFilter}) => {
	const {data: tasks} = useSWR(`${API_ENDPOINT}/tasks`, fetcher, {
		initialData: initialTasks,
		refreshInterval: 5000,
	});

	const isCompletedStateRoute = taskStateFilter === STATES.completedState.id;
	const isPendingStateRoute = taskStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = taskStateFilter === STATES.runningState.id;

	return (
		<ClayLayout.ContentRow>
			<ClayLayout.ContentCol expand>
				{tasks.runningTasks.length !== 0 &&
					!isCompletedStateRoute &&
					!isPendingStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-warning">
								{'Running Tasks'}
							</ClayList.Header>

							{tasks.runningTasks.map((task) => (
								<TaskListItem
									key={task.id}
									task={task}
									taskState={STATES.runningState}
								/>
							))}
						</ClayList>
					)}

				{tasks.pendingTasks.length !== 0 &&
					!isCompletedStateRoute &&
					!isRunningStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-info">
								{'Pending Tasks'}
							</ClayList.Header>

							{tasks.pendingTasks.map((task) => (
								<TaskListItem
									key={task.id}
									task={task}
									taskState={STATES.pendingState}
								/>
							))}
						</ClayList>
					)}

				{tasks.completedTasks.length !== 0 &&
					!isPendingStateRoute &&
					!isRunningStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-success">
								{'Completed Tasks'}
							</ClayList.Header>

							{tasks.completedTasks.map((task) => (
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
