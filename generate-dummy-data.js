const faker = require('faker');
const fs = require('fs');
const path = require('path');

const STATES = require('./constants/jobStates');

const comments = [
	{
		diff: `- con = DataAccess.getUpgradeOptimizedConnection();
+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)`,
		title: '@deprecated As of Wilberforce (7.0.x), with no direct replacement',
	},
	{
		diff: `- con = DataAccess.getUpgradeOptimizedConnection();
+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}`,
		title: '@deprecated As of Judson (7.0.x)',
	},
	{
		description:
			'- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.',
		diff: `- <span class="hide-accessible tooltip-text" id="randomId"><%= LanguageUtil.get(pageContext, message) %></span>
+ <span class="hide-accessible tooltip-text" id="randomId"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>`,
		title: 'PortletConfig get/format methods',
	},
];

function generateComment() {
	return {
		id: faker.datatype.uuid(),
		line: getRandomNumberBetween(0, 500),
		...comments[getRandomNumberBetween(0, 2)],
	};
}

function getRandomNumberBetween(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function generateProject() {
	const projectName = faker.company.companyName();

	console.log('GENERATING PROJECT: ' + projectName);

	const jobData = {
		completedJobs: Array(getRandomNumberBetween(1, 25))
			.fill(0)
			.map(() => generateJob(STATES.byName.complete.id)),
		pendingJobs: Array(getRandomNumberBetween(1, 5))
			.fill(0)
			.map(() => generateJob(STATES.byName.waiting.id)),
		runningJobs: Array(getRandomNumberBetween(1, 5))
			.fill(0)
			.map(() => generateJob(STATES.byName.running.id)),
	};

	return {
		...jobData,
		description: faker.lorem.paragraph(),
		id: faker.helpers.slugify(projectName),
		location: `https://github.com/lug-bot-api/${faker.git.branch()}`,
		name: projectName,
		url: faker.internet.url(),
	};
}

function generateJob(state) {
	if (!state) {
		state = getRandomNumberBetween(1, 4).toString();
	}

	let otherData = {};

	if (state === STATES.byName.complete.id) {
		let totalRecommendations = 0;

		const totalFiles = getRandomNumberBetween(0, 20);

		const recommendations = Array(totalFiles)
			.fill(0)
			.reduce((acc) => {
				const totalComments = getRandomNumberBetween(1, 20);

				totalRecommendations += totalComments;

				acc[faker.system.filePath()] = Array(totalComments)
					.fill(0)
					.map(() => generateComment());

				return acc;
			}, {});

		otherData = {
			finishedTime: faker.date.soon(),
			recommendations,
			startTime: faker.date.recent(),
			totalRecommendations,
		};
	}

	if (state === STATES.byName.running.id) {
		otherData = {
			startTime: faker.date.recent(),
		};
	}

	return {
		id: faker.datatype.uuid(),
		name: faker.git.branch() + ` (${faker.git.shortSha()})`,
		state,
		...otherData,
	};
}

fs.writeFileSync(
	path.join(__dirname, './dummy-data.js'),
	`module.exports = ${JSON.stringify(
		Array(getRandomNumberBetween(1, 6))
			.fill(0)
			.map(() => generateProject()),
		null,
		2
	)}`
);
