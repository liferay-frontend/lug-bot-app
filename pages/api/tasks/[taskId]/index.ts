import PROJECTS from '../../../../dummy-data';

export default (req, res) => {
	const {taskId} = req.query;

	const project = PROJECTS[0];

	const task = [
		...project.completedTasks,
		...project.pendingTasks,
		...project.runningTasks,
	].find((task) => task.id === taskId);

	res.status(200).json(task);
};
