const STATES = {
	completed: {
		displayType: 'success',
		id: '0',
		label: 'Completed',
	},
	pending: {
		displayType: 'info',
		id: '2',
		label: 'Waiting to Start',
	},
	running: {
		displayType: 'warning',
		id: '4',
		label: 'Running',
	},
};

module.exports = {
	byId: Object.values(STATES).reduce((acc, state) => {
		acc[state.id] = state;

		return acc;
	}, {}),
	byName: STATES,
	completedState: STATES.complete,
	pendingState: STATES.pending,
	runningState: STATES.running,
};
