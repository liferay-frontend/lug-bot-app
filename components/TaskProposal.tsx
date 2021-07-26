import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayPanel from '@clayui/panel';
import React from 'react';

import DiffBlock from './DiffBlock';

const TaskProposal = ({
	proposal,
	handleStagedChanges,
	postStaged,
	stagedChanges,
}) => {
	const isStaged = proposal && stagedChanges.indexOf(proposal.id) !== -1;

	return (
		<>
			{proposal && (
				<>
					<ClayPanel.Header>
						<ClayLayout.ContentRow containerElement="h3" float>
							<ClayLayout.ContentCol>
								{`${proposal.action}`}
							</ClayLayout.ContentCol>

							<ClayLayout.ContentCol expand>
								<ClayButton
									// @ts-ignore
									displayType={isStaged ? 'success' : 'secondary'}
									onClick={() => {
										postStaged(!isStaged, proposal.id);

										const newArray = [...stagedChanges];

										if (isStaged) {
											newArray.splice(
												newArray.indexOf(proposal.id),
												1
											);
										} else {
											newArray.push(proposal.id);
										}

										handleStagedChanges(newArray);
									}}
									small
									style={{
										marginLeft: 'auto',
									}}
								>
									{isStaged ? 'Staged' : 'Stage Change'}

									{isStaged && (
										<ClayIcon className="ml-1" symbol="check" />
									)}
								</ClayButton>
							</ClayLayout.ContentCol>
						</ClayLayout.ContentRow>
					</ClayPanel.Header>

					<DiffBlock
						diffContent={proposal.diffContent}
					/>
				</>
				
			)}

			{!proposal && <p>No Recommendations</p>}
		</>
	);
};

export default TaskProposal;
