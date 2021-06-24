import ALL_JOBS from '../../../dummy-data';

export default async function (_req, res) {
	// REPLACE WITH LUGBOT API
	const jobs = await new Promise((res) => {
		res(ALL_JOBS);
	});

	res.status(200).json(jobs);
}
