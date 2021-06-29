import PROJECTS from '../../../dummy-data';

export default async (_req, res) => {
	const projects = await new Promise((res) => {
		res(PROJECTS);
	});

	res.status(200).json(projects);
};
