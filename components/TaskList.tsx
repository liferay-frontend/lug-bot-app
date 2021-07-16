import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import React from 'react';
import useSWR from 'swr';

import API_ENDPOINT from '../constants/apiEndpoint';
import STATES from '../constants/taskStates';
import TaskListItem from './TaskListItem';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TaskList = ({initialTasks, taskStateFilter}) => {
	const {data: tasks} = useSWR(`${API_ENDPOINT}/tasks`, fetcher, {
		initialData: initialTasks,
		refreshInterval: 5000,
	});

	const isCompletedFailureStateRoute =
		taskStateFilter === STATES.completedFailureState.id;
	const isCompletedSuccessStateRoute =
		taskStateFilter === STATES.completedSuccessState.id;
	const isPendingStateRoute = taskStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = taskStateFilter === STATES.runningState.id;

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
									task={task}
									taskState={STATES.runningState}
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
									task={task}
									taskState={STATES.pendingState}
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
									task={task}
									taskState={STATES.completedSuccessState}
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
									task={task}
									taskState={STATES.completedFailureState}
								/>
							))}
						</ClayList>
					)}
			</ClayLayout.ContentCol>
		</ClayLayout.ContentRow>
	);
};

export default TaskList;
