import useSWR from 'swr';

const API_DOMAIN = process.env.API_DOMAIN || 'localhost:3000/api';

// POST APIs
export function executeTask() {
	return fetch(`${API_DOMAIN}/tasks/execute`, {method: 'POST'});
}

export function acceptProposal(taskId: string, proposalId: string) {
	return fetch(
		`${API_DOMAIN}/tasks/${taskId}/proposals/${proposalId}/accept`,
		{method: 'POST'}
	);
}

// GET APIs
export function useCurrentTasks() {
	const {data} = useSWR(`${API_DOMAIN}/status/current`);

	return {tasks: data};
}

export function useTaskLog(taskId: string, interval = 1000) {
	const {data} = useSWR(`${API_DOMAIN}/tasks/${taskId}/log`, {
		refreshInterval: interval,
	});

	return {log: data};
}

export function fetchProposalStatus(
	taskId: string,
	proposalId: string,
	interval = 5000
) {
	const {data} = useSWR(
		`${API_DOMAIN}/tasks/${taskId}/proposals/${proposalId}/status`,
		{refreshInterval: interval}
	);

	return {task: data};
}
