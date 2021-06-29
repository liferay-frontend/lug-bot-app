import JOBS_AND_PROJECTS from '../../../../dummy-data';

export default (req, res) => {
	const {projectId} = req.query;

	const project = [...JOBS_AND_PROJECTS.projects].find(
		(project) => project.id === projectId
	);

	res.status(200).json(project);
};
