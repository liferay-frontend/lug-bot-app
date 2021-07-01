import PROJECTS from '../../../../../../dummy-data';

export default (req, res) => {
	const {projectId, taskId} = req.query;

	const project = PROJECTS.find((item) => item.id === projectId);

	if (req.method === 'POST') {
		const task = project.runningTasks.find((task) => task.id === taskId);

		project.runningTasks.splice(project.runningTasks.indexOf(task), 1);
		project.pendingTasks.push(req.body);

		res.status(200).json(req.body);
	} else {
		const task = [
			...project.completedTasks,
			...project.pendingTasks,
			...project.runningTasks,
		].find((task) => task.id === taskId);

		res.status(200).json(task);
	}
};
