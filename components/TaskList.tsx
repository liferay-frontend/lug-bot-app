import ClayLayout from '@clayui/layout';
import ClayList from '@clayui/list';
import React from 'react';
import useSWR from 'swr';

import STATES from '../constants/taskStates';
import TaskListItem from './TaskListItem';

const fetcher = (args) => fetch(args).then((res) => res.json());

const TaskList = ({items, taskStateFilter}) => {
	const {data: tasks} = useSWR(`/api/tasks`, fetcher, {
		initialData: items,
		refreshInterval: 5000,
	});

	const isCompletedStateRoute = taskStateFilter === STATES.completedState.id;
	const isPendingStateRoute = taskStateFilter === STATES.pendingState.id;
	const isRunningStateRoute = taskStateFilter === STATES.runningState.id;

	return (
		<ClayLayout.ContentRow>
			<ClayLayout.ContentCol expand>
				{!isCompletedStateRoute && !isPendingStateRoute && (
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

				{!isCompletedStateRoute && !isRunningStateRoute && (
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

				{!isPendingStateRoute && !isRunningStateRoute && (
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
