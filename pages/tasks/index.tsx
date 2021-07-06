import ClayLayout from '@clayui/layout';
import React from 'react';

import TaskFilter from '../../components/TaskFilter';
import TaskList from '../../components/TaskList';
import PROJECT from '../../dummy-data';
import getAPIOrigin from '../../utils/getAPIOrigin';

export default function Tasks({items, taskStateFilter}) {
	return (
		<ClayLayout.ContainerFluid view>
			<ClayLayout.ContentRow>
				<ClayLayout.ContentCol expand>
					<h1>
						<a href={PROJECT.url} target="blank">
							{PROJECT.name}
						</a>
					</h1>

					<ClayLayout.ContentRow>
						<ClayLayout.ContentCol expand>
							<p>Git: {PROJECT.location}</p>
						</ClayLayout.ContentCol>

						<TaskFilter taskStateFilter={taskStateFilter} />
					</ClayLayout.ContentRow>
				</ClayLayout.ContentCol>
			</ClayLayout.ContentRow>

			<TaskList items={items} taskStateFilter={taskStateFilter} />
		</ClayLayout.ContainerFluid>
	);
}

export async function getServerSideProps(context) {
	const items = await fetch(`${getAPIOrigin(context.req)}/api/tasks`).then(
		(res) => res.json()
	);

	return {
		props: {
			items,
			taskStateFilter: context.query.status || '',
		},
	};
}
