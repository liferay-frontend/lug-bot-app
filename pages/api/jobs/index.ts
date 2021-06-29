import JOBS_AND_PROJECTS from '../../../dummy-data';

export default async function (_req, res) {
	// REPLACE WITH LUGBOT API
	const jobs = await new Promise((res) => {
		res(JOBS_AND_PROJECTS);
	});

	res.status(200).json(jobs);
}
