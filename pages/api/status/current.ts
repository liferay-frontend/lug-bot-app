import PROJECTS from '../../../dummy-data';

export default (req, res) => {
	const project = PROJECTS[0];

	res.status(200).json(project);
};
