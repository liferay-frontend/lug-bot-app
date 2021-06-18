export default {
	runningJobs: [
		{
			name: 'Niflheim',
			state: 4,
			startTime: 2160,
		},
		{
			name: 'Helheim',
			state: 4,
			startTime: 2220,
		},
		{
			name: 'Asgard',
			state: 4,
			startTime: 2102,
		},
		{
			name: 'Svartalfheim',
			state: 4,
			startTime: 2199,
		},
	],
	pendingJobs: [
		{
			name: 'Alfheim',
			state: 2,
		},
		{
			name: 'Vanaheim',
			state: 2,
		},
	],
	completedJobs: [
		{
			name: 'Jotunheim',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 5,
			comments: [
				{
					title: '@deprecated As of Wilberforce (7.0.x), with no direct replacement',
					file: 'evp/evp-portlet/src/main/java/com/liferay/evp/model/impl/EVPGrantRequestModelImpl.java',
					line: 384,
				},
				{
					title: 'PortletConfig get/format methods',
					description: `
					- Date: 2014-Mar-07
					- JIRA Ticket: LPS-44342

					**What changed?**
					All the methods get() and format() which had the PortletConfig as a parameter have been removed.
					
					**Who is affected?**
					Any invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.
					
					**How should I update my code?**
					Replace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.
					`,
					file: 'evp/evp-portlet/src/main/webapp/WEB-INF/jsp/evp/views/divisions/search_container.jsp',
					line: 111,
				},
			],
		},
		{
			name: 'Muspelheim',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 2,
		},
		{
			name: 'Midgard',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 3,
		},
		{
			name: 'Ygdrassil',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 24,
		},
	],
};
