export default (_req, res) => {
	res.status(200).json({
		location: 'git@github.com:gamerson/evp-portlet-upgrade-webhook.git',
		name: 'EVP Portlet',
		url: 'https://github.com/gamerson/evp-portlet-upgrade-webhook',
	});
};
