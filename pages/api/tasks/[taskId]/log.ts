import faker from 'faker';

export default async function (_req, res) {
	// REPLACE WITH LUGBOT API
	const log = await new Promise((res) => {
		res({log: faker.lorem.paragraph()});
	});

	res.status(200).json(log);
}
