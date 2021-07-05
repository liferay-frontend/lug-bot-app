import PROJECT from '../../../../dummy-data';

export default (req, res) => {
	const {taskId} = req.query;

	if (req.method === 'POST') {
		const task = PROJECT.runningTasks.find((task) => task.id === taskId);

		PROJECT.runningTasks.splice(PROJECT.runningTasks.indexOf(task), 1);
		PROJECT.pendingTasks.push(req.body);

		res.status(200).json(req.body);
	} else {
		const task = [
			...PROJECT.completedTasks,
			...PROJECT.pendingTasks,
			...PROJECT.runningTasks,
		].find((task) => task.id === taskId);

		res.status(200).json(task);
	}
};
