import ClayButton from '@clayui/button';
import ClayIcon from '@clayui/icon';
import ClayLayout from '@clayui/layout';
import ClayPanel from '@clayui/panel';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeBlock from './CodeBlock';

const TaskRecommendation = ({
	comment,
	comments,
	handleStagedChanges,
	index,
	isStaged,
	postStaged,
	stagedChanges,
}) => {
	return (
		<>
			<ClayPanel.Header>
				<ClayLayout.ContentRow containerElement="h3" float>
					<ClayLayout.ContentCol>
						{`Line ${comment.line}: ${comment.title}`}
					</ClayLayout.ContentCol>

					<ClayLayout.ContentCol expand>
						<ClayButton
							// @ts-ignore
							displayType={isStaged ? 'success' : 'secondary'}
							onClick={() => {
								postStaged(!isStaged, comment.id);

								const newArray = [...stagedChanges];

								if (isStaged) {
									newArray.splice(
										newArray.indexOf(comment.id),
										1
									);
								} else {
									newArray.push(comment.id);
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

			<ClayPanel.Body>
				{comment.description && (
					<ReactMarkdown>{comment.description}</ReactMarkdown>
				)}

				<CodeBlock
					language="diff"
					startingLineNumber={comment.line}
					value={comment.diff}
				/>

				{index !== comments.length - 1 && <hr />}
			</ClayPanel.Body>
		</>
	);
};

export default TaskRecommendation;
