import ClayButton from '@clayui/button';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const TaskFilter = ({states, taskStateFilter}) => {
	const [filterOpen, setFilterOpen] = useState(false);

	const router = useRouter();
	const basepath = router.asPath.split('?')[0];

	return (
		<ClayLayout.ContentCol>
			<ClayDropDown
				active={filterOpen}
				alignmentPosition={3}
				onActiveChange={setFilterOpen}
				trigger={
					<ClayButton displayType="secondary" small>
						<span className="inline-item inline-item-before">
							<ClayIcon symbol="filter" />
						</span>

						{`Filter: ${
							taskStateFilter
								? states.byState[taskStateFilter].label
								: 'All'
						}`}
					</ClayButton>
				}
			>
				<ClayDropDown.ItemList>
					<ClayDropDown.Group header="Filter by status">
						<ClayLink href={basepath}>
							<ClayDropDown.Item
								symbolRight={!taskStateFilter && 'check'}
							>
								{'All'}
							</ClayDropDown.Item>
						</ClayLink>

						{Object.values(states.byState).map((state) => {
							return (
								<ClayLink
									// @ts-ignore: state.state is not properly recognised
									href={`${basepath}?status=${state.state}`}
									// @ts-ignore: state.state is not properly recognised
									key={state.state}
								>
									<ClayDropDown.Item
										symbolRight={
											// @ts-ignore: state.state is not properly recognised
											taskStateFilter === state.state &&
											'check'
										}
									>
										{
											// @ts-ignore: state.state is not properly recognised
											state.label
										}
									</ClayDropDown.Item>
								</ClayLink>
							);
						})}
					</ClayDropDown.Group>
				</ClayDropDown.ItemList>
			</ClayDropDown>
		</ClayLayout.ContentCol>
	);
};

export default TaskFilter;
