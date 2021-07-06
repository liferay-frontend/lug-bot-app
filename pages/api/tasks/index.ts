import PROJECT from '../../../dummy-data';

export default async function (_req, res) {
	// REPLACE WITH LUGBOT API
	const tasks = await new Promise((res) => {
		res(PROJECT);
	});

	res.status(200).json(tasks);
}
