module.exports = {
	async redirects() {
		return [
			{
				destination: '/tasks',
				permanent: true,
				source: '/',
			},
		];
	},
	sassOptions: {
		includePaths: require('@clayui/css').includePaths,
	},
};
