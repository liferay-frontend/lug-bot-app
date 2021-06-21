<%--
/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */
--%>

<%@ include file="/WEB-INF/jsp/evp/views/init.jsp" %>

<liferay-ui:search-container curParam="${param.curParam}" delta="${EVPDivisionConstants.DIVISION_DELTA_DEFAULT}" emptyResultsMessage='${(param.type == EVPDivisionConstants.TYPE_REGION) ? "there-are-no-regions" : "there-are-no-subsidiaries"}' iteratorURL="${portletURL}">
	<liferay-ui:search-container-results
		results="${requestScope[param.resultsParam]}"
		total="${requestScope[param.totalParam]}"
	/>

	<liferay-ui:search-container-row
		className="java.lang.Object"
		escapedModel="${true}"
		keyProperty="evpDivisionId"
		modelVar="evpDivisionComposite"
	>
		<liferay-ui:search-container-column-text
			property="abbreviation"
		/>

		<liferay-ui:search-container-column-text
			property="name"
		/>

		<liferay-ui:search-container-column-text
			align="right"
		>
			<liferay-ui:icon-menu>
				<c:if test='${AlloyPermission.contains(themeDisplay, evpDivisionComposite.evpDivision, "editConfiguration")}'>
					<portlet:renderURL var="configureEVPDivisionURL" windowState="<%= LiferayWindowState.POP_UP.toString() %>">
						<portlet:param name="controller" value="divisions" />
						<portlet:param name="action" value="editConfiguration" />
						<portlet:param name="id" value="${evpDivisionComposite.evpDivisionId}" />
					</portlet:renderURL>

					<c:set value='<%= UnicodeLanguageUtil.get(pageContext, "subsidiary-configuration") %>' var="configureEVPDivisionURLTitle" /> <%-- FIXME: PortletConfig get/format methods --%> <%-- FIXME: PortletConfig get/format methods --%>

					<c:set value="javascript:Liferay.Portlet.EVP.openWindow('${configureEVPDivisionURL}', '${configureEVPDivisionURLTitle}', true, 1000)" var="configureEVPDivisionURL" />

					<liferay-ui:icon
						image="configuration"
						method="get"
						url="${configureEVPDivisionURL}"
					/>
				</c:if>

				<c:if test='${AlloyPermission.contains(themeDisplay, evpDivisionComposite.evpDivision, "edit")}'>
					<portlet:renderURL var="editEVPDivisionURL">
						<portlet:param name="controller" value="divisions" />
						<portlet:param name="action" value="edit" />
						<portlet:param name="id" value="${evpDivisionComposite.evpDivisionId}" />
					</portlet:renderURL>

					<liferay-ui:icon
						image="edit"
						method="get"
						url="${editEVPDivisionURL}"
					/>
				</c:if>

				<c:if test='${AlloyPermission.contains(themeDisplay, evpDivisionComposite.evpDivision, "delete")}'>
					<portlet:actionURL var="deleteEVPDivisionURL">
						<portlet:param name="controller" value="divisions" />
						<portlet:param name="action" value="delete" />
						<portlet:param name="id" value="${evpDivisionComposite.evpDivisionId}" />
						<portlet:param name="redirect" value="${portletURL}" />
					</portlet:actionURL>

					<liferay-ui:icon-delete
						url="${deleteEVPDivisionURL}"
					/>
				</c:if>

				<c:if test='${AlloyPermission.contains(themeDisplay, evpDivisionComposite.evpDivision, "deleteRequests") && (param.type == EVPDivisionConstants.TYPE_SUBSIDIARY)}'>
					<portlet:actionURL var="deleteRequestsURL">
						<portlet:param name="controller" value="divisions" />
						<portlet:param name="action" value="deleteRequests" />
						<portlet:param name="id" value="${evpDivisionComposite.evpDivisionId}" />
						<portlet:param name="redirect" value="${portletURL}" />
					</portlet:actionURL>

					<liferay-ui:icon-delete
						confirmation="are-you-sure-you-want-to-delete-all-requests-for-this-subsidiary-they-will-be-removed-immediately"
						image="../mail/delete_folder"
						message="delete-all-subsidiary-requests"
						url="${deleteRequestsURL}"
					/>
				</c:if>

				<c:if test='${AlloyPermission.contains(themeDisplay, evpDivisionComposite.evpDivision, "importUser")}'>
					<portlet:renderURL var="importUserURL" windowState="<%= LiferayWindowState.POP_UP.toString() %>">
						<portlet:param name="controller" value="divisions" />
						<portlet:param name="action" value="importUser" />
						<portlet:param name="id" value="${evpDivisionComposite.evpDivisionId}" />
					</portlet:renderURL>

					<c:set value='<%= UnicodeLanguageUtil.get(pageContext, "import-user-from-ldap") %>' var="importUserURLTitle" /> <%-- FIXME: PortletConfig get/format methods --%> <%-- FIXME: PortletConfig get/format methods --%>

					<c:set value="javascript:Liferay.Portlet.EVP.openWindow('${importUserURL}', '${importUserURLTitle}', true, 400, 400)" var="importUserURL" />

					<liferay-ui:icon
						image="add_user"
						message="import-user-from-ldap"
						method="get"
						url="${importUserURL}"
					/>
				</c:if>
			</liferay-ui:icon-menu>
		</liferay-ui:search-container-column-text>
	</liferay-ui:search-container-row>

	<liferay-ui:search-iterator />
</liferay-ui:search-container>