module.exports = {
  "completedTasks": [
    {
      "id": "f4ee4f0f-963e-441d-a257-15f25b2c26a1",
      "name": "panel-bypass (22554cd)",
      "state": "2",
      "finishedTime": "2021-07-05T19:10:26.649Z",
      "recommendations": {
        "/var/yp/protocol_global.hqx.scs": [
          {
            "id": "e4cb42fa-ea27-43a9-8ea6-a02a978caad9",
            "line": 176,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f752fdad-8f8b-47c6-9d2b-cee869933587",
            "line": 431,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "329cc539-a240-46dd-8e85-c073a621a8b9",
            "line": 245,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0cdcfcee-d28d-45b6-a8f1-edb2b6225bcb",
            "line": 297,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "06ab4ae3-b499-4c19-9030-c923c6b1efbc",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4c14e5c1-2f79-4f68-a2d5-36ca1cc558fb",
            "line": 479,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "43472359-72f8-4515-a765-20ab6db75c5c",
            "line": 469,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aeeba557-d958-4b56-a21c-aa5d52386608",
            "line": 446,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "01663db4-574d-46c8-ae24-526dd16837f8",
            "line": 47,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b915a404-1669-4f08-92c5-c08acf2a1986",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "df81753a-c827-49ea-af80-d965b5b9f28b",
            "line": 384,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "027cb90e-5049-4fb6-9c0e-574c58c20df1",
            "line": 74,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "628c3ea7-cbaa-4257-b710-8a740c962fe1",
            "line": 2,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "09c494a2-9e3b-446e-8abb-7123860cb433",
            "line": 301,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc6496fb-2242-4cd8-98a6-231546088178",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c8451914-2de6-454f-8bd4-725ad18cbf71",
            "line": 412,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1be9e654-8ab2-4235-a2a6-6b38c74c3df9",
            "line": 10,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1f442308-f17d-4266-bd58-b55998f1f568",
            "line": 418,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0056b23e-58ff-4ec2-97d3-c937288b9c9b",
            "line": 86,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/metal.w3d.m4a": [
          {
            "id": "727bb3a0-14a4-42bd-bf93-a17dfb401386",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d1f50fbc-0722-4ab7-a15f-8f5d9db45478",
            "line": 176,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Users/account_e_business.pic.smf": [
          {
            "id": "3a1ca9c9-4602-45cd-bd62-2eb17d434d3b",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d33bd5d2-69f0-4d7b-9ea4-da3a3d1252a3",
            "line": 224,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d499ec4e-2646-444b-9e3d-6c505516b951",
            "line": 167,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3bc72360-b167-484a-b1ce-b2002820ab6d",
            "line": 462,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b51ec1fb-da31-46a4-a85c-9e39f0f6d3e0",
            "line": 343,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e9aa9876-15cc-4f42-8c78-0ba5acbaea96",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3854f81e-f50d-4604-a607-5609136acca0",
            "line": 7,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "977699be-fd5b-4b33-806c-57e7a5c03775",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1f056510-dd67-4269-8fad-135942e17f53",
            "line": 466,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b529e684-d9f7-4952-989d-1753e1c8f109",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0803de2a-22e1-4b1b-a614-a1420f9be561",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/ports/manor_legacy.cpp.smzip": [
          {
            "id": "3a04a0ee-fbfc-49df-a67b-b56a6f633ec8",
            "line": 379,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7da0681a-ab95-427b-b263-c5063fb31e12",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "de16adbf-e8cb-4e7f-a4d2-4c72bf8fe0ce",
            "line": 162,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "633d7a24-8b99-4d9a-8501-a5cbb90a1ebd",
            "line": 10,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ec517c35-451a-48c9-9ebe-7bba413e87ef",
            "line": 143,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1b6b0a0a-f01a-4a93-82e8-8b3d73e80d8f",
            "line": 454,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2f73c362-7426-47f7-a2c6-c7e98a41b553",
            "line": 354,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5f801dbc-16d9-4777-aed5-f27ad42e730e",
            "line": 125,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "081c05eb-3e34-49d8-a541-8b4e4e830c30",
            "line": 279,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4ffe0740-4cd0-4433-9a68-3bace32c7183",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "83be887e-a586-4b98-9e21-ec480438247f",
            "line": 9,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a1318f06-a0fd-44ba-b9f3-0c8060cf621c",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9736ea5e-4e59-4746-b929-e3cd80319174",
            "line": 456,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "28384a92-691f-4bad-bd59-70fb3d963412",
            "line": 242,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4f51b4f3-13a8-49ab-8797-f6a079aa77db",
            "line": 448,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e66c4fed-0312-4902-9e59-752376cbd9aa",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/System/portals.ivp.rar": [
          {
            "id": "ebf4a334-b60b-486c-95a7-6ed437bf9b7d",
            "line": 388,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dee11fec-bc38-4d65-9c3f-acf963950b4f",
            "line": 13,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2b804675-2ccf-48bb-8fb3-caba76d8bc4b",
            "line": 89,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4240dc25-44e9-4a40-84da-ed657af4a422",
            "line": 435,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "32d52419-e489-41c2-b1f6-f3fe69f491e3",
            "line": 134,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b4891a71-9098-444c-9140-1a39ac9f3deb",
            "line": 391,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6c4a49c1-3e25-4bd4-80b6-1f8013dbfb97",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e19221b3-1140-4df1-8427-3122a3f49471",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ca7d8657-065b-4cf2-9014-240be5948dcc",
            "line": 490,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c5d9982f-5cc4-46b4-af3a-96d0c91c1e59",
            "line": 17,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c000a480-3b7c-47f7-a703-64070a6410ca",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/boot/defaults/cheese_outdoors_analyst.jpg.opf": [
          {
            "id": "d15e06c2-d160-4bd6-b0be-0ac21f60bd2e",
            "line": 252,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "33cff34a-1146-4623-a62a-a3618893751f",
            "line": 74,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d5bb1bcf-f8a8-4b3b-85e1-c0f8892ef6c2",
            "line": 27,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0e92233e-0479-40f1-b27e-5555f968f00b",
            "line": 292,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/california_dedicated_pink.vtt.gqf": [
          {
            "id": "c8cad3bd-6440-4164-9c39-718f69b94427",
            "line": 219,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6eef7385-b7dc-41af-8133-0832076ba758",
            "line": 225,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1176a6ed-1cbd-41b9-a0bd-6cd35e4ebe73",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "384f101b-31c2-4565-9436-4204c6c7ff1e",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "77b3fbf9-cb17-44ff-a8df-c208dfded41e",
            "line": 328,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2619367c-7b66-4ca5-95be-34120b7e0119",
            "line": 379,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "695acbe2-3708-46c9-8a6e-5999d838fe64",
            "line": 27,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "46404c76-da20-4442-aa0e-d1ac3a168bba",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "af36fdcf-fe07-4759-b013-2a998f521cd9",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/small.ggt.sql": [
          {
            "id": "b94772d6-8e01-4218-8edb-972167194015",
            "line": 476,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "14703464-66ad-4f2e-97c5-53d821481e50",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/usability.emf.coffee": [
          {
            "id": "dcac2d1f-60e1-4e87-9e67-fcbeed7177de",
            "line": 312,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ffb35629-4c4c-49b9-a4a9-07de71770810",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9e9b9048-24e8-4530-990c-55bc83816b56",
            "line": 383,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "04786c2f-087b-4e83-8bff-31d59f28ea50",
            "line": 59,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "de2f07ba-9d5e-44c6-8f20-6e04baeb5a51",
            "line": 345,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "72199102-e657-4075-ab7a-a7812592545b",
            "line": 25,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b7b10958-5d70-477f-b181-0bf9d8c5aafe",
            "line": 22,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3a00f105-6df2-493c-986c-4d6aca463d5a",
            "line": 99,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d228fda6-4647-455c-9ef0-8be455639367",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f2910de7-c1e4-47db-b787-b3276dfc9568",
            "line": 61,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e338a242-30b3-46a7-9d7a-170d2d29f034",
            "line": 183,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "13b77f27-2da5-43ff-a90a-db11cfe09c21",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a6f5e928-553b-4800-93d2-cf5c2e2f4e0e",
            "line": 270,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6389eab7-773a-43a5-9c85-166f1449db01",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eb62a991-0cb9-4343-946f-af522c60ad8e",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8634ffe6-031e-4109-a022-2c9b2fd49fa9",
            "line": 211,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a4140d36-eb1c-410a-8583-a61b6f5b46f3",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d4d78dc0-cca2-42c3-8238-ae2cc543b293",
            "line": 14,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "76dc9fbf-4b84-42ce-a015-bd5bbdf69d4a",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "97892363-cb4f-4ebd-9147-8a6b77d2ecf7",
            "line": 404,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/mail/plastic_jbod_firewall.uvs.m21": [
          {
            "id": "767ca430-2e41-4185-aaae-dcffc73fc72c",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3aebb120-19f6-4531-afa8-5c2cf177cfa1",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1f6958b2-0e8f-43e5-9fd5-2d78883f8085",
            "line": 139,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bbd5bae2-dfae-408a-9dc2-91df76c327f4",
            "line": 71,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "79b353fc-42f5-4e77-ada2-d6bc7585d783",
            "line": 284,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "42255754-cf79-44cc-b3d1-a6fc1583ab5a",
            "line": 27,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "28ba3a20-2c53-430e-9364-2e36ab45033a",
            "line": 169,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2455a93e-728d-4918-a4dc-63fec33b99fd",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed8ad220-d9e4-45d9-bcb9-34dd435a3e17",
            "line": 338,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fd1a862f-be43-4ce9-bc7a-c840304f973c",
            "line": 22,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/boot/defaults/plastic_agp.uvvu.csv": [
          {
            "id": "404ad896-4c1a-4dcf-92f4-689e9ffae94d",
            "line": 255,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "69bb7820-0dff-4507-a8fc-238f7ccdd99e",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f003b9be-602c-411d-844c-c476f483cb76",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "679a6232-f47d-4390-b170-89cf89fe642a",
            "line": 207,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c6aaa17e-14e7-4f91-973e-77dd940f2664",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dad3038c-8461-4b46-abe9-cfa16f7fde96",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f78a4f8a-db69-474e-bc73-7e5f5e439f6e",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "70090b2b-e936-4a55-ace4-136971052f98",
            "line": 486,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b43e6285-1d10-4bad-8016-21a321cc5434",
            "line": 491,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8c33e159-c678-4823-848a-179de38bee36",
            "line": 11,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d7c9db3c-0863-4318-ba75-5661ee15cb79",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "108d9423-fff7-4487-80cf-1a61c13f2cab",
            "line": 472,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b1c615c8-8591-42f9-bcc9-2497638cac94",
            "line": 253,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "27a35760-7411-414f-b444-bbc41ca69ca3",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d6c8c344-79eb-4b61-b3f3-85f15608a395",
            "line": 369,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d64212c9-6f38-44ab-9129-b3322f4226dc",
            "line": 355,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/proc/bypass.sh.fbs": [
          {
            "id": "389a8783-9067-478d-910e-aac8ebc42d06",
            "line": 159,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a629add9-a28b-47fd-9bbf-06e3edf660e3",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "336ca083-2ff8-4681-a7d1-ac56070bf9c6",
            "line": 478,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e7b7f8ab-d848-4642-a480-ab54ff78a105",
            "line": 476,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e5e58245-9d42-4a92-9057-dbad4395484c",
            "line": 20,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0a12e425-14bb-45c9-ba25-9dffa40f0405",
            "line": 275,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a07d2431-d9fc-4db8-aaec-df943b99429e",
            "line": 328,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b9d473bf-6f31-44e1-a0ae-5aacb0f3214e",
            "line": 277,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e0bee597-cfdf-4710-889e-12b27fde5b24",
            "line": 178,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7b8b82fc-576a-43ca-8bf0-6fda5fa86d7c",
            "line": 118,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/opt/share/integration.icc.mseq": [
          {
            "id": "806bf11a-4d24-49b3-aa18-eb39879d3a83",
            "line": 37,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b935f4b1-2147-4412-848d-688a0843df30",
            "line": 385,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ae01c476-7794-466a-a835-c0e34b5ab450",
            "line": 48,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c6be4018-9d8e-44f0-b985-bcc58bd750fd",
            "line": 336,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0757785d-bf8f-4c79-a5e7-71616a3ed3a8",
            "line": 139,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fbef0882-06c1-4eed-a6f4-252018a75f2f",
            "line": 147,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "83b47154-de07-4441-ab78-e4294fdc9302",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6e57bce1-192b-4c58-8f7d-342eb98a2622",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/technologies.wad.man": [
          {
            "id": "4ab43ced-3234-4337-b440-67b000967a96",
            "line": 371,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0fba7636-0a66-4183-9765-a2bf603d2ee0",
            "line": 270,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "837cdcf8-2252-4c98-a0aa-9671085d27da",
            "line": 63,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a24e0dfd-9d52-435d-b8a1-8199f13793f4",
            "line": 80,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "abd32ef1-3047-4d03-b822-91134a9118b9",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5822e1e8-4cf8-4774-a2b9-948d8f1534e5",
            "line": 218,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f81a0ea-c682-490a-9221-a9740364edea",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ec03ddbc-6c75-4665-91aa-0654e1e8fcff",
            "line": 275,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fcd7c79d-1bd8-45e1-a00a-f4377e204ca9",
            "line": 14,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7393ef3a-23af-4bf2-9c5c-90180d1d0b88",
            "line": 225,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a34f1ba5-9032-4211-9a12-d072fab32268",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4908d522-7790-45c8-a760-060f704ba34f",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "61e31ce8-dcd0-47b0-9d27-72ee9e240a6c",
            "line": 447,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fdff1dc9-c8cc-4b84-a297-a7a6174dc6fc",
            "line": 52,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "31eca811-a507-433b-a0b2-7400d2b1f8c4",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1893b751-74a2-47d4-b1ff-8857b1602264",
            "line": 494,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5e540b1b-3493-422c-b4b3-48ba4876f14a",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/sys/account_new.f4v.rld": [
          {
            "id": "6a1e70de-b58a-4545-b425-5031da56a7e5",
            "line": 72,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a4d55126-3a17-4527-a7f0-f6e2b0379023",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-05T04:24:14.859Z",
      "totalRecommendations": 157
    },
    {
      "id": "ae08485d-52de-4370-98ae-2f64c77574b0",
      "name": "array-copy (98e99b4)",
      "state": "2",
      "finishedTime": "2021-07-06T04:18:04.000Z",
      "recommendations": {
        "/System/ergonomic_uniform_facilitator.otc.xlf": [
          {
            "id": "ee476b64-2cf4-4971-949c-d8c64fa0531d",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c418e6e6-3805-4935-ac45-e0b701a91ef2",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cdc654c1-becd-4509-a00d-928dfa888601",
            "line": 47,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ed950ded-7d97-421c-a5bd-455a2c78ea77",
            "line": 415,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5b4a73e4-69a3-4107-b464-225500104bfe",
            "line": 159,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fa4c5afc-9802-4c90-be30-8635daa98153",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "872c44e8-8691-4d65-a4a8-089e3b2a2030",
            "line": 312,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2005c4eb-557d-4c06-86f1-f66da8157814",
            "line": 91,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aa5bc6eb-63bb-4af0-9c6f-276404f26086",
            "line": 192,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2a9017b5-eaeb-4233-8a95-a8ffd1b3e116",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/src/shirt_streamlined_shore.jsonml.mdb": [
          {
            "id": "5866c0a7-4d35-49d7-914d-fba4856a0f07",
            "line": 290,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2df3c6f0-569a-426c-9396-86a09b60cbcc",
            "line": 7,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3e9a648a-389e-430a-9b98-cd335f283b19",
            "line": 367,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d253f05f-1ffb-4bf8-94fa-8474ccff62aa",
            "line": 475,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "92498c85-ad90-4753-8521-0ec3cdc52ce1",
            "line": 149,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3274f100-cad3-4a76-9062-c79452cd3052",
            "line": 231,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6fd8519d-1fa5-4cc1-9d72-ba7e0c79dc78",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ea082a78-aea0-4087-af6f-01910282c61e",
            "line": 332,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "316dabd5-ec32-46ee-8feb-009f6b629bc1",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3663e290-553f-435c-9453-66aa5ff145a4",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "32bbbf52-9b9d-4797-941b-72fe811d9571",
            "line": 286,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "afb909ea-7101-4439-9a01-d6b623c4ff57",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f8272fb-129a-4382-9e96-464bf8ae4bf0",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "498236cd-febb-475e-a778-40724f2faff7",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/Users/port_steel_small.tsv.gca": [
          {
            "id": "48a37ae5-fe5a-40ee-8f75-ca9a67e5a60b",
            "line": 83,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e85b0663-8008-420e-bf66-186cbbb3d0b3",
            "line": 124,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f6eb040f-78ec-4957-ab0a-c4bb58ed7e27",
            "line": 312,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed77c620-be79-41fd-a5ab-98b2dcba8b71",
            "line": 387,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e8a69ca4-0ae0-4c17-a2e1-fbc973713b97",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "eddb4930-eb32-4ded-9e48-3046c6402ada",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3ab914fb-0f1c-481a-9277-500279f50914",
            "line": 443,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7e5fc224-82ec-42c1-9a48-70af694416b5",
            "line": 48,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "771c038e-3df0-4507-b6ee-f3946c13f354",
            "line": 134,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "80752d9d-19f7-49cb-ae69-872c405856f5",
            "line": 41,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "49b07339-fed6-40b7-b8f8-21fe703bc802",
            "line": 171,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ee79dba6-be47-4819-a627-06f7d762de28",
            "line": 272,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1a4e6eaf-6174-4849-93f7-0687b5831c4a",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d86c5659-b22e-43fa-a05b-60693b3b56a1",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a46eed11-2a7e-45aa-a127-8facf6445384",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0f016e2a-0ef5-470d-962b-c80376d4f1ca",
            "line": 267,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b24273a8-9473-441c-8378-f4b0fc2b7357",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "864df4a7-64bb-4bd8-bb50-971c15229041",
            "line": 461,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7c2e6d5c-49b4-4ccd-b9e9-b5c107ead0e5",
            "line": 38,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lost+found/cross_platform_whiteboard.vcard.pvb": [
          {
            "id": "ef66cc5b-8f9c-43cb-95b8-2b7839a654e9",
            "line": 408,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1284d9ab-1f10-4159-9511-a39f1171bec5",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "baec303d-6c67-4bc3-9d29-4670580bca9d",
            "line": 391,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3d7c32b8-263d-45df-8d5c-103de037273a",
            "line": 144,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7bbbb1ae-7b27-4a99-83a2-c1e77b275183",
            "line": 86,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/obj/invoice_interfaces.spl.xltx": [
          {
            "id": "be1e6738-9659-4159-8e9c-75e181ee14cd",
            "line": 494,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cab47bd8-5661-49e2-acb3-c44d52603e4f",
            "line": 86,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4bb89985-8c53-4529-9322-a5436ff54ac6",
            "line": 428,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "585bfeab-df63-4163-be13-b7b0c1f4de91",
            "line": 482,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "684bb19f-93cb-4475-ab0b-e7611f1744a9",
            "line": 75,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9a83de1a-e5cb-47a8-aaff-55d72295d401",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d882ac46-a136-43b5-8875-3dc74dc5487b",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bf6f7efb-bc35-4e17-aff0-71011237538d",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b91b5ce8-692d-45df-a405-4e704710b48d",
            "line": 252,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f8cdf217-9f0a-4cf0-a6e5-7e755576439e",
            "line": 317,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0f6c22f1-445e-462a-8ee6-87731a716dc1",
            "line": 90,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ec69b8ac-d968-4b45-90f9-9b0cea4ea6d0",
            "line": 391,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a28ef6e5-ca36-420b-8746-c529751929f8",
            "line": 118,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Library/coordinator_metal.dts.iso": [
          {
            "id": "ddced2f6-1e63-4ffb-ad46-366e46f042e5",
            "line": 139,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3e78f233-fb3c-410c-b157-f9340de7c6d6",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b4678337-30be-4f54-8073-deb06fc16114",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "622626db-2952-4b78-b599-613807b7f56c",
            "line": 80,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "08fa77c8-7b97-4fa3-b0f4-c7bd6d144c34",
            "line": 469,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "87671213-7585-465c-a601-3f8a1adbb9d5",
            "line": 389,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "64c17e0a-66e7-41e6-969d-639e8cbc6202",
            "line": 441,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "da2ff6d2-97f8-4aa7-b2e5-31a9d5fcf7a4",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "03b09f04-cda9-4564-babb-6cf64ef615c6",
            "line": 310,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "70053fe1-0b26-4cdd-8e4c-893b2eef52de",
            "line": 75,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/srv/unbranded_e_business.kfo.cmc": [
          {
            "id": "dd16a985-9105-4f5b-b927-2cbfb648c1a0",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "61219c06-492d-46a5-b6e1-e64b13a5fa54",
            "line": 106,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a57e8ca4-125f-4caf-b6c9-41d0e51c0eae",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "af297a1a-3b3f-4250-9cd8-e6a95bdd7bde",
            "line": 250,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "48fb7e2d-695a-47a7-801c-14fb47a69d0f",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f780350b-c8de-480c-aa29-42bb7b558e02",
            "line": 272,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "28107861-3aa1-415c-91c5-518511d56400",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e480e5e9-fcde-4b87-a19d-49aee5b55b52",
            "line": 99,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2f7dd240-df24-40c8-b261-ea6f9cc17dc5",
            "line": 480,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eaa31386-9d56-4303-9f42-5afbf524ceae",
            "line": 203,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6d4c70dc-ba47-4a91-a903-b4f1ea87afec",
            "line": 138,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6754caa9-c705-46d5-922b-8fe0f378ac12",
            "line": 277,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "01bcc1e2-e091-44c6-a657-0a57699278d9",
            "line": 443,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5a02ae94-44b8-4ac9-bb6e-66e77227e496",
            "line": 94,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "41288156-2d64-442f-83ae-eb22ea89433a",
            "line": 12,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bb8649e4-babc-4f10-b3e9-d7b5ebf6caab",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/mail/bus_impactful.chm.fg5": [
          {
            "id": "bb32af86-dbd9-463f-96e1-713888fefa83",
            "line": 441,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9bd9b0e2-50d8-4ebe-a668-8ddaf5474769",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "50543388-f356-4833-b02e-9c69d7723e9e",
            "line": 43,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8e088ef4-229f-40d9-821f-f507646b9e6b",
            "line": 159,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4c499657-ab34-4449-99df-c1a68a52a0b3",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f55b10fa-2a1c-441d-ac68-49a72db27e68",
            "line": 127,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "cfe08ecb-8fec-4703-8eed-e86970cd948e",
            "line": 35,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a9fdc994-5d72-4b30-a733-bdc6f59c6695",
            "line": 426,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1864e6e5-afa4-4c5a-ac26-afc04f56a117",
            "line": 340,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d3c0e433-5d4f-4635-9f07-4d60ce292a50",
            "line": 63,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e611e4e7-1b63-447a-8eb1-4548a059b16d",
            "line": 73,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2fbfebf7-69ca-4cc2-8165-f656f8f471d9",
            "line": 259,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6e118884-37cd-4e8a-9126-7e39e0cfcd79",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d5729cfc-d22f-40f4-bf86-6066e515830f",
            "line": 114,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "13202d1a-96fb-472c-bfba-ee432d1c9a39",
            "line": 453,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3fb07011-db49-4efa-a68c-a5bb61d18899",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "408b6827-af9f-41d6-8b52-348fee310308",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/ppp/end_to_end_grocery_computers.hbs.mpn": [
          {
            "id": "52f224db-67c9-4d22-a38b-af756d745350",
            "line": 17,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4d224726-f810-4122-b0d6-a4812d378654",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "57033ad9-ca47-49ef-942e-b1ccf739439e",
            "line": 169,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "52b013b9-b71e-4eda-b34f-b4b67702499a",
            "line": 90,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a056d69b-e554-4fc2-b069-d026f0205a49",
            "line": 466,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f21ce9b4-ef2e-4fa0-9f11-469294191d86",
            "line": 98,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/tmp/synthesize.latex.cpio": [
          {
            "id": "eaacafa8-3011-4762-b669-e8c00e021a4e",
            "line": 90,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "13281f50-ca98-4fb3-ae2d-e73c0efd21e0",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "02f4db56-80f6-42cf-9f9b-8a04c7e9a0bc",
            "line": 103,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1b65fcf7-07d8-4056-9c4a-e2167472f9dc",
            "line": 380,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2d2188be-c60a-492b-9c3d-2b44aade5bb3",
            "line": 455,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9b06073d-0b9a-4b39-b03b-c23b3e7ee694",
            "line": 180,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8cb3d4ae-63d4-42f7-a9a2-0877787857ac",
            "line": 155,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3e9a3121-94d2-4a78-9256-e5d45f64e9c6",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "17d5a577-08a3-42a9-ba59-e188437b97ca",
            "line": 246,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/lib/handmade.azf.hpid": [
          {
            "id": "60196b2a-7233-4303-88ff-e28dd9d64dfd",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "843fb2ed-0459-4af1-9498-8ebf81d1c346",
            "line": 190,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "32e50d20-94ff-4deb-932b-52c3d9e50b66",
            "line": 194,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a237a03d-23ef-4293-8f2d-b05ea7a81e54",
            "line": 384,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "71ba9d82-585b-4289-9685-412a2b5ed9df",
            "line": 212,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c545616f-39e0-45a8-8cbd-dbce26457750",
            "line": 171,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ae8c1f90-d2ba-4562-bdea-f6984722f748",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "335c7b37-9a6d-4fea-afbf-0ba163d753ff",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aed862da-9b8d-48e5-9e3c-4c4a7d7dc7da",
            "line": 451,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "50f966c6-d832-4557-9df5-e3eaae569cee",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ec4293c6-cbdf-4ff1-b133-a34fccf8b5ff",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1cf2b2ce-ab96-429d-bbb9-9d918d08e822",
            "line": 316,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Library/investor.uvvs.xap": [
          {
            "id": "d0657ae9-e1b5-4347-97c9-6397b979a2c0",
            "line": 383,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "729e6f35-1f3a-4f0a-8d6f-6f828519042e",
            "line": 152,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5a6c7916-d21a-458a-af7a-889eca680ee8",
            "line": 218,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5cc1e9c0-c384-49a3-bc1a-490c2b6e4506",
            "line": 316,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4060532b-8d0e-4eca-951d-5394236e8f23",
            "line": 356,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e7d6f5c5-5c67-4e83-a1bc-a61cfd797def",
            "line": 492,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/sys/response_pants.movie.mime": [
          {
            "id": "c62bdbdb-1b0d-467b-99b0-1b83054b1d50",
            "line": 77,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "65607513-7022-43ae-b895-8786cfec3a94",
            "line": 350,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "18c5fd28-9e68-42fb-a7ef-1070bda72d9d",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "34f2bc26-193b-4941-ba0d-27b12347cffc",
            "line": 39,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "58d05cac-83c8-4708-954f-64b23fd406c6",
            "line": 402,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b98d219c-dc55-449f-81d5-bc70b17cc003",
            "line": 134,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3ddfa2ae-a044-453b-98d7-774423c7358f",
            "line": 25,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/bin/optional_deposit_buckinghamshire.spp.h261": [
          {
            "id": "1094cd74-d700-45dc-a014-8a6d82c632b7",
            "line": 49,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "54ca7933-1b1f-4980-b9d0-eeccd2371a8c",
            "line": 175,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6dffc3b8-9dba-480b-9694-e0b8c86716c6",
            "line": 455,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "05378baa-d641-42be-bc70-bf63abd6ced9",
            "line": 23,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cb8bbb31-9b62-45b2-8804-5f2a90937a37",
            "line": 238,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7c8c7277-2b13-49ae-84f8-4457bc1f6cdb",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f5dd8383-872c-4719-89cd-10b0080c46b9",
            "line": 345,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d8ebbd7e-df9e-4278-a730-1e70ded1ea79",
            "line": 241,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "824130f9-246e-4b22-8f7d-5c240f9d3652",
            "line": 51,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ad307869-1042-45c1-879a-5e645634314c",
            "line": 191,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0995007d-73bb-4564-89a8-ef257df5744e",
            "line": 270,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3fecb970-418a-4046-9da2-8ed5b2305468",
            "line": 423,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b41d408f-602b-4068-846f-d810e16f2102",
            "line": 270,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2d171d74-8796-4290-bbec-4c46e896d30e",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/mnt/array_ball.nitf.msf": [
          {
            "id": "8759e934-2090-4c20-afb0-1d467895d971",
            "line": 157,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "06f296fc-396a-4e40-aefd-9095af7424cd",
            "line": 442,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "240b0871-1fcf-4309-8a65-091bf949cbac",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1c5a6f98-0aef-404b-9965-4f85b47db290",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f6c4c6ca-6d30-46a8-beaa-582f0e945098",
            "line": 64,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "baba9cb3-0fc3-44d0-af48-ffc40a8d5621",
            "line": 107,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2bcae4be-cdb4-4b20-88e6-6e78f9e14091",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "732881cf-3154-4c66-878a-25f1da59061d",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f30a0f50-41d3-4d56-a560-31bdeb6f158d",
            "line": 471,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2053cf86-93b6-4f43-880b-35fc10c459a9",
            "line": 499,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "176f3567-0d60-4e45-805e-2e423ad03f36",
            "line": 320,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "42a8d907-383a-40f2-876d-752e8665de73",
            "line": 125,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6d88a69e-3ef5-45b5-b1b6-897a9d5ffdb8",
            "line": 8,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8d31e256-bc10-49fc-aeb9-7548cda8b211",
            "line": 246,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c0a56439-3658-4056-8660-8cc5fe65090b",
            "line": 261,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "53ef8c04-e3a3-478b-90ba-289c78897294",
            "line": 18,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7d1223aa-403e-44b6-8974-331847c9898c",
            "line": 139,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "969f1bad-f103-4611-bf9c-80ebc87717bc",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c95d5327-5402-405e-8992-b7dec5ef0ec9",
            "line": 113,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lost+found/dam_executive_engineer.ktz.rld": [
          {
            "id": "92937063-0a50-4bed-8710-016fd038f7ed",
            "line": 225,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/srv/dollar_pound_pizza.wrl.ptid": [
          {
            "id": "a2e3f422-f0b9-4509-b1b7-2c762c136d59",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21656573-f2d8-4690-8c7c-bbbf0575dce0",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "052636a3-0a2d-40d6-a4eb-8fc877bb6151",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d0c9208d-3f38-4162-aa54-a2b7fc6c0760",
            "line": 69,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9f9292a2-20ec-4e94-83e7-1e68d9edf26b",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a06faa4d-084b-40c1-80a3-55c67bc6ae15",
            "line": 427,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7b8f9f4f-7668-4814-a147-f40d2628e5fa",
            "line": 199,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b9321308-56f5-45c0-85e8-29fc4a3fda5f",
            "line": 46,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b4b24928-49a4-48d2-a9fc-aa59dbcceac1",
            "line": 75,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ca47014b-731f-4b6f-9443-239003610f96",
            "line": 328,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e144a072-8d12-4cda-b450-d14f8f326252",
            "line": 407,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ccc4fb1e-862d-44fa-b7b3-12137a4ecc6d",
            "line": 196,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cfe11248-891f-4e57-8b1a-10a6532a98ab",
            "line": 469,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "220a0444-3327-4201-ba3d-709e2cc6cbff",
            "line": 434,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c7c89dc1-e30f-42a4-8bfe-64db09f82fb2",
            "line": 474,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "09f64b59-b7c3-433c-8b80-a9a8931a90f7",
            "line": 83,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "edb0d669-1f8d-4131-a91e-4fe78d34ff5a",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/mail/mississippi.pqa.ggb": [
          {
            "id": "b0af6fad-309f-4db6-a2b0-4cf6eb573923",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "390ba7ec-0f93-46fc-8fb2-fda7d7198b90",
            "line": 457,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed764477-9353-4ace-8c0d-2d985f089660",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "419258c4-337f-4bd6-a2f0-a54b9fb6d1e1",
            "line": 226,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3b87d62f-190b-47dc-83bc-324ba99e4e53",
            "line": 180,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c8fa689a-ceb1-4218-b334-cc2400c993f6",
            "line": 408,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0de5935-7ed6-44a5-b139-44d719f2165a",
            "line": 347,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e8d47e7e-a338-4829-a5d3-db5cd3d159f9",
            "line": 462,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b78db446-685f-42ee-bf1c-e051dbbb8277",
            "line": 498,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3e9ee259-9994-446e-98ae-853e1caa0d60",
            "line": 137,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/islands_interface.ra.asx": [
          {
            "id": "92a4e1ee-991e-4414-b973-f7f097fbae34",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6da9e128-4815-42c2-baca-a9934569d533",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "65df5069-83fa-47f8-95e4-15491dba4de7",
            "line": 262,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "89ecb85c-cf32-47ab-ad74-2b3c796859d1",
            "line": 139,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7e8a10d4-451d-44d5-8047-9193166a4eb2",
            "line": 235,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e4d103da-b34e-48c3-ac06-3bec5d27f887",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7c3b3396-63da-427c-947c-555433d039b8",
            "line": 397,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "124cfb43-7a8f-4fee-9b18-b0cb2e70bb33",
            "line": 420,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2e2c3903-61ed-421e-9c29-2eb9e265220b",
            "line": 0,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "040abb35-60b8-4ca5-b649-1190db253375",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "97d3dda8-a82f-48b5-a7ae-97a3a66fb255",
            "line": 434,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2e94d902-c43a-451a-aacc-b9dda417b1f7",
            "line": 120,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d386fd8e-3b53-4948-8dd7-9842e48ae7a4",
            "line": 368,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/Network/wisconsin_brand_sudan.stc.pdf": [
          {
            "id": "eebc1c53-9ae6-4ac0-b470-a3c816846709",
            "line": 88,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a250f01c-a7a5-4e36-8dee-d8338dcef9f7",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "103675af-32e9-4bfe-9178-75e9d39a47dc",
            "line": 133,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a82f4eac-de6a-4dbe-b818-0c06df0e432a",
            "line": 434,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3ce682e2-b9fa-460a-8bf7-70ff95e42ce6",
            "line": 355,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b328ae71-89cc-49cd-9947-f1c82fb4bce0",
            "line": 62,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d2e7bee0-d0e9-4027-9fbd-570027cbb9ac",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1ae7e881-f524-424e-9f23-9cb9529bb37f",
            "line": 232,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f9b8262c-00ef-4199-a2f5-5b5071c45c32",
            "line": 326,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "78eed223-fc10-4e1e-9c42-95d2f7d01507",
            "line": 151,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e74d1f15-f6e3-40ff-ba4c-72925318fe7d",
            "line": 366,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dd516fb2-59ff-4791-9be0-51e35a856304",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "594f37e9-9d7a-40d6-80fc-d0c15a8e85ec",
            "line": 423,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ]
      },
      "startTime": "2021-07-05T01:16:48.616Z",
      "totalRecommendations": 231
    },
    {
      "id": "0d882071-d456-406b-b230-f965ebba8fad",
      "name": "port-navigate (9b4bbf5)",
      "state": "2",
      "finishedTime": "2021-07-06T08:25:40.228Z",
      "recommendations": {
        "/opt/lib/dalasi_global.yml.xif": [
          {
            "id": "67514ad3-320d-4d7f-ba9e-673d801cd47a",
            "line": 307,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "df385627-61ab-4b8a-9799-e605b032bf12",
            "line": 355,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fe29af30-a316-4d23-9100-b7e21f8aa807",
            "line": 480,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f728f072-4b6b-40e4-8ff6-aade64897e07",
            "line": 299,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4930402e-de71-46bc-af9b-2a96e184c388",
            "line": 430,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "956a585a-1ff3-4d7d-90dc-888ce781ce25",
            "line": 82,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0d4e4657-5031-468b-a298-ee341f68d60e",
            "line": 480,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0a38f6cb-07b5-4917-8873-2494f2583b32",
            "line": 382,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "37952a4a-9218-4a46-9872-3e7211c9627c",
            "line": 341,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "906f75b6-915b-4b0b-b965-a4950dd12cad",
            "line": 249,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "80e1f441-5fd2-4df4-8922-0fe4ca9de575",
            "line": 455,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b3e2f07c-927c-4e48-92c0-1b2efc785f90",
            "line": 177,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/var/com_matrix.kon.mpga": [
          {
            "id": "e3e421cb-3966-45eb-a15f-ec0a92ef9c6e",
            "line": 314,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "63afbafd-2ffc-4842-b3dd-d890101d4686",
            "line": 402,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "508ea6b6-fb03-456d-9478-9b85c73fcb21",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f653b0ff-364a-4b49-9471-0cefbff3d69f",
            "line": 319,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "20437e78-8909-4ffd-b05d-69957b260885",
            "line": 189,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e740bc99-459d-4ca2-b32b-87b1aa61fc9c",
            "line": 193,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "34340c2b-d23d-4e22-a931-105bffd808cd",
            "line": 345,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "703f1fcc-e518-4c10-9ca6-066eced51c7f",
            "line": 16,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cae7a6bd-372c-4a8f-bffb-ef490e54621d",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "885535d8-bf40-4aa4-8190-0957afd9f00f",
            "line": 82,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc67a569-0d1d-4a36-b20b-3fa8d09a4a16",
            "line": 455,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8fcd7a88-01bd-489b-9d56-fd51b81e5feb",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1e1f8b83-519b-4987-bd46-b96a7c4bdde0",
            "line": 200,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "244d0668-397e-4e4a-ab5a-2f37c4fbba95",
            "line": 193,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/lost+found/methodologies_shoes.dump.xpi": [
          {
            "id": "6feb97e7-5cae-4786-b7cc-86363241ce17",
            "line": 75,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6561e256-450f-40bd-b2d4-dc9a0decd003",
            "line": 259,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "18bab93e-465d-440b-a643-f36c490241ef",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ab239ca9-b039-4a2b-b217-abccef0e5017",
            "line": 226,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b4b81a4a-d20d-4b98-b2a8-75eb7b068c8c",
            "line": 72,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5be0cd91-e6ed-4a24-8be5-b740ac51bedc",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6fc547e3-bb06-4f29-8707-cebd26ec19ac",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fad7c8a4-6791-4f39-a981-a5db312f62b5",
            "line": 363,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2c363d04-e049-46d9-bd82-ea49031ac885",
            "line": 117,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a01be8f4-3a57-4760-8ef2-28662b45b87d",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aaa905c8-228e-460b-9f2b-cb6a6cbaee0e",
            "line": 85,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/sbin/rustic.ptid.mmf": [
          {
            "id": "5a1df1e1-53ee-43d7-ac64-3a45cdf04389",
            "line": 97,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b949bf6-a0ae-4482-8bf2-1637a85e680b",
            "line": 210,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5c09384d-5a9c-4fcd-869e-5cc4e255b1a1",
            "line": 388,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/sbin/shilling_small.mid.sdd": [
          {
            "id": "1d3a6099-9678-4a38-aa94-1b00f110d635",
            "line": 327,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3f58bf09-1dec-4036-987b-d7f3d8d3fe8a",
            "line": 487,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e3cb67db-725b-4e25-b186-823c9045daa7",
            "line": 138,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "55daf3f0-e069-4ee2-886a-90856d066cff",
            "line": 35,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2f14e82f-e951-4d44-a20f-760ca03b9346",
            "line": 61,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dc1bb3bd-12db-4dc4-847d-b3d7205dbb69",
            "line": 56,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8e78314f-ce3e-4980-aa0e-a6ae5b7845a4",
            "line": 12,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f2b906bc-30ca-4257-a67d-e95ee459d9b1",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2ca111c2-ca1a-4562-8567-948a4b64b9ac",
            "line": 166,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bb8f5b7a-3c3d-4eb5-a954-c8704851e4d1",
            "line": 459,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cc9d72e6-6153-455c-bb7d-44a49feb88cf",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "18cab21e-df72-4fee-9ff6-4a4a8ceb74c7",
            "line": 306,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f7f7f8a4-e3ac-48d2-b0ab-f7e7d4d6958e",
            "line": 112,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8169f4bb-68a8-4273-8ef1-2b49faa9286b",
            "line": 405,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "27953c80-0bb8-4205-bcd7-a5edf8087b71",
            "line": 407,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "385ebf9d-041c-4eac-8982-c0afc275e9bd",
            "line": 325,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "28954d2f-3dc8-4639-bade-3d43f9ac9258",
            "line": 111,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8880cd60-2a00-47cd-b6f0-c96bffe696ff",
            "line": 98,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/mail/response_unbranded.dot.hdf": [
          {
            "id": "0764555b-c0a4-4bb1-83fa-65c8c94c46b7",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0e5811d4-6588-44be-8769-65f91f45f255",
            "line": 245,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cf904550-443d-4041-8d6b-e6701e5a35c9",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "06433042-36ad-48b4-af8c-05d9ca9f5c2a",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/var/car_account.sbml.oti": [
          {
            "id": "8d60a34c-b48e-4ee8-b647-6ebe9252943d",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "18140b21-c2a8-4ae9-8cfd-9fe5dca5c5b1",
            "line": 41,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3f19cfd5-e219-4ac0-97d6-166a912a60c9",
            "line": 184,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "60a25468-3adc-497f-9343-98de501579fc",
            "line": 100,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "33c1d829-c9c9-496c-a5d8-01675ef68b0b",
            "line": 356,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6505705f-6aa9-408a-b7ad-24f10667b5a1",
            "line": 495,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "533ccbea-8861-4c0a-9a77-375bb0e8d571",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e3d5e972-6010-4e30-b586-c63ed202ee32",
            "line": 25,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eccd32c9-3374-4df6-a251-c20f948f789e",
            "line": 429,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ddaa07ca-250f-4197-aa0a-bf2151fe3c16",
            "line": 497,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1c5ce9c2-cf74-4640-847d-190a9cccf0f3",
            "line": 104,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "86e8eaf4-954f-48db-9d6c-3836f18dcaac",
            "line": 8,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/libdata/technician.otc.xls": [
          {
            "id": "9161fc45-40fe-4d5d-a558-5d10f526c036",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5e5fb52d-d486-4f06-907f-768f2b0e63f9",
            "line": 447,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bbd82121-fdb1-4af3-8663-570dc58d04be",
            "line": 66,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9c07978a-06c1-4e7d-bbaf-f823bd5d6351",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9804c111-019e-4655-8d35-c85b8f1f47d5",
            "line": 287,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "82198a38-5396-4ef3-acb6-959008712bf9",
            "line": 200,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2e7bcc5a-515b-46b7-9cc3-7c85314ad41e",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "83eb7b17-9e12-40d5-80b4-9f3754fdd062",
            "line": 304,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e8d0b431-f0cd-4645-bf36-a919754aacff",
            "line": 406,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8d1bd5e2-8b67-4630-9832-a9740365dc20",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7c261236-78ff-40ec-ab28-6dcd9a294e91",
            "line": 168,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "604cd99f-2d7b-442b-bc35-aac5d87b8245",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ddc2583f-4416-45d2-a5e0-17048a961c5e",
            "line": 321,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f77115e-6a07-4bf1-8a30-c96e41f7c1ed",
            "line": 63,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f9030ec3-8ab5-4b1a-8002-b8b77c5df81e",
            "line": 363,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4da475aa-8b1d-46ab-ba0e-ea166394a281",
            "line": 378,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1135da8f-885c-43d8-b1b6-c26593937423",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/sbin/quantify_fantastic_salad.zir.davmount": [
          {
            "id": "98d89f52-c677-4b44-b600-cc1d946567b3",
            "line": 136,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2e241afd-7aca-4699-8deb-c93e12fffd1d",
            "line": 16,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "70131ef5-5077-4765-95d7-580bd3994d5b",
            "line": 301,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "11adfddd-a2f1-4637-a1d6-0f4e3ac3542d",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "70182fba-39ac-45c0-8d67-bc9d4a04a390",
            "line": 355,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "508a1da0-8c30-4d12-9255-968de414bb36",
            "line": 383,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "513df0f4-2ed6-487e-ad17-74854814169a",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "018e1c2d-e28f-438d-9083-f7ac8365cb8d",
            "line": 68,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8b6f5cff-6128-4add-a59d-8ebabdc61621",
            "line": 369,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bb7abcfe-1186-42f7-9d23-886edb9fdadb",
            "line": 164,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8c8f467a-9cdb-42c2-8367-993bcbd3fd92",
            "line": 200,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4fd962b2-c74c-4fb6-9e8a-92d7b387a71a",
            "line": 34,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f89e8dc3-0d9d-4363-898b-6b4d757e9db6",
            "line": 484,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "be262da5-fe79-457b-97a9-fac6c4a165e5",
            "line": 8,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/bi_directional_tan_synthesize.ott.sxg": [
          {
            "id": "0957ab20-dcea-4676-8487-ff60aac33eb0",
            "line": 73,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2d717e1e-c4cb-4af2-9126-422f4c535362",
            "line": 239,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "56c92815-d5cd-4bd0-97fc-fb22735c0c47",
            "line": 451,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "450c424d-9da2-440b-8852-6b079dcabb80",
            "line": 344,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/src/auto_games.cu.ogv": [
          {
            "id": "a1bd6a03-8ccb-422a-bd22-98b0f41200d9",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5ba06ebf-5171-4d9d-b89e-e45539c71794",
            "line": 226,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f9506748-e3c9-4ae3-8081-87c4f4147c81",
            "line": 450,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d7f292e5-a3fe-4c99-9a46-ea6bbd299e1f",
            "line": 491,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "267e6e2e-f52c-49e5-a3f5-97c2a2777668",
            "line": 10,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d9b93a84-0106-4dbe-a708-0d713b0133f1",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Users/unbranded.java.sea": [
          {
            "id": "cb5f1c68-60a1-4fb2-9d85-c2c8a3ca263d",
            "line": 48,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c902f094-ea99-436b-bada-2b8700fa4898",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "33495c62-7269-4235-9d85-4b8adaa6a239",
            "line": 61,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2093fc82-02f8-4ae7-a814-0e231368a4e4",
            "line": 377,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "241e11d6-7116-41f0-be40-220182f9be09",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2040ddf3-1f92-4c0f-a3d8-5d315b2a7738",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "51df4dad-00d6-45d8-a8c4-b70db80bb3d3",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5d9cd464-bc75-49ac-93fa-b8514689250c",
            "line": 325,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1c2a658a-932e-4eb4-88cc-e8e47a3e607a",
            "line": 184,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "01da4a35-137a-4978-82a2-0f345c321796",
            "line": 191,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4442b469-a59e-4ab5-a0d6-62e32ce33c90",
            "line": 187,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9fbc842a-245e-4e6d-8aa3-16e490862c18",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6b38eac2-54ad-4afc-b04c-e844705e5dfa",
            "line": 417,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a89a6bc2-6818-4d25-95de-b286a443bfd0",
            "line": 76,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e6e4c3a5-8a10-41c8-ab28-34fcfe499150",
            "line": 118,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "28dc9788-1f20-4ce7-8828-5fddfe90bb5a",
            "line": 56,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "db87c475-a28f-407f-bf05-2e9d04da347b",
            "line": 421,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c3deb4ff-4a85-4c2d-928f-0664a04b3aa2",
            "line": 214,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/defaults/collaborative_back.p7s.hpid": [
          {
            "id": "9bbea292-7a8c-47b6-baf5-711e0439d981",
            "line": 274,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ed4c6144-4873-41e4-b894-c70449a3d77b",
            "line": 416,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "32d5ad39-20a0-4898-9479-f50611d858b0",
            "line": 104,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "76a9bcb0-7aaf-4c28-a7a6-afc91bf51c29",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3ec5d13a-8cb3-4dc3-97be-bd0a6ca920b7",
            "line": 14,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "30c5b065-622b-44de-afac-7e300348c7cd",
            "line": 27,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef37d23a-aa70-4592-bf7f-3bf8af58832c",
            "line": 451,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bc68ae25-da4c-4338-a7fa-6acda1821e2a",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8e358828-5cff-44be-9a4e-5a3cc39db1e3",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/opt/share/wooden.ppm.box": [
          {
            "id": "069ca0fa-a0c1-4704-9bcf-66c679fe8e2a",
            "line": 45,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2b6cff71-4779-4ff3-acb9-6bde816bdf5a",
            "line": 154,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dc631c3b-996f-48cf-93ae-cc4c56203ae3",
            "line": 494,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "159611fc-d358-46ab-af34-08706bd88c13",
            "line": 357,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6ed13128-aec3-4ad4-a7de-a8fa1cd92ab9",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "622bb767-3e18-45ce-aca8-99786fcd94b9",
            "line": 484,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "886d81c9-00da-41f5-b3ee-a18513bef50a",
            "line": 229,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a50702c3-2892-4b9c-a625-82a7c63f05e6",
            "line": 456,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1cbbe6c2-9de9-4f99-a9b6-db7640cb3935",
            "line": 141,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f6b083a0-441f-4be5-bf8c-0f15ecb59f36",
            "line": 55,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c2f1b87-d924-446b-812c-00a91a7511bc",
            "line": 248,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "10f5d1de-ed54-4f7e-9a58-be0211c7c89a",
            "line": 463,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cdd17bd2-a9ab-422b-a8b1-cb29b5d2178a",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "de286dd4-2051-4b8b-a558-d48737c80654",
            "line": 93,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5e0a3739-6210-4150-a68a-49dceaddb015",
            "line": 125,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef4ba424-fcba-44b2-843b-42d44f416349",
            "line": 462,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a7f44af6-625a-4013-8569-d7b74ab1fe66",
            "line": 484,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/private/var/account_project_solution.gqf.ez3": [
          {
            "id": "fe3a5247-2a32-4164-9770-d066b177f64e",
            "line": 224,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c47a69b4-48ba-4057-bd14-03403a4b3f20",
            "line": 49,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "490469f2-4934-4285-b422-c73c3025be36",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9b98a6e2-0cb6-4892-914d-c9f4dddc28e2",
            "line": 354,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/moratorium.vcx.csh": [
          {
            "id": "bc61f1cf-8330-4f85-bcb1-140e411d34c3",
            "line": 375,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a97050b0-57a2-4e09-8c09-4908a4b563b4",
            "line": 262,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "575e9b0d-7173-4069-b524-b634ac8ccc5b",
            "line": 45,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c877f70a-6fe1-488f-a039-2a482c8b5d2b",
            "line": 252,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "87b638d3-6064-4250-8346-feed94044853",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9b1a01ab-2a95-4e04-a349-a8832782d542",
            "line": 52,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7064b71c-f3d0-419b-b966-4a2a95bb2db7",
            "line": 415,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "538b5efd-3fa9-41e8-bfc5-6f72170c8b79",
            "line": 257,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2ea2301e-088e-4dd2-a3e7-8aa0eed94e43",
            "line": 451,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "90d00eb6-0f27-45c2-986a-f31613354b14",
            "line": 443,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a756d611-f217-4ba5-be4b-495bb67b3ad8",
            "line": 417,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0f2966b9-e055-4a5d-a4b5-08f670908a2c",
            "line": 364,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d2bf496c-67a0-4551-a457-d6988e4b890b",
            "line": 357,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c6eedc05-c784-4792-9e1a-7f4307bf1c63",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8914d1b3-cf72-444a-9ac4-44977ab580db",
            "line": 174,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ccb6e431-01aa-4b92-9a0c-d02bda1946d3",
            "line": 430,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1f246d7e-be7b-4a0e-a206-4d319c7618a7",
            "line": 55,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/boot/defaults/mobility_haptic.ulx.gnumeric": [
          {
            "id": "50bd4fad-55a9-4273-8af0-13b0caaa9c09",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a5525021-481b-4263-a334-2d184a7c6baf",
            "line": 161,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b6d2f49-bd7b-4d0f-bd9e-174487d9acc5",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "659ab222-67f9-42cd-82b4-5c2fd354b26d",
            "line": 462,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a3cfd046-35c6-4d98-bc25-1cf342a7da27",
            "line": 388,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/libdata/concept_pass.gdoc.msp": [
          {
            "id": "c9b63f87-b09c-4b75-9138-9165fb51a97d",
            "line": 341,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bc79abd7-4c56-47e4-b220-62fa8b344a65",
            "line": 499,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aa61ec99-4142-4fae-8e39-7fe26d738bda",
            "line": 326,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2be9adbd-bd3d-43f1-86ce-c09449569cbd",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0ca9fcc3-08d3-497f-8abf-a73f66cc5075",
            "line": 482,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5d3a1e62-e4f2-4178-8ec5-d1b0674e3c20",
            "line": 454,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fc6f474c-c61d-45e7-a650-3d944cca2e1f",
            "line": 250,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "51a106ca-a8cd-4999-bf22-5782f6de7632",
            "line": 226,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "73a56cff-5f86-4806-8375-5bade9f6dd94",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "20e84dd1-9a3b-4cd9-9ca0-8805f056ecfc",
            "line": 127,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5aa06327-36f4-4d2b-90cf-8cea8220e101",
            "line": 91,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8b744f1b-7ad6-406c-a580-f85b1cb74d36",
            "line": 374,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4ca39ae5-410e-4f28-8d11-0130e4cac425",
            "line": 172,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-05T07:55:39.492Z",
      "totalRecommendations": 198
    },
    {
      "id": "c272f972-3e77-4b78-a97a-8b60c9da0464",
      "name": "panel-synthesize (45219bf)",
      "state": "2",
      "finishedTime": "2021-07-06T02:56:51.928Z",
      "recommendations": {
        "/var/log/black_target_systems.cmp.ps": [
          {
            "id": "4e5b54f8-0f6d-4ed1-84b2-a741ccd8b3b5",
            "line": 41,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/tmp/coordinator_ergonomic.xpw.csml": [
          {
            "id": "54790341-2b30-4079-be33-5c44b0a8b98f",
            "line": 51,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "12bab355-b92b-4d68-87a2-b437c2a4c316",
            "line": 274,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f900c46b-75b3-465e-b080-bbea51de4e8b",
            "line": 105,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2b7fe979-8f87-4014-820d-1995c1fcc7f9",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "184a96a5-6bfa-4c36-a1b2-f3e5efe5cb52",
            "line": 462,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e3aec91b-58f3-4db8-b398-3883ee9caeb6",
            "line": 252,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2db996dd-a115-4941-a8cb-89f2aa8fcbc5",
            "line": 187,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2aaf67df-d926-4db0-a5e5-f0eba8a046d5",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "91001c9a-7ff0-4983-814e-3a2f049990ef",
            "line": 75,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5e648109-bb78-426f-838c-6d9ec2c72c8f",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c5d6d6d9-5f8a-48fa-ba86-bbf188eff06a",
            "line": 416,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e5c96d1d-d78d-4134-8272-5845bde8d765",
            "line": 353,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/defaults/analyst_needs_based.qps.lbd": [
          {
            "id": "9a4c5861-5938-439d-8a1f-4cd9ac89eb39",
            "line": 316,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/src/granite_convergence_director.cb7.cww": [
          {
            "id": "eda73b63-7925-4609-992b-debf65dd33f8",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e7b7eaa2-7e44-455b-b1d5-0bba94e26bcc",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a92a2369-07ae-410f-b372-d5f24834b5d8",
            "line": 335,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e6712fdc-2bb6-4adb-ac7c-00363adeb257",
            "line": 172,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "792ac3c1-3dbe-42a8-a2e2-e8cad6d264ab",
            "line": 223,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "96617f74-8669-463b-bc05-2a2a787ec795",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7dc3c031-476e-4dc8-bb1b-a9ac7558ee46",
            "line": 100,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/bin/wireless.msf.p7s": [
          {
            "id": "424a816d-3a1b-4a90-a65c-9967ce8bb061",
            "line": 138,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bfb14cca-9010-431f-b51f-7396aca6cb7b",
            "line": 477,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fcce095d-c9e1-46ca-a0bd-53c9a9ee2977",
            "line": 46,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4134097a-ade1-40fa-a7bc-3ea9326892ad",
            "line": 137,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a66634bd-689e-4273-b364-0514878e0d72",
            "line": 443,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "aec461d1-4a8d-4ec8-8f9c-b2c09705c2a1",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "90439414-cdfb-40f9-aa56-b080cede839a",
            "line": 468,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "109bd613-0377-4a63-bb80-e917f3f9d3da",
            "line": 474,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cb5a0842-752c-47f9-88ea-db39f64a5bc3",
            "line": 237,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4980fd39-a1a4-42ab-a0a2-644efdf14a30",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c158ee12-7f7e-402f-be91-13a394630ec8",
            "line": 59,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1e63d357-34b6-4807-815a-3746b13a5d92",
            "line": 484,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "93ea6443-c86b-45e6-8b4e-37c1e5c81f1f",
            "line": 83,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f37afee1-0331-4388-b3bc-6b5d1ccc22f8",
            "line": 410,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3740869d-d548-474b-8193-b8e34f2afab3",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d093f30d-fd90-4a55-b7a1-399b99bdd995",
            "line": 439,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6abcc827-e855-4e14-ac58-e03fee8236b8",
            "line": 46,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dd8fefb8-4bea-44e6-8596-8ffe0ecadf1a",
            "line": 42,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/selinux/asymmetric_tan.wpd.dmg": [
          {
            "id": "ad116349-b471-4c3b-a427-c177297d52ff",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "895e916d-7fbf-4679-8cfd-ea0b72ec35d3",
            "line": 237,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "562d7bf8-5d5c-4fd8-8bbd-e4c8e2401444",
            "line": 241,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "329cd144-7cc3-41a0-a71f-32b1443b2bfb",
            "line": 279,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4e7369ed-bc31-4140-bc9f-3a3fd0e2c025",
            "line": 22,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5c13c818-822a-4302-8811-1143e09be58f",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cc80640e-c579-4b8e-b4a4-6ca3411a128a",
            "line": 335,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0d66ffc4-3815-4464-9447-1f2ffd9cab6c",
            "line": 235,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/bin/firewall_maine.3g2.uvh": [
          {
            "id": "fecd809c-482e-4e48-bf0b-f3d3a188f532",
            "line": 488,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "72a41300-5182-4f03-8190-f0d1af15a965",
            "line": 448,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1f73fc5b-adc2-4a97-8763-091ba393bbac",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8a2ed2d2-474d-4989-b377-aef34d50577c",
            "line": 445,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8906dd11-c52a-403e-9e16-04a284868d77",
            "line": 219,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b4c9842b-e5ce-457a-938c-27cebf280659",
            "line": 451,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "873583a9-c269-45b7-904c-4375df0491be",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a07e778f-9e72-4f4c-90c1-8bca8e276ca3",
            "line": 129,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed0e40d5-1fa9-4b9b-be85-4d3f2e3854fe",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c8f04c7a-8fe8-4cdf-9f3e-2e399a3e25b7",
            "line": 47,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "babaeca2-c64d-442c-9a30-6608e642f5b2",
            "line": 111,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fee582ea-9051-4e28-90e8-fe71ca9bcb29",
            "line": 408,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1fd9addc-48db-4ac6-b4bf-e05f500b067c",
            "line": 314,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fe135360-c666-432a-96db-b3ab02035b46",
            "line": 119,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "56cb2e47-5680-4484-926e-1649214f46d3",
            "line": 95,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4cfa3a8f-9029-42d5-a8a2-9ad60b028014",
            "line": 275,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5fe7e3cb-2807-447b-95a5-9732afa4d4f0",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/norway.vsd.xsd": [
          {
            "id": "3d2bbced-bd7b-4443-8226-fc6accebc69f",
            "line": 181,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "687ccb28-10f1-428d-94c2-d6c13fec5f23",
            "line": 480,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "adae09af-01f1-483e-8a98-24871bc89e5e",
            "line": 65,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "56c14a0d-ef8d-4c3a-b85c-3ba4f148bc1f",
            "line": 116,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0944f22-2fb6-4590-bdda-92c049c378cc",
            "line": 240,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6ba40928-502b-4f28-9b22-6a2c301a65f6",
            "line": 46,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ce814f64-db91-4b78-b31d-32a90ccb9219",
            "line": 93,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c24a3d2e-26cc-4e8f-956c-e0429cbf558e",
            "line": 169,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e1a3d863-5db2-4e1c-b9d5-3e2e5f672ce1",
            "line": 180,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "75cc17f4-792f-47ed-ad94-25ce462b3b5d",
            "line": 409,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4ff069d1-f262-4bb2-bb63-12b3e674994a",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "de325566-04d5-4bc1-9d72-c334f0ed2ca0",
            "line": 137,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1d4e7995-1248-4706-b23e-f8b74542afd0",
            "line": 488,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f857f5ff-4d65-44d2-97e6-5243dcc75f95",
            "line": 308,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9ba13600-d9f4-4e20-9502-ec71d2729209",
            "line": 23,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e40fff42-46dc-4682-aa82-acbd76a95f09",
            "line": 132,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/sbin/css_isle.c11amz.z2": [
          {
            "id": "420e6c26-0ad8-4d85-b75a-59e920741b50",
            "line": 326,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8e17a531-60c3-4f18-ae85-494d2f47fae3",
            "line": 182,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "cc5e4f6e-7085-454f-b1f7-b68cc4d5b1c4",
            "line": 255,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "842f8931-10d9-4d18-8315-ab50188479ed",
            "line": 351,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1dd3a510-6b10-4b0b-b7b4-a95f278d71d7",
            "line": 43,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f6ab4c50-0130-40e9-90c0-a5bd0789da94",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d31ed285-5398-4ab8-a80a-9bbc41ac33df",
            "line": 237,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "15a7190b-1f58-4fc3-99e8-9bd7d9e34ab1",
            "line": 367,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b2543bce-3e83-4cdd-b1ce-9230aee53330",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "72d2a100-4c58-4c11-9c48-3f6afde376b6",
            "line": 475,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3d69ccfb-4567-48b6-aaf1-5bf3ba3bf02f",
            "line": 183,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/user/dir/workforce_account.h261.vsf": [
          {
            "id": "e6c3ec00-bba0-4266-ac5d-3cb37914f045",
            "line": 290,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e922cb8b-8fbe-42ab-b7cf-4c8458f830d2",
            "line": 123,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3778fdf1-5a47-4303-872d-ef1723eef9b3",
            "line": 370,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/concrete_car.bdf.pgp": [
          {
            "id": "d55be70c-550a-454b-ba1c-0f04e610c3d1",
            "line": 477,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0b238d95-32ba-4abe-9abc-9def2041e92a",
            "line": 168,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0bebd99e-b91e-447f-b0a6-f1a58ae0a90d",
            "line": 133,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9e3b99d2-7138-459d-b753-96802364ef63",
            "line": 156,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a7ce1554-a4eb-42f2-a029-6205b02d8d98",
            "line": 319,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e1b0b692-a7be-45b5-ae28-ee15bea54b9d",
            "line": 80,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "efcedc8d-ed51-492d-8293-f56eb0b0ca7b",
            "line": 34,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8140fa12-17e0-451f-a460-d43bb0b442ff",
            "line": 138,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "723015e1-78fd-4d30-a19d-b9e16e3b7bc2",
            "line": 181,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0c9073d4-9c49-4b50-bff3-ec439709af86",
            "line": 102,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "99cb9c09-62a1-40ca-b5b9-6d0098623034",
            "line": 82,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/etc/namedb/table_international.tsd.mie": [
          {
            "id": "28562a13-54b4-4fcb-bf36-b91e7c65ce7b",
            "line": 111,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e0602b73-e106-477e-958c-fde1bd59a688",
            "line": 34,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b84064b0-fb05-4370-b867-ff426b370653",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "93846b36-9161-4e2a-a2b2-83d9a335778b",
            "line": 266,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "10333824-657a-4d61-bd3f-dcf7aa6cbf07",
            "line": 114,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3abfe8ce-3f3e-43de-b7c2-640ba5a30ee6",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "221ace4d-642f-478d-b021-d5c650012032",
            "line": 159,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7748c2b0-eae9-4f74-a9ad-de8d91ad3229",
            "line": 261,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "182ccaf2-42c6-4984-986a-91d62b32f647",
            "line": 183,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/sbin/loan_incredible.deploy.ics": [
          {
            "id": "ac6eab4e-bd49-45b1-98ae-32a62a2101d4",
            "line": 229,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "874862cf-6d95-42b9-a9ed-296a2cddf073",
            "line": 350,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a474c8a3-1485-4127-ae23-1e12638b5ec1",
            "line": 415,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fee582db-3f71-4531-aa07-b5c4cb167c45",
            "line": 430,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f4896c6a-d6cd-41b5-845e-7ea060752103",
            "line": 288,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "07f6fb0e-9cb7-4ad8-adbd-8ec88c68105b",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a864af46-6915-4fe7-838e-c4d655a08cbc",
            "line": 59,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4d62a689-fa77-4537-9dff-6c69a8be6566",
            "line": 409,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "45cd6e86-ac26-4672-ab15-d21b2d47dc72",
            "line": 437,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "24527836-4ab9-4031-97b7-83a7de708e51",
            "line": 396,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "07db5953-b760-4d0e-b26b-694760f72d91",
            "line": 32,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8fd1a1cb-e73f-4327-be61-9bfa726b0d19",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aed2abd8-b999-47bb-9412-0faa68b52a0a",
            "line": 174,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0f42b4af-8f67-4e24-be5e-c97e44db631c",
            "line": 445,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1513bc5d-d40c-41f1-98c1-b444dc622e0a",
            "line": 115,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "51a81071-116e-4efa-b83b-5dddcd4901ac",
            "line": 410,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "56c18125-b7c0-4527-be87-303379db1434",
            "line": 416,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b8ed3a72-cfea-4e5b-9c53-5d22eed7879e",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-05T01:41:03.144Z",
      "totalRecommendations": 132
    },
    {
      "id": "2f563013-3e67-48bd-b21d-cd603603d8ce",
      "name": "feed-calculate (41d8f97)",
      "state": "2",
      "finishedTime": "2021-07-05T14:36:07.612Z",
      "recommendations": {
        "/etc/blue_jamaican_frozen.m14.me": [
          {
            "id": "f1980c57-be0a-44b8-b924-9a8c21814e4d",
            "line": 249,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7bd59425-0516-42ac-9af3-a7c2ee32a425",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "14b464fc-52fd-45e4-9dd4-d3fc4ddaffb5",
            "line": 75,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cfd89f70-57de-4b3a-82c6-1e5460a6de8c",
            "line": 351,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "01ddd5f7-169c-4f56-bd1b-7e76f982e729",
            "line": 460,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1e14056c-1077-4cae-b23a-dbff8a7ea7aa",
            "line": 44,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "146a40ae-5e9b-4056-bb51-66a9ffa70cad",
            "line": 400,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5501f23f-1f23-47e9-83e2-4e8523eccd8e",
            "line": 226,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1bfd8444-b51e-424f-aa53-2ab389a99cee",
            "line": 77,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7450bcf9-c319-46b8-b4c6-555b682de831",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "18936366-e467-44ee-a668-135582a40395",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "36338603-26c4-4b4e-a268-f1039dbe81f9",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "00a193f1-07f5-4fb7-bf49-e782ecad79a4",
            "line": 98,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fb47dc5a-3ccd-4bdc-be0b-6036f856aa3d",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/towels_frozen_grocery.smil.cdxml": [
          {
            "id": "b4e5a995-55d2-4941-904c-77744752116c",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0dd21ac3-bb65-4581-a3f3-9950ae9f87d8",
            "line": 355,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "10956e07-189a-4ff0-b27a-b56bbc7741b1",
            "line": 166,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8ae7a611-a393-468e-afa6-236404a22d84",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dd52918e-6238-4f9a-adbd-e6d57ae4ea07",
            "line": 435,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eb67152e-19eb-4bc4-9845-992f3d5a2d8d",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ae3e5c00-2426-4169-be6d-bc50f1ea87ac",
            "line": 118,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cd7e85bf-5a5e-41e5-9bfd-a0349ccc2ae5",
            "line": 423,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "88df6aa8-96f6-4b61-b117-b944a5f8a1a9",
            "line": 458,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c9f63d28-8ba2-42fb-8402-ff22a9448203",
            "line": 410,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "15380d86-6207-4188-be8a-0881b7eb488d",
            "line": 424,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ade06b1d-e2c8-4843-a0ef-3bbfb23651d5",
            "line": 468,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "421b2f11-5fe3-4870-82cc-77beb9b9f642",
            "line": 384,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cec6af60-91d5-4881-82b5-7bc8f8ae118d",
            "line": 18,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/var/yp/grid_enabled_handcrafted_deposit.sxg.pcf": [
          {
            "id": "c19ddbc7-b233-4296-ba88-630ea4b00df3",
            "line": 402,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9f168c75-7d8e-43ee-85bf-e08c9f0bed28",
            "line": 386,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7f4306f9-8cdc-4281-bc89-d5c8a33eb290",
            "line": 112,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "202de75f-d608-45aa-a095-63eb36d5424c",
            "line": 348,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fe36bc92-bf1e-405e-8b02-92da840f446e",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "529f23ac-2487-48e2-a89e-0b0f77696a1d",
            "line": 395,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "91a43340-d752-4f3b-9dca-63c4de7340a9",
            "line": 243,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7e6d46c9-4ace-4cde-9744-6296f655262f",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "64594fc7-9562-4467-bedd-2527af30c5d6",
            "line": 477,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f3dfaa96-59f9-4a9d-8eb4-93533aeecd53",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d2494ba4-8d57-4ef4-9e15-63cb547bd1e4",
            "line": 420,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5fb9516b-1b7e-45aa-9518-e3f6c52f191a",
            "line": 375,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c2930e2d-5a25-4028-ab12-c8457f6a0fc9",
            "line": 114,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2d610f1d-1cf0-4e9e-8c61-5fa4bf918325",
            "line": 119,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "81a01278-bbf5-4a25-80a7-21ba2d9968bc",
            "line": 389,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/selinux/convergence_table_wooden.list.aw": [
          {
            "id": "56936232-8fbd-42e8-9377-3a2784ef4039",
            "line": 481,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9c4a0fa5-19ac-4e0f-98e3-bdb5f8b62a37",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eafcf8ca-9ef9-4af3-bf36-e508d13e6ee3",
            "line": 492,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cc815665-a4b8-4555-971a-67de5bb05974",
            "line": 134,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "de318f7e-334f-4fea-882b-f52452c10de5",
            "line": 316,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "20917601-cd31-47f7-97ab-78077775ac47",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cda3c488-d4f8-4abc-a289-d6921630306e",
            "line": 191,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b07895cd-4d42-454f-90f4-dfbd14af5fb3",
            "line": 161,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b6d3cde8-ff56-4c55-9a49-8504923058b5",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "59fdb38d-a39b-416a-9b52-9a7f780d9d24",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "baf0a1c9-17e1-41e5-9265-de60709e719d",
            "line": 395,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c6920a0a-234e-4aa3-b6c2-7f66225dcfcc",
            "line": 228,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9f9bcaea-5d5a-4fe4-9f92-c397072b34dd",
            "line": 200,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dffa5476-2ed6-459c-9df4-1888ae46d6a6",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/chad_panel_down_sized.c11amc.lrm": [
          {
            "id": "0c3b1f7a-f479-4e19-b280-86eee2c73c12",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fe4987a3-b304-4284-801a-7b9592a24236",
            "line": 153,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "155b74c4-44f0-4ef7-b2f6-a7f6d654e987",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9937aea7-e656-4d22-913c-06ce707df5c6",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d5e92bf0-1ec7-4d7a-927a-fa816d1d080c",
            "line": 475,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "50b434f6-4460-4d99-836c-01e5998a4432",
            "line": 256,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "697fdf5f-e075-4b8d-9231-22719767420b",
            "line": 47,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "39391381-2923-496c-ae80-df5fdabee059",
            "line": 217,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "deada72a-29b1-4c77-9afb-ae1b37c8cdad",
            "line": 443,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e5be6377-c5e3-4790-a94e-dd8696a6c177",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2f97088e-ab89-4bed-922d-333d0796cdc4",
            "line": 323,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "00c73f9b-4635-48cf-a41c-63d30a6e265e",
            "line": 425,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/private/var/transparent_account.mif.hvd": [
          {
            "id": "fedd0af7-f4f4-4eca-bc19-ee90e475ec4d",
            "line": 386,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9059f519-3458-43e1-bc92-d7ffe0d30baa",
            "line": 197,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d4878514-e9d8-4aea-b04e-c070c35acc41",
            "line": 151,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fe0f389f-98d0-408b-8100-c79be46fce98",
            "line": 86,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/opt/share/alarm_security.lostxml.3dml": [
          {
            "id": "b8418efc-f124-40c5-85fa-f71b3d0154e3",
            "line": 165,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c1f57f4-5a7f-4f12-9a63-420d7868edc3",
            "line": 480,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a3f00b67-44d6-41d5-992d-16cf88cd8934",
            "line": 314,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ab7ea78c-32cb-4b70-868c-2739b5d10d2b",
            "line": 469,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/user/dir/franc_money_parse.mp4v.vsf": [
          {
            "id": "855140e5-3061-4c4e-942e-edc08b075fb3",
            "line": 62,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "72645084-7bdb-4f73-9a12-d9ea4f7e3201",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1741e923-f100-465c-855e-6059fe7def60",
            "line": 154,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0767cddc-4232-4ac7-b5ae-ff7f7007df10",
            "line": 451,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a40c8b33-ae2a-4956-b099-0c7148448256",
            "line": 446,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "41ffeef4-9192-42b5-9091-1eb766a12569",
            "line": 74,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8f304250-0977-4079-a67e-b328ea1c9e8b",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c9700eaa-960b-4dda-b8b3-1d031f5558e6",
            "line": 452,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "db9c1754-ecb3-4051-bc61-39510f78d965",
            "line": 57,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7045c8df-58a7-4d96-bea6-213dbee2531f",
            "line": 69,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/var/mail/factors.stylus.7z": [
          {
            "id": "e1f3e0d4-c013-4d81-a9bf-67414bbeca3d",
            "line": 157,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3a1a91d3-3c99-4989-a8ed-658f80b7fd40",
            "line": 188,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9f793eca-e7b0-45fb-bf09-719965a193a0",
            "line": 391,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/X11R6/cross_platform_frozen.mime.xps": [
          {
            "id": "a9ea7719-14b7-4c5c-a621-1b704fd3b752",
            "line": 279,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "561ba1b3-72c6-45e7-b35c-aeb3602b1f9f",
            "line": 284,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "612a667b-76b1-498d-a729-d870420f7df2",
            "line": 31,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dd0a3365-1ddf-44f1-8c6b-ed7bc4f3bfa1",
            "line": 80,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Users/synergize.mft.c4p": [
          {
            "id": "ea83c2a1-c29e-4623-92f2-6d5101bbe88d",
            "line": 141,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "450580ad-43ba-4394-adb4-a5cb9f4b1799",
            "line": 452,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/tmp/bedfordshire_http_1080p.otf.sfv": [
          {
            "id": "2a1181f9-7768-4948-9c02-edb06fa64724",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "20793188-1b5b-494d-aa1a-74609049995d",
            "line": 170,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "93725b2b-ccaa-4624-92ba-d646eba7de56",
            "line": 49,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8865d504-a439-478e-ae8c-ed8652b085de",
            "line": 231,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f9548b58-0521-49b9-97ee-8989bc33787a",
            "line": 324,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b1dcd89f-c9d4-41b0-a2a1-3f6087bed74f",
            "line": 433,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c9729e9-562e-43f2-a38a-9890231b4b7f",
            "line": 119,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "726525d3-7ab4-4bc9-a8bd-fa66687e6670",
            "line": 366,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "11265c74-d4c6-4054-86d5-bb9d67b26646",
            "line": 225,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7057f301-2735-4dcf-a436-c9899b023fd4",
            "line": 195,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a42e996e-02c9-4d2c-a953-b988865aeb4f",
            "line": 450,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "428a56b0-6162-4d24-bc93-0f97fecabd6f",
            "line": 413,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ff4ef2d8-67c1-4c51-9091-964b5abcbb06",
            "line": 454,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bc0ae378-968c-494d-8060-6bc5b766260f",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f5f2109e-5aa3-48db-925b-28afe28fb283",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e00c6aa9-d8ef-482c-adda-2342e413a0db",
            "line": 6,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7a038819-da38-4bdc-bc7e-8ef464ff4928",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e32914da-819d-46bd-bdc2-f7e59d3d1a2d",
            "line": 319,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6f0456a4-b6f7-48a2-b368-0ceac5206cab",
            "line": 102,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f2f04edd-54bd-4686-a443-faaf112edd55",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/Applications/metical_georgia_connect.jpm.mbox": [
          {
            "id": "9970fe3a-51a2-4cee-b137-7bff98730aab",
            "line": 492,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0db6b61f-aee9-466b-98f1-223334ba52b2",
            "line": 91,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1dc93af3-dfd6-47fb-ab5a-26a29da53251",
            "line": 34,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "76375564-5885-4178-a8c8-d21fd6cd54bd",
            "line": 332,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fbfb6f7b-2b2b-40f1-b55a-d4c1689d5dd4",
            "line": 466,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "974aaedd-be2d-4600-9d59-9870b83f4d8a",
            "line": 181,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "02cab251-66bd-4853-bbf0-6d44cfa2c081",
            "line": 465,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5aae5251-1501-492b-b010-b03d89981e90",
            "line": 123,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "94949f0c-ba0d-4e56-868d-117efb557996",
            "line": 389,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "17aa28df-6b3a-461b-b37f-3a1a8b20df96",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b9f22d85-fc58-46e2-ac20-60548f8def8e",
            "line": 31,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/lib/invoice_hat.mbox.otc": [
          {
            "id": "5bef4b93-13d1-4345-bcef-39541b8195b8",
            "line": 189,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "20d0ad5d-04da-4c25-8255-2164c312a35a",
            "line": 70,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "03aa1bdf-b133-4200-a13c-b6e3bb5506f2",
            "line": 272,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "71076cec-415c-4ae8-a3a5-cb4e567704b6",
            "line": 207,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3177cb57-0ca4-4485-854b-35c790b927ef",
            "line": 6,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6f87d8d6-96c9-4fc4-affc-17bf43259b95",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "22f5de4e-59d4-4008-99aa-1b4d13d71a03",
            "line": 353,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e4d1b43d-5687-4f58-b6a0-050fec5773be",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e320b0e7-139c-4f32-9d0f-ff8704a76313",
            "line": 459,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed86c15c-b581-46c2-9ab1-76a4b77e4f2a",
            "line": 94,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b0928935-52a1-4a02-955b-b18f09d68419",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3dda8aa9-c266-47f8-bd7a-abd5241ad966",
            "line": 408,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "63efc9e2-4e4f-438e-bd50-a9de55ad5995",
            "line": 226,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "da03bbdf-41f2-44b8-8738-8146f41e03d4",
            "line": 366,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/defaults/rhode.mar.tsv": [
          {
            "id": "d47968a2-b187-482f-b805-ce253415681e",
            "line": 251,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0cd1e6b6-068c-4ba2-80a0-889ae96e01f3",
            "line": 49,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1c1f9b51-d803-43d3-9dd8-9b62b93e01e4",
            "line": 465,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2f8316d1-74d4-40fb-ac9f-c9e0fd36d34b",
            "line": 218,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4e85934b-d529-4567-ac9a-d1d243d0e321",
            "line": 259,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9185861c-227e-4b0c-b112-a1511de0fba4",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cbbc8186-bbc5-4594-b1cd-97d92d04488e",
            "line": 217,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a377fdbc-c4ea-4e92-8677-fc2f82fe004a",
            "line": 313,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c4c2d60e-d757-422e-a9f6-424a8828c9d2",
            "line": 433,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8cd13861-067d-453b-ae92-fdb1989a62fc",
            "line": 244,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8a87cf7f-eabe-4497-a320-8a0673fbbefa",
            "line": 364,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/bin/shirt_alabama.mp4s.m2a": [
          {
            "id": "9cf5fe96-936e-4c49-85f5-58a2e0a808d0",
            "line": 96,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7cda7a3a-f776-4bae-83a7-b2a61a29044a",
            "line": 295,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c6270bb7-ebaf-40ee-8a05-678b5e8343a7",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f9405766-27a6-4470-95dd-b6349b6bfead",
            "line": 457,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "65e31263-71e5-4dde-9843-0ca5dd0ccf0c",
            "line": 116,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/var/ergonomic_global_synchronised.cst.sea": [
          {
            "id": "9176539a-f953-4857-8440-b98ce7fddda4",
            "line": 11,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8641e849-7337-45a3-86b0-bef3e822fbfc",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e45dcfe0-56c8-479b-a221-ed042bad2aad",
            "line": 237,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "abec9495-5fcb-46b8-936e-58f65228257e",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "205656b3-f05d-42ad-80b1-cea371db3746",
            "line": 59,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8c587648-ffd3-4cee-8184-b38fe39dafa2",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed7f73fe-f8f8-45d0-adaf-3175fe46bd41",
            "line": 37,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e08fa408-548a-4930-afbd-86b2191c4410",
            "line": 437,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6d9d4368-fd57-4f86-b47b-fbebe2ee42c2",
            "line": 257,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "974198cc-5499-45f5-a4f4-4bf45cd7278a",
            "line": 223,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "639b3531-38f3-4140-9918-83bbd85d69d7",
            "line": 259,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "85546334-c157-4b23-abb7-81f71fcada0c",
            "line": 420,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8bb6c8bd-125d-4218-aa6a-3ba2583720f3",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "929dc0dc-f57d-40e7-a9f1-c4386f8deb27",
            "line": 365,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4c7e5f09-9f62-493f-99d3-2139d59d65a2",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e6ca2dc3-ef11-428e-963e-3c0cb4d4ba23",
            "line": 63,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a9be8580-ac79-4765-970b-9c6d09826010",
            "line": 94,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "58c0b0f8-7be1-46cb-be28-e6611e23999d",
            "line": 159,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/libdata/lavender.xap.md": [
          {
            "id": "a59dcc53-f8d3-4d6a-89b8-631219930a31",
            "line": 5,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2dca9301-b1e5-424c-8e23-c3b773f03a8e",
            "line": 55,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f750f20f-0fc8-4dfa-8776-50c0e624b2ae",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "76148496-ea59-4082-abf4-bec65f007ec2",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2bb8b34d-b33d-4ff5-ad0c-93379408b169",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3395b1c5-16dc-4af7-9e9e-45690aedeca8",
            "line": 495,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c7e1c250-4c71-4299-b54b-cc3021cabf90",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ccd0c0e3-0687-4d28-b535-785ccddee863",
            "line": 267,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eabd44ed-ed71-489f-ab8e-b0c7d332dba1",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e87eaa61-1384-4f3f-be60-910fd09e761a",
            "line": 366,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aae92bcb-16d6-49b6-909e-05a28cc09c08",
            "line": 164,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fdd86c61-1504-42dd-b9d2-9d80b8110f58",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "630a4347-171a-4135-9efb-e0f9b7d3fb0c",
            "line": 235,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2cf4ae99-7a6d-4211-b135-6fcf4233e59f",
            "line": 229,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "06f9c318-6752-4dea-aa6a-48b052976214",
            "line": 423,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9a1971b6-03da-438b-9c1a-3255d09fadb2",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4e975a65-fbfa-4500-b770-0099edb5a0c0",
            "line": 173,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "623078d9-bb0b-494b-99aa-49f2b60f1445",
            "line": 361,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/officer_payment.fhc.def": [
          {
            "id": "cf8b6945-1067-48f5-82e2-773bbd193955",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "95cd2abe-9754-44c6-9db7-0ee1baf65a53",
            "line": 493,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ddf89179-2dec-4f8e-a307-5112b16e1ffc",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ce9192b7-74e1-4fa7-a460-5f5998fa0a2f",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "42908f4c-963c-4fd1-ae84-3340c0eb11ae",
            "line": 447,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "36a98cdf-37df-457b-a999-9f26c061af30",
            "line": 482,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9fbe0c13-0ec5-4316-9a1b-f851938e4558",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed712047-a0c6-4efc-8554-67967c7a58c3",
            "line": 151,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "12cc6958-183a-4085-951c-f77cf3cc0057",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "29251c23-adfe-49ea-a1c8-53fd1d4b3a6f",
            "line": 329,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "553f994b-2124-4199-934b-e5b5b39378a5",
            "line": 430,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "02a67d6c-8ccd-4a48-9b26-9561c8670338",
            "line": 48,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c4bd0c4f-ed8c-4db1-b2ac-44e0c401f2cb",
            "line": 294,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bbb11930-d368-4f9e-8b09-ac0806d3a3f1",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8ccf74bc-969e-4ca7-807f-df1ada5fa155",
            "line": 243,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2fe738e7-d05b-4fbe-8a88-bb6f56c03dd1",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/sbin/bypass_nevada.air.p7s": [
          {
            "id": "bb748c2d-6056-4bef-bda7-8994ffc4c2c4",
            "line": 414,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "821bd24b-da90-4456-851e-ad762aa06a7e",
            "line": 385,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bd879c6c-686e-4440-8b70-42f1b2b36974",
            "line": 419,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "09c10048-124d-4105-9107-21c5d2652c6c",
            "line": 156,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2efd05d8-4577-46db-b217-63c03a4d0467",
            "line": 475,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cfd6f9ce-ed0b-46d8-98dd-dd2a5be84a6a",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "702c7899-a20b-457e-a991-15424dd89b8d",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c2789ad-761b-43a3-b993-f7f1a7f8a57e",
            "line": 32,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ab1d2525-8f5f-43d7-bf00-9a4ee3cff773",
            "line": 121,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "199d2acb-33ea-4969-afb6-6b10a8c3eb2d",
            "line": 485,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-04T18:23:04.717Z",
      "totalRecommendations": 219
    },
    {
      "id": "14258885-4aae-4465-be85-8276407172a5",
      "name": "sensor-generate (591157b)",
      "state": "2",
      "finishedTime": "2021-07-06T03:25:05.735Z",
      "recommendations": {
        "/var/tmp/games_small.sig.ivu": [
          {
            "id": "81acbd51-864d-46ed-a2c3-103ec3955302",
            "line": 111,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d5047561-3379-4273-847f-ade231598592",
            "line": 11,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0a1225b3-9470-40b3-a78d-b6e014d2b829",
            "line": 46,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "205df481-b8d4-412d-ba62-d0423587194c",
            "line": 410,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/libdata/connecticut.sil.dvi": [
          {
            "id": "2417a7c1-ab72-436d-84d3-c2b101ee139e",
            "line": 183,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b203c3ae-7066-440b-8783-efc867b58de3",
            "line": 127,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7a6798c7-ec03-435f-9656-5f377bb3d33a",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "59bbe5f3-f3a5-427f-8b43-cb4d3e8b3672",
            "line": 225,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "94d8bf3f-a391-41d4-840a-c314fe7ca548",
            "line": 280,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "84fb4992-0687-42fe-87b7-d28c68e28783",
            "line": 500,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "06a6b6f3-addd-4be7-9fc1-f9f6f1beb93a",
            "line": 48,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c0e4e7fa-3362-49df-ac88-6a41934b3c98",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7c33987e-c147-4e3e-aec8-cb13e2db257e",
            "line": 235,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f42a4b2-6b6f-4e26-8589-bede752c9684",
            "line": 269,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e7ed4732-c2f0-4d2b-a34e-a7ba5f414576",
            "line": 26,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "298e16c5-c402-4bdb-a49c-1a6d493c4cb5",
            "line": 328,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "81769352-7d3e-4a03-8ebb-75ebdc998311",
            "line": 344,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0a32ebff-3629-4b28-97c8-0cfb99fc0ba6",
            "line": 199,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/etc/mail/awesome.esa.pptx": [
          {
            "id": "4490a31f-58d6-4713-9a38-228166ccdcb7",
            "line": 388,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "193feaa8-c2c7-479f-a43c-cff987e1b7e3",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0a4699ac-5029-4f78-b263-d210b58a0bdd",
            "line": 420,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "639ffe80-ed77-4cbc-9e0b-53c2f9e12c17",
            "line": 70,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2995f008-fb20-4b76-9b29-cd0666146112",
            "line": 337,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e27c7e09-e652-42bb-924b-91cc2cab7434",
            "line": 341,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/src/program_rss_infrastructures.cdbcmsg.sfd-hdstx": [
          {
            "id": "cf950143-4827-46de-8da6-a5fd4a9cef35",
            "line": 10,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "44819f39-1f10-4464-9c33-1c097dd4e666",
            "line": 19,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/local/src/pants_chicken.pwn.pyv": [
          {
            "id": "3a93552f-2cff-4bc0-8e8f-98df70bad62d",
            "line": 182,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d5d7bbdc-5959-4cc1-8a25-aa530af36877",
            "line": 285,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "794016da-3491-4460-a8c3-202c5f90371f",
            "line": 477,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "41dd4cfe-3cd5-4194-abb7-b1df6733b242",
            "line": 362,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6b5b4f4b-372d-4ce2-9dad-b9c517d2fc53",
            "line": 196,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6bfb14a0-5207-46cf-8a4d-f9f677dc10cd",
            "line": 197,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "211bfe28-387e-4968-b748-f135b87fe25a",
            "line": 84,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "57cd8e7a-5379-433e-83aa-a48af7dd5c4c",
            "line": 447,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "28527cd5-d63e-4e7f-91d8-44e2b201d2be",
            "line": 185,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "beab93b3-375b-4d5a-a57c-23a5c5311131",
            "line": 31,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "abecbd24-7cf1-48ae-b786-582fa8b2f797",
            "line": 39,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "141ead1d-e741-4a4b-ba2c-489ce92d1fd6",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/root/global_usb_rustic.mpkg.z7": [
          {
            "id": "a55ccd01-5de5-4eec-b522-68b7652f565d",
            "line": 245,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1eed802e-1070-4c39-99c4-95c9554a273d",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8c3729ee-b5e0-4a1b-9104-46bc51973e6b",
            "line": 278,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6f4b0fea-94d3-4193-8f4a-f9ff51523e9c",
            "line": 95,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bcb52b91-a098-4c83-b98b-e0f2645814b5",
            "line": 196,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "683387d0-abfb-4444-9bb0-363acdf3702d",
            "line": 164,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f3453a9f-a9cc-4d54-9060-5485b2400de0",
            "line": 144,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aa0a0f26-41f7-436a-b1f3-de98a5ab949b",
            "line": 76,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6ac7fcab-3fad-4015-8ed1-ba32cb4384c2",
            "line": 96,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/sbin/malawi.deploy.pcf": [
          {
            "id": "a10846e1-0771-4f4c-a54f-229fd05a24e8",
            "line": 475,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f5f40c3d-3f75-4e92-83ce-ad088bcdbdd6",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1cd86a27-e9eb-47d1-af89-f6be8aa5c7d5",
            "line": 465,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ad1bcb80-798f-45e0-8d47-82e318e449ae",
            "line": 337,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "008c8499-ecca-4431-aecf-574a64453145",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b3787617-d440-4572-ad9f-8419679fd9fd",
            "line": 20,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6486e3cc-f9ea-4b75-a9ec-0b3b9e382e24",
            "line": 104,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0b221ebd-e9c7-4894-86e0-ea2dc95da40c",
            "line": 389,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3b606347-67e8-4fd7-8860-1aa85465833b",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9d134ad1-6aeb-4594-9c0d-0e2d10ecfe09",
            "line": 97,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "de99288b-7951-4de6-8732-f3c10467cb78",
            "line": 30,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ddbe17f2-dd2a-48ab-8c55-450c56b00d7b",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "403bb1f6-4722-4afa-bd22-cb95e5427af8",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1bcfdb19-1324-4882-9a5c-1a766a3a9614",
            "line": 483,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9ffa9fc3-4e22-4017-a088-c3413edf59ff",
            "line": 349,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "199811d2-4473-41d7-8407-a80a5dc9edcf",
            "line": 315,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "08aa0ba2-2224-4421-b0b1-b85f5573b234",
            "line": 432,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a8f25e84-071d-4e03-a1fc-55a19f9ff538",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "299e67a8-50bb-4509-9e0b-873ead6dc80c",
            "line": 0,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/share/plastic.cfs.doc": [
          {
            "id": "c7dd39a1-86a3-45c7-9de7-812d433ceb1b",
            "line": 483,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "870435dc-2013-4866-97b8-333e3fd8a3cb",
            "line": 199,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "18dceebc-60c2-4789-ae89-2c9b46f319cf",
            "line": 157,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b07f4ab9-4667-4092-b478-5c61befdf999",
            "line": 117,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f650b688-ddf0-4601-88b0-9a60b47fe052",
            "line": 288,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "68f58fa2-b3ce-4d8f-ba3c-87d65c7c7830",
            "line": 122,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b6769086-7f5b-4d2f-84d9-c545728cb109",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "753298b3-9785-45df-8bcf-ff4fec83f89f",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0d0f2b3e-9bce-47e8-a495-0023cef317b0",
            "line": 308,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "069f7bb6-21e4-40ac-8f45-cf676ce72f11",
            "line": 400,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7cfffcc8-fba6-450d-8e2e-aaf3464768ad",
            "line": 146,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "77ef1a6b-654e-438b-9666-82dbe1da78d4",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "db96b910-226e-495a-9140-469fed9ce018",
            "line": 229,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/srv/compelling.nsf.psb": [
          {
            "id": "c582abb2-4bfb-40da-b04c-d82c8f1f55d6",
            "line": 437,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5807383c-75cf-42c4-b050-4f84fbd8c7f0",
            "line": 175,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5cb8e04b-69e1-4f4a-bfd5-8b8352dfce25",
            "line": 104,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b11b1446-7360-4094-8365-20b1d76e1aa2",
            "line": 172,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f3aed9fe-0205-4e85-bf99-f2c3c67e6143",
            "line": 391,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "cf9868f0-5c6c-4474-9bf7-177a5bf8a290",
            "line": 230,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c1f29cd-aa53-468b-80ad-b54ea37f8f23",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea829f88-65eb-4327-a7f2-798ef31d800b",
            "line": 51,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "744b0578-2b73-45fd-8874-5b190dfb7ce3",
            "line": 189,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7f490937-e36d-42ca-86b7-440b13c1f46d",
            "line": 224,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "71fe26ec-ccd3-4a6d-a480-564be64efa85",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/media/calculate_gourde.rip.lbe": [
          {
            "id": "55be5450-099f-469d-b2c3-41a79a9b3f3f",
            "line": 292,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "af116cfe-a414-46b3-89d0-1e959e5cf3cf",
            "line": 25,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7fe4ccb1-f2f0-4197-8bfe-2d08881ee8fc",
            "line": 44,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "daf6fcd6-573c-4e6d-ad70-f87818ff10e3",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fdde51e1-0fb2-41aa-958a-8a6328728574",
            "line": 134,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "93ebc76e-93f0-4820-b49c-2f24350b996a",
            "line": 318,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "de5573e0-d301-47ec-98c2-8ad1c8040351",
            "line": 73,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fa9dd685-98a6-4826-a548-0750601e0f8f",
            "line": 130,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7f955239-5010-4d6f-a91d-195d04091a97",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7d844995-dd9b-4763-96c8-336d14eb1f56",
            "line": 397,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dae97b32-7db9-420e-9dec-2c32f3cc782f",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b205b30f-cc39-4fbf-844c-08b31313f20a",
            "line": 105,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cc643418-f528-405b-8b1f-b7bd17bbc94d",
            "line": 352,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "346e89d5-6c0d-4d39-a38b-f7f54d6604d6",
            "line": 183,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "98ea6b51-966a-489e-bf61-332382b21944",
            "line": 43,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/tmp/mobility_automotive_cultivate.bdoc.mpeg": [
          {
            "id": "72ae70c3-8145-4219-94b0-d31749c60e92",
            "line": 244,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c6c616f7-86aa-4216-94fe-cbc363e506a6",
            "line": 178,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6a7e0241-af91-4032-956a-b0c5a7e0f00d",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3181c90d-5802-4fa7-9b4d-8b208f780126",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fddc752f-abcb-47c7-a265-35af586aff82",
            "line": 174,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "acda3094-52ee-42a0-96a4-ad6f81484da4",
            "line": 188,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9666a46c-d873-4c04-872d-31dbb445ebf3",
            "line": 445,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c5af8e7-3f49-4a6a-ab63-9b980f587ae5",
            "line": 202,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aa9c9b5e-4c91-45b5-9648-816b1a314584",
            "line": 37,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5ce25fd8-33ee-4564-b913-e120401e51fd",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fe5c231d-5df4-40f8-9728-15780f2dad2b",
            "line": 3,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d67ace54-0c14-4a5e-961e-e590cd8dc409",
            "line": 445,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3a06c56b-e622-4556-b10b-9f94de5fc8ac",
            "line": 437,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c5108f47-70f1-45fb-9366-879eb149d7e8",
            "line": 216,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/obj/research_sheqel_tennessee.bdoc.vst": [
          {
            "id": "ed31f1ea-1db3-4400-89cd-e75f8485b24e",
            "line": 48,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "93123005-ac08-4c4c-b281-c9ec40a26633",
            "line": 249,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "119cd0e1-cd76-46e9-b90c-5554df2f3727",
            "line": 463,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7de2906d-f9a8-49b0-9ac1-fb6210050f4d",
            "line": 385,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ]
      },
      "startTime": "2021-07-04T20:52:28.095Z",
      "totalRecommendations": 123
    },
    {
      "id": "ad5c9d66-23e1-4654-ae4a-eb59b40bc29d",
      "name": "firewall-input (c6158b6)",
      "state": "2",
      "finishedTime": "2021-07-05T22:43:22.271Z",
      "recommendations": {
        "/var/yp/turkey_chair_mandatory.gdl.xlw": [
          {
            "id": "1f9201d3-4160-4087-9a0d-d506d05f8f62",
            "line": 73,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "00a5b33f-d982-42bc-9cd5-a95b6e283e59",
            "line": 425,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0e25ef88-58bd-4d2b-ab74-60ee03a88fed",
            "line": 294,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4793e6d0-722b-4e23-94eb-c08fcf8e5165",
            "line": 55,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ba93ead3-780d-4444-9c5f-5c3ae9aa32d6",
            "line": 79,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "829f1e94-8160-4fcf-94d9-b935e2d3f9f5",
            "line": 6,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "89b189ef-a22a-4e13-b425-2c0948b3aa2e",
            "line": 145,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1dd74c0e-fa71-4c42-8553-169d45ecec7e",
            "line": 473,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "69482026-641c-4820-8aa9-b354dca4033d",
            "line": 380,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "42bf5fd5-0d94-4b04-93f7-3d578a5639c4",
            "line": 11,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "340428b9-e8aa-475a-bf9b-ed37cb1dc2ee",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "85097877-e4a4-4d8e-827c-394b61d8008a",
            "line": 97,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e2fae823-c130-47fb-94c1-5f4e577ff18b",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c83e7efe-aac2-4291-83fd-c323dfe29fca",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f03d9a38-18fd-4e4e-b312-e4790bb36184",
            "line": 119,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/bin/incredible.kpt.cdx": [
          {
            "id": "77fb4849-ac45-4396-a9cd-b12a901c7ed6",
            "line": 324,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f7bf0ff3-fbfa-4fec-a8c7-4997ea2d89a1",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c4d6c26d-3b3a-4159-a736-5f411633cdf0",
            "line": 420,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9ab0e442-2398-4fca-a742-c99db2a9ae4f",
            "line": 463,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b3b8f319-b911-41b4-b64b-344bf7285f90",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "18760292-0760-4765-8c37-6503c1213876",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3f8a8827-5751-4245-958c-c8d3aa915309",
            "line": 175,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/root/copying_hard_copy.efif.bmp": [
          {
            "id": "41f6af3d-8b25-42d9-9703-6ec967f65be0",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21cc4e80-bade-4c29-b588-ac067d1063a5",
            "line": 332,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c1325af0-d94e-41f3-a4c5-ff1edb2ce9b5",
            "line": 356,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d955dd78-d537-40d0-a965-a418da6e28df",
            "line": 67,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "27356fa0-821d-4715-a17c-818ba5bba9b5",
            "line": 413,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "83620678-0e4a-4332-964e-dc59ec537115",
            "line": 169,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "794c8ad6-01be-4933-a56a-6ffc083e242e",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7cbad59a-b278-4953-8f0f-32519b845a44",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8c6967f3-d3db-4746-a015-4ff1dfc67518",
            "line": 238,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c1b93a2-b638-46cc-a9af-71ddfb0d9934",
            "line": 176,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "47dbbad1-a7da-4bf4-bc5b-7e62f45cb038",
            "line": 9,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5aee59e3-3959-4778-be02-6083fa7c6e92",
            "line": 392,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d5a9b69a-6f6d-46fa-8408-772dec552f59",
            "line": 40,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "63eb52e2-0c92-4cfa-9a0a-60cf281645dc",
            "line": 184,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a1e996cf-d7dd-46dc-9ab6-674b32f2a52a",
            "line": 50,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Network/salad.setreg.xspf": [
          {
            "id": "9e5479e3-c8b6-43ca-997f-e7c92f9549cd",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fb3f1397-75ef-4dab-b81e-559922d4cae1",
            "line": 411,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c1afc47a-23e2-42ae-94eb-c23979f4a123",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "32153cff-0852-4288-9f85-1b9f66a306ca",
            "line": 278,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "520a76b2-c8b1-4276-8ec6-c48773ac8287",
            "line": 378,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2f3aca8f-9c72-4206-810d-d906d0cc98c6",
            "line": 171,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8e35e815-b118-47fb-b785-ba8e4e3c2949",
            "line": 356,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4925247f-3c49-4c09-969f-dd9cfdb7edde",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "490d7e38-478b-4414-b858-c260a13da9a8",
            "line": 112,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea8c299c-d244-4e25-ad1f-d5995dd888c3",
            "line": 384,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "50f17bd8-a1c9-48e7-8515-2d62f07a4514",
            "line": 55,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c9d6979f-7fd1-483d-8f82-cbbc712722eb",
            "line": 170,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "83d252d0-b336-4305-bd51-eb76377fc1bc",
            "line": 280,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ffc96346-22bc-430d-9351-055fe5b238ac",
            "line": 44,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "15d356cf-c5d9-4bc0-9928-d328c005534f",
            "line": 309,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "287305cf-1151-4d30-9ca9-65fdadbd8240",
            "line": 456,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Applications/bypassing.rgb.gtm": [
          {
            "id": "3e21e61d-2d2c-470e-b7eb-2fcf1a93bc8c",
            "line": 295,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "32db4d5e-2639-4aab-bc29-86bafbc471de",
            "line": 278,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2959f140-8ed4-4000-ab0a-c5e12a4133c8",
            "line": 297,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "090a7959-e073-440a-819c-8b2b17283e3d",
            "line": 233,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b7e74f29-1ff7-49c5-b70f-2e04b453e01b",
            "line": 145,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8567d877-a563-45f5-90b2-a711f133f166",
            "line": 223,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6f905851-0e32-4cf0-9b83-6cdded3f031b",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ab4e58b8-26e5-4134-a495-b015123d6553",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/src/ivory_withdrawal_system.pm.jlt": [
          {
            "id": "eddf5ae5-12d9-430b-ade4-792a7abe3551",
            "line": 441,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "12d2964b-66ce-46e8-81a0-e7ec165ea6f7",
            "line": 102,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3e640998-5f5d-4859-93ca-94fee10979d7",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5e052a5f-918d-469e-bea8-b66b3549dd08",
            "line": 172,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1ade17d8-76ef-48be-862b-50047651c10d",
            "line": 356,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/tmp/backing.crx.hvd": [
          {
            "id": "2d0e0022-2652-434a-b2aa-369f27081f9e",
            "line": 11,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "632e6fc0-f3d8-4884-9d77-230d31d133a4",
            "line": 391,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b7085a00-1610-4b21-a32c-7f968772f946",
            "line": 355,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0edcd4ff-caf7-40e5-a7d9-208cb5d65151",
            "line": 340,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "acdf2798-cf4c-4c2d-8d50-283b79e6a891",
            "line": 490,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e7282d07-1a4b-4380-ab39-feac7c5a9791",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "423aeaa9-4420-4c47-8152-d8e3d0224d54",
            "line": 135,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2f81a0bd-ac72-4f92-beef-7ebbe9546810",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8e7538ce-992b-4341-a209-7d31524bb7bc",
            "line": 474,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "42682a2e-0e8d-4712-b998-9b89fc2303a1",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0bbf13b9-361c-4a03-935c-e82b7bb3b8b7",
            "line": 91,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "aee019ea-2243-4495-9b50-e6150dab4812",
            "line": 359,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/periodic/samoa_account.m2a.chat": [
          {
            "id": "19ffb92e-d596-4aec-b1ef-6e1d50df1170",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "39383f9a-5bae-4823-8d8c-4db92bc9e318",
            "line": 303,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c9b9d206-4a14-47f1-af84-ee1f6eff6043",
            "line": 5,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/private/json.bin.chat": [
          {
            "id": "4907ef73-6aa5-48c6-ab81-1f77baa174e5",
            "line": 272,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "098a46ad-1c0d-462b-bb37-8e400cbf36c7",
            "line": 358,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ce37d5df-282b-41b9-b42f-b96de7a5916f",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "07ddfc71-f4c9-4a7c-973c-6cd0e1df15aa",
            "line": 387,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c7c7348a-ff54-49a0-975e-d6f5abbacc88",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c0736d2d-a319-4aac-842f-beb25a691f9d",
            "line": 372,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2a40d760-71bc-4dd8-b7f1-e472cc34c59a",
            "line": 171,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7959cc3b-bd5f-4a9f-b6af-7300d89a3db2",
            "line": 192,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "546371de-7269-4f25-afef-e38bc39e3078",
            "line": 411,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b70854a2-6467-4171-b288-e9dc9a93218d",
            "line": 61,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/sbin/salad.cryptonote.cab": [
          {
            "id": "baa44704-f5f6-49b1-b208-71acf66d9809",
            "line": 34,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "38178ad6-c88e-46f7-9587-0e4c6598953b",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/transmit_thx.uu.jpgm": [
          {
            "id": "fa1c7cf9-ce1f-4c1d-849c-7197c3a1f1df",
            "line": 91,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d544f841-4694-4b51-97cf-de1f0ad8b938",
            "line": 200,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e6ba00eb-125c-49d3-ba4b-9771657c220b",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea9e8600-df15-4e79-9673-15c8139d29ef",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "52d4e2e6-9fd6-4e4f-bf86-f4ca4869fc57",
            "line": 259,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1472e0e7-e968-422a-9e1d-4b4ddcc09917",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e9d2950b-3a52-4836-ad34-ce9717272467",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "365a6fd9-b578-4df4-8889-e78cdd9a5fda",
            "line": 53,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "51bf22df-7a63-4cf1-89f4-13536a5ac8ba",
            "line": 165,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "04b2810d-ee9c-4c9a-986f-dbe86c71427d",
            "line": 362,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f68a7207-9492-4e57-8f2d-2f580b11d74f",
            "line": 206,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "02ea7330-5b3a-4e12-819e-6e67a34f8f4d",
            "line": 364,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d7e32df8-9272-4415-b94d-c902ecb0517a",
            "line": 244,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b54376cf-f82d-411e-a9b7-764eafc691b3",
            "line": 37,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/defaults/systematic_redundant.listafp.mny": [
          {
            "id": "13636473-bbdb-40cf-9b55-fadc84b25b53",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e341c9bb-e9cd-47e9-9bcf-777b8a2a0814",
            "line": 361,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a39ec077-5aef-44d7-93d9-683042d2e45b",
            "line": 59,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "38505fb7-a822-43fb-a810-fa666cd3bd0a",
            "line": 71,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c183c1b3-9146-4155-9851-67dc4795200a",
            "line": 163,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a4c92e53-861d-4684-a6e3-dec6af9c62eb",
            "line": 319,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b2aec14e-a9b9-4087-92f3-c048c7a1b39a",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1e8471e6-2ddf-4d16-8dd6-bd420d8bb829",
            "line": 383,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c5e1ea78-d768-463a-b160-c71267db4dcd",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8d26e8dc-8782-4a33-9505-3f70dae85159",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0aa70630-930d-410a-9b12-bf8f4a45ffed",
            "line": 70,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "604279f5-d097-4eeb-96ce-cb1e607ef1cc",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3ba6b21c-ee6e-4fc5-a8f5-a0a10cec75c9",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d9a90a00-d8b9-4407-bacc-a13963337b3a",
            "line": 495,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2a62c5a8-75c7-4c4b-b11d-745b6e90955d",
            "line": 419,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "04f988ca-77a7-45fd-854b-a05f228e711f",
            "line": 326,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "effba507-c446-4101-bae0-f98162bab125",
            "line": 53,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/ppp/dynamic_aruban.uvvd.coffee": [
          {
            "id": "70ae3aae-b823-40f9-b5bb-2677673f7432",
            "line": 391,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ccd9b1bd-905e-4afe-9c65-671b25dfee8c",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "307a6ab3-e078-4699-8017-e2ea960a45a3",
            "line": 279,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f8ad88c-8592-4da9-aab2-bbfafa127dfb",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c44d182d-83b4-41b6-8b43-05b78713d5f8",
            "line": 366,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b75a6b9d-5619-43dd-a8bc-0d15d8ba0b82",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b390644d-1801-4736-8b84-e43d55c831e6",
            "line": 449,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5402404f-ac42-4e14-89ca-55c9c20eebf3",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "12a74c17-6e4b-4f0f-8846-e93ea5c9b5f8",
            "line": 182,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d1f4b0d5-0762-4f28-8116-de5f1afbcf6b",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "85d505ce-dff2-4fcb-90d5-5b6f15b87142",
            "line": 156,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8a5f1aea-16db-4e5b-a364-afacc2c3ec61",
            "line": 321,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e99de853-d988-41c1-983a-3e829148038f",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b517bb7-5a48-4d17-8b33-ca5424678ffe",
            "line": 197,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "38908bf3-207c-4d69-9d7e-cf72cf3c1527",
            "line": 293,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e232d532-40bc-4162-9a3e-6b8a8c209d9f",
            "line": 361,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/bin/total_specialist_1080p.yang.list": [
          {
            "id": "f2ecd602-644f-4d22-b2e7-523e74bed7ac",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "61bb32d0-c360-4917-88a2-e3537c34808b",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a5969c28-6d0b-42ce-ad0a-824c67367868",
            "line": 67,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "12d5d5ce-4443-4c83-926d-363f3da00c3c",
            "line": 448,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc6dd812-7236-41be-821d-e48cd4289c21",
            "line": 339,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a4bbb27e-a3db-4fd0-b2f6-ace46806c40e",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "55539546-e932-4996-9eb1-053c463446e0",
            "line": 273,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "47e225e1-42b9-468f-b5cd-298c6d49081e",
            "line": 140,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6f552614-6c64-4e1f-9b4c-1cac650c2a8e",
            "line": 192,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5c64d1bb-7f09-4cf3-9a85-056c9e512669",
            "line": 442,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2da4c2f6-cda8-4cf4-9ec3-f6ab815b62d1",
            "line": 386,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "668f60f5-4612-40c4-a582-9ce9f71cb662",
            "line": 459,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "987fd72b-2a9f-41aa-af9b-a81253ed58af",
            "line": 81,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6774c9f8-1df6-49fc-aa96-e55f9d4eaab5",
            "line": 30,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "70488102-16f2-40a5-b24c-1897e446838a",
            "line": 335,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "02a9286e-e085-422b-b36b-4da90dbfb7e2",
            "line": 461,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "21304883-7271-486a-99e1-547fa73b988b",
            "line": 146,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fea909a1-71b4-49fa-8424-ea117eda169b",
            "line": 389,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "80be1f4b-78cc-467a-bf81-91121b2a1f07",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Library/metal_sensor_grocery.xla.otg": [
          {
            "id": "e78172ad-f7ef-4695-b3c7-fa441e63cbcb",
            "line": 491,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "24748dfa-4383-48fe-928f-b6c821e19578",
            "line": 312,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "17ea9a59-57b3-42bc-8e4a-9e613f92b748",
            "line": 337,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c2d04b4-c09a-4c8d-80b7-ad196b7f7abf",
            "line": 238,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea43001e-d18d-4885-aa55-c8257d507119",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "682e5d1a-7c1a-451f-8de3-0c4f1170766b",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-04T16:40:33.139Z",
      "totalRecommendations": 165
    },
    {
      "id": "a91d0b39-7798-4268-a9fb-964406deb974",
      "name": "transmitter-transmit (90638f0)",
      "state": "2",
      "finishedTime": "2021-07-05T11:23:43.624Z",
      "recommendations": {
        "/Network/account.mp3.ogg": [
          {
            "id": "60de8538-b735-4c39-83e5-8a8ad96b605f",
            "line": 118,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3356d09a-618a-478f-a428-758d03548349",
            "line": 121,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c67bd4c3-d6a8-474a-9ebe-f961921df387",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "058cc976-75bf-4238-b5c1-c9eb78918ab5",
            "line": 180,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/var/log/account_deposit.csml.sgml": [
          {
            "id": "dc1babbe-6ce2-4b00-86e4-503b8876a973",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0a4cb65c-0901-46d0-87a7-76c2f157d28c",
            "line": 206,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b27a7424-d805-4908-9e18-2bcfdc181ef9",
            "line": 379,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f4c28b94-c902-4000-be21-a729425d10b4",
            "line": 230,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9559f204-90f9-40ff-834d-a933852133d3",
            "line": 398,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "225bcb2d-0abd-4eed-97c3-5376d149ad94",
            "line": 145,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5fb01303-8f3d-4dbc-9693-4dc12c9bf3c0",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "06d7b9b6-85ba-4c97-8a40-7db822a1a133",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc574a49-a5f7-4745-9384-050b9ff149c9",
            "line": 80,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "33202cbe-8667-4753-9ecb-929c2b4810d7",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "116cefc9-c371-4b86-af52-65d6a5f7b054",
            "line": 121,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3db8b670-0c72-45a1-b72b-36ab7f7c7b05",
            "line": 225,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b874732a-a79f-4887-8f5a-39ab1523e7ee",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "39b051ae-4784-4ee4-8eb6-40f03bf88dc7",
            "line": 375,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a88cbd3e-395b-4c30-b88a-cadb9de75aa4",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "609c89be-e4ba-4d7e-bf0f-f8deda2637ee",
            "line": 31,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "28215c0f-3a41-4516-9032-ba4b9daa3d3d",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "06af943e-4891-41b4-8574-17c7230803c0",
            "line": 425,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/local/bin/deposit_cotton_borders.vsw.scs": [
          {
            "id": "df1c49c6-4526-42d6-b164-302a1f28d113",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aa617af1-2d29-4633-8262-d669b12a4f73",
            "line": 442,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0ec3e0e6-c2f9-4d4d-bea4-2f1b697c5050",
            "line": 151,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0c828f2a-8ad7-4621-84e8-0eeedc6576b1",
            "line": 164,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c5769e5b-f340-4b5f-a0e5-f15916357187",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b2d46ad3-40fa-42a4-9b22-e78602a6e6d4",
            "line": 10,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a95058ca-9304-43da-8115-2b8eec3fd8a4",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "40446fc7-99d1-41b0-a05a-0a9fd881b38c",
            "line": 392,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Library/hard_transmit_steel.viv.sit": [
          {
            "id": "dcb9dc82-51e2-4bd5-8f73-2521eac52b64",
            "line": 418,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d45df89d-45db-497d-8a90-f4c85daa66af",
            "line": 335,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1f1dcfcf-8331-4ec5-ba4d-daf4cfbc67af",
            "line": 237,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "98881b68-65d5-4644-8be6-d58fede2e521",
            "line": 490,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c5a5b80c-d5ec-4e7d-baa6-d31233dbcd2c",
            "line": 493,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "07425015-773e-4d4c-a2a5-6c27de614361",
            "line": 426,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "57d07ab6-14e9-42ba-8c9a-23312b6bf4d1",
            "line": 105,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "28a591ca-3f15-4a8e-90c2-2fa16c7da127",
            "line": 213,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2a771521-eaee-46c7-8d56-97ae4d5f3437",
            "line": 231,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "98f33f47-761f-4ac9-89b4-56c6304d66b2",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2808e5f2-5ba1-4545-8340-b32af9ab05a9",
            "line": 65,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed67439c-d380-452c-89bd-e98e171982f3",
            "line": 337,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "705d7c42-9e90-4140-a693-0f917bf629e9",
            "line": 222,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1bf3fc43-ddb5-45de-bf57-e5f5c21fff18",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a9ae83d4-c12a-4e77-a70d-957285dfe9f9",
            "line": 492,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c5f15187-44b7-4e69-a854-1cbb87eb956f",
            "line": 71,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5771dad0-9b67-45af-8cea-f696fa4fcabe",
            "line": 418,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "12770038-3be5-4223-b6c4-51b1479a54a2",
            "line": 161,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bde70479-0b41-47c0-b29b-81e9c418c08d",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bcecb001-2b49-4edf-bd16-5a7df1c28660",
            "line": 477,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/net/small_licensed_soft.yang.yin": [
          {
            "id": "1c166d75-46e2-40c1-8cf5-8e7651ecffb6",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8de19146-df91-4344-a412-ce81b7664f85",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dba22178-1c70-427e-b714-7e961cad7215",
            "line": 443,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8be127ea-beef-45f9-825e-6f8a70f3271a",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8599e7eb-0103-402c-a14f-8ee4692bf268",
            "line": 427,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3b44a15a-19b5-498b-b3d2-67d5033908e1",
            "line": 431,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "86eee980-d38a-4816-8db2-9a6495c09dc9",
            "line": 121,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e8661c30-e405-4070-9333-386b259b700f",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef41f45b-4d69-4d63-b277-04513a6b9dc1",
            "line": 21,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1ebc28f5-d83b-4eab-b2e7-45020bb1e5b5",
            "line": 62,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3468cab4-5fa8-4d86-b554-2889dc10fb4a",
            "line": 172,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4c3e04a3-0311-4633-9815-5a43b1d41e38",
            "line": 370,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2a6c60b2-0c09-479d-93bd-b66452a19e4a",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e44d214c-6ea2-4b5c-9b8b-8dfefb07f188",
            "line": 493,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6cdba769-8066-45ca-ae80-b5bc1600341a",
            "line": 461,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d127a96b-41c9-4760-b55d-4b2c748be95f",
            "line": 223,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c853fb6b-5eef-4b40-ac2c-1abd638482b5",
            "line": 305,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f7191b82-32ab-43f9-a86d-92b892a832c2",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f16e19b2-e03b-41fe-b0c9-929755cf7773",
            "line": 16,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/intuitive_tunnel_car.cii.ltf": [
          {
            "id": "ad350a29-8dee-49c9-a9b3-c9396325d56b",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "364ea301-8773-499a-b620-416250075768",
            "line": 407,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/media/baby_transparent_somoni.odf.zmm": [
          {
            "id": "6a64b879-11af-416b-9868-393f74b35e70",
            "line": 406,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8f87619b-9e81-4e24-a63e-1aada107dad0",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "55956730-ce09-4704-bd1a-555d28906559",
            "line": 116,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e080e644-6031-4c6c-9226-3f36dba49e66",
            "line": 147,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8cd235dc-7940-4288-8fc7-f222fb2513f2",
            "line": 15,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f45c1c17-1ebd-41ce-8f32-3a215e1c8732",
            "line": 138,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e835c2e4-dfa0-4910-8c1e-efe478483570",
            "line": 338,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c466cb17-21e3-4dc1-8867-f286ad019205",
            "line": 354,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "feb9b3f0-90ee-479a-b378-cfcf62769a1a",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "80f17ec8-250d-4a52-a694-80673e9b5088",
            "line": 459,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/programming_cyan_loan.fm.mfm": [
          {
            "id": "d6da2ac8-9b47-40da-9446-9787d3824084",
            "line": 94,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5474761f-9eb1-43bc-8608-60b411fc525f",
            "line": 210,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "462a7647-067c-4fd8-9cf5-59be18a0f038",
            "line": 318,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "71232205-1e40-4cde-beea-8245fd2ae71d",
            "line": 374,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "04b6bcaf-b243-498b-983a-2c98b122a370",
            "line": 335,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21ba1f73-d427-44fd-ade4-224373514eb0",
            "line": 424,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5969333d-b168-43ab-a17c-e594e118f49e",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "07600336-4d0a-4e69-a6ad-6800eb282415",
            "line": 475,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2bf153a4-ad9f-4311-a240-d121175de128",
            "line": 483,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b531d41e-5f68-4112-b0d4-23514b5bc00c",
            "line": 491,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9ebef236-8e3a-4309-bd47-51973c350456",
            "line": 216,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "af5bf83d-8af3-487c-b39d-8769ce033ae9",
            "line": 285,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5f74602b-4bfa-4740-a091-ab9cd8f47d87",
            "line": 307,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/root/real_time.wqd.exi": [
          {
            "id": "a94e4336-7908-4e5c-8fbc-d996a01de95d",
            "line": 467,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bc8c1eeb-6662-4f74-a395-d4614dcd58eb",
            "line": 315,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ea47066d-db85-4164-96ec-3d9ba1f029a1",
            "line": 88,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5e042af5-d8f3-48e4-a969-2fa919b54e6c",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dcfde9a8-4d15-4cfc-b3fe-0069b3cc49d9",
            "line": 133,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "987ece54-4f7d-449a-aca9-4e76208ddbad",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "598bb38e-1505-4093-8253-ec82f352e429",
            "line": 326,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d6f79bf0-3d88-4f6a-bbfc-eb9992cbde8b",
            "line": 365,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fd9e3706-1d65-4d3b-b8c0-a4d649e38ffb",
            "line": 165,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3df22a5b-7297-4cfb-b7a7-4116599c6b43",
            "line": 238,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4363e87a-2572-47da-ad16-6ae093b6e2a9",
            "line": 412,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "57d7f9a0-7383-4221-9078-7fb75594bdef",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e321b8ec-b295-4ca0-9741-6b587061d70a",
            "line": 456,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6ad97569-6c54-4e51-a514-65a8d7e87cc7",
            "line": 326,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21d27f18-f855-403a-b8f5-769157d712e6",
            "line": 81,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1ae495f3-5cda-4d63-85e2-f214abc69fc0",
            "line": 378,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d3f6dc20-d4fb-4d11-a32d-2af4eeb9bdbf",
            "line": 35,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "32a0998a-60ce-4d5c-a5b4-d90f1e70877d",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "904645e5-531e-44cb-853b-42f5a0dc5282",
            "line": 433,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/local/src/indexing.wma.gslides": [
          {
            "id": "e060b522-998c-45eb-9066-6dc4ae87887a",
            "line": 107,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef85d3e1-6771-42f0-bb3f-4d5335d039d4",
            "line": 313,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5663a290-3b82-4bfa-b4d2-cb48424d37db",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f44a105e-27fa-4494-9a12-ee4c7f87492f",
            "line": 64,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8cf18e04-da25-4287-87de-27db06da06c1",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "395a7284-3b1f-4214-bcbe-aac40da7013d",
            "line": 458,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ac1ec488-ef11-47d2-abfc-33c49eeb719f",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "03cb0bb3-9172-49ec-96e7-1f06b0cb4af0",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e06b1e51-ed5c-48c0-8208-0b92c2887dab",
            "line": 66,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9f836d3f-8fe1-41fa-bab2-65367066efec",
            "line": 80,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e6eb315e-b6b4-468a-aae0-06f98d1ec193",
            "line": 320,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "873e2885-e2d2-4137-84a5-6978a8f36097",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f9a5c6bf-a166-4116-b930-1a3cee6e8ecd",
            "line": 236,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/obj/violet_monitor_magenta.sgml.ifm": [
          {
            "id": "01749a73-94a1-4752-9b9b-f81bf9509095",
            "line": 174,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "905897c4-3029-41e2-b1b5-7ce244fb7183",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c3d9016-98fc-4d18-ba0f-c79aa37d473e",
            "line": 190,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/private/var/villages.gxf.pl": [
          {
            "id": "67ca31b4-ca21-4b67-a229-f20120d5a0bc",
            "line": 209,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "13ecc8ee-b78b-4ef0-b2c4-a8268ec74915",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4728f47f-535f-41b5-8867-378d0c84aed3",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ba82c775-a6af-4b22-b48e-5284e0603462",
            "line": 142,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "da9cf15a-02d8-435b-9fa3-4b5464f10cf5",
            "line": 182,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "07cda773-00f4-4526-b8f0-9729c29faad0",
            "line": 199,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1dd55c29-6216-4dba-a836-3f9615b2e367",
            "line": 331,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/crossing_hub_blockchains.uvu.pcf": [
          {
            "id": "5ecf9da6-f971-4f17-bc19-d5783e9ea5d0",
            "line": 0,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ae7fa8b5-c72e-43f3-affb-070e5e3e4181",
            "line": 481,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "42c74e4f-9cad-44de-8722-ac1b4bab7842",
            "line": 334,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a02f0dfd-f672-4e39-862d-fe8f7958c6ca",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "77d87c84-2c5c-42aa-9239-fd25cd572ade",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8270c20b-6208-41a4-9b8e-b09676ae136c",
            "line": 285,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "494af6ba-2336-46b0-97a4-54bea237a3cb",
            "line": 466,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/private/officer_payment_computer.aifc.cdx": [
          {
            "id": "363c260e-8812-4ce2-abc5-eb8f3b4b543b",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "89a41c4c-8b89-4d61-8ab4-d735c6a322d5",
            "line": 320,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "01ff057b-217a-4382-9195-1d2743f13873",
            "line": 283,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "49009d5a-fbdc-4688-bc29-f27b5e222d41",
            "line": 331,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a731cdea-dcf1-4793-8563-8a77d5d76f3f",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7e2d94d0-9fcf-48a9-a71f-ef24bd154f0c",
            "line": 225,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e1f8eebd-8ed3-4c51-afad-d8dfd1d164a8",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/System/programming_islands__innovative.cdmiq.udeb": [
          {
            "id": "6bb84c0c-2fa0-45e2-8fc7-107c8753ce2c",
            "line": 8,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2b8528b9-04a9-43a9-a065-d29bf239ba9d",
            "line": 259,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1b2d74cd-f51e-4a20-9011-090a32a47f8c",
            "line": 186,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "40f60286-8452-4115-8638-7df487ebb26b",
            "line": 283,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "142a54c1-6e04-41d7-a0f9-3c009d3f2d34",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1da8ef04-e91d-4a0c-a602-2af99e3f2a5f",
            "line": 6,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9305be7b-c85d-4db3-8399-d2b50b206ad3",
            "line": 119,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "854d6bd7-9abe-4b98-9f21-996ccd3ba259",
            "line": 471,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cb908ca1-4130-46c6-9943-8b2ae96b4e16",
            "line": 188,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4cb85cb9-a070-4cd1-b7a1-833c0db7b8d5",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "85546ad3-5315-4adb-a88e-bce4c9188a73",
            "line": 230,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "45ee6f8c-59a4-4d94-a743-995e8405d2c4",
            "line": 243,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f841d9e0-6c18-4615-9f27-a18e4754fa58",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/mnt/afghanistan.sfv.luac": [
          {
            "id": "13088964-2f7c-4011-89ad-956f4eeeca88",
            "line": 273,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c07329c-c037-4927-8ed8-0efe957ed1de",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3168c132-1ce1-4045-a302-aca66183ffa0",
            "line": 385,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7a26b991-e225-46df-9bd3-ae9f02b9cc22",
            "line": 293,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "936e048e-32f9-4909-b567-cba420496ca6",
            "line": 113,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "abd35395-e89b-43a6-a616-895e205902e2",
            "line": 100,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f4d7a90b-e89b-4df7-ac01-618c2e02985d",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "13d6142f-771d-48ac-9d29-fe19534e7eaf",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "31c145ce-fee8-43c3-acfe-1f62b8850e7c",
            "line": 20,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea5f0148-2218-49d7-a700-a3629ef041d6",
            "line": 376,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "92c98d3f-59c0-454c-a0c8-1bc140b87c32",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6b6c950d-5185-4cbe-bab2-c59448732881",
            "line": 41,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1fede51d-8d8c-4063-a3e7-687eeafa9fd8",
            "line": 190,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "36d07ef8-6cf3-4396-85bf-86dda6634084",
            "line": 224,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1955a928-6313-4c1f-8c97-72f6f24de1f4",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1d909f57-e527-4b44-a7ed-cc8e07471d02",
            "line": 33,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5521c47a-919c-4fb6-9cc2-818de45e1426",
            "line": 362,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b163aa6f-94cc-4f27-a5e3-8c51b030e8b9",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Applications/metrics.svd.mpe": [
          {
            "id": "07dceab5-a80c-45ce-b054-8daf7131e3b1",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4044b211-bd9a-4862-9c23-db8f183cb6dd",
            "line": 142,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7ced2a80-3e05-4086-b5f2-899df0272260",
            "line": 269,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a7fde1da-c185-4a9b-b342-cf5034c296e9",
            "line": 235,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4576d8ba-13a9-4ccb-bef5-ad414878305e",
            "line": 189,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e55d8bff-952e-4be4-ad29-a660824f802f",
            "line": 3,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b8a600ae-5d52-4d73-a91a-d98a7e89d13c",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7428c74d-deaf-4d72-8e77-2b76499bc705",
            "line": 403,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2d5a56b7-a56d-499c-98dd-7b5f9d5ece8a",
            "line": 100,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/lib/quantify_granite_incredible.rtf.fsc": [
          {
            "id": "f8452955-cb35-4b20-b2b8-53dce5e3c7b5",
            "line": 427,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "03115035-4ec5-4a91-aa1c-f1daf5349721",
            "line": 450,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a3c3e1bb-b010-4e62-8926-6d6e8eb12245",
            "line": 254,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7bbd76f1-0799-4497-b0d3-fd838ca78b3b",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f42ae214-4b5d-4526-b4a5-8cce9547dd1b",
            "line": 107,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7081364a-e486-4cac-aee1-6b708cd6facb",
            "line": 197,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d794dd0c-d1ad-4634-a71e-515ff1fa48ca",
            "line": 128,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3b17e47d-4205-4dd8-b22e-39a5ba06dce1",
            "line": 134,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8db69bd3-00c9-4e04-9035-447a67a4345a",
            "line": 99,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f78e8ef1-f08d-431e-9d14-c3a16f8a4c98",
            "line": 101,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bbd30c3a-b2e0-4a8f-8b95-089458a4a4c9",
            "line": 122,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e419b835-60ea-44db-becb-4330ce82143f",
            "line": 32,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c4ab5db8-1c7d-4be1-9951-cccd02413084",
            "line": 369,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "33f42e48-871d-4921-9f8e-8dbb9e94e402",
            "line": 214,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "aa7265cf-6e9c-43d6-9e3a-9d9ff52a502d",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "23b15963-6e26-4546-9c75-af0c5b2fef2a",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "da636c0f-7d61-4586-ab82-a4dbe16e08f4",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e5876721-00a0-44a4-83f3-83e186d302b3",
            "line": 3,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6e95c33c-35dc-4abc-945c-911c80b571fc",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/public_key.gv.rld": [
          {
            "id": "686a68e2-0ad1-4c00-83e8-1d9a63e1f0ac",
            "line": 322,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6e9be850-cc37-4d85-8fb0-7960341c68ba",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e8c6df4c-a72f-4082-95e9-c13f79c092ab",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "53a54416-68d3-4f49-8eef-8a9d4b0b1c44",
            "line": 22,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1d048391-6ed4-43d6-8a55-b995f502660a",
            "line": 321,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "260a881c-06d0-485b-9821-10ed3deb8465",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dfb58d46-f999-442d-8620-1f26a3a8b2ee",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "37ba49ca-15b0-40c7-91b7-1d6a06edebe9",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b630bb13-b620-422c-af0b-0988d32c97e2",
            "line": 64,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "84fa798e-de95-4d84-bdcf-7628b00e5f59",
            "line": 166,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fef8da80-f89d-4937-8848-58ce6422e225",
            "line": 212,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-05T04:52:59.945Z",
      "totalRecommendations": 220
    },
    {
      "id": "00e49b0a-7780-4827-9390-9f1e2237026c",
      "name": "system-copy (ccabc94)",
      "state": "2",
      "finishedTime": "2021-07-05T15:26:40.412Z",
      "recommendations": {
        "/bin/applications_granite_consultant.ipk.otf": [
          {
            "id": "77d2f2e9-ad81-4db3-8537-c2f22fe0d259",
            "line": 29,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7e42e4cc-ba90-49bc-98ff-3abc5327842c",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/defaults/granite_robust.stk.mpga": [
          {
            "id": "7854c2a8-2a2b-40f2-80fb-9330c9296113",
            "line": 168,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f4902a11-0d8c-468b-bc42-2c766f57b201",
            "line": 480,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a988a8a4-e42d-40e9-9e69-1282f20fbaf3",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9f8ec1f1-bd92-4155-96f2-c9ab2ed4b62e",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6fc540e6-56cd-4c4c-86e1-18b84e09a00a",
            "line": 101,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "24ce23e5-602b-4738-bf85-7e545742e11d",
            "line": 380,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/mnt/payment_transmit.irm.uvu": [
          {
            "id": "8d20eb28-e340-4048-b33a-044c8692f4b6",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ddb5eb69-d523-447b-9e84-b2d0a10b49cd",
            "line": 439,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eb19ea69-14e3-4c54-93f9-8ce99e65640f",
            "line": 220,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f45e72c7-e9b9-4abb-9371-44a4d580c99d",
            "line": 357,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/var/corporate_fully_configurable.hpgl.xlf": [
          {
            "id": "cc7b2d85-3776-4831-ba52-941b4c16fae9",
            "line": 206,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "32c358b6-9990-4133-bf2e-2771930c9875",
            "line": 284,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a224f361-d2d4-486e-a24f-fd0926ed6f32",
            "line": 397,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "55798d90-e342-4ce9-9e53-a1e0535e0476",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a9846ece-6aa0-4d45-8222-285797819a05",
            "line": 188,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bdc15dc5-a756-495b-b649-9c8737c15fe7",
            "line": 434,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cc90f496-9f10-44af-be2d-34b3266b00c3",
            "line": 78,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3d242ad1-40fa-4206-b076-37d01313f4db",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/tmp/analyst_electronics_dynamic.cdmia.3dml": [
          {
            "id": "b9c7bb2f-396c-4aeb-9cd0-3407d3cd5dd4",
            "line": 138,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d54e4c7b-cee2-4373-b95b-15a69581474e",
            "line": 457,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a25420b3-d173-4e48-894c-066bfe7055be",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d4458bc3-329d-4c38-817f-e2e6b3e4255a",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f1235961-d4cf-44fe-90b8-a46beb40a271",
            "line": 282,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9c5457c3-f85e-4348-8d7e-f26c3aab44b6",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "175f12c9-6632-4ebc-b0bf-c747a0fc7c35",
            "line": 188,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "01cc8043-3813-48eb-88f6-e2e9e57d7439",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "76dea948-04cb-4eb3-8cbd-c853af3d9214",
            "line": 155,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7f5fb01b-e57b-4b05-845a-de17d1af4a4e",
            "line": 8,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/local/src/hacking_neural.tsd.m3u8": [
          {
            "id": "61b5f698-ecfa-46a3-88e7-2980c70ca266",
            "line": 113,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "981305ec-2f9b-45cb-b4e1-05374577efc7",
            "line": 23,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b15b41a8-8649-4993-bd80-02b654f38dd9",
            "line": 134,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a251691f-aa73-4288-a0d0-d93456815c18",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fa5d45a4-e864-4e97-a608-f641aa7bce4f",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "803f1f8f-26f0-4566-b59b-3d584fed7980",
            "line": 421,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1fc5724d-1993-44f7-988d-6c108705d870",
            "line": 56,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b66bb662-ee08-42fd-9a0b-e563a6ff8887",
            "line": 406,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cbe135a7-3998-4f74-bc5a-85d1dd007b8b",
            "line": 411,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "59e2ee28-bd52-4f6b-8d16-bd50bb2f86ed",
            "line": 206,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3ec4a6ff-c1e7-41b8-af75-1d672a2ee0be",
            "line": 279,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "12d3323b-1bfc-4118-922d-435915c42f52",
            "line": 95,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "39f1f3c7-3c5e-4a73-bc39-7c9d55a72eea",
            "line": 155,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5de20c1d-e889-4945-b9b0-ab3e489b0579",
            "line": 124,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bf88ada5-58a7-46c2-864c-c35cfd2b6558",
            "line": 398,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a2517fe1-e1e9-4a29-b2e6-79d65002944d",
            "line": 62,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8bea2b29-d727-4386-b534-0b61ebd8d396",
            "line": 121,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Applications/com_input_adp.unityweb.kar": [
          {
            "id": "4da3149f-7f1e-4dd1-b523-0227bc833a60",
            "line": 231,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d83a83ca-e222-4879-9388-6028bd33067a",
            "line": 136,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4e34f831-9ef5-4d24-b0a7-511c21b57787",
            "line": 219,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/tmp/adp_bandwidth_station.swi.mbk": [
          {
            "id": "a21d989c-10fc-48ad-9b7f-c3f13f660868",
            "line": 416,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ced7855d-4174-4446-879e-5c93a24b9ec5",
            "line": 221,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b4c3fcf3-b909-4bc2-9de6-c86b9a49e677",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c66638f0-272c-46e3-a4af-f9097cfd9606",
            "line": 499,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2cb62c97-fbe0-4431-b3f7-a585fe9f266b",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ee0a2ee0-2d0a-44b4-bc9d-020afc64fa04",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dfb1967c-7bca-4434-920a-2a6c43ec1162",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "92a204b1-95ce-421a-a68e-1593504c0c76",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7cb301fc-1d2f-4f8e-94ec-634c0fde6dd5",
            "line": 288,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bdc1abb3-2242-4592-810e-2eeeaafcda1b",
            "line": 416,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "105fa5c3-d170-40ce-af67-1794a69a4ad1",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9a626b20-8db5-4103-a909-babfd00aee45",
            "line": 94,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f3e0e173-2e29-444d-9617-19159ed65ec3",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6c667669-46ed-4330-931e-23e3c04edfa0",
            "line": 349,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f4930d06-ccda-452d-91ce-a95348d79513",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Network/new_shoes_shoes.ppt.xdp": [
          {
            "id": "7d529aa7-36c5-46ca-8efa-224bbb6113bf",
            "line": 177,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d5c6fe6b-94ea-4bee-9493-7e86e8ffa639",
            "line": 499,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2c464ada-cd80-4e27-b897-2a4dff0b9c3e",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b8f1d3f2-9af4-432e-b72c-82c3ef96f3bf",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d1ff67d7-9011-492a-b608-5123899032ab",
            "line": 90,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a8b5a5c1-0cff-4cc8-b1c6-fba78022deb9",
            "line": 105,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "003296ef-f881-47d1-bd0d-b2f006a38e5a",
            "line": 193,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "27ad4d49-9998-4a3c-87fd-eae2d879145f",
            "line": 123,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fd205eea-c646-4c4d-bfd7-7a06e73253d4",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cfe00e02-d499-4e83-94c6-d0d3f827acf5",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "00911366-6180-40e2-bd00-cbf7e587594e",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c59a95d-6dee-479f-8f5e-6619f9983107",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7354d207-3e48-43df-a8e8-4b42bcf94599",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3e2899fe-ef58-43b2-a9dd-eab44573f8f6",
            "line": 28,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0593f490-fc0c-4be8-a434-62a2c8609708",
            "line": 328,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "350d753c-ccb3-4c82-8512-caeaf9ab7e3e",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8cd0eee2-350a-4008-bb57-9c00e7c099ce",
            "line": 165,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/opt/island_loan_automated.php.bdf": [
          {
            "id": "359e8b64-d08a-44e2-b1b8-929764d70aa9",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "537220c6-5bc0-436e-9998-bb258d14ffd4",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d07edbf0-fee0-4589-9e5d-6f87cd75f092",
            "line": 237,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d3e1b2f1-0b6e-4e7b-a9f0-2c49e324d41e",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7bd36a1f-925a-4e45-91e3-d5c23f9ce530",
            "line": 165,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "58671393-e506-40ec-bec4-e3ff7bc92b2d",
            "line": 149,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c9197fec-58b7-4161-81d7-1c7b54466a18",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e5c30dff-dbe8-424d-bcde-bbd3322b0244",
            "line": 215,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d9b01660-36a4-4c8d-a994-41f46abccfd7",
            "line": 386,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2a80dacf-0629-4989-ba3f-e8f1c467dd1b",
            "line": 321,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "133a0580-edc9-43bb-b077-0e455654e00d",
            "line": 155,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7f8ace75-a67f-4f38-bc25-60f611d2b40f",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a526c66e-601d-4984-921d-8995ec8ccf47",
            "line": 79,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7f8587c0-a1d0-4422-bcfa-cc1923532d12",
            "line": 97,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "88f0c03b-aecb-450f-902d-14f1855e94c1",
            "line": 67,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c0374ef8-25df-4d1e-baad-8411e589da24",
            "line": 389,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/tmp/industrial_standardization.xvm.mcd": [
          {
            "id": "d724b9e3-51bd-4dcf-acf4-ad3bf534a7da",
            "line": 43,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9ba42783-b6a4-4fcf-b524-f2b859eace52",
            "line": 415,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6cf444cf-39c9-417f-9475-56198589ea2d",
            "line": 70,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fb95919e-0963-4e4f-bc9b-40c74be506b3",
            "line": 335,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ]
      },
      "startTime": "2021-07-04T17:12:11.549Z",
      "totalRecommendations": 102
    },
    {
      "id": "bcb8a7f3-9ccc-4f86-8b8d-9b6370b93a7b",
      "name": "transmitter-navigate (e3b0f6f)",
      "state": "2",
      "finishedTime": "2021-07-05T19:39:48.163Z",
      "recommendations": {
        "/lost+found/program_rupee_station.kar.ma": [
          {
            "id": "b652bc06-2a38-4b5d-adb0-94702d20bdb9",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "351e5b5d-77d9-45b3-bd7b-bb9d653e6da0",
            "line": 420,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1e605315-f450-459b-8fe6-39326063835f",
            "line": 212,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "65f1a302-ff9a-4362-b7f5-46df3647bc31",
            "line": 196,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "150b69fd-b0f0-4874-a055-6c0c93c47765",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "34d52849-c943-4757-a027-6174fded46c3",
            "line": 24,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/bin/steel_mission_critical_account.mov.potm": [
          {
            "id": "d8a27949-5d7f-4bd2-85c0-92168b557e62",
            "line": 156,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "986f1ce8-07ec-41fa-ad4c-bf512a772c4a",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7a604305-c71c-4309-b699-77742134d587",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "69dca1f6-84a7-4c3d-91eb-8334493d7408",
            "line": 84,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e7707815-1539-407c-b80f-75958c9bf624",
            "line": 29,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "88ef07d3-fd9a-4433-aadd-c918bfe0be71",
            "line": 429,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Users/triple_buffered_tcp.p8.csh": [
          {
            "id": "4d2ecb60-5a30-4ba7-94cd-43fd36f82095",
            "line": 21,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc47e5a7-48d4-401e-bf43-f660172bc290",
            "line": 328,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c47ce945-0aac-4bb0-a9fe-678c7427c002",
            "line": 99,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "24b337a2-12e5-4666-8e08-81389c54d13b",
            "line": 201,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "46dbb7d1-192b-475a-bdbd-48e41be8d872",
            "line": 476,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "91801ff9-1219-4722-b813-4c706f907866",
            "line": 321,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c6a73ef1-3eb1-4aa5-80db-74e45456f18b",
            "line": 29,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c27fa277-aaba-4f82-9ae5-ff419b00c3a1",
            "line": 311,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fdadd39b-5f30-4327-b28c-4c5eea7cd92f",
            "line": 197,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-05T05:16:25.063Z",
      "totalRecommendations": 21
    }
  ],
  "pendingTasks": [
    {
      "id": "b10c8f84-a6b0-4278-ae9e-97e7dfec0860",
      "name": "circuit-back-up (8c47a98)",
      "state": "1"
    }
  ],
  "runningTasks": [
    {
      "id": "ad0ddc6a-d47c-4925-ab4a-cfae8965558c",
      "name": "pixel-calculate (2cf4554)",
      "state": "3",
      "startTime": "2021-07-04T15:38:32.759Z"
    },
    {
      "id": "37815d9f-b164-44f1-a769-0f1f7ee08f3f",
      "name": "capacitor-navigate (9a27007)",
      "state": "3",
      "startTime": "2021-07-04T10:52:51.244Z"
    }
  ],
  "description": "Placeat delectus tempore est debitis quis et ad qui. Iusto blanditiis rerum. Nemo maxime dolorem consequatur delectus placeat.",
  "id": "Koepp---Collins",
  "location": "https://github.com/lug-bot-api/microchip-back-up",
  "name": "Koepp - Collins",
  "url": "http://tiffany.name"
}