const STATES = {
	complete: {
		displayType: 'success',
		id: 2,
		name: 'Completed',
	},
	running: {
		displayType: 'warning',
		id: 3,
		name: 'Running',
	},
	waiting: {
		displayType: 'info',
		id: 1,
		name: 'Waiting to Start',
	},
};

module.exports = {
	byId: Object.values(STATES).reduce((acc, state) => {
		acc[state.id] = state;

		return acc;
	}, {}),
	byName: Object.values(STATES).reduce((acc, state) => {
		acc[state.name] = state;

		return acc;
	}, {}),
	completedState: STATES.complete,
	pendingState: STATES.waiting,
	runningState: STATES.running,
};
