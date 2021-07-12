import ClayLabel from '@clayui/label';
import ClayList from '@clayui/list';
import Link from 'next/link';
import React from 'react';

import STATES from '../constants/taskStates';
import formatDuration from '../utils/formatDuration';
import CountUp from './CountUp';

const TaskListItem = ({task, taskState}) => {
	console.log(
		'date: ',
		new Date(task.finishTime).getTime() - new Date(task.startTime).getTime()
	);
	
	return (
		<ClayList.Item flex className="align-items-center" key={task.id}>
			<ClayList.ItemField expand>
				<Link href={`/tasks/${task.id}`} passHref>
					<ClayList.ItemTitle>{task.name}</ClayList.ItemTitle>
				</Link>

				{task.totalRecommendations && (
					<ClayList.ItemText>
						{`${task.totalRecommendations} Recommendations`}
					</ClayList.ItemText>
				)}
			</ClayList.ItemField>

			{taskState === STATES.runningState && (
				<ClayList.ItemField>
					<CountUp startTime={task.startTime} />
				</ClayList.ItemField>
			)}

			{taskState === STATES.completedState && (
				<ClayList.ItemField>
					{formatDuration(
						new Date(task.finishTime).getTime() -
							new Date(task.startTime).getTime()
					)}
				</ClayList.ItemField>
			)}

			<ClayList.ItemField>
				<ClayLabel displayType={STATES.byId[task.state].displayType}>
					{STATES.byId[task.state].label}
				</ClayLabel>
			</ClayList.ItemField>
		</ClayList.Item>
	);
};

export default TaskListItem;
