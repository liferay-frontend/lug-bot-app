import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({language, value, startingLineNumber = 0}) => {
	return (
		<SyntaxHighlighter
			language={language}
			style={tomorrow}
			wrapLines={true}
			startingLineNumber={startingLineNumber}
			showLineNumbers={true}
		>
			{value}
		</SyntaxHighlighter>
	);
};

export default CodeBlock;
