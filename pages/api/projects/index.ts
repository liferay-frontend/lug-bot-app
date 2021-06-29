import JOBS_AND_PROJECTS from '../../../dummy-data';

export default async (_req, res) => {
	const projects = await new Promise((res) => {
		res(JOBS_AND_PROJECTS.projects);
	});

	res.status(200).json(projects);
};
