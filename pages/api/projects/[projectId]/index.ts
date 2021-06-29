import PROJECTS from '../../../../dummy-data';

export default (req, res) => {
	const {projectId} = req.query;

	const project = PROJECTS.find((project) => project.id === projectId);

	res.status(200).json(project);
};
