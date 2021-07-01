import PROJECTS from '../../../../../../dummy-data';

export default (req, res) => {
	const {projectId, taskId} = req.query;

	const project = PROJECTS.find((item) => item.id === projectId);

	const task = [
		...project.completedTasks,
		...project.pendingTasks,
		...project.runningTasks,
	].find((task) => task.id === taskId);

	res.status(200).json(task);
};
