import STATES from '../constants/taskStates';

export default async function cancelRunningTask(taskId) {
	const currentTask = await fetch(`/api/tasks/${taskId}`).then((response) =>
		response.json()
	);

	currentTask.state = STATES.byName.waiting.id;

	await fetch(`/api/tasks/${taskId}`, {
		body: JSON.stringify(currentTask),
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		mode: 'cors',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	});

	await fetch(`/api/tasks/${taskId}`).then((response) => response.json());
}
