module.exports = [
  {
    "completedTasks": [
      {
        "id": "52af2c91-5798-4ed5-82a9-de2fae5a1662",
        "name": "port-program (e67ec94)",
        "state": "2",
        "finishedTime": "2021-07-01T13:15:16.672Z",
        "recommendations": {
          "/usr/local/src/withdrawal_uniform_challenge.asx.p12": [
            {
              "id": "950741fc-ba3e-4ea3-b66e-f3dbbd0e5d34",
              "line": 93,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "073c7bbe-e9e0-45cc-ba73-042eae4136b6",
              "line": 459,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "360b2772-cf16-407a-92c5-d7be45022ad3",
              "line": 234,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "4fa0d1aa-5a15-492e-bfc8-29232d87c2f8",
              "line": 480,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5a54f483-57b0-44cd-8f82-668120cef3a1",
              "line": 129,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "158594c0-2b7e-409f-b2ea-065d6c835104",
              "line": 116,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7ea24b23-7903-4d3a-938d-c63072d7429a",
              "line": 75,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5a165317-b10a-48e9-9349-38a18833bf0f",
              "line": 375,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b37fdac1-d49e-48e1-882e-2591e7463d9e",
              "line": 81,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "58c94c7d-6eed-4af5-84af-8dd4dfedbd74",
              "line": 387,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "25f4f575-eeed-4374-817b-ac7a944d3f82",
              "line": 170,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cd16bc22-4ccf-495f-9e0d-6e733cd01867",
              "line": 267,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "71008b06-260a-48e6-a3aa-4b5f14e7d7e1",
              "line": 370,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d587b087-3536-41d9-a6a8-a8549a6a2463",
              "line": 275,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ef728ce8-1edb-475f-91e3-1cddf34233dc",
              "line": 181,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fe64fc06-62f0-4c62-9b79-748e6ffd932d",
              "line": 3,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8039976b-4271-43bd-87b1-f6f95b155eb7",
              "line": 251,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "99bf6e7d-08bb-4cc4-a85d-735454d5099e",
              "line": 80,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ffae341d-029d-464c-801c-2bd3ea37fb60",
              "line": 326,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/libdata/global.m21.zaz": [
            {
              "id": "b4fba43f-1d59-49b2-ba93-3fd668caa01a",
              "line": 457,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ddd1546c-66b9-4bf8-a813-8411ce09f8d7",
              "line": 381,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cfaa43a0-96e6-4d94-9cc4-0fe37b45ec5f",
              "line": 459,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d3e73c71-0935-498e-8330-87286f8af762",
              "line": 20,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/sbin/soft_teal.fxp.atom": [
            {
              "id": "ecdd77ae-d5a1-451b-a3d8-96bedf143489",
              "line": 187,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "66b5e2d6-7626-4b9b-93a7-cd1594f6f527",
              "line": 323,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c41e3b69-0f3c-4ab8-b987-4a3e1c3ed5af",
              "line": 40,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/yp/copying_open_source_open_architected.rms.p7c": [
            {
              "id": "a233d80d-9d59-4c2a-8191-84490b5be765",
              "line": 372,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b406e8eb-1937-450e-9b33-5a41bdc61e0b",
              "line": 227,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c749bcd7-bf31-4edc-ab85-b1de04362f0e",
              "line": 65,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "63066f14-4b8d-4c59-a09f-1c5d10baba27",
              "line": 194,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/mail/hong_auto_sdd.rms.icc": [
            {
              "id": "22dae4df-7472-412f-bfcd-f1d1b5d7e3ea",
              "line": 352,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b51d49fb-70ca-4684-8dc5-2dbc82eec77d",
              "line": 315,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e042db62-dbe9-4e44-95bd-40e7dbf51e34",
              "line": 193,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ceb500c7-c9a8-4d5f-97cc-bfef77358122",
              "line": 248,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9184a9de-e6ed-4ffb-a399-1c2b7755dcfd",
              "line": 179,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1583dfcc-ba9a-4e52-a78e-ed71788f81e1",
              "line": 1,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7b89a83b-29f3-4300-8ce3-da41fdf55b1d",
              "line": 41,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "209a3c91-4e86-4579-a53f-0268ef4fb702",
              "line": 324,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cbe6b228-1601-4823-b151-93ab6bbd12f0",
              "line": 223,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b8a7b868-b48a-4f47-80e4-4a3f9dbc8b42",
              "line": 407,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e2d14847-7154-437f-a1fe-973218df853f",
              "line": 461,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f29df3a2-25d1-4170-a41b-95266ac5d30d",
              "line": 26,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a6db911c-7088-4158-94f6-7a1d7e663fa2",
              "line": 265,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/rustic.p7s.xpr": [
            {
              "id": "04a050da-7088-4643-afd7-e84f7ce21bf0",
              "line": 347,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "483afbd2-0794-4cfe-ad41-ce39c3a7047b",
              "line": 290,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "947742f8-2492-455b-a3fb-314f3e9f0c4e",
              "line": 128,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f2089ef6-908a-4dee-9eae-623313e2cc0b",
              "line": 249,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "31b0062e-65c0-430c-a93f-3659ad7a980f",
              "line": 438,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c8d521a4-476d-4dfc-8bdd-9ddd3dc51374",
              "line": 346,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/rescue/credit_program_deliver.log.uvvd": [
            {
              "id": "3b8aab93-9b3f-44ab-904a-19548bd464cb",
              "line": 258,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "97cb7436-3fcd-4ba3-8602-21019d683ad5",
              "line": 381,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a2acc41a-de9a-4483-9214-54baf17ffae7",
              "line": 161,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1281fd40-8b79-46eb-bf79-b4da137cbc91",
              "line": 379,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3a31bfda-974d-4b07-8d5e-81af62bc8c78",
              "line": 198,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "50f54db9-3af7-4f26-be9e-d9292d1aa5c1",
              "line": 82,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b1d17fea-4d7c-4092-bfd1-79b85b676e0a",
              "line": 311,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d93cb2a1-2259-4e9f-9e64-9df2cf4ca7a0",
              "line": 466,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b8983ff9-9365-4a0c-b03b-34e738759559",
              "line": 322,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f7aa33a5-4a7f-445d-b4b9-e2bb231f3735",
              "line": 489,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "21a6dd5f-2840-4ef2-833a-bbb83cafee86",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "80a701e3-f1e5-4368-90de-e7f437602e14",
              "line": 125,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "56582dfc-1e80-4800-ad76-3afcf4179c39",
              "line": 420,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/root/implemented_account.ghf.cpio": [
            {
              "id": "e1f58350-d488-4de2-8869-498201844af3",
              "line": 53,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1d13f5e1-4599-4ee1-bbef-49c9d2ca25f4",
              "line": 10,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ba1d481f-0eae-4ef0-aa6f-2cd5df08fe57",
              "line": 21,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0148f084-1213-4498-84b4-b6a63780b575",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/bin/enterprise_wide_new_direct.karbon.rtf": [
            {
              "id": "0a940bcb-35a4-4ee0-9a27-2e596053a05e",
              "line": 197,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "90769fdc-f440-49aa-811c-fe6fb8a7cf0c",
              "line": 401,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1a8c6fa0-75bc-42fe-8d56-5c15cc24fbd0",
              "line": 327,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "914b6d51-5a8a-41ef-9e7a-528721ef3ef2",
              "line": 126,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a235a8be-7db4-4769-ab9f-930d9eba8bf2",
              "line": 319,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "59146773-ee8e-4720-95cb-4ddfd45d5961",
              "line": 167,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d20510f2-d776-4e2f-ba25-da8e95c8fce7",
              "line": 101,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "628f4a20-2a8e-46d5-a45a-44a15eae6b9b",
              "line": 283,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e3167ddd-9c64-48c6-baa8-29063fc44672",
              "line": 230,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bab18c80-e074-4c66-8465-ce3ce3d4d4f8",
              "line": 189,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e8d2bacf-76a9-4f43-b799-b50fa5841568",
              "line": 12,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "fe61afa5-66aa-4d7e-8264-7a2c0cd32aa7",
              "line": 240,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "61737550-c3fc-4e01-a09b-269f9a3cea42",
              "line": 180,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ba8f85cb-e9f0-45a1-a327-79b574029872",
              "line": 49,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/lost+found/neural_net.rdf.def": [
            {
              "id": "e200bae1-e206-4b2e-a2cd-1aa40708965c",
              "line": 282,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "804a4a3c-76d0-437f-822b-8f909a9daaca",
              "line": 69,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "73081a3f-29b4-44b8-8866-0afe4e501953",
              "line": 289,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b9fc7da0-5908-4615-a325-cf3b0edb9f90",
              "line": 499,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "32893f67-7e18-4635-bfb8-c015c1207a55",
              "line": 31,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7e0f4f13-01ff-422d-aaf5-39075687f729",
              "line": 312,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "151c14da-7366-43a8-aa54-eeb699a060e3",
              "line": 75,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a00ad669-5ebe-43a8-8bc8-2e8f44822d7b",
              "line": 141,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e8cf27a0-4169-48bc-9aa0-a877fa3e2b2b",
              "line": 493,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "740ae8f3-273d-49dd-833e-af2e46a00807",
              "line": 40,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "bcaf1bb3-25c2-4542-a120-f47577a38334",
              "line": 320,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "40a7c6b3-924b-49d5-869c-b32262793c7d",
              "line": 388,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "473ab93c-ea77-47b0-bd42-3002089688fc",
              "line": 184,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c796fccc-5d6d-4a98-8aed-b579d9939f3b",
              "line": 33,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a37b25fb-c5fd-4980-854b-9163b8cc5b19",
              "line": 211,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "42a26864-d98e-4ff7-b3e9-db5708e1c1d9",
              "line": 347,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "23b54031-ec80-4dd8-8d5c-23824e37cf84",
              "line": 262,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "84e0c443-f749-464e-bb8a-8d4e251ce6c8",
              "line": 309,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "68e09027-3dd3-427f-b677-5128ee09ee87",
              "line": 449,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/sbin/backing.wqd.msi": [
            {
              "id": "0203e85d-c457-49b0-b3e9-cff680601fd8",
              "line": 41,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/private/incentivize_e_markets_buckinghamshire.nfo.png": [
            {
              "id": "454603db-b6f0-4458-a04f-98e74bf6e29c",
              "line": 247,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "774dc150-fb67-40ae-af60-4978c71af47e",
              "line": 146,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/lost+found/payment_channels.uvz.ms": [
            {
              "id": "5778501c-e82a-4905-8084-7d8de26acbb1",
              "line": 342,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ]
        },
        "startTime": "2021-06-30T16:06:58.933Z",
        "totalRecommendations": 103
      },
      {
        "id": "a3473638-c5cb-4b21-a3d5-25dcab74c563",
        "name": "microchip-transmit (f3a72b6)",
        "state": "2",
        "finishedTime": "2021-07-01T16:30:40.887Z",
        "recommendations": {
          "/etc/defaults/tertiary_tasty.fli.snd": [
            {
              "id": "7393214e-e3f4-4048-a15c-e5bc613857e5",
              "line": 11,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ebaac88a-e1a7-400d-b412-ab0401d7f15f",
              "line": 176,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "41bfbe77-9324-4eb4-8c84-ad68d369b709",
              "line": 99,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d6e34cc6-cb52-44bd-b52a-48dc53a238e2",
              "line": 480,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7e0b3f1e-59b5-43f0-8108-62711fa26af2",
              "line": 60,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "36e269a0-c362-4dc0-81d8-ea7565281a9b",
              "line": 357,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6ae6d350-602a-420a-b9b4-1c6d89d00e1a",
              "line": 308,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5e48a0bd-fb3e-4be5-88fa-dd6f23b10937",
              "line": 300,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6596ac9c-b8ff-4f23-9deb-a6b3c985912f",
              "line": 33,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fd8bc0dc-7fef-4791-8017-d8133a561b52",
              "line": 389,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "138fb018-b9e9-4572-bda8-1d48d5dfdf28",
              "line": 403,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "dbd77242-f58a-4f3f-8049-15b88244c343",
              "line": 82,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8b86eaf9-f37a-49f4-ac77-fad64bda323c",
              "line": 189,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "77b5dff3-e9f3-4e3e-9303-21cc4ca05bad",
              "line": 84,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/usr/libexec/leone_service_desk_initiatives.skt.pclxl": [
            {
              "id": "f5200757-9fd0-44f2-a4a0-0f8c06e91172",
              "line": 388,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "200044bd-c6d3-4cdc-8fe2-dfbcbba9036b",
              "line": 282,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "32abfc15-a7e0-482a-8896-ffc729d8007b",
              "line": 92,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "434a0531-1498-4586-9cb6-17591c6f2d7c",
              "line": 100,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8e9af4a2-4cea-43ae-adaf-936b3e73e22e",
              "line": 175,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1ce10f37-cb6b-40fb-b0d2-99e63eb7ad8d",
              "line": 470,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8bc1eaf2-5086-4e51-8bc2-843f55fde8cd",
              "line": 244,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a95e7913-5541-4578-822a-68e927775dd0",
              "line": 142,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "96436d5a-19f2-488e-8b18-03cc22bbc017",
              "line": 219,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c59f2fbe-de95-4960-a006-b6922be2523c",
              "line": 176,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e1c33709-6fde-494c-a4d7-81f2856feb68",
              "line": 39,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0a44f7de-ff6d-46e3-ba9e-2569d7af87d6",
              "line": 492,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3dbf2129-09c7-4ac8-9141-956858854b39",
              "line": 125,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1e7b1b0d-3f02-4a5d-ab33-6942989e5202",
              "line": 25,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "690da9f7-41f7-478a-a72b-623a5e2186b3",
              "line": 336,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f47c45a1-b105-4da6-b717-51981aac317a",
              "line": 425,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0d641c37-2d79-4dba-876c-86480fc9ff1e",
              "line": 213,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/spool/multi_byte_sahara_chief.vsd.mbox": [
            {
              "id": "b5936489-e5d0-40fe-8acf-1318b224b738",
              "line": 326,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5a2381fe-bb56-431e-a138-0ee8c201a6ff",
              "line": 74,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1e35711a-ed7f-46af-ae35-a2e137e336ed",
              "line": 245,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4bd9bee1-1762-4b8e-b7d6-6a41b9e45d91",
              "line": 269,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/home/user/dir/shoes_methodologies_creative.elc.iota": [
            {
              "id": "40e9f6b5-e6dd-4715-8bd3-b3a60fb837a2",
              "line": 224,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ccc6198b-4353-45c3-9312-bd829895e7d0",
              "line": 136,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5ed00726-29eb-4396-b28c-e47ba94ca2e2",
              "line": 172,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "21a2b346-b77c-49ab-b507-48ee9d2e8c14",
              "line": 340,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "36720666-5e68-4789-90a7-7da8978b6092",
              "line": 4,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "c4205eb4-bda5-4c2d-aacb-eb79d224bc62",
              "line": 411,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "16923cf7-bdb0-4354-b39b-70c077d2a2cc",
              "line": 313,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fb60913b-70df-4f63-9a7c-3e59628e784b",
              "line": 395,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0e195590-db90-4e28-9c89-701ea33cf599",
              "line": 172,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "087e7b70-0e9b-4618-bd45-a20032a30600",
              "line": 41,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "67be7f7b-4252-4cf6-a1f3-d0cbac97e5b4",
              "line": 386,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "91e46ac3-7cd5-4d9f-a9c5-ff8ab6007a56",
              "line": 237,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3ef92c27-9201-4750-a070-2f883ac0c500",
              "line": 295,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "63ec4b0d-0601-4b48-94ed-875c572a1cba",
              "line": 47,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "758d71fd-7eaa-4d37-9e2d-efbbf359f7ea",
              "line": 104,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8c779a00-9174-4aee-825c-3019913255cd",
              "line": 393,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/sbin/auxiliary_jewelery_garden.c4f.mbk": [
            {
              "id": "412b8180-a726-4708-8d5a-9fbf24304dcf",
              "line": 400,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cb1e7dee-47d4-4401-bb7f-ccf866ae0e71",
              "line": 298,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/yp/clothing_wooden.acutc.h": [
            {
              "id": "c80e6464-5762-494a-840d-fe28f01340d5",
              "line": 481,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "222f3c85-4119-4109-8a69-8fada845231e",
              "line": 397,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5dbaf21e-5b93-4e70-8cc6-dc4c19d0afa5",
              "line": 225,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c98add47-01ae-4218-8028-f4cf9e798ee9",
              "line": 451,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6e2b4919-d74b-4e89-8884-5933ca2dca54",
              "line": 465,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ec2ba4b1-f80a-46bb-a765-7b8f9c93b0db",
              "line": 220,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c006803c-5a36-48c5-86a0-ac3cd13abe82",
              "line": 15,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "aedb662b-6cbb-45d4-a524-7b014f7548a4",
              "line": 268,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4ddf1d2e-b9da-441c-a3aa-c88bcef06cc1",
              "line": 268,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "655e2dbc-c7d1-4e53-bd04-5746212f00b5",
              "line": 465,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5f8cf528-9484-4e78-be55-0af610200816",
              "line": 30,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "bfc28317-3989-4bc8-abf9-75b3de8681e5",
              "line": 400,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "833b84c7-dd5c-4f4d-afaa-2bd454984801",
              "line": 9,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7cb1f828-971d-45da-b37d-d88521ddbb2f",
              "line": 308,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c6036db7-eaee-4a56-a6eb-d3c1b46c0280",
              "line": 171,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "af387f3a-b699-40ea-997b-8a605897cc6f",
              "line": 17,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "48f79112-bf59-4499-838f-a91df44c5ccc",
              "line": 147,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/home/user/bandwidth_granite.vcd.plb": [
            {
              "id": "236893a8-585b-4505-ac4d-f4645db5a45c",
              "line": 408,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cc0b9200-a563-4f67-9e7d-86c20ddc0e0c",
              "line": 250,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "38678c6c-026a-4b2e-b993-b580cb748264",
              "line": 465,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1af759b3-89b2-45b6-b9d5-a8a1cbd303db",
              "line": 91,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "68b3a3f3-cfb1-4dfe-8f3e-8e7cfb962b73",
              "line": 221,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "65b68635-b939-4a33-811d-c5a58be9831f",
              "line": 300,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ed7edebd-8c5d-42dd-8d74-8eb27c0db350",
              "line": 243,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "a1d9d489-1688-4021-8639-814827001127",
              "line": 76,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "03e24d1a-495f-4343-83aa-b6c6a0d72bfa",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "dfbbf6f7-5728-40ec-95f6-ff0d4b1a92f9",
              "line": 421,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "39feb38b-5730-439b-a2c6-6890ba03d399",
              "line": 68,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "80479e49-6cee-433b-9f48-272d71092d68",
              "line": 307,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b4024eb8-5602-4426-b754-69d5750ce8e5",
              "line": 22,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "12b6b1c0-ce51-4e64-8a28-c96a64479310",
              "line": 413,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ]
        },
        "startTime": "2021-07-01T01:41:39.360Z",
        "totalRecommendations": 84
      },
      {
        "id": "b871005a-52ca-4554-b198-b7430375c9a6",
        "name": "alarm-override (e9c8ba4)",
        "state": "2",
        "finishedTime": "2021-07-02T04:37:11.980Z",
        "recommendations": {
          "/var/tmp/loan_vision_oriented.nml.mml": [
            {
              "id": "81c1bc06-43a6-4fd6-ad3c-b559a8b8c585",
              "line": 50,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "90bb5b7f-0bd4-4813-8045-190718d92b10",
              "line": 23,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "314ef15d-1c25-4e9f-b082-39a98f2e6129",
              "line": 444,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f23bfa76-9cd7-4f7a-a293-80228e84a2b4",
              "line": 290,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/var/viaduct.mid.obd": [
            {
              "id": "c41d5685-68bc-477a-9f6f-886a780c24ae",
              "line": 317,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5a8212be-89c7-441e-9a33-22a3333b83b0",
              "line": 121,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2c2d8044-07c9-4f70-b2ea-ad5aa1808dd6",
              "line": 126,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6908fd33-5094-4322-b4b8-3a3b42e1f399",
              "line": 0,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "31ab1e3a-26f0-4f22-bcf5-052659f4f88a",
              "line": 104,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cf10c0d3-b827-47d6-aced-b428e6b47a63",
              "line": 481,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d5b67443-a8e0-47e9-b5a4-e5b43c481a52",
              "line": 44,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a41a2854-c724-4481-993d-71236d05de15",
              "line": 383,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "da4107c5-5eee-425b-ad21-cc319d2f768d",
              "line": 121,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "592cd7c8-dc22-4bd1-a96b-c4d97d9e9231",
              "line": 255,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9240aae0-77c6-4383-88f7-9e00aa907f01",
              "line": 339,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "c670f5fc-48f6-44cb-ad4d-3ba61e0e2a5a",
              "line": 402,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/mnt/sports_monitor.x3db.msh": [
            {
              "id": "3a7c6179-0fdc-4875-b27a-40fd4a16dcca",
              "line": 32,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0d5ba24f-7f4b-4892-859d-ffbc03597971",
              "line": 17,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7b33cc2b-72a7-44bf-9f75-aaed092cb889",
              "line": 94,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "94bd56c1-4301-4a85-9ddb-9003eacd9c62",
              "line": 402,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "21a4e82b-fabb-4008-8f2f-5dfcfa2106e6",
              "line": 496,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ec6e0f7e-df4d-43c1-a6b0-89abde62150b",
              "line": 96,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2516ca57-dc9f-47d1-ae10-db249ac9b2d5",
              "line": 113,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5c453820-beba-4740-beeb-495eadcdd246",
              "line": 109,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ce4a7f1a-9df1-478e-8099-a65496fd9737",
              "line": 214,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9f03ce13-f7b6-46fa-a037-fdabfe6b920b",
              "line": 293,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/opt/lib/withdrawal_invoice_withdrawal.mp4v.ivu": [
            {
              "id": "16b625fa-b8c5-427c-bc78-da551af9f000",
              "line": 255,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "bad64d88-7750-46ad-af48-2c64e966db63",
              "line": 467,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3568f80b-03f8-44e8-85fb-f7a05c9a0e16",
              "line": 186,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "412b7c87-a232-41c6-80c2-33ac9f6c33a8",
              "line": 299,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "21d11f51-1a54-43c8-9d17-dfef1b3ced63",
              "line": 162,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "4def000f-b06c-40aa-b316-83559e3676da",
              "line": 342,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "45fc6a1f-8bbf-4570-a410-2201e19730e5",
              "line": 465,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "50ba1ebc-509c-40c0-8736-f17cc3b61aa5",
              "line": 154,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/sbin/leverage.esf.ifb": [
            {
              "id": "a711ac8b-8180-4ffd-8be1-e8e7b7483a6a",
              "line": 241,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c4290320-2149-4674-b884-7f2ba539a376",
              "line": 447,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c2c716bd-220d-4efa-bd8a-e81fc9808258",
              "line": 310,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4934b788-1283-490f-8019-d5a0ee03eaf5",
              "line": 384,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "56f54c62-8c08-41f8-8454-588800b3b793",
              "line": 4,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7e3cc3e4-4886-4c0c-81ce-c5d0e3118096",
              "line": 336,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "85fd1402-6021-48a9-a1f7-916161b24e22",
              "line": 452,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3639bf1d-87b8-409a-b3d1-7bc357ee5599",
              "line": 93,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "237c4a67-d835-400f-82a8-59f102551405",
              "line": 125,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4a940b74-d868-45c1-84f0-2a14bfb3062a",
              "line": 3,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b3c556e6-4fd7-42ae-96e5-c6700260f2c9",
              "line": 279,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/share/one_to_one.sis.buffer": [
            {
              "id": "9d0a071a-91ca-4053-a42b-b7a5c45c4bb1",
              "line": 468,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "cb688a4b-0b2f-4d77-8529-f14205985fa3",
              "line": 415,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5590c8bf-9262-42ba-b824-e996c2eb1d29",
              "line": 345,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "68868cfe-a645-46b3-b378-a1754b5b4485",
              "line": 158,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "add444dc-aa65-4154-a267-c1d878e7307b",
              "line": 269,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "58546bc1-abbc-4150-88d8-f9943b53c4aa",
              "line": 494,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4d027f51-de7e-4902-95dc-adb0c4a7dcbf",
              "line": 358,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3a04c19c-91bb-46a3-9869-b6afcd3b351a",
              "line": 65,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b7ed9b23-0de2-41d4-8b10-4b6ddc538feb",
              "line": 255,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ee6dff27-a8a1-4548-8621-598a67c370f3",
              "line": 454,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/Network/jbod_matrix.pcurl.hps": [
            {
              "id": "a77c6fe4-05ac-420a-9993-dffae5949849",
              "line": 263,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a3a644f6-df84-4f48-a164-c6d85915c03d",
              "line": 210,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4a7d5405-5c2d-4ac6-8bf4-e6c0f30556c2",
              "line": 338,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "89bc67a4-eebd-48af-831b-e7ca6b893d80",
              "line": 37,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b389054f-939d-4ffc-92d4-cc4293aa0cbc",
              "line": 311,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0e48580a-a60c-42df-8adf-c0dc4974d177",
              "line": 123,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f51b4728-032f-44c5-afb2-bbe40c87dbd6",
              "line": 100,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "93c68fc0-7ffb-4887-bdec-3842b6233098",
              "line": 59,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c6697cc7-8a61-4a35-b70b-2295476d0397",
              "line": 244,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "35d419e0-03b2-489b-b21b-750df29fb385",
              "line": 112,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "defd7f76-7fa8-4573-9ab3-6e9c72a0d095",
              "line": 364,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ee3e843d-a05f-43bb-b8ba-a97005b75a79",
              "line": 250,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "618d6292-f098-49ad-af68-02d7bfa31cba",
              "line": 303,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/sbin/parsing_corporate_compressing.odg.gtm": [
            {
              "id": "af2fc5f4-3ad6-48f1-9c54-8a50e731ebb5",
              "line": 174,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f177aad0-579b-413c-ac4d-5f21a096f89d",
              "line": 90,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cc4efec5-e94b-4428-bcf9-f67071a33802",
              "line": 10,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d4a0c2ea-163a-411d-9533-f0b907d204ed",
              "line": 72,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2879bf87-7a4b-4d4b-9e2c-a52afe98831c",
              "line": 182,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e69c9692-37a2-4ab5-91af-0740810eef54",
              "line": 474,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/media/visionary_deposit.fbs.qxl": [
            {
              "id": "be5b4ac5-7aac-4f9f-add5-ed29035499c6",
              "line": 256,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5d58092a-1489-493a-ae0d-bdbb2762e72c",
              "line": 90,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b84f8140-ff74-4651-968d-efefbed87e3e",
              "line": 318,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d09dd07e-08b8-4164-a439-80a2a57af8b0",
              "line": 298,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "af7b7c87-992a-4e03-82ed-5df57ce55d73",
              "line": 342,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6ba9aa05-08ef-4933-85c5-59c23c9420b0",
              "line": 188,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "06eb4bf2-d80c-4f78-ab4a-464cd7642f22",
              "line": 439,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3427b02c-9da0-4987-bf7f-8eb8b7e65646",
              "line": 145,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "213d8392-93bb-4003-8644-674bf7d80691",
              "line": 119,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7cfa6f00-37af-4a1d-ba36-a573cee23c6b",
              "line": 378,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d5eccde0-129e-4a46-ac88-b016a83a17e0",
              "line": 372,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "bec80f05-53b3-489f-987f-0575964e0c84",
              "line": 87,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/Users/loan.war.mvb": [
            {
              "id": "efc1b099-3f25-4c6f-b221-b4892299706b",
              "line": 36,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b80f4dac-9220-4713-836e-739bf2d0b2e5",
              "line": 251,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ba38959a-95a7-46aa-ad4a-7cb21b2aa96e",
              "line": 44,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4b4d4501-2085-44da-9950-e623a61ada9c",
              "line": 427,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "72ba2c12-c7f2-4a19-a516-2ca992a3e9ca",
              "line": 10,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ]
        },
        "startTime": "2021-06-30T08:14:15.823Z",
        "totalRecommendations": 91
      },
      {
        "id": "be7fe55f-a38a-454e-9e21-c9e631c74d6c",
        "name": "feed-generate (f5a6dc3)",
        "state": "2",
        "finishedTime": "2021-07-01T16:43:17.711Z",
        "recommendations": {
          "/etc/mail/bacon_lime.nlu.nnd": [
            {
              "id": "8fe14911-1431-4f4c-8e27-476eb24d164d",
              "line": 47,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6c7d077c-8402-4138-9254-43ed3613f5cd",
              "line": 109,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2d576685-4569-4bfe-9a6d-897b319e789e",
              "line": 206,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "32207ac0-4229-4bde-9d4e-abe2033c6c48",
              "line": 442,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7d58ec48-4f62-462b-a455-16617892f27d",
              "line": 497,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4b71ea5f-e136-4d3e-afa2-15e14846990e",
              "line": 128,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cb6d8628-46b7-431f-9206-3d0d311e3f86",
              "line": 150,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "211959bf-4979-48ee-b006-4175d2ee4eb7",
              "line": 311,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "90db7811-4f98-47da-a30d-8f3fa74a40a7",
              "line": 236,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2006b2ef-0774-474e-ab11-1c34cf94f695",
              "line": 263,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "12bbb54e-455c-46b9-930a-11ecfd62348a",
              "line": 392,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "168760b9-8357-423a-b203-43a5cc7b46b3",
              "line": 17,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "948da434-fa32-4535-9203-40711d5b4e63",
              "line": 244,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "049535fe-be57-4276-bea8-5d09c84ff4da",
              "line": 245,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "25d0291a-9ea2-486b-9c24-f5741e506da5",
              "line": 340,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5bb17a05-57fe-4b41-b759-269bfade9a32",
              "line": 435,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9931907c-d3ad-42c0-8f59-600ee400d7b0",
              "line": 395,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "239d230d-e67a-4c1f-8aaa-574553686cd0",
              "line": 301,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/proc/efficient_transmit.fsc.u32": [
            {
              "id": "21566f76-dad8-4014-b0eb-5abb1be0330f",
              "line": 45,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a861b4f1-788d-4832-b402-0a6bd59e6b89",
              "line": 329,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "535d47d1-6c0c-426c-ba5d-5a1c1d40cd92",
              "line": 488,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ab1b3ea5-1f21-4fe1-b2a4-97c773095897",
              "line": 491,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "75f73299-31a7-4d2e-afd4-e95566fb5624",
              "line": 260,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e867f8fd-7e36-4e78-b395-2661cedb14b1",
              "line": 456,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4bc604f5-0a97-4431-955e-8fcfe9689996",
              "line": 436,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "df334c8e-9b28-462a-a538-0db82d1017c0",
              "line": 302,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bd9bf37b-fbda-4889-b538-68fa278c03af",
              "line": 113,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "83d26194-2e4a-4ab9-aec0-eac97ef98589",
              "line": 8,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1cc8570a-34bd-41aa-94d3-9230020ef484",
              "line": 135,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cafa6780-cd1f-4854-a6eb-fed18b987649",
              "line": 37,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d6069a63-412e-41cf-a24a-3cab4b9fc8a2",
              "line": 298,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7f210447-c332-4ddc-bd2d-2f150ed41528",
              "line": 17,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3af704d6-8b73-4a97-ae2e-d2c8861d12d8",
              "line": 82,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0e039efb-c9e9-4d7c-8920-fae434e147be",
              "line": 1,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2b1efb2e-58db-43fd-94ff-2146a408e28b",
              "line": 341,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/Network/facilitator.teacher.p7s": [
            {
              "id": "14dc0656-0e87-4530-8563-6eedce3db399",
              "line": 488,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d406ccaa-1459-409d-9211-f1347af5a4df",
              "line": 361,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ac3935d0-5b46-45d6-8a1d-34990b3c3622",
              "line": 380,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c86ca948-0630-4590-803f-31c92f450ae1",
              "line": 201,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1ba571f3-e2e7-420f-b531-682fdf94aa63",
              "line": 131,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a5a4c648-ccfb-4bfe-b8c1-10379b274133",
              "line": 456,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0b0fd56a-eda3-4b0d-a5e6-1cb05b0dd692",
              "line": 107,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/root/investment.srt.h263": [
            {
              "id": "74e479cc-a924-466b-86c2-25ea4ab36a0b",
              "line": 462,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7355ab37-f1f3-4b2d-b8af-da3ba3ee4827",
              "line": 163,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4c724cb6-5fa4-4a4d-b49a-01dc7c95f45c",
              "line": 227,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6dd1eb7c-82d9-4f82-b592-44d748e64335",
              "line": 180,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b2cc67fe-37cd-4597-b2b4-3007051e2cb5",
              "line": 367,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6e548381-a4ef-4cc6-a4ee-c989b6b40de2",
              "line": 218,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ef54b87c-d1a9-4c24-8743-299e4ffa705c",
              "line": 352,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7ffe6c84-dae9-46db-b7d6-78248ad84f5c",
              "line": 42,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "3fa341a1-cd8b-4975-8ab0-8717d2588885",
              "line": 84,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "53471bf6-c2a3-4da8-b6c5-6e3995f25bcf",
              "line": 313,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "71f12e00-b8fb-465a-b0fe-842087b10faf",
              "line": 315,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3c5a2685-f73e-49de-9312-cfd1517ec9cb",
              "line": 421,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d51546fc-f54e-48fe-b8f0-0e9da04e4d4e",
              "line": 103,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "838c5de3-0ca2-4c59-820a-1b61d5103869",
              "line": 430,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "bbbe897e-9cf4-48ab-a67b-52ca7ca9f96c",
              "line": 89,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "8939ce6f-45d4-4a8b-8cac-0809558f7eba",
              "line": 329,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7c5e7cc2-a3df-4782-aa27-11d03da83124",
              "line": 109,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/private/grocery_sleek.docm.jar": [
            {
              "id": "50efc9b0-9c65-4b8e-85fe-90c440e6c5b3",
              "line": 366,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d9ee333c-c4cf-4fb2-aac0-1de72dd298eb",
              "line": 416,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7e208587-75ff-4062-9c09-110e978ea0d4",
              "line": 335,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9b8cdc87-6fed-4e8e-aecc-d25324a7a2b1",
              "line": 43,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "912fa3a9-1dd1-4aaa-b8bb-4861bd15a193",
              "line": 189,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "26127410-6456-49f1-9023-984a58531009",
              "line": 194,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "fd6fc0e8-d292-42ec-b7eb-f8f8f57a7288",
              "line": 54,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bad30d66-95ea-40eb-adbe-3083c88216fd",
              "line": 251,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/media/shoes_index.caf.gnumeric": [
            {
              "id": "1da898bc-eaca-49e1-abbd-0936e4cffac5",
              "line": 272,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "056c0198-3c9e-4a39-bfcf-79f9660e72dd",
              "line": 207,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "52b3a70d-c9d9-4d15-ac6c-3e324039980d",
              "line": 342,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8e70a0c1-03b6-404c-824e-a810ab7c1e1e",
              "line": 499,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "fd11033d-2928-4c5e-a420-891a2a61834f",
              "line": 400,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b113dfec-a444-4d0e-ae3d-e4895032a1bd",
              "line": 247,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "dbd7c373-1577-411f-adcc-f3a38975f8a1",
              "line": 493,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "2fd356ca-a862-47c4-a48f-f27ec3337896",
              "line": 154,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9dcf5766-866d-4334-b6ea-b8cca1c094f8",
              "line": 227,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7761dab6-3eff-4453-b5ba-2aa899b9d68b",
              "line": 110,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6a6aa253-1570-4070-bb03-18bed657b3fc",
              "line": 73,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "24b537ce-aa0b-41a0-a9c0-b9ecea010286",
              "line": 5,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ac3cb631-836e-40aa-97c9-f28286a42618",
              "line": 211,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "eabd6ef9-51f9-494c-8428-91cb1de64eb9",
              "line": 135,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c678ddf0-ad20-4f49-95d7-27c6d82ed9c2",
              "line": 24,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "338906e9-1c8b-4e4c-9cde-69b10459ebcb",
              "line": 414,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/usr/src/transition_generic.mb.dssc": [
            {
              "id": "19400e50-ca10-401f-a111-5622b51c1880",
              "line": 234,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "45b0ead9-49c7-42cd-b00c-7ab5589ca931",
              "line": 124,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f6616b92-bf85-4acf-8b7d-44c960e6e71c",
              "line": 438,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0a22b026-9455-4bf4-8160-21c39b2f81e1",
              "line": 201,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f7b8d94c-d897-42d5-ac25-fd251af18d94",
              "line": 75,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/etc/namedb/human_handmade_jbod.kia.setreg": [
            {
              "id": "87c9fb03-0a9f-438a-956a-375bdd3dd2b2",
              "line": 331,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "437d1215-9b76-4559-ac0f-206c56248ff4",
              "line": 75,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0b887699-943e-4659-83e1-61428b1cbd18",
              "line": 62,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "35854860-76d5-4339-92ac-a7c32367d1f6",
              "line": 168,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "27c65e01-31a4-47a0-ae7f-febf7d07912d",
              "line": 347,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ae2013d8-4a76-4801-aba5-ff996c724e9e",
              "line": 185,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9141ea39-2b2c-45b8-8ff1-b825f4c32a0d",
              "line": 129,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0d61ceb9-0a0e-46bd-a74b-f0b52fdb4b3f",
              "line": 62,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/var/yp/illinois_loan_see.src.ufdl": [
            {
              "id": "7a7f2b8e-0477-4a88-aeba-b690bfd06579",
              "line": 478,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "aa3936a4-ce85-46ff-9405-75d63c3e3d9b",
              "line": 341,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "18282ee9-8d53-451a-8881-eb1774fda501",
              "line": 143,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "243241cd-3e45-4bd9-8185-95f895c9aca2",
              "line": 283,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "213042e6-14d6-47f2-8a53-57d774d1e642",
              "line": 218,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3eb6d839-937e-4652-8ad1-708ed75f5f48",
              "line": 153,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "87867337-d436-49d4-b5d0-45a397bd3274",
              "line": 304,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/ports/profound.swa.wmf": [
            {
              "id": "9da686b3-4260-43c8-b312-306488b6edfd",
              "line": 195,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "28467437-e0d5-4522-8410-8fa997875649",
              "line": 151,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "60b86e4e-157e-4da1-932b-d567f30624d5",
              "line": 268,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "75efa365-9563-47d5-ad5c-f004cd85fbad",
              "line": 220,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8304ab3f-bcfb-4013-bc8d-a9db32fa3267",
              "line": 359,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d648540f-ae8b-4b16-bd66-a2fb498162aa",
              "line": 89,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "96aa9d54-5c56-449d-8fee-259de7ca8647",
              "line": 46,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cbf3cc0f-cd58-4da5-bb72-2da91c73c1c2",
              "line": 210,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/etc/mail/franc.kwd.m13": [
            {
              "id": "62085678-74d9-424d-b71a-e7ddd1b8097e",
              "line": 499,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "251a1cca-599e-4baa-aba9-b441e40f2772",
              "line": 238,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a6c1a91b-fb5c-43c6-8e8b-541bc805f881",
              "line": 158,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9fdb3ca5-0cb2-497b-abbf-ed1d32a88c61",
              "line": 196,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e79f29fd-ed3a-4bbd-8a7f-0b610e256826",
              "line": 213,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5e3079d0-0385-46df-b5de-0e395345cfee",
              "line": 353,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c19df3b0-a74c-4733-8e36-213ff1d983cb",
              "line": 301,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0331a025-6380-4402-81bb-6a8e8bca5351",
              "line": 400,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b84e3f07-f213-4946-8189-a2778028d264",
              "line": 424,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ee2de81a-b2ff-4c8c-9883-b46788ddb654",
              "line": 392,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "66a207f0-fb28-4dab-8d77-7bacc1f59ea7",
              "line": 415,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "56384301-0f38-489f-ae38-19c4fc60900c",
              "line": 31,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1a3be757-6e0e-4ff6-9aea-04e58974c6ca",
              "line": 328,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2784a564-0aaf-4d4c-b35b-102e9afe8327",
              "line": 172,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "4af0ba4b-b5ae-4d56-905b-ee2c2f8ac5d8",
              "line": 306,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/mnt/cambridgeshire_turquoise_matrices.fm.cpp": [
            {
              "id": "5ed3dfd1-16a2-4e8a-a03d-c816463762b1",
              "line": 91,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7ebf4287-5a13-4bd4-8782-7f5b6a25ed82",
              "line": 152,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ba894ebd-afe0-44b5-90a1-6a03bb835498",
              "line": 2,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7c67b7ed-66e0-4a4a-8477-25d41efa7992",
              "line": 177,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "fa78d7ca-1aef-429b-aa6b-9c85cb21429d",
              "line": 103,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e74e3551-b55f-485d-a6d4-b7809cf7f6a6",
              "line": 136,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/mnt/gorgeous.atx.tcap": [
            {
              "id": "353f6d80-f23b-4dc0-94d3-3b014ce80270",
              "line": 44,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c86a83e3-827d-4ef3-8b1f-c816ebf9ac57",
              "line": 414,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/Users/licensed.uvm.qxt": [
            {
              "id": "1f2e2816-4bee-43e9-bd82-364029a9ab6d",
              "line": 332,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5b860d1c-fd75-48c7-beb5-5fd1dfe4fb2b",
              "line": 289,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7e4577cd-86cb-40b2-bd58-a469a2ff0101",
              "line": 336,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "31e29a66-080b-4772-a25d-1c9e065941dc",
              "line": 182,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "82674184-0e99-4789-9403-2043b7ce3c91",
              "line": 377,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5e799f67-c33c-4ca0-8fa8-8ef868e18952",
              "line": 246,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9925415b-1de1-4f95-a16b-2baf8d800ca3",
              "line": 79,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ]
        },
        "startTime": "2021-06-30T23:14:31.996Z",
        "totalRecommendations": 141
      },
      {
        "id": "7f814c45-3267-438a-ad61-76f04b7a0e08",
        "name": "firewall-parse (ad8f648)",
        "state": "2",
        "finishedTime": "2021-07-01T14:55:47.440Z",
        "recommendations": {
          "/media/mouse_value_added_french.mng.apr": [
            {
              "id": "62f94ac1-3d45-4000-9b80-75c405ba4f8d",
              "line": 258,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "73b814e4-35ed-4f5a-96ed-9c79d72441ae",
              "line": 384,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "10f6217a-48c3-4cea-aebf-166e4fd2c587",
              "line": 211,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "840530de-1fcd-4f3c-8511-8a8418fbb8f5",
              "line": 406,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "72f4265f-5f73-49bd-aabd-7cd50c697691",
              "line": 472,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ee7d688b-9318-4b3d-9e91-85c847d009b0",
              "line": 15,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "227047b0-30e9-4e7f-afb5-07583d2e1625",
              "line": 291,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b3d6f504-ccff-4663-86c2-a01ed2ab7e74",
              "line": 5,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "10e811f0-cc55-4b83-bf9e-14257f6e94bd",
              "line": 266,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8feb0fa1-273a-49f8-a11e-5a9d7d52b93b",
              "line": 469,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d5b30cc1-eb05-4bd4-9df1-c6d6a13f6868",
              "line": 10,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a9934859-0c1b-4018-9f1a-1a64c07ee7fa",
              "line": 433,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7608c8a8-832f-4ea6-ba83-e1ba80b9770d",
              "line": 378,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/high_level_bluetooth_planner.book.z3": [
            {
              "id": "f7b0802e-1a7d-466a-a8f0-6ce58273511c",
              "line": 101,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9d0d7044-bd13-49ee-9cb8-6d129a010303",
              "line": 266,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "19eae1b7-1485-410b-8b93-620314d309cd",
              "line": 52,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9735165f-aa04-4765-8b67-ecbc76f78c4b",
              "line": 419,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "772bc2ba-1144-40ab-8dca-11287292fd4e",
              "line": 53,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1ec32dd7-8b8a-4803-b827-d6cc02bd4495",
              "line": 149,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "668b513c-7ee2-4515-8fde-b5133b80c349",
              "line": 24,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a7b67eda-953c-499e-b808-a6be55730347",
              "line": 270,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f0dbfa92-d0c9-4ec0-8f4a-529a8aa2ae12",
              "line": 176,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ee9eb89a-87f4-427d-aed0-21c6f4a2ef72",
              "line": 296,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b41177f9-2174-46d7-840f-c36cfaefa5fc",
              "line": 271,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "59f8899d-8cc9-4dab-8429-a00d7771edfb",
              "line": 2,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "416ecfe2-5998-43c1-afb1-f33132e33dbf",
              "line": 337,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "719290ff-eb6c-4bc3-8fd6-e3129a43c791",
              "line": 312,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5816aa61-5599-41d8-a07f-f7db98c7454d",
              "line": 22,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f4dfeb97-836f-44dd-b605-744d8f3eea4d",
              "line": 481,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/ports/product_credit_ohio.wav.vtu": [
            {
              "id": "9d0278b6-8817-420d-8456-2b977aa89575",
              "line": 34,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "99f0e9aa-cc35-49e1-8e82-6b4645c47c43",
              "line": 318,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a59012df-42b7-44af-b675-2b7858b61151",
              "line": 111,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "190332ea-bcec-41fb-83bb-3d0c4f8fb268",
              "line": 372,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "98b6d765-faf7-4323-9784-26742631f877",
              "line": 242,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0baac1ef-db98-4578-9dea-7a5b9c764424",
              "line": 282,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1ba5b031-1e5e-4d7f-9401-7c0c2277df4d",
              "line": 170,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f388a662-019d-46a8-9877-e40b1d791b2e",
              "line": 75,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "02fe1ea6-a8ff-4bb8-83d1-b5d6a71d0de4",
              "line": 348,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "510c9e35-78ff-4d02-b613-55ec26851ccd",
              "line": 397,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a18fd28f-89a8-474a-b568-e64d65fcee3d",
              "line": 356,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1bd44715-a0a0-4c6e-b371-7a4271b793c4",
              "line": 310,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9ec6b192-6bb1-4daa-9d60-bfa698141f92",
              "line": 272,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4e224f06-2dce-44fe-b1cf-bdf7145545c2",
              "line": 200,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4e95af5a-0668-4007-ae6a-87bab04ea77f",
              "line": 3,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "46651fb3-4096-408b-96a4-0ffe30f5a3b4",
              "line": 118,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ]
        },
        "startTime": "2021-07-01T06:55:38.945Z",
        "totalRecommendations": 45
      },
      {
        "id": "913149ba-0c0c-4977-ba2b-6a16cc588b10",
        "name": "array-index (bbb2556)",
        "state": "2",
        "finishedTime": "2021-07-01T12:41:04.186Z",
        "recommendations": {
          "/etc/periodic/cross_platform_mouse_functionality.jpgv.swi": [
            {
              "id": "4ce8f58f-b3cd-417a-8241-10a4c906fe07",
              "line": 12,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9edb4ea9-b976-4516-a876-932786638583",
              "line": 461,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "52219dda-c7eb-48fa-93dc-8ff4b74f7ec3",
              "line": 486,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "945bc812-2adf-46b2-bcea-28259dc6061f",
              "line": 395,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a45f81fc-2283-4218-b7fc-491255972435",
              "line": 99,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1de0e517-c9d6-4ba6-a2ab-bc7af8807b4f",
              "line": 243,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "64144e5f-7b28-4a58-98a9-1d8c7bd21323",
              "line": 431,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ad8322c7-d8c1-4fa1-a679-4daecf9343c3",
              "line": 203,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bc9ed9ba-47de-4c77-bb92-40f8b9729298",
              "line": 495,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "567fbcb6-eead-486b-81b5-fc8ab56284a8",
              "line": 162,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9befa138-b786-4091-b4de-53821feed5b4",
              "line": 333,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ba91f845-5ac9-4673-bc55-b6cc88518a20",
              "line": 13,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/log/down_sized_back_end.tiff.wad": [
            {
              "id": "511d7325-2d3a-4312-ae28-b3755ca365ed",
              "line": 472,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fbc224ad-fbf8-437c-a562-0da8aba49334",
              "line": 333,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/lib/sql_indigo.rcprofile.ogv": [
            {
              "id": "d6c1de50-485d-4991-b638-9bd368f8a9bb",
              "line": 281,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "796d7893-a40b-4163-a214-8790e0a894a9",
              "line": 369,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9c70b24f-cf9e-4068-8b45-fdf15ce87f51",
              "line": 204,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f95910c6-54a1-4957-a881-f3e37fa6b3fc",
              "line": 427,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "96c46572-af83-4a3b-86fe-bd43542798cc",
              "line": 314,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c884733f-eaf4-4504-84de-01a9fb3ecf92",
              "line": 294,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "47777bef-6ab9-442b-b1a8-7b1c18832ff6",
              "line": 128,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c588a5de-3b32-4bea-8a38-73efee01db0b",
              "line": 364,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "90ac7985-c37a-4adc-8733-897abf02d2f1",
              "line": 417,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "139f4566-56e0-445f-bc1d-2cda08e76802",
              "line": 440,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "80dc4c92-1422-41af-a3df-e84c4fc86682",
              "line": 304,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f0344d71-cef9-4139-bf0b-2a41c7558ee1",
              "line": 66,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bb3418e5-7795-49e3-bcd1-8c98a725137c",
              "line": 209,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ea7a496d-f351-4915-b191-94e89f91e400",
              "line": 104,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "809944f4-57e0-429d-bcee-08b1ff291cda",
              "line": 420,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d49e9123-cffa-41a5-ae07-481501efd898",
              "line": 406,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "8cad545f-95a8-4cde-98b5-dc65dc3739e3",
              "line": 249,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c5d76777-3d5b-465b-b2b2-142abbba0f76",
              "line": 31,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/Network/asymmetric.pqa.gtm": [
            {
              "id": "ba837740-7da1-4a2f-81b6-def8868dfad7",
              "line": 106,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/lib/awesome_plastic.uvz.portpkg": [
            {
              "id": "35dea71d-3c20-4be8-8336-7145c7f12512",
              "line": 395,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9113dc81-e4c5-4bb3-aae0-ea4e47d3e554",
              "line": 302,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7fcf67ae-fa9e-4fb4-a47c-c4d48855fa67",
              "line": 115,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ddb7b06c-928b-4c49-8ca8-df147124c428",
              "line": 449,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7a7d15d9-5599-40a2-9d04-0411dc6b7396",
              "line": 426,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5bff1846-a4c6-4d2a-b04f-b0aa659c5480",
              "line": 446,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "07e36638-3982-49ba-9fb0-7a31838f20b4",
              "line": 480,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a82c9d01-26c9-47e2-a0c5-eba4014350e2",
              "line": 213,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/usr/libdata/infrastructures_uzbekistan.eol.vcg": [
            {
              "id": "22a19530-1c72-4c23-b8bc-cce5164c10c9",
              "line": 20,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8795b31a-27c5-4f3e-a643-6ce7280eac24",
              "line": 251,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e4b96a30-95c4-498f-9897-c070ec41a954",
              "line": 68,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9e4041eb-e6e8-40ed-a236-ade52177b3c9",
              "line": 90,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2bef13c0-278e-4afc-adbf-03c1c84ddfbc",
              "line": 189,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c9942fa6-9106-4ef0-bd71-8b0511c908ef",
              "line": 375,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "360f08d0-c8b4-40c4-b426-7c6243ba4311",
              "line": 241,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3a850479-b7c3-454c-b59b-0d687f584701",
              "line": 468,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "954d9c99-c4c4-4133-836b-04e3512ad6d0",
              "line": 7,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1c9839ba-6556-4ea5-b1e2-283d2d0fe28f",
              "line": 279,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "875deaa8-fbce-4190-8230-b89ecba805e0",
              "line": 390,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0309a921-da5e-4bd9-973f-0b3fd1a2b021",
              "line": 375,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3b497cf5-6079-4a7e-8f9f-9cc14257145f",
              "line": 485,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c7a5d500-016f-4a6a-93b2-b4b8e10c2052",
              "line": 168,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ac4698b1-8e6c-4263-bc71-a75c9359127e",
              "line": 40,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5aad6af9-12ae-4aae-bb70-804f54b1f3b4",
              "line": 30,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ffdcd930-d814-43bf-b121-3f0079b543c6",
              "line": 121,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/yp/ergonomic.aif.cer": [
            {
              "id": "5a9cbf3a-b217-4b13-bbc3-5a1b612164e1",
              "line": 74,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b2ca277a-a934-4d06-ab55-12e4f0d1aa99",
              "line": 184,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f9d67366-3cbb-4d75-8d00-f58d999eca94",
              "line": 423,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4f795b12-8db6-4089-a52e-903027bc0089",
              "line": 480,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fcd265a9-8c70-4fb2-b2a9-f52c6e24f28a",
              "line": 60,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5eaae18a-dbc4-4f19-ace7-2823971e8b3a",
              "line": 105,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "34a9f48e-fb99-4b4c-8263-6eef28e48176",
              "line": 495,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c6eedb69-6f84-47ab-8ea3-d086c54dad40",
              "line": 5,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "171a77ce-e804-4181-bd63-c7532ed3b8f7",
              "line": 78,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fb99a62f-349b-4e7b-8cd1-f6cb64de2d6a",
              "line": 67,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f2aa3df9-7639-45c7-b49c-469114eef20f",
              "line": 202,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5d1854d5-6cf7-4654-baa6-5a8880c24ada",
              "line": 350,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5ba14d7c-39b0-4647-a289-546d0770a3e0",
              "line": 32,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5761c47e-450d-4aa2-9e15-aa78eee0b16d",
              "line": 223,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4025b49b-8c54-42c7-9e9f-ff94d99d849a",
              "line": 101,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/net/optional_usb_dollar.ogv.sc": [
            {
              "id": "5e9e1f41-7324-42a2-97cb-60adace22c04",
              "line": 298,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "54a2dd56-6809-4919-8299-8220eb8dff4b",
              "line": 383,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "153b8b96-0ab3-45d0-bb15-10e7eb0d8f44",
              "line": 114,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/etc/namedb/wireless.vob.otg": [
            {
              "id": "69478fc9-e5f3-43f8-b84f-47570b5af2f1",
              "line": 477,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f44c6a39-c9a3-478f-adec-055cd2ab2003",
              "line": 187,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ff897991-1d1d-408e-87f3-00aecc8f7f6f",
              "line": 389,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "caf853bf-1acf-4c1d-a4f9-3b92f8c378d1",
              "line": 117,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "35d82d3b-c89b-485f-b770-f47547d22d0c",
              "line": 179,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1587ef77-534d-41bd-b421-c014ff065183",
              "line": 144,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2497089b-739b-4bfc-b950-c2cc1756ffd2",
              "line": 285,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "61ff1cac-6d94-4d72-8897-4d03cc79e4ce",
              "line": 18,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9aef5f5b-c38e-436f-b696-5449c1257c4b",
              "line": 325,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cea2f301-9c79-43ca-bbc5-e1226727f58b",
              "line": 0,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "655afe93-b67e-4484-ac02-9aad2f8d0b91",
              "line": 299,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e91196f0-17b7-4ab7-aa7e-75806f8f2314",
              "line": 176,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8f142e64-d177-4652-92a8-25b3de507a1c",
              "line": 444,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5186ec7c-bc42-4870-a753-1dfd24d5e180",
              "line": 201,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/etc/decentralized.msi.pbd": [
            {
              "id": "f2782bfa-bdb9-4e60-bde7-82f7bd7ccf02",
              "line": 301,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "11e0b6a0-02d8-4add-a028-447d34f6a143",
              "line": 50,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4a7706b5-2d33-4fa5-ba58-ae4e7132fe27",
              "line": 260,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9145dd89-2141-48f8-ad81-69551eaead91",
              "line": 155,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "3bb416eb-1378-4b27-bd68-2a077c44d758",
              "line": 108,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f6346314-f344-44e5-986c-74ebc49677ec",
              "line": 411,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "2d7ae415-c5b4-48f3-9f6b-afe883cf01c8",
              "line": 70,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "79c77117-bf2c-4f7b-a5c0-6ccde81e3539",
              "line": 323,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b85a6212-8fb0-47a6-a7f5-50774ccc3ec7",
              "line": 158,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4488f9ca-0626-47c2-8097-6323501daaff",
              "line": 29,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e375452e-ac75-4a71-92bd-5ec4c8d5e357",
              "line": 438,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7e919b0a-c848-4e80-b710-2963c0e119bb",
              "line": 319,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a711601d-30a4-4fbc-a37e-15bf5b443d0b",
              "line": 63,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/proc/guinea_bissau_account.gex.uvvv": [
            {
              "id": "3ab81378-f9a4-42a2-8a3b-ab10f633ff2c",
              "line": 365,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3844ce6d-cc5f-456b-a364-416d6540c6d6",
              "line": 194,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6a3c0212-e8b0-416f-bbd0-e1b74b556e67",
              "line": 283,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "802ef775-c0dd-4882-9687-1b181b216542",
              "line": 136,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7acda2e3-6682-4061-bcdb-317ed6bc7efc",
              "line": 288,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f82353c4-5898-4c5b-b794-6b566a68657b",
              "line": 392,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "39e70b27-3df3-444b-9f0a-c77b421b9519",
              "line": 241,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "14889ddc-5085-4a77-bfd8-bdae9edd2fc0",
              "line": 13,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "523a8851-40d9-4214-b9e1-a8ae7570ddfc",
              "line": 262,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2dcbc3c7-c888-4138-9ebd-ac3e5c280c56",
              "line": 219,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1783f9f6-753a-4b9f-8117-63efb448c4ad",
              "line": 6,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "8bf49b29-9aed-4a26-9a66-0870748dede1",
              "line": 25,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3d77f78d-47a9-417b-9a66-91156b9fbaa7",
              "line": 1,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "245c2497-3d73-4bb6-998a-c6f8b51afd01",
              "line": 253,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fab2b426-ca71-4923-b6a2-a99d634a2131",
              "line": 381,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1966ad45-a565-44a6-9256-658850c9c431",
              "line": 321,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e5075ddf-11d0-4815-8ce4-c28dfdab35a5",
              "line": 131,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9a144758-9965-421d-9b0e-b8f1117b4acf",
              "line": 282,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ]
        },
        "startTime": "2021-06-30T15:57:24.536Z",
        "totalRecommendations": 121
      },
      {
        "id": "2757c360-db82-49e0-9917-bbbdbb0996ae",
        "name": "driver-hack (fe20902)",
        "state": "2",
        "finishedTime": "2021-07-01T12:33:14.814Z",
        "recommendations": {
          "/usr/bin/fish_engage.knp.wcm": [
            {
              "id": "5f8f7483-5a3c-4949-a21d-862804451ec9",
              "line": 218,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1e5c06c7-9b2e-48f2-92b8-01bea0f517c3",
              "line": 5,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "217a3e5a-063d-46c7-85fd-c311bfdf8b94",
              "line": 182,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d280cd58-3801-45b0-add0-49726c490985",
              "line": 329,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7a25885a-f425-4c46-934b-55dd0a42e5fb",
              "line": 330,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fc6d045a-4115-4d76-b22a-a29c4e082434",
              "line": 367,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "3595c420-85c6-47e9-9d25-916ebe4d0ca0",
              "line": 313,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6281c3ff-a8a5-4d32-b4e4-909b98a9592a",
              "line": 455,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f3d0a451-ecff-4d08-9bef-097c05f525ad",
              "line": 335,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6fc6efd3-e382-45f7-98f1-d0927f634823",
              "line": 484,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "aeab3b1d-2860-4c95-90f2-fb884f4950db",
              "line": 404,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "a172777a-b221-46cd-88c7-1d017a0ca72d",
              "line": 418,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d591bf54-c96e-4a39-8dc5-3bc1f06a4178",
              "line": 118,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/root/parsing.rp9.com": [
            {
              "id": "a0d86f07-0a7f-4852-980e-7b444f4df7f3",
              "line": 197,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8983cc6f-3cbc-4ff9-a652-6cdf4191bc5f",
              "line": 270,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "29db0a33-a3c7-4f46-9ede-cb255e85b11f",
              "line": 142,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2075b199-c8f0-401c-91e6-7ca8df8946fa",
              "line": 271,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "212d7bb4-8833-4363-9b5d-ffb02d11204c",
              "line": 167,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/X11R6/car.gmx.uvp": [
            {
              "id": "f7711ae8-010e-4171-a55d-03d1227a3b5e",
              "line": 174,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0dab2f00-165a-41d5-86c8-d4fa6af905ba",
              "line": 488,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "551a401b-abdd-40d1-851e-470e2066db60",
              "line": 111,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e0c4301e-53ad-4c8c-a274-461753ab6b8f",
              "line": 106,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e66ae3fb-8b96-4bb2-9449-d491b97cc4dc",
              "line": 335,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1e95f09c-1622-45eb-8bec-fa2a46c1bdf9",
              "line": 384,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a2bea7a5-9e89-4777-89f6-e0b103cbb02e",
              "line": 271,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e9749ab4-61bd-4a11-9c96-c6222274d4db",
              "line": 390,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/var/log/exe_connect.src.mft": [
            {
              "id": "70f9a97b-34ba-4100-9f05-d61fa357b7e9",
              "line": 89,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "20acc5e1-0b2d-4206-a6af-13876ba1176b",
              "line": 401,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "93ce18f7-6ea4-41c9-8580-b140bb53882b",
              "line": 417,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e697b318-2ed3-4891-b358-187f1d9708dc",
              "line": 243,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a585b7f5-b5a7-44af-86b2-e2b9a2de6c85",
              "line": 138,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "25f9e4b5-be5e-4733-abcb-dd68c5a3b3e2",
              "line": 174,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "07b7b0e8-ff15-42cb-9580-74ab4063e619",
              "line": 291,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5d8535ac-870b-44e1-b183-b86543576807",
              "line": 385,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0e4edfee-a8d0-4f43-b248-58f659528466",
              "line": 176,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/local/src/invoice_frame_jewelery.setreg.atc": [
            {
              "id": "a5925e9a-ef04-4bc8-96c4-8cb3dcb388f8",
              "line": 321,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "01d93a66-2043-4b69-b655-00588ba72d40",
              "line": 229,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f793c1df-e735-4283-9b1e-de46ad0b6773",
              "line": 71,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/Network/crescent_payment_district.stylus.hps": [
            {
              "id": "40fff5c9-af5a-4e6a-9965-13c582e82f2a",
              "line": 377,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9803b738-0e3f-4a97-9a11-c24dea4f5c01",
              "line": 479,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "21634491-5c36-472d-9a96-95b839ab896e",
              "line": 454,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ff53f11c-1115-492f-953e-7af25132d0c5",
              "line": 430,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/usr/lib/clothing.azw.spl": [
            {
              "id": "68e65557-745c-40b7-a682-4852c1d32daa",
              "line": 487,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "eb24b9c8-dc2a-4975-a940-81c561ca24a0",
              "line": 437,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "a6e7186b-32fe-4cb9-a225-13c14b692242",
              "line": 90,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5c8b793f-760a-4aaa-a288-b09ab16f07da",
              "line": 413,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9a0e3bc3-d6ce-4e5e-b45d-e20e902d0a9a",
              "line": 322,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ada084fa-764f-4907-9ea7-c67be5732e2d",
              "line": 295,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "a76780f7-8e88-4e3b-9527-fba071e22d33",
              "line": 82,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "be11418f-ba7e-4fd7-ace3-b6aad0fdd179",
              "line": 51,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/lib/algorithm_handcrafted_mayotte.xdm.ez": [
            {
              "id": "f5e43eb1-a356-4a7f-906e-38febd5e8453",
              "line": 399,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "91a73744-8e4f-4957-b4f8-aa51b3e3e327",
              "line": 93,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b93df896-b1cc-411e-beb9-a917a7338f07",
              "line": 11,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f6a4144c-0052-4a53-ba01-8deebac320b8",
              "line": 278,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "51592fdd-8928-4e7c-991b-836f4188869a",
              "line": 126,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a059b02f-1c34-4966-9ea0-6104fc51eb64",
              "line": 186,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "37c9ff58-833a-4d35-8541-23a4271233e8",
              "line": 56,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "c37cbf9e-379c-4ed1-9e47-3ea528efd804",
              "line": 452,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1e85550d-6ee9-4f74-8271-fd7af589bb00",
              "line": 110,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2dbce814-39f0-4a63-8036-5f3a1a50fe2f",
              "line": 473,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/bin/indexing_adp.atom.dae": [
            {
              "id": "f7b7c018-b0a7-49a1-99ef-17f1a8e96fc2",
              "line": 170,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "60b83f72-29a8-471c-8fc2-e37686c4f1b2",
              "line": 59,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d89d1af9-c4a0-40ab-911a-0ce1c61532d6",
              "line": 365,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8c7aef62-235e-4712-8f41-94abf507d0a7",
              "line": 181,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5859cabf-dd08-45f0-8f7d-23edf6004663",
              "line": 348,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b96e8fa3-3bfe-45aa-aaef-01bc9065f835",
              "line": 452,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "84b05ed6-afb3-4b0e-98f5-e62011943fa7",
              "line": 240,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "99fdab0a-5c52-418d-b026-b73a54e748e1",
              "line": 155,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9c880573-3e77-46ac-ba89-e83557de291e",
              "line": 191,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cd2b176e-cf71-4d7f-8923-9b29b43bb53e",
              "line": 265,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/opt/senior_representative_content_based.msp.sru": [
            {
              "id": "e43e86ee-433e-4849-b498-a4ce5bb41ae3",
              "line": 84,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "edb2a9dd-3090-485a-9315-2b246e645297",
              "line": 273,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f9003376-e93c-4e92-b8dd-a77dfaa879e5",
              "line": 164,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "24304ddb-4aa6-4bca-ad5b-3e85ae5cfb67",
              "line": 168,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8d5ef700-cc2f-452e-89f0-0a28b95645c6",
              "line": 377,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/home/user/dir/licensed_transmit.list3820.mp21": [
            {
              "id": "df561c68-ed62-45a7-a495-e8514e604a96",
              "line": 285,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "02a7542a-33f1-4c2d-9e44-a7e1d24e9c75",
              "line": 302,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "20b1354b-a2d7-40a9-be39-7d784b9018cb",
              "line": 269,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "2fd41d6f-5459-4273-b47c-b2d4476501dd",
              "line": 76,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2df867a4-6c68-43a9-ac7b-e984c55d791e",
              "line": 245,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/lib/flat_rss_sticky.ppsm.wbmp": [
            {
              "id": "7d07b2ef-0814-4a21-a136-01fa7297bbd8",
              "line": 51,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "26435744-d4a7-4866-a269-72234c26c77c",
              "line": 417,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7250a8ca-5559-4a16-b54b-bdadf5f59b13",
              "line": 210,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ebe2a5bb-5a5b-4369-8594-d2dc8e1a77fb",
              "line": 269,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bb710df5-02eb-4383-9aeb-d6a16d5865b1",
              "line": 344,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/System/mountains_right_sized.cgm.xenc": [
            {
              "id": "ad1601ff-a616-46ce-8a52-569ba94f1dc1",
              "line": 460,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cd760d00-97bf-460e-a2cf-93ca2f9a646c",
              "line": 371,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6aa995a8-a0ac-41c2-a526-d1b14c363873",
              "line": 388,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2646c5d7-b8d8-4679-b183-5fc9992c4cd0",
              "line": 34,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ec151b5b-778c-4905-876e-a9b34aa39b05",
              "line": 130,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "91ccc4dd-5bf9-4fe8-aaa8-aa7b3abb3826",
              "line": 407,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6d6117f2-5b0c-4514-9640-5e9786926a56",
              "line": 455,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ce7b94f2-961a-4b28-bd9b-0c3442d41752",
              "line": 238,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0a907580-ff5c-4b05-bdc8-f28ed2be0774",
              "line": 418,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1ab214f0-025e-4f98-9ff6-755ab85ed582",
              "line": 198,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b4d15ca3-997a-4224-bbf1-4e85ee87246a",
              "line": 391,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "001e4e78-c99e-4f2b-aff0-57da084b0be9",
              "line": 388,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "184e12e3-5ed8-41d9-ac53-c2370bf63ce4",
              "line": 243,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/opt/include/buckinghamshire_steel.ulx.json": [
            {
              "id": "06c07a11-e09b-4b5d-832e-4e758a84ce24",
              "line": 106,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "85999988-8798-4c44-a55a-5550b9a21b82",
              "line": 264,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "bc5373db-c894-49cb-a91d-14ae29cedeab",
              "line": 401,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e69f4654-3d8b-4ec1-8a5b-eeda8795eac6",
              "line": 108,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ca85a2f1-8c93-4a93-a6bd-37323e2a51e6",
              "line": 212,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "09ceb4cb-6166-40be-ac9c-b12412d75608",
              "line": 191,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/usr/sbin/relationships_1080p.ecelp4800.dbk": [
            {
              "id": "105e20eb-ff3a-42eb-a69f-8524d5e754bb",
              "line": 285,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6f1a4ed2-ad27-4eb6-9927-f6d8164c0240",
              "line": 57,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2113d460-0357-4aa6-9698-a738559b7461",
              "line": 380,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "572cb67e-ea31-4b0c-a98b-0f4cd195f795",
              "line": 298,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "bd3546a3-a818-4d69-bb93-3686be94760d",
              "line": 11,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a709e340-2c15-4bb5-b86b-82ffd2e19f33",
              "line": 143,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "15844c35-fd62-4b0f-bb5c-b5be259b20e2",
              "line": 4,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "512ff3ba-53ed-48c0-9fc1-6d32b77b741d",
              "line": 425,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8e0fa204-f754-40eb-a998-4a94f28023c7",
              "line": 260,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5a709b05-7b35-4a39-ba95-a933e63c75d8",
              "line": 267,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5b168015-b356-4ad9-93ac-a0e14c32849c",
              "line": 273,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a45a68ad-d032-44d2-8cb2-7cba14052602",
              "line": 334,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ]
        },
        "startTime": "2021-07-01T05:53:54.958Z",
        "totalRecommendations": 116
      },
      {
        "id": "75b4898a-5f7c-4d67-b466-7e573bede4ef",
        "name": "circuit-quantify (a81f058)",
        "state": "2",
        "finishedTime": "2021-07-01T08:12:06.208Z",
        "recommendations": {
          "/home/user/process_application_dynamic.cc.rmvb": [
            {
              "id": "dd4bff49-3e5f-41d4-9414-fe4d31eb71b5",
              "line": 150,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b940503e-c9e8-449f-9ecb-ff608ddd1d49",
              "line": 83,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "32b4fe85-b001-4bf1-a527-f9a0a7d6542f",
              "line": 92,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6f57df99-f62b-47b1-8c5f-2df3553e4819",
              "line": 308,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "761f9a93-9941-4cac-9fae-6fe447658b39",
              "line": 219,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/etc/namedb/payment.fti.joda": [
            {
              "id": "078a413c-74f1-4aa9-b855-c49b44246f8b",
              "line": 498,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3d0ad07e-4547-4cda-8c57-9a9c9a8504c5",
              "line": 370,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ee359adb-8083-4494-a84f-f5caedda866d",
              "line": 487,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "eb7d003b-4d1f-4878-bad4-8511deba220d",
              "line": 152,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "22510bfe-6f35-4dc0-aab4-867b9fc83dbe",
              "line": 73,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "3198bc44-b5db-4e27-a979-4b9caf2857c8",
              "line": 81,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "10c19042-773b-46c2-b550-cd16342450ba",
              "line": 412,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1a82ad02-bf4d-4d85-9182-8308296bd536",
              "line": 444,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3178b2f5-40e9-4145-8b15-a7c752c90102",
              "line": 38,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ba42b560-9cd9-4860-a5e4-06ca3e1c9dc1",
              "line": 345,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a71e0779-d874-4ea4-9d87-25c7c579a914",
              "line": 443,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2cd97b6a-fe0e-4562-a5bb-876cf5f2c2ef",
              "line": 282,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0bc8c49c-0f13-4b51-9b49-00c03eae8766",
              "line": 314,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "324cbacf-9cc2-485e-a829-7715a579fb8e",
              "line": 205,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b840fe53-f1f4-425e-8b56-e93328c0b341",
              "line": 248,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1bb77e1a-fc6d-4b80-8a17-373029c10af1",
              "line": 479,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "921e37dc-f7f0-4160-8480-ee8bb6392b81",
              "line": 61,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/budgetary_savings.pfr.tao": [
            {
              "id": "316da36d-2254-4487-9b22-e0753ac5b41c",
              "line": 278,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/selinux/awesome_plastic.kia.dwf": [
            {
              "id": "1391d9b4-b778-4536-95b7-117ffee34a15",
              "line": 108,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "fcdd5210-c53b-45c1-9bf2-a411126fb12d",
              "line": 255,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d9a1018a-404d-4d59-9c4d-114699913a6f",
              "line": 284,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2d6c23f0-6bb2-41b2-8191-f53fd5843721",
              "line": 144,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f90815eb-0fab-4c52-888b-7f145f609f52",
              "line": 275,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ade9b3f8-c661-472e-a32e-e4ec28a4b1ef",
              "line": 193,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "dbf19048-2513-46d3-b02d-3123948214fd",
              "line": 148,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6f984a01-be2a-4ece-ae70-50a06cd4b874",
              "line": 129,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d582e7b6-83b9-4ded-9df7-08d0898ad16d",
              "line": 19,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "55ee86aa-1905-43aa-87c0-0397519ea5b6",
              "line": 469,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "3dba762a-a655-44ee-9cd8-b47d4f57cefa",
              "line": 56,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "48b11d4f-bcd0-43bb-944e-1a07b42f165d",
              "line": 234,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "194f6b7b-2d1d-43c2-976f-acccf6884325",
              "line": 270,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/sbin/central_fantastic_improvement.mrc.spx": [
            {
              "id": "69db1f5a-bc4f-475e-8adb-53b942620729",
              "line": 411,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "dfa78cae-398d-47d3-af4b-273766048f9b",
              "line": 353,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1fdcf001-ebd1-4859-ad9c-f68e317a4198",
              "line": 13,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d3ca7460-4102-4593-a6d4-0d73b0d1f284",
              "line": 470,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "f121babf-a379-4a88-9fa8-5b45ef068b6e",
              "line": 347,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4e0bf33d-8aae-4127-871b-afa3b639a05d",
              "line": 197,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "204a8130-da5b-491c-b3f6-08e3f0606d9b",
              "line": 356,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b5ef43dd-dcb3-4442-b79a-e550c3671a60",
              "line": 151,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "688ae27d-1fed-4394-9683-ca0eb11d1c9d",
              "line": 384,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9d863878-c311-455f-8d80-ed19fc044186",
              "line": 147,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7cc7d6b1-44d7-45a8-9e3a-ad48abc4f46f",
              "line": 28,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/System/michigan_cliffs_incredible.uoml.hqx": [
            {
              "id": "eff60666-a3b8-4ecd-ae17-b7000edb7073",
              "line": 343,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "56752e7d-2e2f-4b8d-ba74-a2f45bd05058",
              "line": 387,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b15b7076-68ab-4cb7-8ea5-0779bd834ef0",
              "line": 89,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ac0cb493-b5b6-48e1-beed-fe9cbb6f642a",
              "line": 486,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "418a909a-d1b7-4064-b0be-2fe0179215a9",
              "line": 47,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0476e098-136c-4aef-a27a-f5d1be4284fc",
              "line": 300,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e7fb4f69-9433-462f-977b-8f66c57ff353",
              "line": 496,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "13e0a3f8-8cda-4a19-a26d-452a1596a143",
              "line": 347,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4c1bcefb-a20f-41ab-9537-39b8198aaed6",
              "line": 220,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7247a09c-2b06-405f-9a6c-3e3b981b275e",
              "line": 499,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e856171a-29fa-436d-848b-d2ea0ccda6c7",
              "line": 127,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "72cfe7a5-359d-4bf9-9afc-b3d5750fd5f2",
              "line": 255,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "51cb4797-343f-44d7-bf0b-4cc108ce31f5",
              "line": 191,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f46d7992-229b-47e0-8a64-0d32d5ec4590",
              "line": 127,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/opt/share/chips_leverage.dsc.wav": [
            {
              "id": "7975ab47-aa0a-4bcd-b95c-3428804ac556",
              "line": 461,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/media/security_functionality_mobile.swa.fzs": [
            {
              "id": "1214e180-ffbf-4373-a7be-35c958bb6381",
              "line": 121,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/Library/senior_fantastic_matrix.webapp.kfo": [
            {
              "id": "8bf332b5-a520-4b2b-b6b5-026e9d7cface",
              "line": 321,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "692129b2-b6e6-4fe1-8855-719f6d6108a7",
              "line": 322,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "93f2c8cb-ae59-4639-b175-d31ddcb0c3ab",
              "line": 299,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e51cc72a-539e-4097-a812-fe5b4bfbbb9d",
              "line": 388,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fae5926b-fd95-4789-854a-ac0fe88ba399",
              "line": 135,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "789a5e48-b0ac-4227-868e-690d8f63210f",
              "line": 181,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d6540ef0-a902-4cdc-8dec-2d4f169a355f",
              "line": 181,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "75407344-e16d-48cc-8ce4-6b7ad95b02aa",
              "line": 156,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4e4dfcef-ff2e-4dd8-b49b-5d18479e2d8b",
              "line": 173,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "62efe1cc-0ac7-48b3-98e9-46b043310054",
              "line": 136,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "cbe14681-a09f-42eb-b3bc-6fa0cadbddda",
              "line": 429,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "804c9e55-fe83-47cc-9b62-4d1c07e9dcd0",
              "line": 260,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "bfe0bef9-b3e8-4238-b6af-26754fca0e36",
              "line": 91,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5e9446a5-a16f-408b-82db-3c680ddcc944",
              "line": 340,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6f375100-1884-479f-926f-26f2aeb041be",
              "line": 355,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "18cf6337-9960-4a19-866f-b63efc58e11a",
              "line": 216,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "dfb940b2-c29f-46de-82a8-f46d193decd4",
              "line": 372,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "427e1425-7f2a-437f-ae10-f43d16ce1747",
              "line": 245,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/local/src/state_quantify_value_added.blorb.gslides": [
            {
              "id": "4c581604-9896-42f3-8119-bd500eacd8e7",
              "line": 239,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "93b50f6d-6b23-4b00-bda4-11401e22514c",
              "line": 396,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2f90379d-db96-409b-8277-3c7894d53759",
              "line": 207,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a5810875-7ce7-4674-a868-1da9ad94a893",
              "line": 160,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "59b88652-0823-4e69-b796-392bcb137d08",
              "line": 377,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "48b1a49c-d9b6-4e8d-a8db-68ba85879bf7",
              "line": 192,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "68f42670-0806-4481-a315-3a2bb608a41f",
              "line": 303,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6315d88a-65d5-47ee-a07e-29b8ab29b842",
              "line": 427,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/spool/foreground.cii.kml": [
            {
              "id": "adbb880e-bfcd-4d44-927b-25422bebe23e",
              "line": 104,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fd5f7296-012f-4398-b143-33f4a6942326",
              "line": 434,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "964fd03f-2adb-4430-9063-70015204c2c9",
              "line": 95,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "180f7153-3c3c-4360-beaa-df69142d8dda",
              "line": 354,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "230e83bf-7964-4a00-a0b5-db5995e0add7",
              "line": 378,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4e40cc29-1825-4f9d-9d9e-4e8e384bc8b6",
              "line": 96,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "81ffad5b-8b92-4c50-b444-bac65e805f76",
              "line": 163,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cadff197-1fa7-472a-afd0-e1f38fdf6cc9",
              "line": 15,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cd18dfda-bdf4-4287-9018-68b582929d9f",
              "line": 21,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "72dddd4d-3b31-4a19-90e2-0ca2102f14e5",
              "line": 51,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "18d9cebe-27ae-4099-a2e0-e00d0304a21c",
              "line": 251,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c47f9b33-ea31-4c0c-b498-4e24c96d2115",
              "line": 450,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1634a23c-3543-4d4c-9daa-e977c3f32bea",
              "line": 353,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e1413d6e-ebbd-4f97-aec5-779ddd2ea598",
              "line": 129,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bde926d4-8e2c-401c-b004-0232d3cd547e",
              "line": 273,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0103ef23-15a8-47b4-b788-4a043e180f0b",
              "line": 299,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "54c24452-9518-405f-a419-837064004059",
              "line": 43,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ce35d2b5-8292-42cd-957c-8bf34333779c",
              "line": 288,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/media/turn_key.img.tiff": [
            {
              "id": "bc6b48a2-0b23-4ac9-8b9a-1b3817e077e6",
              "line": 289,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9a43ef4d-6561-424b-9e3f-17402abc617d",
              "line": 75,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "856ac2cf-f1b5-4aed-ba15-127f6eb7077c",
              "line": 315,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1cd8ef4c-26c9-4c63-a405-ef8a1fa7b0ea",
              "line": 30,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d8c6e96f-44f1-4231-b494-a6c60c2ae644",
              "line": 309,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b64639e1-0afb-47ae-b9da-ea3709995401",
              "line": 350,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/tmp/analyst_global.flw.smf": [
            {
              "id": "e7b5dd2a-b44a-43b6-adb9-1e30d86d91e8",
              "line": 392,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6f0792d5-e2c9-4044-8614-4ce18d18fc71",
              "line": 61,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "774d5c82-9ac8-42d2-93e8-fdc8ab6ad671",
              "line": 262,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b30f0fda-411c-4ecb-bb73-5dfeb3dbfc03",
              "line": 428,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "74ecb6d9-2228-4e69-802b-d2c7e58fb66d",
              "line": 289,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "13efc204-3051-4ede-802d-3b077c346b49",
              "line": 239,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "a370d8f9-0abc-4ff6-9ab2-8a6bada193e0",
              "line": 76,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5d936ef8-b2ad-4491-8e0c-cbbdd7f943c5",
              "line": 377,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "8d1d5de1-2c6d-4003-8621-d738ade072ab",
              "line": 187,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fc73460b-96f0-48f4-9bab-a0dc33d4c13b",
              "line": 123,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "695d4ab3-742f-4f89-8166-c0efe17bec97",
              "line": 72,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "25c23f6a-dfb6-463b-82fe-9cdd910fe5a2",
              "line": 340,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "12fb7823-ab77-4869-b27f-e0104162abd5",
              "line": 248,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7843ef48-96c6-4b81-b617-5a018f873f09",
              "line": 206,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d8e999dc-e347-462a-bdfe-4bfad5a87c40",
              "line": 432,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "faaced24-1a85-4152-a4c9-71fbd90b0775",
              "line": 349,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6f90b0e1-a746-4660-a1c5-21ba71b43a79",
              "line": 165,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "bd0cef64-4c96-45ae-a0fa-8d10e312ced4",
              "line": 377,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c0c34630-79b5-4da1-8f0f-eaf52e4c5784",
              "line": 295,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "715f3717-5061-46a5-8ef8-ef09ddb6f8ef",
              "line": 132,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/net/dot_com.pps.pcap": [
            {
              "id": "f243069b-60bb-450a-bfb2-c0dc7c8648c9",
              "line": 399,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "865e364c-c8f9-4978-aeb7-3bbf17c163a8",
              "line": 131,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2a2890d5-07f5-4ca3-b06a-cbe414288ae4",
              "line": 264,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fdfba919-b45c-4c8e-bf79-1f5c7ea86286",
              "line": 364,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "2030f401-57af-41fb-97ea-8450515125d0",
              "line": 307,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "af85c238-0708-4236-aac2-4b92d03ef862",
              "line": 203,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4a653074-b6b8-4c22-b306-2a0077baa48b",
              "line": 215,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6a083ed8-43db-4564-b38b-f5b19b13e84a",
              "line": 378,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5f520a6d-c377-4d30-9068-40feaabc10fa",
              "line": 330,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "391d202f-e39f-4328-a318-e707940d5866",
              "line": 452,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "7c94720f-a266-43a0-bd6c-b19499f070e3",
              "line": 158,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fa43aa8e-f39d-492d-832d-4adebbef52b5",
              "line": 284,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ffe606c6-f3f6-4562-8a6e-44bb5b8eba76",
              "line": 102,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1238ee2e-69d9-4b93-a08e-de07c6325473",
              "line": 13,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "49d2cb08-b7fb-44d3-bf99-8876dcae5ea3",
              "line": 98,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "351e0078-39bb-42e9-bf72-415a223a2c68",
              "line": 256,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "72ba3ed2-898a-49fc-afe5-2f095fe9ef6d",
              "line": 146,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "13ea5c4a-69d3-4222-a880-76471f02308d",
              "line": 135,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/lib/personal_bedfordshire_hybrid.dgc.mrcx": [
            {
              "id": "dca2baaa-ff39-4d89-a634-39f1daa0cdcc",
              "line": 214,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "4e76ba10-7247-41ed-989f-67769a3694d7",
              "line": 193,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "916ac958-9a30-441a-b332-317c297dc93d",
              "line": 441,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9c4ec57d-570c-4ae1-a539-b53a22976b4a",
              "line": 275,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "43267e15-ee96-465e-ab37-76b2761245bb",
              "line": 324,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5cab02f8-03a0-4ca8-88ed-fb8daac51c04",
              "line": 181,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/Library/solid_small_islands.jpgv.esf": [
            {
              "id": "74fb97e9-6e84-4d48-886d-79ef42daa733",
              "line": 296,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e04d9d43-9016-43d4-9d8f-abe4394158fe",
              "line": 123,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cc7bbf70-cfd3-44b4-b177-861c7d1e7cc1",
              "line": 300,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cfb0665e-1c14-43a4-8fd7-06ffccfa7a41",
              "line": 318,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4efb730c-26f8-4bd5-b463-513e8afef7f1",
              "line": 95,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b2589dbb-d282-4fb3-93dd-e56fbe3d0265",
              "line": 233,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "debedc0c-ab12-4f66-b769-e04290513f5e",
              "line": 408,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/selinux/africa.vrml.std": [
            {
              "id": "53838d64-b26e-47a3-aa22-037ffe05d699",
              "line": 418,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "849b67c8-8cea-46e6-b087-4b6174f5d17c",
              "line": 245,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "58808df9-3538-41d2-8348-56d08eabffa3",
              "line": 123,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "16485eef-b5d3-47c1-8446-2cc338ba34e7",
              "line": 307,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8bbe1783-e522-4577-ba04-e62782210f48",
              "line": 341,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a9714999-725b-4893-b14d-d624d6233d68",
              "line": 221,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4e3c17ad-d896-423d-9b33-77bc6b0732ee",
              "line": 302,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "eecba334-2a11-462c-9a61-1a8e1d8dfa82",
              "line": 41,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ff0aa003-ab2c-4b2b-95c8-d4d9971d0922",
              "line": 56,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2059edb1-83ef-4511-8541-abdcd8384b32",
              "line": 346,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a24040e8-2b04-41e9-91f4-05cfb231ec6b",
              "line": 472,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6a5b88bc-afe8-406a-9690-e3bc06dbe5a3",
              "line": 382,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "efb6211e-5f81-4f02-be41-47f90e384185",
              "line": 6,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/share/soft_array.osf.mp4": [
            {
              "id": "8eb6a2f7-1d9a-4e7d-9180-bf876ad54322",
              "line": 59,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e2f99431-47e2-40fa-a27a-2e07dcbb457a",
              "line": 424,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ac8ebf28-e060-49a5-8143-a3294e632ee8",
              "line": 450,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cc94683d-88a3-472a-8103-6d2cb18f3594",
              "line": 7,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5bb43f6b-3733-49af-986e-38d3e7b8af0e",
              "line": 287,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "37297ceb-018f-4f44-9bbf-376594eda87e",
              "line": 443,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "64e9142f-508c-4401-80a9-08a07eed490f",
              "line": 310,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "28d4cd8b-4147-4f81-9eec-f2c169c63e66",
              "line": 151,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "dcc398f3-2148-4b9b-8468-ffac97d73cb0",
              "line": 209,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1ee75d33-b002-4bee-ba1f-28233cb4eb9a",
              "line": 306,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "08eea796-3e7a-481e-971e-aba75b4f72f9",
              "line": 312,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2d84c4c0-b6a1-4b45-b461-d2e7f2af8672",
              "line": 336,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "14bbf0c2-f9b5-4b19-9e69-b5936a58f604",
              "line": 243,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cf82443d-5645-40c4-95fa-e56e5a30d972",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0688ca6e-fb7e-496f-9a6d-e06964ec451d",
              "line": 17,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b19096e4-48e4-4ba0-8501-2acd301b0f00",
              "line": 426,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "303926da-1497-449c-aa88-49a7ccf8fcf7",
              "line": 305,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ba441920-9717-4f92-9242-349329ed3f7a",
              "line": 406,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "feded616-d122-4fdb-bb99-01d21aafc31a",
              "line": 490,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ]
        },
        "startTime": "2021-06-30T08:46:27.941Z",
        "totalRecommendations": 196
      },
      {
        "id": "393fb6b9-8c06-45f6-a1d8-468ff4979160",
        "name": "feed-quantify (6a7dbf8)",
        "state": "2",
        "finishedTime": "2021-07-02T00:00:44.343Z",
        "recommendations": {
          "/home/user/dir/response.odi.wbmp": [
            {
              "id": "6aa1299e-38e6-4dad-b9e2-8b675ed9daa5",
              "line": 210,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1cc13530-17b6-4a91-a559-8f44f40bd6a1",
              "line": 134,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/include/berkshire.mie.mlp": [
            {
              "id": "7fbe69b0-efe0-4da5-9e71-89fbc7ea943e",
              "line": 436,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6d04e314-a41f-4f9f-b39c-d16d830e5052",
              "line": 94,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "41306c3b-d9e7-4c11-b4c2-d7d98c9def32",
              "line": 299,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fbb669f6-b7ac-46f2-b034-df5820278ff6",
              "line": 122,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5e34eb39-e92c-4a3f-90c1-4ec783e94d08",
              "line": 194,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9f7a9416-8e3f-4b88-8e35-f12a12bfa7ae",
              "line": 240,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d03dd3c0-6d58-4c6b-8617-c05ef09bf606",
              "line": 444,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2c994071-3c6f-4439-9404-7200ade76b7b",
              "line": 73,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5067d54b-acb6-4cad-a59b-32fe7ece12ac",
              "line": 123,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4892ef71-4cd9-442a-ba6e-e9ff0d23ef09",
              "line": 206,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cc49150a-aa7d-4084-ab7f-dbf0d630f794",
              "line": 498,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "46f7b5cb-af6f-44bc-8a43-5695f7885288",
              "line": 267,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7bef2848-eba8-4db7-b4de-9187e3b52c15",
              "line": 120,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2996bec8-2f72-499a-9d98-05fa045a4c6d",
              "line": 270,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "84d079b3-7d3b-4c14-ba1c-c8ba0cb9dc07",
              "line": 419,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/X11R6/cotton.g3w.ntf": [
            {
              "id": "6dfe8ed1-a85c-4b0b-8a7a-1ad25e61abb5",
              "line": 106,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "60293e44-e393-448e-a354-3300ec55f416",
              "line": 248,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a8edb5e9-4e34-4cd8-8477-7ee391064b42",
              "line": 133,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9b69c6df-5a23-4c8e-9613-6be60e796fb4",
              "line": 162,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "def044c4-17b8-453f-a6e6-d61ebfa0b5a1",
              "line": 138,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6bfec7b6-1b71-4359-a9d2-604eb5c1715b",
              "line": 78,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "beed33c4-c73a-49a7-89de-e5d47111b982",
              "line": 288,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "705fda91-0fa7-4c58-b95c-d0a3bc0f387f",
              "line": 358,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "39a7bbcb-d52e-4736-bab6-6e0bd34c435a",
              "line": 500,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4a1e38c6-8330-4814-b01a-75c0e631e4e4",
              "line": 441,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "905aa2b3-afcd-41de-b53c-be5f7c717f26",
              "line": 145,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8deb35ad-fd91-4a63-b608-9457f407e7ba",
              "line": 50,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "248c8f51-c6e0-4400-8cfb-a11017f0fc6e",
              "line": 297,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f85f9409-b6d5-43b7-9b3d-ccdf21147ecc",
              "line": 125,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ad041620-f6ac-4661-967a-cd4c3012c6df",
              "line": 318,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "38da37ec-4fc3-4347-9221-75ae98d5163b",
              "line": 86,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c3f8122d-8d2a-4dc0-a91c-5fc500e4e7aa",
              "line": 72,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/home/small_phased_optimize.rmi.xdm": [
            {
              "id": "96b5a25f-b32d-46e4-9547-27334091c55d",
              "line": 417,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "95daaf47-cdbf-4f1a-a657-3e0c283e3f95",
              "line": 447,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b3840bf6-4b86-4c2d-baa2-e5159643fd21",
              "line": 412,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0cfd82db-5911-4ae1-8738-90338b36312e",
              "line": 159,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6bfeed1a-305a-43f6-bde7-edeee01b26f8",
              "line": 307,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "39f8083a-21ce-4372-a99d-734cf97a0885",
              "line": 410,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "60c70438-8176-4ecd-bb04-879810b1026f",
              "line": 373,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "074bc134-fb77-4fad-b880-5b138345fee9",
              "line": 42,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "aa0a1be1-96ec-46f3-87dd-71d1abf5ea94",
              "line": 418,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4a1e4561-4b6a-4320-a489-48ada313fa52",
              "line": 439,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "17299708-7bf2-4558-8b84-6b062b3e9f67",
              "line": 32,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "304a7547-eb5e-4bf0-90ee-2bdd55e2851f",
              "line": 433,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8eec1404-6614-4a19-9006-89cd14eadbf5",
              "line": 107,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5ebef1e5-55a2-4d27-853b-930ab9e12f25",
              "line": 410,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "78f31241-13d0-4f83-9ab4-566465990a13",
              "line": 98,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/private/var/revolutionize_application_schemas.mpga.texinfo": [
            {
              "id": "941bb21a-bccc-46ff-a770-73b4dbbdd7d7",
              "line": 154,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2d94f201-7bf1-4227-b430-2b1c2450c490",
              "line": 201,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/libdata/parkway.mfm.wpd": [
            {
              "id": "055aa234-60e6-471b-a278-a17540e84d8f",
              "line": 380,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6642ea31-0e93-417e-a24b-9a2cec314d0c",
              "line": 179,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4c529635-2166-4f03-9c8a-2535e4ad3c3f",
              "line": 266,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "eb0f633e-27d4-4f3c-b499-5789cf0398dd",
              "line": 258,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9d444e61-9bf4-44b6-8e76-68c15d2f920e",
              "line": 254,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2a6efdbe-658c-4d7c-a552-7b647709acf7",
              "line": 14,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "37ca8b57-852d-4e3c-93d6-cb5ce3c4b23c",
              "line": 377,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9c770fdd-dc48-4049-b91c-c29aa58ba2c7",
              "line": 347,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ebaf9f76-3f0b-413b-935e-66f0a6b23844",
              "line": 185,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "a5dcc8aa-dfdf-49dd-a2d8-68c15fe4ccd7",
              "line": 445,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0c15f8f2-f567-42f4-8416-042c0e9cd182",
              "line": 430,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "270b17ec-171b-4bea-b42b-b6cd58ee35cc",
              "line": 380,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9de5bae2-3dbf-4684-976d-606d03e2a320",
              "line": 281,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "2a9a3363-cdff-4caf-809c-af273f4d2c4a",
              "line": 342,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0dba5275-961c-4937-bbb3-bc445c3ced87",
              "line": 117,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "974c6673-cc07-4d35-94d1-821537143c4c",
              "line": 94,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "02bc2178-ff2b-43fd-bae2-69b1e96b51e3",
              "line": 1,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/etc/ppp/web_readiness_intelligent_digital.cfs.ccxml": [
            {
              "id": "b143167f-b070-432a-a94b-76f82aaed559",
              "line": 52,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ea23036f-b739-4472-81d4-6e110290c867",
              "line": 191,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e206216b-0bb9-4c9d-a0e5-7e5dc2018b5a",
              "line": 438,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7bc9fd2e-bd02-4829-b897-2cbf55ab8bba",
              "line": 85,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7127284b-7871-42e6-bfa9-f5c17b31c0b0",
              "line": 133,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6b2e3298-d8db-43ec-979f-80a1eca58bd1",
              "line": 303,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "34ad0933-f98c-4329-9338-beb0968c1cbd",
              "line": 33,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e79c089f-bb5e-4c6a-a75a-71d64f8ee222",
              "line": 251,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a9ee5cc8-a237-4603-b9a0-d44b8f895446",
              "line": 153,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e4c51e56-da55-440d-91d0-822a3e40f091",
              "line": 206,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "122d8309-8218-4d53-bc56-43be5c896cca",
              "line": 267,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/rescue/embrace_generate_licensed.hdf.z6": [
            {
              "id": "79225b8b-410a-4e8f-b4e4-7ebbf99c449a",
              "line": 75,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5478f7a7-0226-4723-b6a5-308a5cb9d3be",
              "line": 239,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ec307fc7-82cf-436f-8c5d-828713f8245a",
              "line": 344,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9e5ff0db-105f-4bfb-99ef-b9533211fe3b",
              "line": 292,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "636ff9a9-1f1e-47c9-b8ba-ff436a26efc6",
              "line": 431,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "194ccf8a-4bae-4070-a296-832baf523052",
              "line": 44,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "8c8cd934-cb66-4739-a758-7a0b10b8c0c7",
              "line": 283,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "37c86180-8374-42a1-8f8d-1f357c675621",
              "line": 285,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fc9c613a-4da3-4971-b2a0-70d611cf7f03",
              "line": 87,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "530ca7ce-d3c0-44a4-9009-062343211001",
              "line": 488,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "00ebaa43-b6b6-469c-b63e-acc10cc13df7",
              "line": 327,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8a9acf06-5785-4089-869d-c68e0af2d981",
              "line": 422,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "c738af44-d836-467a-ae46-efe1e8b6ec0e",
              "line": 245,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8ab6d6b3-5892-4adf-a69b-12a31b6bd236",
              "line": 449,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "65f18c5a-77fb-40bf-9faf-a8c0f4667fd3",
              "line": 127,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "67153a1a-4b6e-4ffa-a1e7-d56fafbd9202",
              "line": 37,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b3260ab4-4efd-4bf5-80db-d944f6a24f94",
              "line": 262,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "88ff33c0-f2fd-4314-a538-d45ca8562fbb",
              "line": 409,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "86ad19db-554e-49ef-90b2-5112bdc05b5c",
              "line": 270,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/home/user/dir/licensed.flv.wtb": [
            {
              "id": "ba473994-46ca-4f66-9678-fb239a11c4f6",
              "line": 403,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cdf1b1f1-77dd-4a99-9675-b7202327d6f1",
              "line": 472,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "56ab0c78-fd4f-4ffc-8335-22f95e7aee68",
              "line": 481,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "36694539-fb46-4f9d-8088-1bfcc1646f7a",
              "line": 213,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9a91f318-8079-47b1-bcb5-84e871a28ebd",
              "line": 148,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e4707c32-aeee-4e80-bc22-383dd0ae711c",
              "line": 81,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "24b943fb-2716-4fe7-900d-c24d49d52430",
              "line": 407,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "87df946e-9b50-4030-8e8a-b3bb8af2ffe8",
              "line": 302,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "8f6ec3a4-8603-4f58-9dea-ac6b154795ca",
              "line": 83,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "18392edf-944f-40eb-9da7-c2a257d6c44c",
              "line": 400,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "074d5d4c-3b73-41c2-b28a-2aad820779ef",
              "line": 354,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ae11f030-f7e4-4e63-b681-c147fb9806c0",
              "line": 227,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f26c2103-90ee-402f-91e4-64ceca6321b0",
              "line": 92,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f7d420af-0fab-42db-8af0-f9e1383c0060",
              "line": 115,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e275bbbe-5ec8-4848-930e-8c2adc6759d7",
              "line": 118,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4c92d23f-0206-4710-b649-76b65eba3992",
              "line": 305,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/ports/ram.cif.cat": [
            {
              "id": "c6e1dd65-7882-4835-b5e8-43339295f2bc",
              "line": 287,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "324f2f65-fb56-421c-9ef8-128248c69f9f",
              "line": 311,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a2a20ba2-6a64-4c46-b47f-804a19a69487",
              "line": 378,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "26b79e25-fba2-4f81-88c3-57597ba586c6",
              "line": 359,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "532f4570-b7d4-4bce-a938-ea086cf51bdf",
              "line": 252,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b4f27a80-02c9-40be-ac72-bb1f94b9d6d1",
              "line": 413,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "87bb55e5-e0f3-4dfb-ac3d-969c70f0a2bf",
              "line": 178,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "dad47ef2-8724-4f81-b3d3-67ac00f011c4",
              "line": 160,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6972430f-755c-4f99-bb09-0b7818c4883c",
              "line": 147,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9a9fa3a2-ba6d-4bc0-b968-31a5ae17d2ee",
              "line": 287,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "db7d10eb-7613-4c1e-a45f-9a256477bae1",
              "line": 196,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6ac927fa-772a-435e-b91e-8fc665e45701",
              "line": 486,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/System/automotive_berkshire_pennsylvania.wmlsc.uvp": [
            {
              "id": "b698db0e-9949-4460-98ab-4eedb0268ae8",
              "line": 491,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1dadd16f-fa70-48aa-9af9-1a0c96726f14",
              "line": 89,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2af7851d-1a8c-4c06-8467-9bf277a91016",
              "line": 17,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0a21f13b-3b89-452b-b047-7b1e07cb2eba",
              "line": 474,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "254196c9-16c1-4abc-8c51-9f9fc81ea095",
              "line": 113,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6d3aa88b-5c3c-47e8-bcea-9b8edd83d83b",
              "line": 351,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "c55287f3-e417-467f-9f08-302a1eeb5328",
              "line": 330,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "42601e0e-2909-40a9-a2fb-580347495365",
              "line": 429,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8328864e-e0b4-4245-a8b1-accc47afc710",
              "line": 497,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1d478de4-c30c-4354-bd37-fd47ee7e8bb4",
              "line": 307,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "dbbda0bf-a558-4046-894e-89acafc3fbad",
              "line": 473,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "535ba6dc-2700-4ce4-a66e-fe657860d809",
              "line": 128,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "988fb587-c8b1-4fd3-b8b2-51d3d5a02c91",
              "line": 417,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/etc/mail/principal.m14.jpe": [
            {
              "id": "02b7a64b-8a4f-40f0-8d52-e60b1fa6d440",
              "line": 96,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1f372dcd-e5a0-4ab4-ac88-1fdfac6d1f3d",
              "line": 397,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ec7fd5dc-53d5-4608-9f1f-bd45050403eb",
              "line": 261,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "feb5c8b2-16a7-4c57-b39b-3f7c21c59cca",
              "line": 161,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "24cd6627-5872-4fb2-880d-b8ba9e501705",
              "line": 467,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "3633c636-1b63-4c19-a703-c6a40997a79c",
              "line": 31,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "690a89e2-d348-4bec-bd24-dc2b022e2984",
              "line": 493,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ef800bf4-724f-4adf-834e-f70015b4d59d",
              "line": 105,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4d4a9f92-2309-4095-b411-ee9835c8f7bc",
              "line": 218,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8778f9d8-e41a-4d61-a7e3-43f7cf835f64",
              "line": 213,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "ca5206af-fbd3-445a-8ad9-c2e0fe1ff189",
              "line": 270,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/Users/venezuela_payment.icc.ims": [
            {
              "id": "1d5907b5-39c9-4204-b231-143dead43d2e",
              "line": 269,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "799e1a97-2e67-4e51-a114-13d6a8bef32f",
              "line": 211,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d54e78c3-7ab2-43cb-9e4c-08a029f71130",
              "line": 341,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6c4c1f81-3bf0-4fc0-90ac-a9afb5df4907",
              "line": 395,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a55c756d-31cc-42d5-a68e-f36b345f5543",
              "line": 113,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "b9c51374-588d-4421-b935-6afcc0b624dd",
              "line": 307,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0c905bcc-091b-423d-b972-47b1b8c34571",
              "line": 252,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f04e806d-1e7a-4177-9e7e-cfdea16cb79d",
              "line": 47,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "55b190bd-5eb5-4947-91bb-9b087f368897",
              "line": 73,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d7bceb42-dc47-4648-ac7f-c328ef92e6e0",
              "line": 160,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7b72b05d-abd8-4ed5-8b42-625d6f594433",
              "line": 398,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "051d2db9-3c06-4f0e-85d5-707432f28dbf",
              "line": 51,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ]
        },
        "startTime": "2021-06-30T17:13:11.522Z",
        "totalRecommendations": 162
      },
      {
        "id": "2d6b40d9-8921-426d-948c-5aa15895d4ce",
        "name": "circuit-navigate (2d2b498)",
        "state": "2",
        "finishedTime": "2021-07-01T15:45:22.678Z",
        "recommendations": {
          "/usr/src/full_range_open_source.flw.kwd": [
            {
              "id": "a927eeba-44b3-41cc-b93c-c7c574b9d222",
              "line": 419,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9182fcd3-7207-4658-b420-5f4673e5ab7d",
              "line": 445,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6488d696-8f36-41f6-8c4a-656ef4c66443",
              "line": 376,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b3d2b68b-023d-4581-ab83-0bfbee824e78",
              "line": 223,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e006c70e-df26-4a57-a7d5-bd1f8b97608b",
              "line": 172,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "36ebec34-77ed-409d-bd77-cef03fd50de3",
              "line": 384,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "26ee2bd3-cef8-4232-90f3-e2c492d9c79f",
              "line": 81,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "52ba010c-c903-442f-bdce-0594a109e0aa",
              "line": 96,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1225deb2-8a58-4428-964f-10717b158234",
              "line": 413,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "755f6a98-9406-401d-a92e-c05d9ff953c5",
              "line": 29,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c198004f-4de3-4b6a-8b30-a60becb54459",
              "line": 480,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "234a8372-f62d-4dd9-9418-66b49d291089",
              "line": 17,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "940f100d-c769-429a-8914-091f671bbde9",
              "line": 112,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/usr/libexec/rubber_withdrawal_phased.aam.pfr": [
            {
              "id": "e19b5ec1-ebc6-4fb5-befb-0514d6c070f9",
              "line": 190,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "286e26e5-1a11-40ad-8bac-4d177255c976",
              "line": 365,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "a3503503-4d9e-4227-b302-a60183a8e7fd",
              "line": 129,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fe8184bb-5c55-4a70-b07e-0ce82b1a2fca",
              "line": 206,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9bda350c-be99-4a54-a498-607aaf308fb0",
              "line": 408,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/boot/defaults/montana_berkshire.dist.sit": [
            {
              "id": "8d9a8f94-fe3d-44ad-b828-ab0e6f7f363e",
              "line": 298,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2fed35ee-cec6-4745-a0e1-66a36a234b30",
              "line": 464,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "352ea250-031b-4a14-8382-2f610d0c084d",
              "line": 328,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ]
        },
        "startTime": "2021-07-01T00:23:10.813Z",
        "totalRecommendations": 21
      },
      {
        "id": "995af69c-a051-4ef9-89c7-01de98bf14b7",
        "name": "feed-copy (d512027)",
        "state": "2",
        "finishedTime": "2021-07-01T21:28:13.059Z",
        "recommendations": {
          "/rescue/eyeballs.pml.pic": [
            {
              "id": "adcd0a15-1dec-4de1-ab75-8a8234e36808",
              "line": 75,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cb3bdb7d-71ba-4036-a40b-7bca4795ed22",
              "line": 7,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "336c5de2-411e-4f3d-8450-ca4ed36caf42",
              "line": 437,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2a9f2832-bee1-49a4-a320-756783d95cef",
              "line": 197,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7fbe0766-0bb7-4f02-90cd-ea38f24e7b6e",
              "line": 435,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "abd4e659-d8c3-4b47-afb9-d0d2dbe2c27e",
              "line": 216,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4fec68de-5a91-4eb7-b0f1-bbf86f8c631d",
              "line": 52,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/home/user/new.itp.vcs": [
            {
              "id": "e95eca6d-139f-4df9-aceb-7895f5108a60",
              "line": 384,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0c33a51c-1a9f-4bb0-b4d2-77d413012fef",
              "line": 423,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ffb0c1a9-0aa8-42af-986c-5b05d8728415",
              "line": 64,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "57951fe8-2c50-48d2-b63b-55803fe83c86",
              "line": 262,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e551fad2-5b0d-4d0f-9f6c-b8c302d0d2d8",
              "line": 237,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "981518ee-5289-42a8-811e-5b0c34c57487",
              "line": 374,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "6242e13d-5c98-43db-be3f-bff508484020",
              "line": 381,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "4faf630f-1efb-40bf-8fee-797370ebeb6b",
              "line": 459,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5c9a813f-e96e-47a2-a56e-a800319b4512",
              "line": 490,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/bin/pink_garden.au.ecelp7470": [
            {
              "id": "f79eb7d0-196b-426a-8f59-c30a2272062b",
              "line": 311,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "66603605-9173-4a4e-9c45-96e34d8f1b9c",
              "line": 303,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/lost+found/24_365_deliverables.ris.xyz": [
            {
              "id": "3383a6a9-dc4f-4119-a921-ff3c28ce5738",
              "line": 159,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "f1d5ac8e-9040-4dcd-bc30-8c268b6992ee",
              "line": 261,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5a00c49d-5615-4b6e-8aaf-4c39e97e63a5",
              "line": 178,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "417c9ff5-7a39-4d7c-99f2-c14bab210626",
              "line": 7,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "401bc318-6fe2-4412-b968-43b0180c6ad9",
              "line": 221,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "05356422-35d4-483b-96f6-27b80f6269fa",
              "line": 83,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e01530f3-d4fd-43db-87ea-b2c0f62ecb46",
              "line": 127,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fc825d81-2e8b-4ad9-8286-821c432e79b4",
              "line": 90,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a9125521-fa70-4f58-bb1c-2d91b132a234",
              "line": 142,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "9825ca9f-5a37-48a9-933c-de0213b4d417",
              "line": 482,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c912b611-a989-449e-83a0-81f872ad5a61",
              "line": 84,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/Applications/hong_creek.acu.cbr": [
            {
              "id": "f38b6ce1-fcbf-4f51-8b7c-579593be1186",
              "line": 319,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "5fc29369-8b5a-409b-a645-64a52a54ae99",
              "line": 407,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/opt/sbin/rubber_card_dinar.clkp.nzb": [
            {
              "id": "0acd431b-fa4d-4075-b59d-fd5f410dde93",
              "line": 188,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "0fe77d8c-79a9-4037-af40-74cc4fdc0e5b",
              "line": 45,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "50888f70-d1f4-4620-8082-a3ebb2d2dfdc",
              "line": 458,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "56d2798a-fd06-4923-941e-775bf3c02104",
              "line": 97,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "211b486b-2505-4d91-9ac1-c5d5e54ceaf5",
              "line": 500,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "14795db6-24ca-469c-8a1a-633253046c41",
              "line": 477,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "28918736-a7a4-45d4-96aa-c5ef5d4be781",
              "line": 281,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "41502aba-bc9b-4e11-b8e2-fcd5ab082f1e",
              "line": 234,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "69a603cd-b56a-44ac-b5de-f545a125d8d8",
              "line": 289,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "cfc51560-eb30-4ada-9052-f7fb11e2608b",
              "line": 194,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "23e736cf-55ff-473b-a5e9-923f0ad5bc1c",
              "line": 140,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "7835b1c8-253f-43d2-ac79-175499fc9453",
              "line": 333,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/lib/baby_tasty.sit.mwf": [
            {
              "id": "c7b64914-97f0-4bf6-9951-845cf82c12da",
              "line": 0,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e3ddd052-9903-4e53-9aa0-dadc9166c378",
              "line": 181,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "73101812-3260-436a-9c8e-2a83d213800a",
              "line": 408,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "19166694-9cfd-4cff-8e85-59c6bcccb636",
              "line": 107,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/mnt/usb_sas_black.cct.mgp": [
            {
              "id": "3331481c-0770-4fcf-b45a-f83203a3ee5e",
              "line": 283,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ]
        },
        "startTime": "2021-07-01T02:45:44.090Z",
        "totalRecommendations": 48
      },
      {
        "id": "3a11b39d-0d72-4763-a716-33dfef7c15d3",
        "name": "sensor-reboot (e3faea7)",
        "state": "2",
        "finishedTime": "2021-07-01T09:55:35.956Z",
        "recommendations": {
          "/Network/compressing.metalink.kpxx": [
            {
              "id": "a69e22a2-6e40-4e9f-adfa-379119406412",
              "line": 95,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c65439a8-bed4-4ded-9a36-4ec683ab3068",
              "line": 68,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/libexec/small_uniform_cheese.sxw.svg": [
            {
              "id": "5ebed374-21ae-4e8b-b0fd-e8ffe8addc24",
              "line": 350,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "54801bd0-6da4-4bec-adf2-54137546e3e2",
              "line": 239,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "fd859019-eae5-485b-be6c-5e2b78d483e7",
              "line": 244,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "2a567fb9-2bad-4d0f-9eef-a20d3c1c76f2",
              "line": 318,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "fccd8e34-7cc2-401a-866f-603e8a2804ab",
              "line": 226,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1fb317ec-c5ae-4030-a3ba-86ad91d93434",
              "line": 439,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3baf66c8-9207-4c8b-98cb-95af9f47c32f",
              "line": 187,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6bcbcad0-f912-4042-b94c-12c3c0da9bf4",
              "line": 455,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "0c05aa32-8463-4789-b62a-7d25f3f66808",
              "line": 280,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "49a55d93-1b6f-403f-a1c1-ca05d5ababf9",
              "line": 415,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0d55b553-e477-4e01-bd1c-5863947c6f3b",
              "line": 286,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c56e59f4-f525-4819-bbe6-f63509cf85d6",
              "line": 478,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3315ec5e-cf6b-48aa-a011-f49139d69267",
              "line": 252,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8fec6813-82a7-47ba-af0d-3d26e49f8b90",
              "line": 341,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "5ec74ca8-6bc3-4b55-a44c-c398278b2198",
              "line": 244,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d96960a3-fbeb-455f-b69b-4309f09df837",
              "line": 109,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3731b748-cd0d-49a4-995f-8304ea219ba5",
              "line": 130,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/local/bin/robust_rubber_connect.curl.pem": [
            {
              "id": "e6c38434-e82b-4eb6-a973-0eb2aaefa5e2",
              "line": 155,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1e6c500e-15e5-4cf2-a3d1-d559d9efe847",
              "line": 283,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c70fe8fe-0121-4628-9054-649cf26b1fd2",
              "line": 207,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "1da3acc8-f29b-4791-9726-369ea8cdbf04",
              "line": 390,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3e947e74-93ab-4d35-adff-0a0b2dc81d5d",
              "line": 88,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "8254d3d9-8677-4e96-acba-45a132a4738b",
              "line": 352,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "35dbd1a8-05b7-48c0-b6f6-db35e90b82ef",
              "line": 401,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "36943329-5313-4c01-9f56-d313bf1d8f92",
              "line": 99,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "85e3971f-248d-4e4e-9066-d4e8ca46d70f",
              "line": 116,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "971376ec-6ef9-4d79-8686-84b7adc07a66",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "b7caf93f-79e1-49f6-bae8-97b03551e04d",
              "line": 489,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "329df931-fa69-4ff6-84a6-e54770b3935f",
              "line": 172,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8d244eda-6f57-460d-877c-2e257e0ae46c",
              "line": 144,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "da7cac6a-f3b1-48c4-9248-ed731ec7e5a5",
              "line": 65,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/opt/include/licensed_implementation.sgm.sv4crc": [
            {
              "id": "3173ecb4-3745-48b2-8295-352709fd56dd",
              "line": 148,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "256d6494-d587-4d64-9458-25669b2cde81",
              "line": 335,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9e35136f-9e61-44fa-8905-e7091a4d1939",
              "line": 278,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "cdf8d430-82fd-47df-bd5d-bff1d1666a51",
              "line": 479,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "de945e1f-1076-4135-b0db-2af19a8ca673",
              "line": 52,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "24b965e4-faed-481b-8beb-fc661253c8ff",
              "line": 57,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "abb9ef2e-e5e3-4754-bace-f605a923a62e",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "957b2bac-6a17-4f4d-b792-be63c4bb6f34",
              "line": 371,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "63ed8412-b92e-4eb1-a10e-9908b32ad9ce",
              "line": 406,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "9454a595-ed47-45b7-a5b0-0952cfdfac68",
              "line": 340,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "5268f603-a226-4eca-80fe-85c739f2481b",
              "line": 439,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7ec6f24f-f7e0-465f-9196-b19e4435044c",
              "line": 93,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "dd101233-fd3c-4ce7-b515-bfbf0d0865a7",
              "line": 330,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "e0fd6436-faed-43d5-8739-cb9b5983bd59",
              "line": 476,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "06bbf195-3d30-4428-adec-c2d5b587d808",
              "line": 364,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "298c2d39-da5d-46dc-8a01-b7d28e8837df",
              "line": 422,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "353059d3-12ea-4bf5-9575-ff891cd01267",
              "line": 485,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            }
          ],
          "/usr/bin/walks.lwp.dart": [
            {
              "id": "ee06bdc1-7e9c-4424-a40e-a9d362fcb3a8",
              "line": 265,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e8883e93-5115-45c0-a18b-2c0be9af34b7",
              "line": 458,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "cb7ef3a8-eec6-4d29-b2e2-2826c95b045b",
              "line": 448,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/lib/intuitive_fuchsia.atomsvc.sru": [
            {
              "id": "0a4517f9-6c5d-43a2-a341-412a04c02ca2",
              "line": 210,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "1fb7aced-7107-41d4-8e02-ea4c36650123",
              "line": 83,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "d940bf26-57f6-4a9c-99ba-fca0feeacb19",
              "line": 374,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "7e024154-23b0-473d-bc98-c93bba85e65f",
              "line": 254,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "95413275-065e-4209-8279-ffb2d0e2a3b2",
              "line": 484,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "665fc652-ffcc-4dca-a1a0-17a7366b4996",
              "line": 220,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b605a0b5-46b1-4763-bd80-1b31213de39b",
              "line": 446,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f2b28fb0-7817-4837-976a-9c579ad10bdb",
              "line": 140,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "26a5cbd9-998a-469c-bfc6-c303cad7ac90",
              "line": 281,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "90ad8eeb-db03-4b99-b88d-0a65b1dd6079",
              "line": 1,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "b5ea202e-4fec-4780-8a44-08650f7dc93a",
              "line": 112,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/private/impactful_clicks_and_mortar_pci.ice.cap": [
            {
              "id": "58b10e83-c960-4177-8563-bf01058a5ba0",
              "line": 50,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d4028b8d-67a9-46b1-b874-6a0dd1fb354d",
              "line": 206,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "22cb7c56-9689-4b33-b50a-a52561874b45",
              "line": 311,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "e000acb0-05d6-44b8-a099-a980ad1341ee",
              "line": 155,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "85d03dfb-373a-4e60-819b-dcf224a4ca3a",
              "line": 464,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "a2f82182-44f6-445b-8365-a6c5d0794fa7",
              "line": 156,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "af1377e3-37b9-4829-af38-e336963110d9",
              "line": 270,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "303a827c-bbcf-49af-978e-d78ce1a9b069",
              "line": 463,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "77cea53c-de18-42b6-ab90-ca5ffcce3931",
              "line": 423,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ff8f4c9c-fe5a-4baf-b0fc-451b18e7bc25",
              "line": 150,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "96fc1350-f5c3-4695-b120-6957fa2e6bfc",
              "line": 445,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9f3dabaa-da5e-4199-8af6-cd3c878bcd8e",
              "line": 453,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3d1fdabb-f6d5-40df-a0ae-1a7e35427730",
              "line": 216,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "84fcab15-d7c1-4004-a008-d3eab6611000",
              "line": 448,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4a260707-35cd-47e6-97cb-c50915217e04",
              "line": 479,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d0df9e95-4229-4e5d-aadf-d53392108a91",
              "line": 217,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "036afd85-d2ae-4ba4-950f-dcf74fb37651",
              "line": 133,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/media/avon_port.json5.tfm": [
            {
              "id": "e07be13b-50ba-4d78-b4cf-51f3ba2db45e",
              "line": 337,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "6f7c411b-e35b-4682-9956-2577ff634f95",
              "line": 466,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "0042b72e-89f8-4cd6-9423-4c034893f4ff",
              "line": 43,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2b7f1d45-bf36-4525-830d-dbb5e72d5b95",
              "line": 478,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "728436b4-3574-42b7-a40f-19ecd312fe3c",
              "line": 204,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "cf182f73-72bf-4e45-b9d0-cf989c6a7d72",
              "line": 160,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "1c89481d-a248-4aa8-8787-3b1935d63f26",
              "line": 486,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "e2af4f63-acdd-47ae-a764-aac9a139011e",
              "line": 133,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/var/mail/future_proofed_mindshare.potm.uvvs": [
            {
              "id": "7d8c0512-eefb-4052-8d94-0522ac946a05",
              "line": 187,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d4d99136-3e74-4184-8a33-bd2ba0cbb59a",
              "line": 11,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "34626932-148a-432f-8440-3fe3c2e0c374",
              "line": 480,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "4b3cbd14-fa61-4feb-a29d-09b545e7e11f",
              "line": 112,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "4328c47b-89a3-4816-818b-373288705e94",
              "line": 34,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2f59dbc6-a33b-4f1d-8c23-20dc4e0fe401",
              "line": 448,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ca158fc3-a2fb-48bd-930b-e2b0c25ad172",
              "line": 319,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "903c6a45-2082-47e3-b9f0-93239d2cc189",
              "line": 314,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "668d5ed9-090a-4479-9b55-52ff9a22f0db",
              "line": 414,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "f63057e8-1228-497a-a728-9768955a4940",
              "line": 233,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/opt/bin/website_team_oriented.mseed.zir": [
            {
              "id": "a74237d4-164f-4606-9368-81efee92bbde",
              "line": 78,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            }
          ],
          "/lib/archive_solid.mbk.spl": [
            {
              "id": "589a6833-4ed7-48e8-89dc-e16c9eda5de4",
              "line": 224,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "db6159ad-6b17-4081-88d8-6c005e09f640",
              "line": 437,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "2ef2f0b8-943c-4c3b-a31d-0b07f79cb57b",
              "line": 366,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "50607d3c-e406-43e9-9d8a-e220bd381366",
              "line": 68,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "6b14ef3f-76bc-4254-aa42-50e314675c19",
              "line": 193,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "47f78e05-4f67-4425-b33e-1540fe81c3fc",
              "line": 408,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "3e859781-5c40-4978-9619-a02a8a5f6111",
              "line": 145,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3d83753b-dab1-459f-ae55-4615afea03fe",
              "line": 65,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "bbbcb79a-cca7-47be-9854-0e6962c6bb4b",
              "line": 60,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "59c7e79f-173c-43c5-92e3-10ef7e3cfd8b",
              "line": 155,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "d7fd34d3-5f0b-4208-9f94-8aeb60f36a3d",
              "line": 109,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "68b31a15-94a4-44dd-a9d9-ba6f613f4e82",
              "line": 234,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "2b8c0d52-a005-45c1-a36d-9dee8414ee17",
              "line": 146,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "30df1f83-3a30-4aea-8722-30a9694133fa",
              "line": 215,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "23f6d504-97f3-4a81-a756-380db8e326f8",
              "line": 446,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/opt/lib/product.qps.mseed": [
            {
              "id": "9dad0d27-0cb3-4d70-80e6-11ba162b70b5",
              "line": 77,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
              "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
            },
            {
              "id": "9741aca6-cd07-4f02-811d-f2fb0be402ae",
              "line": 192,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "ae3d65a3-11f1-4bd3-afa3-85505d1f438b",
              "line": 213,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ae29486c-a170-4c03-81fb-23eeb88787e2",
              "line": 214,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "8261f753-41e7-4092-9bae-91a71b262e8e",
              "line": 231,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "46554bd8-4b71-448c-bbea-67f42c3c43ae",
              "line": 145,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "d196aa7e-d8d4-4de5-a3d5-02ae6fb9c155",
              "line": 269,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "38c13401-cc22-4984-bfb3-391d62831434",
              "line": 186,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "c7a157cc-734e-484e-bf07-d74bdecb4b63",
              "line": 487,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "ca747ab4-a3c9-423f-9048-833422ecd1b6",
              "line": 478,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ],
          "/usr/lib/connect_jewelery_global.aam.wsdl": [
            {
              "id": "e24a7cf8-c9f5-4d14-8c8c-c47dab28db5a",
              "line": 314,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            },
            {
              "id": "3f1c3436-397a-4b25-acb6-3cae79ca76aa",
              "line": 29,
              "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
              "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
              "title": "PortletConfig get/format methods"
            },
            {
              "id": "741a961e-0dd5-4ea1-acae-1cfcbfbc335c",
              "line": 429,
              "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
              "title": "@deprecated As of Judson (7.0.x)"
            }
          ]
        },
        "startTime": "2021-06-30T14:41:55.673Z",
        "totalRecommendations": 128
      }
    ],
    "pendingTasks": [
      {
        "id": "aa18d111-7dd0-488e-ab58-c4cafac627b4",
        "name": "bandwidth-hack (fe064e2)",
        "state": "1"
      },
      {
        "id": "c5371a74-5175-4784-974c-ed34943c1880",
        "name": "port-copy (0a70226)",
        "state": "1"
      },
      {
        "id": "6b8d996d-8172-4a64-80bc-d8beff9575f7",
        "name": "sensor-reboot (42b2d87)",
        "state": "1"
      },
      {
        "id": "ad687869-70ea-4455-8167-82572f8950c5",
        "name": "sensor-quantify (19c48dd)",
        "state": "1"
      },
      {
        "id": "41699b8f-d731-4121-9813-f37a12773ace",
        "name": "array-bypass (6af2dad)",
        "state": "1"
      }
    ],
    "runningTasks": [
      {
        "id": "0837a034-3262-43e4-a677-a35e4e07cb7a",
        "name": "feed-quantify (1b25a9c)",
        "state": "3",
        "startTime": "2021-07-01T06:38:45.325Z"
      },
      {
        "id": "47f13166-6967-49c0-bd63-bc9cdfcaf7cf",
        "name": "pixel-back-up (08f6dd5)",
        "state": "3",
        "startTime": "2021-06-30T18:34:04.970Z"
      },
      {
        "id": "b51aebf1-f6e3-41a6-b8c5-f6cf5393f191",
        "name": "driver-override (8bc7814)",
        "state": "3",
        "startTime": "2021-06-30T23:31:32.287Z"
      },
      {
        "id": "fbbabc50-1e92-4177-a666-df042e8d607a",
        "name": "capacitor-calculate (9196497)",
        "state": "3",
        "startTime": "2021-06-30T13:53:22.918Z"
      }
    ],
    "description": "Animi dolorum voluptatem provident omnis officiis voluptatem. Blanditiis aliquid voluptas dolore quia laboriosam sed voluptas laborum occaecati. Maxime reprehenderit corrupti nihil aut reprehenderit est. Vel aut dolor magnam quod provident. Quidem ducimus veniam dolore. Deleniti quod soluta ut maiores iure ad vero.",
    "id": "Will-Inc",
    "location": "https://github.com/lug-bot-api/microchip-transmit",
    "name": "Will Inc",
    "url": "https://leila.info"
  }
]