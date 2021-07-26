import API_ENDPOINT from '../constants/apiEndpoint';

export default async function cancelRunningTask(taskId) {
	await fetch(`${API_ENDPOINT}/tasks/${taskId}/cancel`, {
		cache: 'no-cache',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		mode: 'no-cors',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	});
}
