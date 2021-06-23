import ALL_JOBS from '../../../dummy-data';

export default (_req, res) => {
	res.status(200).json(ALL_JOBS);
};
