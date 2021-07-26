import ClayLabel from '@clayui/label';
import ClayList from '@clayui/list';
import Link from 'next/link';
import React from 'react';

import formatDuration from '../utils/formatDuration';
import CountUp from './CountUp';

const TaskListItem = ({states, task, taskState}) => (
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

		{taskState === states.runningState && (
			<ClayList.ItemField>
				<CountUp startTime={task.startTime} />
			</ClayList.ItemField>
		)}

		{taskState === states.completedFailureState ||
			(taskState === states.completedSuccessState && (
				<ClayList.ItemField>
					{formatDuration(
						new Date(task.finishTime).getTime() -
							new Date(task.startTime).getTime()
					)}
				</ClayList.ItemField>
			))}

		<ClayList.ItemField>
			<ClayLabel displayType={states.byState[task.state].displayType}>
				{states.byState[task.state].label}
			</ClayLabel>
		</ClayList.ItemField>
	</ClayList.Item>
);

export default TaskListItem;
