import API_ENDPOINT from '../../../../constants/apiEndoint';

export default async (req, res) => {
	let {taskId} = req.query;

	taskId = parseInt(taskId, 10);

	const {data: project} = await fetch(`${API_ENDPOINT}/status`).then((res) =>
		res.json()
	);

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
