import ClayLayout from '@clayui/layout';
import React from 'react';

import DiffBlock from './DiffBlock';

const TaskProposal = ({proposal}) => (
	<>
		{proposal ? (
			<>
				<ClayLayout.ContentRow className="mb-1" padded>
					<ClayLayout.ContentCol className="align-self-center" expand>
						<h3 className="mb-0">{proposal.title}</h3>
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

export default TaskProposal;
