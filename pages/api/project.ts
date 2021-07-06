import PROJECT from '../../dummy-data';

export default (_req, res) => {
	res.status(200).json(PROJECT);
};
