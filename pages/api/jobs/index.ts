import ALL_JOBS from '../../../DUMMY_DATA';

export default (req, res) => {
	setTimeout(() => {
		res.status(200).json(ALL_JOBS);
	}, 200);
};
