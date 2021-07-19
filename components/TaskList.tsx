import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import React from 'react';
import useSWR from 'swr';

import API_ENDPOINT from '../constants/apiEndpoint';
import TaskListItem from './TaskListItem';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TaskList = ({initialTasks, states, taskStateFilter}) => {
	const {data: tasks} = useSWR(`${API_ENDPOINT}/tasks`, fetcher, {
		initialData: initialTasks,
		refreshInterval: 5000,
	});

	const isCompletedFailureStateRoute =
		taskStateFilter === states.completedFailureState.id;
	const isCompletedSuccessStateRoute =
		taskStateFilter === states.completedSuccessState.id;
	const isPendingStateRoute = taskStateFilter === states.pendingState.id;
	const isRunningStateRoute = taskStateFilter === states.runningState.id;

	return (
		<ClayLayout.ContentRow>
			<ClayLayout.ContentCol expand>
				{tasks.runningTasks.length !== 0 &&
					!isCompletedFailureStateRoute &&
					!isCompletedSuccessStateRoute &&
					!isPendingStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-warning">
								{'Running Tasks'}
							</ClayList.Header>

							{tasks.runningTasks.map((task) => (
								<TaskListItem
									key={task.id}
									states={states}
									task={task}
									taskState={states.runningState}
								/>
							))}
						</ClayList>
					)}

				{tasks.pendingTasks.length !== 0 &&
					!isCompletedFailureStateRoute &&
					!isCompletedSuccessStateRoute &&
					!isRunningStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-info">
								{'Pending Tasks'}
							</ClayList.Header>

							{tasks.pendingTasks.map((task) => (
								<TaskListItem
									key={task.id}
									states={states}
									task={task}
									taskState={states.pendingState}
								/>
							))}
						</ClayList>
					)}

				{tasks.completedTasks.length !== 0 &&
					!isPendingStateRoute &&
					!isRunningStateRoute &&
					!isCompletedFailureStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-success">
								{'Successfully Completed Tasks'}
							</ClayList.Header>

							{tasks.completedTasks.map((task) => (
								<TaskListItem
									key={task.id}
									states={states}
									task={task}
									taskState={states.completedSuccessState}
								/>
							))}
						</ClayList>
					)}

				{tasks.completedTasks.length !== 0 &&
					!isPendingStateRoute &&
					!isRunningStateRoute &&
					!isCompletedSuccessStateRoute && (
						<ClayList className="shadow-sm">
							<ClayList.Header className="bg-danger">
								{'Failed Completed Tasks'}
							</ClayList.Header>

							{tasks.completedTasks.map((task) => (
								<TaskListItem
									key={task.id}
									states={states}
									task={task}
									taskState={states.completedFailureState}
								/>
							))}
						</ClayList>
					)}
			</ClayLayout.ContentCol>
		</ClayLayout.ContentRow>
	);
};

export default TaskList;
