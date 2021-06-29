import PROJECTS from '../../../../../../dummy-data';

export default (req, res) => {
	const {jobId, projectId} = req.query;

	const project = PROJECTS.find((item) => item.id === projectId);

	const job = [
		...project.completedJobs,
		...project.pendingJobs,
		...project.runningJobs,
	].find((job) => job.id === jobId);

	res.status(200).json(job);
};
