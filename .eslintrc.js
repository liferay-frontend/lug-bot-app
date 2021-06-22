module.exports = {
	env: {
		node: true,
	},
	extends: '@liferay',
	ignorePatterns: ['DUMMY_DATA.js'],
	parser: '@typescript-eslint/parser',
	rules: {
		'lines-around-comment': 'off',
	},
};
