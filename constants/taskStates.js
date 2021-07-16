const STATES = {
	completedFailure: {
		displayType: 'failure',
		label: 'Completed with errors',
		state: 'COMPLETED_FAILURE',
	},
	completedSuccess: {
		displayType: 'success',
		label: 'Completed successfully',
		state: 'COMPLETED_SUCCESS',
	},
	pending: {
		displayType: 'info',
		label: 'Waiting to start',
		state: 'PENDING',
	},
	running: {
		displayType: 'info',
		label: 'Running',
		state: 'RUNNING',
	},
};

module.exports = {
	byName: STATES,
	byState: Object.values(STATES).reduce((acc, state) => {
		acc[state.state] = state;

		return acc;
	}, {}),
	completedFailureState: STATES.completedFailure,
	completedSuccessState: STATES.completedSuccess,
	pendingState: STATES.pending,
	runningState: STATES.running,
};
