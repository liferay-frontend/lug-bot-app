import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import React from 'react';

import DiffBlock from './DiffBlock';

const TaskProposal = ({
	handleStagedChanges,
	postStaged,
	proposal,
	stagedChanges,
}) => {
	const isStaged = proposal && stagedChanges.indexOf(proposal.id) !== -1;

	return (
		<>
			{proposal ? (
				<>
					<ClayLayout.ContentRow className="mb-1" padded>
						<ClayLayout.ContentCol
							className="align-self-center"
							expand
						>
							<h3 className="mb-0">{proposal.title}</h3>
						</ClayLayout.ContentCol>

						<ClayLayout.ContentCol>
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

					<ClayLayout.ContentRow>
						<ClayLayout.ContentCol expand>
							<DiffBlock diffContent={proposal.diffContent} />
						</ClayLayout.ContentCol>
					</ClayLayout.ContentRow>
				</>
			) : (
				<p className="mt-2">{'There are no proposals for this task.'}</p>
			)}
		</>
	);
};

export default TaskProposal;
