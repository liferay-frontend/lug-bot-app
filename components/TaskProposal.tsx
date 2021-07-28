import ClayButton from '@clayui/button';
import ClayLayout from '@clayui/layout';
import ClayLink from '@clayui/link';
import React from 'react';

import DiffBlock from './DiffBlock';

const TaskProposal = ({lugbot, proposal}) => {
	const isLocalInstance = lugbot.mode === 'LOCAL';

	return (
		<div className="bg-white p-3 rounded shadow">
			{proposal ? (
				<>
					<ClayLayout.ContentRow className="mb-3">
						<ClayLayout.ContentCol
							className="align-self-center"
							expand
						>
							<h2 className="mb-0">{proposal.title}</h2>
						</ClayLayout.ContentCol>

						<ClayLayout.ContentCol className="mr-2" expand>
							<ClayLink
								button
								displayType="secondary"
								href="#"
								style={{marginLeft: 'auto'}}
							>
								{'Download Report'}
							</ClayLink>
						</ClayLayout.ContentCol>

						<ClayLayout.ContentCol>
							<ClayButton onClick={() => alert(`Sending a PR`)}>
								{isLocalInstance
									? 'Merge Proposed Changes'
									: 'Send Pull Request'}
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
				<p className="mt-2">
					{'There are no proposals for this task.'}
				</p>
			)}
		</div>
	);
};

export default TaskProposal;
