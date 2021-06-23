export default {
	runningJobs: [
		{
			id: '1',
			name: 'Niflheim',
			state: 4,
			startTime: 2160,
		},
		{
			id: '2',
			name: 'Helheim',
			state: 4,
			startTime: 2220,
		},
		{
			id: '3',
			name: 'Asgard',
			state: 4,
			startTime: 2102,
		},
		{
			id: '4',
			name: 'Svartalfheim',
			state: 4,
			startTime: 2199,
		},
	],
	pendingJobs: [
		{
			id: '5',
			name: 'Alfheim',
			state: 2,
		},
		{
			id: '6',
			name: 'Vanaheim',
			state: 2,
		},
	],
	completedJobs: [
		{
			id: '7',
			name: 'Jotunheim',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 3,
			recomendations: {
				'evp-portlet-upgrade-webhook/liferay-workspace/modules/evp/evp-portlet/src/main/java/com/liferay/evp/hook/upgrade/v1_1_0/UpgradeEVPServiceRequest.java':
					[
						{
							title: '@deprecated As of Wilberforce (7.0.x), with no direct replacement',
							line: 273,
							diff: `- con = DataAccess.getUpgradeOptimizedConnection();
+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)`,
						},
						{
							title: '@deprecated As of Judson (7.0.x)',
							line: 331,
							diff: `- con = DataAccess.getUpgradeOptimizedConnection();
+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}`,
						},
					],
				'evp-portlet-upgrade-webhook/liferay-workspace/modules/evp/evp-portlet/src/main/webapp/META-INF/custom_jsps/html/taglib/ui/icon_help/page.jsp':
					[
						{
							title: 'PortletConfig get/format methods',
							diff: `- <span class="hide-accessible tooltip-text" id="randomId"><%= LanguageUtil.get(pageContext, message) %></span>
+ <span class="hide-accessible tooltip-text" id="randomId"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>`,
							description:
								'- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.',
							line: 22,
						},
					],
			},
		},
		{
			id: '8',
			name: 'Muspelheim',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 2,
		},
		{
			id: '9',
			name: 'Midgard',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 3,
		},
		{
			id: '10',
			name: 'Ygdrassil',
			state: 3,
			finishedTime: 1345134,
			startTime: 2199,
			totalRecomendations: 24,
		},
	],
};
