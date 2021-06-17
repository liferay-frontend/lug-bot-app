import ALL_JOBS from '../../../DUMMY_DATA';

export default (req, res) => {
	const {jobName} = req.query;

	const job = [...ALL_JOBS.runningJobs, ...ALL_JOBS.pendingJobs].find(
		(job) => job.name.toLowerCase() === jobName.toLowerCase()
	);

	res.status(200).json(job);
};
