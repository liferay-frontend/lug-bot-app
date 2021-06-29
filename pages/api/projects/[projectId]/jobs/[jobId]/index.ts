import ALL_JOBS from '../../../../../../dummy-data';

export default (req, res) => {
	const {jobId} = req.query;

	const job = [
		...ALL_JOBS.completedJobs,
		...ALL_JOBS.pendingJobs,
		...ALL_JOBS.runningJobs,
	].find((job) => job.id === jobId);

	res.status(200).json(job);
};
