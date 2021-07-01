import {NextApiRequest, NextApiResponse} from 'next';

const TEMP_STAGED = [];

export default (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const {add, locator} = JSON.parse(req.body);

		if (add) {
			TEMP_STAGED.push(locator);
		} else {
			TEMP_STAGED.splice(TEMP_STAGED.indexOf(locator), 1);
		}

		res.status(200).json(TEMP_STAGED);
	} else {
		res.status(200).json(TEMP_STAGED);
	}
};
