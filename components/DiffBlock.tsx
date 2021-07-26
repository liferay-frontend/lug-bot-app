import React from 'react';
import {ReactGhLikeDiff} from 'react-gh-like-diff';

import 'react-gh-like-diff/dist/css/diff2html.min.css';

const DiffBlock = ({diffContent}) => {
	return (
		<ReactGhLikeDiff
			options={{
				drawFileList: false,
				fileContentToggle: false,
				fileListToggle: false,
				matching: 'none',
			}}
			diffString={diffContent}
		/>
	);
};

export default DiffBlock;
