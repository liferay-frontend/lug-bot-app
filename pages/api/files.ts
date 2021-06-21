import path from 'path';
import fs from 'fs';
import {NextApiResponse, NextApiRequest} from 'next';
import readline from 'readline';

const CWD = process.cwd();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {file, line: lineOfCode} = req.body;

	let dummyFile;

	if (file.match('.java')) {
		dummyFile = path.join(CWD, 'DUMMY_SOURCE_FILE.java');
	}

	if (file.match('.jsp')) {
		dummyFile = path.join(CWD, 'DUMMY_SOURCE_FILE.jsp');
	}

	const fileStream = fs.createReadStream(dummyFile, {encoding: 'utf8'});

	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity,
	});

	let lineNumber = 0;
	let content = [];

	for await (const line of rl) {
		lineNumber++;

		if (lineNumber === Number(lineOfCode) - 1) {
			content[0] = line;
		}

		if (lineNumber === Number(lineOfCode)) {
			content[1] = line;
		}

		if (lineNumber === Number(lineOfCode) + 1) {
			content[2] = line;

			break;
		}
	}

	res.status(200).json({
		locator: `${file}#${lineOfCode}`,
		content,
	});
};
