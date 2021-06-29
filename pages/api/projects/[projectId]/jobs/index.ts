import PROJECTS from '../../../../../dummy-data';

export default async function (req, res) {
	const {projectId} = req.query;

	const project = PROJECTS.find((item) => item.id === projectId);

	// REPLACE WITH LUGBOT API
	const jobs = await new Promise((res) => {
		res(project);
	});

	res.status(200).json(jobs);
}
