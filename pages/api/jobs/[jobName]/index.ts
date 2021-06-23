import ALL_JOBS from '../../../../DUMMY_DATA';

export default (req, res) => {
	const {jobName} = req.query;

	const job = [
		...ALL_JOBS.completedJobs,
		...ALL_JOBS.pendingJobs,
		...ALL_JOBS.runningJobs,
	].find((job) => job.name.toLowerCase() === jobName.toLowerCase());

	res.status(200).json(job);
};
