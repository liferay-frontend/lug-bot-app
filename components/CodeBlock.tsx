import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({language, startingLineNumber = 0, value}) => {
	return (
		<SyntaxHighlighter
			language={language}
			showLineNumbers={true}
			startingLineNumber={startingLineNumber}
			style={tomorrow}
			wrapLines={true}
		>
			{value}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
