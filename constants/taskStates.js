const STATES = {
	complete: {
		displayType: 'success',
		id: '0',
		label: 'Completed',
	},
	running: {
		displayType: 'warning',
		id: '4',
		label: 'Running',
	},
	waiting: {
		displayType: 'info',
		id: '2',
		label: 'Waiting to Start',
	},
};

module.exports = {
	byId: Object.values(STATES).reduce((acc, state) => {
		acc[state.id] = state;

		return acc;
	}, {}),
	byName: STATES,
	completedState: STATES.complete,
	pendingState: STATES.waiting,
	runningState: STATES.running,
};
