import API_ENDPOINT from '../constants/apiEndpoint';

export default async function cancelRunningTask(taskId) {
	await fetch(`${API_ENDPOINT}/tasks/${taskId}/cancel`, {
		body: JSON.stringify(taskId),
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
}
