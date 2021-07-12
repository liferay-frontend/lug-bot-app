module.exports = {
  "completedTasks": [
    {
      "id": "79363c40-b2d8-4750-88f6-c75f3408ac68",
      "name": "bandwidth-back-up (e891fc7)",
      "state": "2",
      "finishedTime": "2021-07-08T23:35:36.589Z",
      "recommendations": {
        "/usr/local/bin/dynamic.conf.plc": [
          {
            "id": "93f013d4-6341-40cd-900c-3ce26d4ebc96",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d83bade8-b072-4e0a-98f5-8d6db37976e2",
            "line": 7,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b40031b0-7a47-4a71-98ec-de7cce832ece",
            "line": 461,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "81e5302c-ed59-4776-90ea-df5d83bb6417",
            "line": 180,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "67c4a9d4-7c83-474a-a849-0cd1d5f4e707",
            "line": 455,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5ce40d6b-f730-4906-9b26-6b993837cb66",
            "line": 291,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3cfc4490-8bd4-41e6-bbcb-00761056df11",
            "line": 164,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "35e4f81d-4604-4b7e-8519-eeb665afb625",
            "line": 324,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "045665f3-2ec7-4113-b4b6-5e1ebf94deb8",
            "line": 194,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f9c2b5e0-60ca-4e99-a67b-06ce849a842a",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "08b3d81b-e730-4b35-aec5-5b561edbd22f",
            "line": 384,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7bd26a8a-146e-46bd-8ffc-c0d6c192dc16",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e4401966-3b4d-4fa4-a8c4-0d8a2f9c55f7",
            "line": 47,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0cf5c726-7f64-406c-8f18-fd45eb20f8f3",
            "line": 266,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bf86ff3b-1149-476a-a0a9-7f9f6e992a78",
            "line": 246,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f6749047-c37b-4024-a1ec-32c9036ca8ef",
            "line": 351,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ad583e3a-d194-443f-ab61-b9bdbac080b0",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7c81011b-b465-4795-b907-fe080dcd83c2",
            "line": 456,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0762715f-31a8-4a88-ae32-5b40cb3d2fce",
            "line": 46,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "899594df-aa25-4e12-a1bf-93928288c8d9",
            "line": 224,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/user/dir/pants_intuitive.fh7.sgl": [
          {
            "id": "6156c0c2-daee-4146-98d0-e3055b218688",
            "line": 151,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/niches_small.gpx.pbm": [
          {
            "id": "8e8ee2b0-2c06-4db1-bbd9-dde441561619",
            "line": 328,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5ba9cb2f-f20d-4e69-bafe-82030dab7c62",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e9f8af3b-d22b-4ec5-97ae-dba48e6b745d",
            "line": 266,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "edcc12f5-b16a-4b38-98aa-7d9fae29cfa3",
            "line": 434,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "eca03db4-b83f-426d-aa46-084ae26fb443",
            "line": 109,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6939688f-4149-4659-b083-6e268ff4dc08",
            "line": 228,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "12306c72-39bb-4707-8333-fa3f66d96e79",
            "line": 202,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/mail/baby_stravenue_hat.rcprofile.afm": [
          {
            "id": "e264c8d5-daa1-4d96-a582-3874a2932f27",
            "line": 399,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "94ef192f-b5fa-4ffa-a1eb-ec052f2a4bba",
            "line": 155,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "be574089-a8a9-40da-a8b5-fbf6a19303c7",
            "line": 479,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dbaebbdd-a8cb-44ac-b91d-5c036604468b",
            "line": 162,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "50711f4e-6906-4664-bc4f-ac83a15f7184",
            "line": 373,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/bin/array_liaison_extend.mxf.rep": [
          {
            "id": "6a680d2c-7aa6-4e55-8796-e79d96a072d6",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cd2b7e5a-4f1a-49c2-ab05-167e8db946e1",
            "line": 24,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3bc50608-81b4-4d1d-b792-293796cc93cf",
            "line": 263,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "332293fd-fb83-4d15-aed3-2b757d5dcb7c",
            "line": 434,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "09efae03-7f9a-47d7-80cd-d8e319aa030d",
            "line": 101,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "de25227e-5f0c-460a-8e49-c91b0050a66d",
            "line": 353,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4b9474c6-732b-4013-8a11-97e2bea54efa",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f35f4a64-c0ea-49ce-a2a9-9a6297d6d5ad",
            "line": 353,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/mnt/metal.sus.3ds": [
          {
            "id": "e0b4f9bd-3e2f-4e0e-8a22-d0582bb346fe",
            "line": 94,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "49df9bdf-c6a1-4f0b-814f-c98c663d1d1b",
            "line": 110,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e6088180-7c27-4b0d-be6e-a9457d211449",
            "line": 29,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9957550c-2c1e-497b-b218-668f6bb60782",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0ff540da-decd-4e3c-abcb-0f5a1c4d6b09",
            "line": 368,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4cc14cfe-a8e7-48f1-a3c9-80e3c5d69809",
            "line": 30,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eb7cf20a-3677-4481-be77-ef3bec00d696",
            "line": 245,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4e5463f4-1464-46bb-bc92-853ccadb76ab",
            "line": 321,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/tmp/thailand.zirz.cod": [
          {
            "id": "c8b630ee-ee2a-4bfb-9c2c-0ae901ff304b",
            "line": 14,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/srv/escudo.xspf.ttl": [
          {
            "id": "71733220-d34c-4ad9-a835-bf2e379c09bd",
            "line": 201,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5731e142-f06e-4682-818b-db4f9f80cf03",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "94bd4390-dd47-4b17-b07f-078a13941720",
            "line": 217,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "461a9111-9e2c-49cc-8a94-15323f662374",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/sbin/xml_strategist_secondary.ulx.ac": [
          {
            "id": "25716eba-0517-4ca3-801c-fbcac29c12e5",
            "line": 166,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6db0aa89-0f48-45b7-80d0-20bfbbc9ce83",
            "line": 311,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1a3f9cd8-8fc6-4578-b31f-971a7da98a1f",
            "line": 471,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "594631ba-1f29-4f5c-8fe7-538b6704b6ce",
            "line": 488,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e2de8f08-bd05-4eab-9248-d5f082563dfc",
            "line": 200,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dcb21204-bad6-4537-b27d-58de545f882b",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a6890e01-7c2b-4f6b-a3c8-83bee463fc73",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "45e52718-8567-48db-9df8-c330913a6bab",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "450fa3b3-b799-4eb3-883f-87e2718eb011",
            "line": 89,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/net/intuitive_technologies_1080p.pic.mks": [
          {
            "id": "b9e750bd-b02c-416e-a5ce-21459deffd5f",
            "line": 193,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5cd5dca2-2470-48e0-99cc-86f60cfcf6b3",
            "line": 477,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d8bc7004-a42b-434e-a241-f868e995123d",
            "line": 462,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e11ea783-387a-4957-8d06-477099eb27df",
            "line": 377,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "273ea319-c708-4684-9cae-be1cdb37cf02",
            "line": 350,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fac2334e-a9c7-47a3-b602-a3df08bb45f7",
            "line": 297,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "65d1f751-62e8-4e01-ad7d-cb8d29f5b56c",
            "line": 203,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "becf67a4-9cf7-4956-92d9-9fd72d664862",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "89d1449f-9776-4215-98b6-18d65928f59e",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/lib/microchip_frame_gourde.uvvf.mka": [
          {
            "id": "c343ebc5-98d9-42ab-900c-49496a5c6194",
            "line": 145,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "27fb93e6-5146-43b1-abdc-318487f0d94c",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a8e83145-dffb-44f2-9560-d50f0b84b746",
            "line": 473,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0805a13e-86b5-4183-ac2c-a80aaae7d651",
            "line": 379,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bf8b4c3d-b1fc-4942-80bc-4eb18a711a09",
            "line": 194,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1516e200-088e-4cea-a080-77fbe623da8b",
            "line": 285,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1de4f891-f419-4dc4-915e-baff2275554c",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "66f9180e-b093-407e-bfed-6752a3bb055a",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "723c607e-7e7f-4890-b230-9b3821d90296",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/media/matrix_account.cct.zip": [
          {
            "id": "ab4d9d2a-9c6b-4196-8626-d6494223e170",
            "line": 91,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0c76b474-ff53-47e9-a7cb-a9a557a97b85",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2a6cca2e-330c-43bb-9946-a0776dc09cbd",
            "line": 468,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c31bb055-3cf8-4eb5-b77c-0fcc0c7eea31",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "feb015da-1669-4c35-9034-d9b173cfecf2",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c2ab81fb-911c-4c89-a3af-ccf444c85c1f",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b46f203b-0756-405d-9c92-71a416f110b8",
            "line": 315,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "567d71c3-3b05-481d-b5ea-2909f4d7ca7e",
            "line": 282,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "552a9b91-f5ee-473c-8de1-b2bbaf576e98",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/namedb/savings.uvg.cxt": [
          {
            "id": "dc8343d1-15df-4d70-97eb-7724aa701f70",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d4b140da-94eb-4f38-bdb3-d7cf548eca80",
            "line": 87,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5d8e6ad6-a0b8-43c1-9e9d-f85a8875ada0",
            "line": 432,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c7383547-d98e-4f33-9119-1b821cf81b69",
            "line": 72,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "28e60aff-4aaf-449b-a10e-1a7d7fd79df2",
            "line": 29,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8001a77c-ab05-4590-9b62-2bd7a79eb28b",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "78925006-1099-4c1a-87eb-fb5f97fd7924",
            "line": 86,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/var/mail/sensor_chips.pcap.kia": [
          {
            "id": "1bc998f9-54cc-4171-b9ad-e84832b4b861",
            "line": 441,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3bb014ef-2486-4b2e-b9f6-80edb597acd9",
            "line": 225,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "aa56870f-008b-4b1d-a68c-e99be50e015d",
            "line": 378,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cfacc8fa-0f40-4187-bd21-3f122a8c0e4b",
            "line": 154,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e9990817-bab7-4961-b82b-b6639d120c1c",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "de0bfc29-22a9-42eb-a0c7-1df0899024ed",
            "line": 332,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7c49999d-f10a-4727-90da-a16ac6f23c12",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4f78cd3f-de61-41b1-afee-7d9bbac506c0",
            "line": 197,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b34a6e0c-fbe6-4128-9b87-15f7b75b1be6",
            "line": 101,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0fee9939-599d-4123-8e3a-49774d003cdd",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "17e9b193-f25b-4d5f-a3ab-08841fc866dd",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c8ef0d3-8e64-429f-a7eb-b8a94814d8c2",
            "line": 419,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/src/firewall_deploy.rmi.sdc": [
          {
            "id": "6179792c-9fd4-46cc-9cf7-f23ebe96ecab",
            "line": 220,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4f200be4-a7f3-4cc8-815b-367fe1626b0e",
            "line": 132,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "744c00d4-7c59-42e6-9aac-dd0a5fe5c8d7",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2b9d10e4-53e4-4983-a61d-dfda40eea93a",
            "line": 167,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "308ebe7e-5c26-41a0-be17-51f31a0f07da",
            "line": 66,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/etc/namedb/salvador.mxs.bmp": [
          {
            "id": "a3c5f9ce-2b29-4b8f-bcad-5c0700effd47",
            "line": 126,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3a37c6fe-47ab-424e-8141-aad817e960e9",
            "line": 377,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "496d436e-9e34-4f30-b5b2-2ec13c358695",
            "line": 246,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1b006ebb-e795-48df-80cb-450b316c2858",
            "line": 277,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d5ee9be2-3b18-4a6e-9676-7b759cd09340",
            "line": 34,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b0a9c75f-96e3-4364-a642-d529c3e9c4b9",
            "line": 151,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eba6bfc8-8825-482b-819b-91e6018d5cad",
            "line": 96,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0e265dc1-7a6c-4318-ad08-b31fc40202ce",
            "line": 387,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b133a382-65a6-4edb-9c02-a38368e73f0b",
            "line": 487,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-07T13:16:41.142Z",
      "totalRecommendations": 123
    },
    {
      "id": "88ff615c-1d35-4305-87e4-919e7ea3840e",
      "name": "hard-drive-copy (1b5e9b2)",
      "state": "2",
      "finishedTime": "2021-07-08T18:06:03.974Z",
      "recommendations": {
        "/opt/lib/payment_back_end_brand.kwt.application": [
          {
            "id": "6da52735-07b8-44e0-813b-41746d58742c",
            "line": 129,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9c92eda3-8586-47ef-96c3-6a1c2a1519ac",
            "line": 56,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "248adb01-84db-4418-bb6d-1f6b517bf93f",
            "line": 114,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "76b0e770-5497-4c17-986e-6e4b9048a6f1",
            "line": 180,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d08c99cd-2aec-4039-bfcb-89022898276b",
            "line": 316,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "39e3e560-9b64-49e3-9d77-b4f12c13e750",
            "line": 96,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "88808be7-02fe-4239-8ba7-0ec71ff1cb64",
            "line": 345,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "40b68882-119b-41b4-a087-c51d470bd419",
            "line": 271,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "428e28c8-da64-46d1-8932-433789d5a8f1",
            "line": 192,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "11f9761e-db56-440e-a534-ba8f953c1828",
            "line": 202,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4498ba42-3a98-450d-b995-13f67afa17a0",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f20ee5d2-8884-45a7-a7f8-2bc608195bf2",
            "line": 170,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2f413e96-570b-40f9-b609-d13a2d19f051",
            "line": 169,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5b230245-abc5-4ecb-bad1-1152f80b52c4",
            "line": 409,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c956ff10-1120-4cb5-856b-4e6440865732",
            "line": 198,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b3710de6-c65e-4a75-ba2a-94b8a4449e58",
            "line": 6,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4afc97c8-ef5d-4708-8db4-6920526068fd",
            "line": 84,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a0e8fd74-1796-423b-9ca9-f19eedaa3dc0",
            "line": 190,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/private/var/cambridgeshire_virtual.wpl.xps": [
          {
            "id": "c9c7bf13-a6cd-424c-8d6f-44a6fe3c459c",
            "line": 480,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "86234f58-fe96-42f4-a8fb-c322f5526807",
            "line": 215,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "48a918c1-0d37-45b7-9d1a-2c759b7d1abf",
            "line": 367,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b75616c6-096a-44eb-aaab-9805be24c8f3",
            "line": 375,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7946ad69-0c85-4a29-822a-d4acc7eab24d",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "148b075e-7053-4750-b7bf-3a2127b0b38b",
            "line": 224,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2f7df9a6-485a-4ccb-89b6-fe59284d55c3",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "52b91937-7d45-42fd-a2f4-8f1ed2fdf5c5",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "64215de1-21fd-47e1-96a0-614036aab775",
            "line": 133,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/defaults/gloves_orange_salad.skt.ods": [
          {
            "id": "d75b026e-88c3-442e-8742-c8ae23f3a0cc",
            "line": 380,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3bafbe99-98ac-4c58-bce0-2366e71ea10e",
            "line": 324,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "01f80f84-1546-4fe3-97c1-e2e1845aae8c",
            "line": 53,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a653769c-2387-4228-83bb-f648c658af60",
            "line": 331,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "09593f70-9a33-4334-b77a-a484f8c67703",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "60fef8c8-ff55-46ae-a53e-cb7d36d288a3",
            "line": 351,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "96bee77c-960a-46ed-9a6a-965cdb83484d",
            "line": 195,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cc2a89cb-6423-4ffe-9922-7eaf4868a18d",
            "line": 52,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7a2e2279-8fcf-4125-b578-4fd62e494370",
            "line": 174,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "34330528-8245-4a41-8c94-6a0ca39c2477",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5deef00c-52df-4372-8fb0-75148e66523d",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3e6143b5-386e-4e44-ba94-8b7d287116fb",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b9a08d1c-d678-444e-aed6-d761347e817e",
            "line": 433,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "01cc3682-1340-484d-b96e-d13471e5e1de",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8f796bbd-a0f6-49a0-989b-d8981ccad6a3",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e5f6b61f-5769-4dd9-bec8-86c360af5834",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6f6d9010-6bc4-4981-8fa2-411c3d8397ad",
            "line": 380,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "83351514-f8a1-46b8-b798-838609f4630e",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "20db9339-8c7e-4eb7-86ff-00ecc6ea794d",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/periodic/port_optical.semd.p10": [
          {
            "id": "efa27755-c602-436e-93dc-cc678a2726a0",
            "line": 399,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1dc26376-4205-4aaa-8aa1-f06548b2e28d",
            "line": 425,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4e04a89a-92e5-401a-ac34-9888d74f2a7b",
            "line": 321,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eee88c85-6629-4a30-a5a1-78beee643008",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5e938688-185c-4c0a-88a0-b3916d99838b",
            "line": 435,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9382b7d6-1e05-4d23-a464-803bae0048a4",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "07ba8b30-8f15-45ae-8643-7dec616a5d46",
            "line": 190,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "520239cc-431e-4676-94d3-2920186b2ba5",
            "line": 308,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8aacd0cf-2731-4ca8-8ebc-4e150483f783",
            "line": 481,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "10e5a5a1-3323-47ba-a773-b804e2601816",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "185f13a3-4e1e-4ea3-8160-4423e9a44d7b",
            "line": 369,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/sbin/connecting.vob.mrcx": [
          {
            "id": "052201d6-3a7f-4ce3-97c9-54d4fc4f0cb1",
            "line": 140,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "afb2e943-ec45-4c8a-a4c3-2e0b3c5613f9",
            "line": 386,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "013f378b-17b4-4e34-8a7f-a69cd1b0edaa",
            "line": 306,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3eb09b5b-0df0-4bba-ab08-9b0b45999028",
            "line": 458,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bdf9d2de-3119-4607-bbb7-eb36d33cbcf3",
            "line": 160,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "15561823-dcf3-4276-8375-906ea2186f98",
            "line": 428,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "57f5bfa6-8af0-4796-9841-869b7d439815",
            "line": 47,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2d18e3cb-f276-4a3f-890d-c89953958b84",
            "line": 22,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7f6d784e-f415-4f8e-85b7-ba59e0ade0ce",
            "line": 202,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0222ebe5-92e8-4d93-b201-c5d6c1af664c",
            "line": 404,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b70a166a-3cbe-405f-849c-6790f35f713d",
            "line": 36,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "26301802-bc7f-44ac-9fb3-a95ac28540c4",
            "line": 132,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0d88ceab-938a-4a0f-89c8-4cb7f26c1618",
            "line": 35,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8cbf8096-31a8-4966-9a18-861d152f2418",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "854c2dc2-b5fb-4d94-9867-7c0e8b722995",
            "line": 195,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4332a396-0ac8-4869-b4ff-847599bb5ee9",
            "line": 142,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "83878f21-6cb3-451a-8887-88635d3d536b",
            "line": 308,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/mnt/functionality_real_time_terrace.rsd.fsc": [
          {
            "id": "9a55a4e5-4cb9-47d4-8220-2a44bdfa898c",
            "line": 162,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "63cf0ed4-ed12-42af-9058-47e5a03cfb03",
            "line": 245,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "627dc771-72a8-4f51-8ea9-964fdb5a4045",
            "line": 435,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c1597321-8ca0-4667-b36a-0769fe57ba64",
            "line": 447,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "92391a98-1c0e-43f1-b945-0e681bb1d884",
            "line": 12,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e8bed726-b9a7-45fe-87cf-5e30ee3c2681",
            "line": 131,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "73c69269-66f1-446c-ad21-990e82f33195",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c3fe9187-3c39-4a9a-b969-8c2862ac9614",
            "line": 500,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3f41e9b4-465e-4af8-9f02-4259e753df70",
            "line": 257,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "007483a8-b1e5-4d8f-bb48-1295c81f6e18",
            "line": 205,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "41efd73f-f5ea-40b5-b86c-50b408aff090",
            "line": 20,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/json.run.swa": [
          {
            "id": "9649a6af-66d6-4781-9883-ffcb98be3f03",
            "line": 8,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8b0048b2-cda3-4c7d-a9c3-0fe8fc59e588",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/libdata/auxiliary_hat_parsing.sdkm.ulx": [
          {
            "id": "a692d9dc-8a04-4c18-b0c6-4cc170676438",
            "line": 335,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "25e9ce9f-90ca-4959-9f29-dc4d9a2e0329",
            "line": 139,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a9a6cc57-1d0f-45d4-8062-bb60a787704f",
            "line": 432,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6184a7ab-ba86-4b25-9340-9849f3376b03",
            "line": 318,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6706fb0c-b4d1-4fd0-91ea-4acc620e0d0e",
            "line": 269,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "545b4c9c-d666-4b3a-ae74-18ece6073f6b",
            "line": 202,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8fded63f-f336-4d9b-bd80-4cfa9fb4c6e3",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "cb006575-3697-41a4-834b-a40cb3555f72",
            "line": 377,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e47de8e2-8bc4-4797-aa75-aaa659ab1e75",
            "line": 359,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f0fd75ef-9e31-4da5-8ca7-27ac5996bf77",
            "line": 18,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0310ee14-c37f-4ca2-bfe7-776885d14262",
            "line": 269,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "52da2add-8687-4fc6-a737-0056deeaf5ac",
            "line": 366,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d1e7a2d3-f0d4-4268-a3ad-4505a0e5d3c6",
            "line": 102,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4257de82-df8c-48c9-9dd2-14dbe94dbbc2",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "955cb960-c6af-4de5-83e2-fde283201479",
            "line": 35,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "524ad598-2465-4478-a01f-a045a0d837d0",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "725417a0-e9bb-45c8-b4d5-b6ca40c48689",
            "line": 103,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dc37f8fa-4b04-4914-9ee6-7f0e556662f7",
            "line": 135,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ]
      },
      "startTime": "2021-07-08T05:53:19.784Z",
      "totalRecommendations": 105
    },
    {
      "id": "ec498ead-df31-4956-9898-d9b935839ef4",
      "name": "driver-program (6256e25)",
      "state": "2",
      "finishedTime": "2021-07-08T10:59:37.719Z",
      "recommendations": {
        "/lost+found/monitor_viral_real_time.s3m.tmo": [
          {
            "id": "2f2e971a-8c14-4f58-9b99-590d3b7dd316",
            "line": 214,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "89707aba-42e3-473f-8e7f-00e47915f787",
            "line": 487,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "09d8db44-9cab-458a-bfe3-cecf8dafcb41",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6f03c4aa-283a-4e0e-a652-5ce309d97e2f",
            "line": 249,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b9d7d7ae-7c4b-49ab-9192-2876e73d234b",
            "line": 244,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6fa78423-6065-4e93-b28a-c0759ccb7a86",
            "line": 215,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bfa20835-76be-4633-932c-187480f8cee7",
            "line": 371,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8acdf1c1-7e86-465e-891c-a5e7310a222f",
            "line": 147,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f0abfb4e-712d-44fb-a1d5-07cd666b351c",
            "line": 131,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e59de4a6-92b4-4874-974b-8b756e06db39",
            "line": 358,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "137e8ec8-d49e-49ff-a296-4a3cdc6877dc",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d96dd0f3-43d9-4621-884e-549eaed45d78",
            "line": 394,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "122aa424-3915-4fca-bc07-5fe498c33a90",
            "line": 68,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-08T04:27:14.650Z",
      "totalRecommendations": 13
    },
    {
      "id": "28e47829-a9e1-408d-a86e-c97c4906cff9",
      "name": "port-navigate (52875be)",
      "state": "2",
      "finishedTime": "2021-07-08T19:18:01.996Z",
      "recommendations": {
        "/boot/defaults/capacitor_engineer_recontextualize.mmd.distz": [
          {
            "id": "308c627e-6bfa-4499-8ede-abad5a941466",
            "line": 357,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "486380cb-0ff9-4321-926f-a7c101857d9f",
            "line": 494,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "db7a8a78-8e4c-4df2-92be-68f61de2015c",
            "line": 481,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8625625d-4d7c-4f6e-95c9-04e92e5f94e1",
            "line": 473,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "760cc58e-efa9-4431-9351-a29e722e79e5",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f8c29bc1-39a8-41a8-91ab-3d2641d09ecc",
            "line": 19,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "30503fc2-7bb0-4895-8585-d4b91548e6a5",
            "line": 352,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bcf81a26-adb0-4000-8848-ac3d7f2d9693",
            "line": 187,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2e9cbca0-c7eb-43e1-a496-05bb926ae4a9",
            "line": 478,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "372ed0db-5ad6-48dc-aa09-759e95a1b8da",
            "line": 408,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "46fc4c71-8b4b-42ec-9ee6-7d1c2d9a535a",
            "line": 139,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5c98bc4f-3335-448b-9a1a-c69f130cda0e",
            "line": 31,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e49a0b12-b9ff-4625-a058-889d87b0b60a",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4b58f52a-3d19-4541-933e-073de604118e",
            "line": 45,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "31d75350-79bf-4a7a-bd35-2a1360c0423a",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a014b6cb-29bc-4b63-94c1-46601f6cfb85",
            "line": 237,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c22af9c4-8ea8-46f6-8624-afffb9b09482",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/tmp/accountability_up.xspf.fly": [
          {
            "id": "ed1df972-52d1-48ab-be74-eea8282f5c0a",
            "line": 75,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9f91f9d2-4fd1-4874-abbb-2439b7d4f2aa",
            "line": 118,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b3bd05c0-18e4-43c8-b4df-caebd393f543",
            "line": 278,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d72610d8-974c-46a1-80c6-1ae2cfb8513a",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0b31ab0-ea9d-46eb-849a-ae060ef1b4fc",
            "line": 239,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a9833094-499d-4be0-89ef-09ea6b2b8fb1",
            "line": 314,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8e471048-55fd-4c01-a592-5ee8f8b73bdc",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2da5f98f-d398-4439-8205-2140e854c065",
            "line": 457,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bc79b8a2-3caf-4049-8a66-2a2e09238b84",
            "line": 301,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "443941f1-e1e5-46a8-a9f6-bbb6761c0f76",
            "line": 458,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "42f930aa-97c6-4445-9512-08d593b758f0",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "38b9cae5-b2f7-4b0b-b982-09df276ac631",
            "line": 128,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "02dd85a5-3176-4110-9dfe-6f023da9b911",
            "line": 211,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "09f6e63a-d1c1-4502-994c-b2cf143eae37",
            "line": 285,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4dc73c5f-835c-4e49-853c-d407283d614b",
            "line": 223,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "01a28617-0444-4f03-8f07-02ddebb6a903",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "591987c6-48ec-491d-afdb-09dbfb6cad0f",
            "line": 76,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ffafcadf-9ee9-4ff4-9e38-fd374467fc87",
            "line": 418,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a8b71ad6-962f-4c3e-9e20-d03183423648",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/share/vietnam_calculating_circuit.icc.m4a": [
          {
            "id": "c482729c-a7b8-4f73-8fb1-bee05777ece8",
            "line": 269,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a4a15953-bb1b-44cc-883f-c3c954643899",
            "line": 148,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "45d33935-738d-4f5e-8690-8189188ec1d7",
            "line": 170,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3daf6a5e-ac75-4df4-b24c-dd748aec60a4",
            "line": 200,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0a8d568e-4512-4108-9542-c876d07c15c3",
            "line": 388,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e316b153-caf8-4907-b6e9-275be5c77867",
            "line": 247,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4c853878-8ddd-4c10-9d60-ed040ce1e136",
            "line": 7,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e2a6ace8-d9f2-4cb3-9114-2649948fdba4",
            "line": 26,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/boot/extend_interactive.ghf.taglet": [
          {
            "id": "4d17be63-bb1c-4f86-8e4f-81c6f049820c",
            "line": 231,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7fe9c46e-a447-4094-a402-872eef018533",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0a59316-dc07-4120-869b-c13e611297f4",
            "line": 386,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2f208d23-c4ee-44e1-a650-c899aaf0508f",
            "line": 130,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3db4d057-6b72-422c-a57a-74c6dce42fca",
            "line": 383,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6bb1a408-7b22-4d6d-b86f-9ae22c147401",
            "line": 355,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ba8c37d1-6f16-4af8-a655-e3ada7308065",
            "line": 287,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "527ea0f8-76da-40e6-9f66-511f2870e351",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "60816b2e-68bf-489c-b4d5-a14aa626d11f",
            "line": 81,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "31884011-457e-45d1-a340-cdc3ef7f5c8b",
            "line": 365,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b356c5aa-bc01-44e9-a970-2cc27b19eeba",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dd47f9d5-3053-43f3-a061-65659b0ac3be",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0a02d3ae-d6c6-4d46-94c8-e2f193788137",
            "line": 57,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d2fa8507-89a1-44be-a630-2f03ce8491c9",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "68ea004c-da57-43b6-9a32-75a9db0fd6f5",
            "line": 413,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "86442278-199e-481d-a345-865bf639c4c2",
            "line": 379,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "29c01228-3eec-4405-b533-38b98961c102",
            "line": 262,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8755b828-6215-4315-9b63-0b0d0eae09b1",
            "line": 375,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/tmp/metrics.sv4cpio.mkv": [
          {
            "id": "f623aa9c-a01b-4a62-8f12-4c1c9c1b772b",
            "line": 192,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5610d4f0-f634-479e-9041-5ceb9ff00584",
            "line": 319,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c9c761fc-1396-4993-a2c2-53499e60b625",
            "line": 326,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a84c2450-13f5-420a-8de6-681e9ef7c3c6",
            "line": 392,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "123ad3f7-769d-4319-b611-6704f9b1726e",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "81701c60-dfd7-4071-92a0-5aeb2572d178",
            "line": 106,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e4da79c6-1ed0-4893-9ad8-02ab76376095",
            "line": 419,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "728c88b4-e68b-495c-a952-a81020af0eee",
            "line": 90,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "df48c5a2-1ec6-4924-b49d-2404f5133009",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e5919121-2a87-4d53-aa1e-00f0e354a838",
            "line": 481,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "59f30b8d-cd37-4031-9b15-14a3c59fa0dd",
            "line": 342,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bdbf369b-bfc2-448e-b404-c85fbdcd5f74",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a362fa40-1b2e-470b-8bed-6575ef9e69ff",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ]
      },
      "startTime": "2021-07-08T09:48:32.449Z",
      "totalRecommendations": 75
    },
    {
      "id": "1aeeaaaf-3b71-4fb3-aa32-8d5883868078",
      "name": "interface-parse (7ccd8e1)",
      "state": "2",
      "finishedTime": "2021-07-09T06:11:54.383Z",
      "recommendations": {
        "/usr/share/account_networks_functionality.mus.ear": [
          {
            "id": "5e6e3d77-6271-481d-9688-164cfd6207da",
            "line": 226,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bbf786db-3572-4143-8289-3904118d8df3",
            "line": 337,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ee54e553-82e2-4c6a-b6b4-a8413a759fc0",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "93f18852-44df-4ec1-b80f-d5a36cab3066",
            "line": 499,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e9eee331-84ac-44c0-8892-d0347df7e485",
            "line": 431,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c7655e7f-6421-4e73-8df3-b8a566087a3f",
            "line": 42,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bbf0763a-1d13-4413-b133-54e382e2f4c7",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9ab890c6-d76e-443d-8a6c-07039b73cf99",
            "line": 451,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "96a34172-a13e-4410-8900-52937fd84162",
            "line": 211,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f796a44f-dd36-4d78-8f74-64ff5c203b30",
            "line": 320,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a1a1da3d-73d5-4dcf-94aa-9e6f66bd2384",
            "line": 149,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5659fa27-9501-43af-82e8-e1c62463eb39",
            "line": 293,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "331023d6-4e07-4375-be3c-e2ffb20602fe",
            "line": 211,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/Applications/parsing.bmi.uu": [
          {
            "id": "6451fc78-5fbe-4e11-b741-bf56ae5a5508",
            "line": 288,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2c16a10d-f440-4f9d-88ae-a22894b0281d",
            "line": 236,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3509d387-35a1-416d-b7a5-05de30731204",
            "line": 323,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2d8ec02e-fc38-48fa-b02e-bb6431c4fd43",
            "line": 457,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "558ba946-329e-4d0d-b600-d98a9e103256",
            "line": 216,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lib/bottom_line_override_auxiliary.oda.dataless": [
          {
            "id": "b7a9c039-e4d4-4165-8227-da8b15926b70",
            "line": 432,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ea7599f4-fd51-4055-a78d-6b81f45892a7",
            "line": 443,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5087b087-1a3e-41d0-855b-41a910d4d510",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/ppp/payment.mxu.ufd": [
          {
            "id": "60256319-ee68-4adc-9b96-cbeed3fc3b4c",
            "line": 172,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7a5e8054-c273-45dc-bb98-92fb43d0cc71",
            "line": 118,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "27fd2645-370f-462f-bf6e-15fc3cafd2cf",
            "line": 154,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e893f19a-5e39-4d53-8f2c-f10ea5877f44",
            "line": 67,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b93e1a7b-3740-4961-ba76-5ed75e7b4b65",
            "line": 330,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/opt/include/principal_customer_interface.z1.vcard": [
          {
            "id": "43038087-dfac-432b-b19b-3bd59a71fc9a",
            "line": 273,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "aaf2d3b6-c4b0-48de-ad95-4ac14d708bc2",
            "line": 67,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "08587d87-6ba8-4adb-b6b8-1d64f768b417",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6ccca9a3-a138-42c7-bb9d-09643be2cce2",
            "line": 343,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "810a65a3-1a5d-48f3-9fa7-66b41ecdcb8c",
            "line": 239,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8e2dceea-1cc8-46ac-88ed-95876d1539a5",
            "line": 311,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7333c6f1-2305-47bb-b2db-34cc3dcb686a",
            "line": 347,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/mnt/soft_bedfordshire.msi.igs": [
          {
            "id": "b02c7f3c-d54b-4a8d-8942-488558044de3",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f0f8e11-d8f9-4cfd-a1b2-d672b8c5ff77",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1f5db9bf-787d-4b91-a647-9fd54fa0f755",
            "line": 211,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2436dcfa-d38d-42bd-b97f-00f189b291d3",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d6d63d71-c9a9-4db5-8cc9-ad6c1c80f18b",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "826c1d5c-0de1-4c80-8a2e-9e94b61e1e1a",
            "line": 123,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7ed15672-28dd-430b-a0d6-db7d3cabae02",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "31eff2fa-139d-4995-87d5-5a64ad8d02ca",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ddb69f5a-4838-4abe-a56e-6928862600f6",
            "line": 215,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a17d862e-b830-4d0a-8b86-53a9eff4165b",
            "line": 314,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "62b578dd-1559-467f-84ac-d40b74e83a36",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/share/encryption_interface.conf.run": [
          {
            "id": "0657c973-9344-45ee-88a1-f7e458d55235",
            "line": 369,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dbcbcd79-f52c-4b2e-afbd-8b940edfd33a",
            "line": 344,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4f01cee5-06f1-40d2-9bc5-bb6498f6e906",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f5bc3797-26ac-4721-8906-1851828d4572",
            "line": 197,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/ergonomic_customer_focused.crd.rcprofile": [
          {
            "id": "71be50ca-5ca6-4e67-a0a1-8dc6d3360e21",
            "line": 474,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5a2c3555-9ecf-4265-9e39-235a5d37d429",
            "line": 17,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fcb0c581-8e73-42cb-8e1c-bf54a28593ec",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ca7d973c-fda2-4db6-9bb7-8fad9cd2a344",
            "line": 286,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3488a08a-a3b9-4391-b0b3-9a4843e70d3d",
            "line": 100,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "255214cd-116c-455b-a5fa-d4a6dbb937fd",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/var/rupee.unityweb.pskcxml": [
          {
            "id": "9417d629-da79-468c-871a-3725a3cc88bb",
            "line": 99,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "470e0a4f-d178-482f-9e6c-c04e8b1302b1",
            "line": 149,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f7c43eba-cfae-411e-88a2-15878c0108b4",
            "line": 440,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b722a588-b08d-463c-8485-aaaef84650cb",
            "line": 193,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "123e2775-74c0-4f3f-a730-115d7848213f",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/dev/up_bypassing.cmc.ddd": [
          {
            "id": "1b1d0e73-7adf-4207-aa20-77203e83e139",
            "line": 25,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c953e945-7b35-4c83-be6a-0ba0332f860f",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "15fdd382-f135-49cb-8527-1ccef68c1f67",
            "line": 311,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3c79b7ba-b39f-4153-85ac-b22c515ca131",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9c5eeb89-c4f0-4fe0-9a7a-04cae767b3de",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a052161a-64b0-4a78-8fbd-a75771c88959",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a39ea4f6-08ee-40e6-95b0-f22f5ab6f573",
            "line": 363,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9c5b867c-fe1b-43f2-872f-1ae1c92a2a5f",
            "line": 2,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "638840ab-71f6-4a7c-b594-06061d2435ed",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc9207a3-c0b0-4bfe-9f54-5facf69493dd",
            "line": 429,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "af1c5255-0e74-4df2-b3b1-96afe4ef428e",
            "line": 459,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3793aa59-04d3-487c-aaf8-cf4814df20cb",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Library/to.pfb.pdb": [
          {
            "id": "19dfef25-898b-48e5-8ce8-200c769efd05",
            "line": 493,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c2d07eaa-d43b-4d8a-8f15-41f550f70559",
            "line": 175,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bf89f198-71a3-42d9-b0eb-07503869c2fb",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ee7ab61d-244b-4a3c-bd8e-45a76f6dfddf",
            "line": 254,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "15d014ae-dbcf-4518-a005-d80678217ecb",
            "line": 61,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4b3b0f30-a0d9-44b0-a9c6-f6b76268be3c",
            "line": 26,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9114efc3-7134-49c2-a1a5-f61d8cf15278",
            "line": 3,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "52917a0c-3bc7-434a-90e0-c9ac64b7bf8d",
            "line": 418,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "588f462a-dc30-4110-9e77-1b3c3e47ff10",
            "line": 188,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f26da0c4-c59d-44de-b217-51d0f155e9dd",
            "line": 453,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fc764c4b-3c2b-40b5-9a62-b8756f74a2a8",
            "line": 117,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f2f6e836-106f-4c12-92f9-8943c552f292",
            "line": 424,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ff458f77-0fed-4df7-a4f3-b946cff0930f",
            "line": 169,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b9b43aee-468f-4122-9e8e-139a27db8159",
            "line": 45,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "180c70c9-7de2-4f45-9624-e7829d68d24c",
            "line": 469,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4e322ed0-cc30-476b-9b85-dc8cf73e5249",
            "line": 157,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "db3015ff-90d3-4597-b2e1-0bc455707e81",
            "line": 192,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "478eca4a-5d69-4d2e-adb3-cf385f118b31",
            "line": 1,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/share/washington_baby.me.pl": [
          {
            "id": "1554374b-4c54-4dab-9075-ac4a62c36f9f",
            "line": 491,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5490d38b-bce9-4f30-95a5-b57f87a5b3a1",
            "line": 83,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f8316547-a213-47b3-b41e-4be563f74db8",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "751f9f47-74d2-456b-88cc-14949b8e72db",
            "line": 57,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "133b8570-0905-4fb9-90a6-4a6d059c5dc1",
            "line": 432,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8ffa98e3-8547-42b6-8916-cff253d1a839",
            "line": 395,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c19096b9-7e84-48d2-8eaf-efe64205be77",
            "line": 377,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "87582b4c-9001-4b57-915a-bbc119f1b326",
            "line": 49,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e0e70c1b-6fe5-4232-9946-ba9ce74ba823",
            "line": 490,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7423b0b8-602c-45f4-9c68-b7a259ff27a7",
            "line": 12,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/Applications/reboot_transmitter_garden.dmp.sisx": [
          {
            "id": "274e2c1f-9c72-46d4-a23a-7bd53b9bd45b",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cd5abb96-4beb-4980-9f6f-7f820951d325",
            "line": 421,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bcd59369-ea81-4cba-92c4-e1e8b70f3f80",
            "line": 130,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8bbd98d6-ec99-49d0-8d55-2f5c631e7edd",
            "line": 242,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "27693e36-3c16-4d68-81f1-d6f12ddf15f3",
            "line": 451,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "10719011-69ec-4a74-8a56-a4037b5ca134",
            "line": 218,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ca0d9eaa-77c5-41be-a07d-07a0e57b716d",
            "line": 231,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8b0e2cec-4fb8-4908-aa73-682769e0f309",
            "line": 169,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6661e27e-ed59-4f8a-b4ed-adec1f38acf4",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "def45b93-82b5-4a99-a73b-e90d39c26b66",
            "line": 3,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2d29aa9f-a0b1-4e97-9baf-16ed1d200c0e",
            "line": 303,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d2a9c91d-51d7-47f1-8ddb-b1fda333bae8",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b54bfe85-c531-4373-bd02-da885d6e22c3",
            "line": 250,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0bf9b5bf-c14b-4ef5-b984-400eed5bfac3",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/share/redundant.clkp.mpp": [
          {
            "id": "84ff221a-2949-4677-a2f5-9904536e2ab2",
            "line": 288,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8075db84-214b-40c9-8470-bc4f20423f25",
            "line": 292,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d10f6f4e-4a59-4c2f-b029-835540216417",
            "line": 159,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "801c39b5-737e-442c-aee6-71ee382b24ca",
            "line": 125,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fe444601-8a85-4b50-a6ee-8c9f4a549910",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/user/dir/comoros.twd.gv": [
          {
            "id": "2fecd72b-7e82-4b28-97ff-369906aef0a8",
            "line": 450,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3680230a-b79e-4cba-9289-f7da98d0bcbd",
            "line": 28,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3651a8c1-6bdc-4f14-8d07-21120d5e7b68",
            "line": 302,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "025effb8-e416-4eeb-86e1-9d8b4872db6c",
            "line": 89,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7ae55901-5d25-45b4-ad8f-bf1637cffb39",
            "line": 201,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a8c5873e-3bf1-4898-851c-367255a942ba",
            "line": 355,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2678c6fb-969f-4a58-b883-012257fb4e7b",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/mnt/lats_guam_copy.srt.mov": [
          {
            "id": "c9403217-5477-47e2-b8cd-f4c3aa966b5c",
            "line": 0,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lost+found/toys_michigan.gex.rmi": [
          {
            "id": "365e7919-51cf-4631-addb-dca48cfa5d27",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "905c83d7-f8f5-4c47-b02b-0b5d1024edf6",
            "line": 163,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "31ff494c-6583-4455-9d40-6a6bfcf0e353",
            "line": 192,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cb188793-d960-47d3-aa7d-73529134a6d8",
            "line": 363,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "85279b5c-3680-4854-b82f-8f3b94da4c35",
            "line": 382,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3617f847-92ed-4c8e-b0a2-633028209518",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "482543c4-853b-4b08-b44c-ded30f26a566",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1833f4dd-67b4-4809-904f-c69d29b7b7ee",
            "line": 178,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "646be54b-dc0d-4912-a566-fb4f767ea223",
            "line": 482,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "50530964-7e8d-4524-a80d-9fc86fd94db2",
            "line": 178,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9ca1e7f6-286c-4fd8-abf8-c230a4534fea",
            "line": 21,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f32f9212-112a-454c-8d1c-77e317418117",
            "line": 83,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c297b7f6-1547-41bb-b8a3-8378e35c6e17",
            "line": 16,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ef80ad1a-9694-4823-a592-05175df9fd79",
            "line": 336,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9ed30bf3-c1b8-42f2-bd56-033931be60df",
            "line": 106,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a81daecf-fdfc-4a50-9217-0962316aa327",
            "line": 272,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ee6c82d2-b367-463b-b807-30980c3d1f49",
            "line": 176,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0d67b6aa-519c-41a1-8b9d-d167dfcee88f",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e6b97de8-23a8-401f-8fb2-b601c802f082",
            "line": 110,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ]
      },
      "startTime": "2021-07-07T20:47:53.458Z",
      "totalRecommendations": 145
    },
    {
      "id": "4bfdc7be-3e0e-4b4e-9797-bacc5e69022b",
      "name": "feed-hack (377d651)",
      "state": "2",
      "finishedTime": "2021-07-09T09:54:35.928Z",
      "recommendations": {
        "/var/tmp/strategic_reboot_index.tao.xpi": [
          {
            "id": "ea4d0939-53e7-4487-9ee5-4e4d4f7d4781",
            "line": 173,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a64ae4c4-81c6-4e8b-b459-5e821c7c5565",
            "line": 17,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/var/log/usability_bacon_system.xlsx.z3": [
          {
            "id": "8bec18ff-e953-4e6c-ba77-b227409dce64",
            "line": 89,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f38d1906-5576-4ccd-8410-d731d7ac1006",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b690c9a3-9d1d-4c8d-8477-c4ffb0c4a9e1",
            "line": 140,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c25306a1-b2ce-4e67-9806-6cb5518fe2e1",
            "line": 64,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "56507569-ebc0-41d1-ad3b-d5974e5e9f89",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "57c0a95f-9164-4096-9000-5be65250a708",
            "line": 2,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6687d5ca-fbb2-457a-bdda-14fe89444338",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "19f2a867-2a16-465d-9a0f-e306f6078fd1",
            "line": 197,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "df37e48c-0546-4b45-8f59-e5f6c6bbfaef",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "510878e5-315a-4638-8c52-9fd9eee71a4e",
            "line": 210,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "94388abe-bd41-42b0-8fd7-89ece805ad70",
            "line": 239,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a8da9fe8-119d-4519-8729-511dd9303fd8",
            "line": 142,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "189b7b25-8e2d-4aaa-a511-6cab7658227d",
            "line": 23,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bd08c6fa-77e9-41a2-adad-3e35964d50f1",
            "line": 19,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/http_enhanced.cst.csml": [
          {
            "id": "41449060-981d-4585-a857-29d18d625976",
            "line": 354,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "217d79c2-2d89-4e11-a3a4-959ca9b824ae",
            "line": 200,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3de407f6-f0da-4033-98fc-4c3dd1d45f01",
            "line": 231,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0fc2b2aa-7d51-4bda-af41-02e56788c90c",
            "line": 172,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8c5fdf91-85dd-4029-b59a-97d5a6a2daa3",
            "line": 70,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f99a58d8-d6ce-43ba-b715-3b0ac15ba810",
            "line": 182,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8cd7301c-ebc3-4d44-8486-278849d7c5ea",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f7374c01-bb5c-48b3-90cc-3a26de3af916",
            "line": 118,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/jbod_tasty_common.boz.sgi": [
          {
            "id": "84c6a8b1-6734-4f84-97d3-1288219692db",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ba2af985-7cf7-4654-9a8b-32d7afe07d7f",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "50694c47-f4c9-448f-8106-0b58f3cf0b80",
            "line": 6,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "02c8278d-3492-45bf-b402-33a949169c4b",
            "line": 488,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3063d174-767d-49e6-8600-f025a653f5f0",
            "line": 154,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7e9720ed-454e-4076-ad84-495bd60c61ce",
            "line": 31,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9a6d83ef-c26c-4aeb-a35f-c21e36ab731f",
            "line": 256,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e7bf2e86-c390-4e32-9159-6cdf582ac37c",
            "line": 19,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "92da7f2d-3664-4a90-9592-053b351a6a90",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3717d1cc-cebc-4db5-bd90-194def60b82b",
            "line": 314,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d4993d25-cf79-49af-858e-8e4daa9714de",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7cb027f2-5e60-4f5b-999d-ac0814be5f7f",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3fb9a03d-5c3e-4da3-808a-631ab7d3bd02",
            "line": 173,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3984b9f2-a6eb-4a8c-8c1d-d86ba862e6c7",
            "line": 145,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8e39d78c-b8b0-439c-b547-d831c1074b84",
            "line": 96,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/bin/proactive_haptic.mny.x3dz": [
          {
            "id": "66b8d58a-44d3-47d0-be4a-728325e41235",
            "line": 371,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "cfd3908c-4331-4816-a235-5e50fbe9ad9e",
            "line": 35,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b856cb99-f44c-4ce0-ad8d-3c6926974053",
            "line": 230,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "46e5fea6-e7f0-43cd-bb22-650b146f1bbe",
            "line": 444,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "63bc2e0f-d5f9-45d6-8bb9-378baf315dcc",
            "line": 327,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "333ef5f9-45b5-425f-b033-ca952ca917d5",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "140d15c9-c85b-4a6e-82ae-c271dbd86ff0",
            "line": 159,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6b831beb-36b5-4915-9a89-2a9c3a538468",
            "line": 331,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6e6d00a1-a3b1-4972-9563-0076511ebb19",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c563315f-fe21-4e1e-844f-22a64e74e019",
            "line": 53,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "722bbb7b-fc01-415b-bceb-75152f15ece3",
            "line": 457,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "963a5ea1-1005-4172-8860-8beecd0d144f",
            "line": 384,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "635b567f-f3f8-4479-9f0e-8a233da777c6",
            "line": 101,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5ca013cc-4532-418a-bda1-5e501a32ac29",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/libexec/24_7_bedfordshire.ppam.uvd": [
          {
            "id": "d4065cb1-50ac-46cb-9869-05e2ea663fff",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7888963f-f25f-493c-8b19-0296910de3a6",
            "line": 38,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "982af86f-4f5f-41fb-b036-66f27cde2e99",
            "line": 179,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c6942103-8c0b-4ee0-9a3c-c8aaa0733eb0",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "739707e2-87c5-44bb-8621-32658b0c5e8e",
            "line": 463,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1c322100-a37b-479e-a9ae-44ac045dfbc1",
            "line": 95,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/share/mississippi.uvu.mseq": [
          {
            "id": "1a97c9f7-42e5-48c1-ab0a-89ad53c4a4b4",
            "line": 491,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7a08241c-217a-46ff-9735-ace51efb0d2f",
            "line": 424,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "73000f23-796b-42af-ae9a-8221cefc43e9",
            "line": 131,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1552d625-3788-4389-b1f9-757e887f6aa2",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "97d6d64a-c2d5-47ad-8a66-f3803235b3c0",
            "line": 274,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "364fb0cb-5653-431e-a6ac-ca68cfb53119",
            "line": 267,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2afd1ba0-dccb-4763-af0b-58d8e3576c11",
            "line": 316,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "509c6958-4d10-44c2-a743-da789ff497a3",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/tmp/granite_out_of_the_box_archipelago_.xvml.clkk": [
          {
            "id": "21269a2f-d76e-49ba-8ff2-ddb5515f8b50",
            "line": 309,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "42e0acd7-3c2a-4684-9936-2b4ffef623e5",
            "line": 441,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "adadf1cd-c107-4361-b29b-06142649613b",
            "line": 38,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8909820e-690a-4f31-b7c3-cb3a87d8b6bc",
            "line": 149,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "edf4603e-7367-4136-bd4b-db3927e81f59",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "188c8654-cbc5-401f-80f9-31884e093d8c",
            "line": 178,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lib/washington.list3820.xenc": [
          {
            "id": "cc0b1b08-7b14-47a0-8b34-0b888fca9998",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b78a7112-dcb6-45da-aa19-37908a03b9cc",
            "line": 347,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "068b3e63-92cd-41ba-b996-d3649fc437a9",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d528b673-f7b1-44fd-acef-179241cf83e0",
            "line": 352,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2b9cdd6c-50f3-4a9d-994d-448a1aebd70d",
            "line": 319,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9ca7f7f2-8888-4181-bcd0-7a264b1a9b9c",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f2fd62ab-596d-43b2-bdc7-b7ec61e0fc90",
            "line": 294,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7412419b-bd5f-47df-a17a-aca05d568379",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7d2a9899-4150-4ebe-8ce9-9ef78dade186",
            "line": 68,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f86fe3a8-7b5b-44d9-a57b-dfa41404496f",
            "line": 410,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "632992d7-9d4b-4f6a-8d25-77cec6475a53",
            "line": 127,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6010f03f-47bb-4948-81cd-8ce7a260ccd5",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a55405eb-072e-4536-a042-e43c74bf9075",
            "line": 362,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c2e11443-96e4-4a1d-91fc-a5f075591383",
            "line": 386,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "85604e7c-7cc5-4022-8449-75dc8a4a7777",
            "line": 249,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/ports/card.evy.jsx": [
          {
            "id": "669d9e2f-0e27-4f9b-81ce-398bbddd9e9c",
            "line": 231,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "33277d6b-c0dd-404f-b2bb-a801e366b7f9",
            "line": 408,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "781be1c3-3c4c-4267-8de0-c602820cfe10",
            "line": 99,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "135c3916-7994-4e19-878b-256ae046f9ee",
            "line": 202,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c558766e-dfbd-4d8e-a464-56b6d746d915",
            "line": 373,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "677ac4f6-72e2-4e07-9a76-d36a05344a84",
            "line": 226,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a1946b3f-82b3-4293-bd27-8dba9225a572",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4706e00b-aa63-4183-b9cf-f5f0f596a5b7",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "47f59bc0-d5e7-496f-ab92-d5c0ed4d4856",
            "line": 261,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/mnt/new.pdf.htke": [
          {
            "id": "465edb28-03a4-4dbd-87db-960d9828ac1b",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1bd26fc7-156d-40af-b265-791b6c7ceb86",
            "line": 92,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "481f6f6e-91c3-4fde-8fee-60b9dc1bbbca",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d1ee8235-d138-44ed-941b-96984263fb82",
            "line": 431,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c9ebdf1-1e5b-4295-b99c-222b005677d2",
            "line": 325,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5d7bf580-bcf6-4468-b0eb-75953539fdb5",
            "line": 113,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6dd304f2-462e-403e-ae8d-1220c127986e",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ]
      },
      "startTime": "2021-07-07T11:46:57.361Z",
      "totalRecommendations": 104
    },
    {
      "id": "4fb10e19-c3b1-4f42-b98e-937162437cfc",
      "name": "system-reboot (8dd42c9)",
      "state": "2",
      "finishedTime": "2021-07-08T18:31:35.097Z",
      "recommendations": {
        "/var/tmp/sky_maroon_http.m1v.rip": [
          {
            "id": "69d5d814-77d9-45c9-8384-d59a198d021e",
            "line": 167,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3b1f40d9-b55b-4dd9-82b0-8eb91de7fe48",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c600787b-eea5-42db-8505-4ab79769eff9",
            "line": 478,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e90b1147-97d0-4f35-8dea-a9617d957fdf",
            "line": 40,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4b5fdb93-2fd0-4928-a84e-b0dd36e14366",
            "line": 402,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3a3b411f-b5b2-4913-a7b6-8058219363fd",
            "line": 76,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f6bf9355-be8e-46df-a2b1-54b46531a1fc",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "640c4e98-9bf2-4252-b825-21b308693c49",
            "line": 487,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "691c18c1-f6e8-4418-8fc4-aa24cd7cb75c",
            "line": 374,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "09e0cc42-c174-4bcb-8b8f-20fac830336c",
            "line": 456,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6fde66f1-969c-4d80-ad9a-d321ad548abd",
            "line": 352,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "20b3a497-cca0-4f51-8c17-bca51839a72b",
            "line": 28,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "19ba4be6-9d73-44a8-a2a6-ccbeee5468f0",
            "line": 144,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e820bfd2-5f7c-4040-bba2-44d16e2d98f7",
            "line": 417,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ec6d5dc7-871f-4306-80dc-059fecf11686",
            "line": 107,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6f158b3e-b1ab-4f37-ae86-c1a4c8f1feec",
            "line": 398,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "037a7ebf-1208-4a0a-823a-20e8f6ecdb6e",
            "line": 180,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lost+found/dynamic_germany_mesh.uvvf.emma": [
          {
            "id": "8f8f9564-be8c-4602-99a4-99724fc09f0b",
            "line": 312,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/defaults/assistant.md.spp": [
          {
            "id": "7e8d6d41-23c8-43a5-8c98-7768d69b0f7a",
            "line": 313,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2f1cfdf7-d826-43ca-9623-920b169e916f",
            "line": 464,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "136a347d-aa9d-41fc-b7bd-cad74fc83e74",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0406acc9-7def-408d-b0c0-4de34dcb921e",
            "line": 485,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "19ec886c-26d0-4a92-932c-de5d9eb48d9d",
            "line": 108,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6f9e91b2-4645-4393-8e0d-44431587e5f4",
            "line": 188,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "30feca5b-984f-463b-8817-4046a265e41b",
            "line": 287,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b5d09576-3e46-4ccc-9fae-fa9ffdf972ba",
            "line": 127,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6577e9e7-1682-43d4-baa6-d45603d73265",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/selinux/automotive.semf.pcl": [
          {
            "id": "e2324c51-ea66-47d1-9691-bdd989c08b08",
            "line": 333,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "02020954-07b4-43ec-a2e9-feb7d55769b8",
            "line": 490,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9f1d3fbc-61f5-4cea-9244-057638ba9cfe",
            "line": 175,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "90ac0cbc-eac2-44cc-8a87-4d1e4b459c17",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "40eb51d6-d003-40df-921c-6f85a3139b16",
            "line": 102,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a09cda07-5c3b-4f5e-a9ea-d65c7c1e825d",
            "line": 475,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "51df7ed0-b89b-4a64-9c38-a56c3a16ad23",
            "line": 135,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3e943a7a-e10e-4a03-a511-f1543709b047",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "801575e5-a6ad-4328-a243-27bc30ae3e3e",
            "line": 43,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ab4bc00a-9f53-41cb-945a-2bb35d9083dc",
            "line": 349,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "976131b6-b77d-4345-88d2-e4fcb971f765",
            "line": 283,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "90f56391-7ede-4bfb-8067-644df9930233",
            "line": 64,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "93bade07-c605-45c2-ae41-c015a742e05d",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c99ce639-ebea-4fb9-85c1-54e8a790fe8d",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c6d47893-52b0-43b1-b317-65eddae59fb0",
            "line": 152,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "66c7e5fc-ddb1-4eee-87ba-27bce559c79b",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8a3560c0-bcb9-4f10-8fb4-f3ea08c0b339",
            "line": 239,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/ppp/virtual.dp.ecma": [
          {
            "id": "77abd37a-a24c-4640-aae3-5f478f84e209",
            "line": 196,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1e8afdfc-09b2-44b4-a521-155a66ecc4e4",
            "line": 225,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6a947af7-cbea-4db5-bd67-69cd1d33e7ab",
            "line": 431,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0ea8f0a1-87bb-43a7-8fa2-326882e9ef29",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "793f287d-e034-4a37-859d-3348e978633d",
            "line": 389,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/silver_feed_agp.dll.sldx": [
          {
            "id": "8376e4f6-e3d9-4dff-9ace-6297dc276949",
            "line": 451,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "56065678-2ac5-46a7-82b7-b95ab9008109",
            "line": 491,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d7b64287-8271-4cb0-8580-4926b1935c61",
            "line": 83,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f186b781-0a18-4cab-9361-84e9870fadb3",
            "line": 167,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3ec1cae9-2dee-4f57-a507-e23d204f5963",
            "line": 186,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "642afd86-fa48-48a7-a86b-c0439a20452a",
            "line": 13,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e426bdd4-92df-4bba-8733-2f44aa28e375",
            "line": 122,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1cd32638-dba1-477e-bc13-bb9d5a36754b",
            "line": 238,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b8b0610-f681-4527-97b8-50dbba5f5189",
            "line": 455,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5850faca-8356-46e7-ad74-c7d49f23ddda",
            "line": 87,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a865053c-643f-4330-babd-a6d25ccbcca2",
            "line": 212,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a46ced12-3273-413f-a559-bba453b976a9",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "687d0b80-2da9-4d8c-a818-5e8820a8cb28",
            "line": 232,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Library/conglomeration.scss.kpr": [
          {
            "id": "342cd13f-a34c-4231-9cac-f5a27e0f1040",
            "line": 150,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aacb70b5-9995-4677-b762-9a3d8a4937d7",
            "line": 473,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0d3fcfa0-0b5f-44d0-9298-8481e5bb06b8",
            "line": 360,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "44c3847e-e739-41bf-aed4-f16116fb4feb",
            "line": 64,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "20b577c5-f57f-4a73-87e7-556d1d64f67d",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lost+found/industrial_grocery_indexing.pde.mobi": [
          {
            "id": "fb6c246c-304c-43ff-8265-ada93f73ebd7",
            "line": 224,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6ff2cc56-cbc4-4d3e-b49b-a80b90c1eb79",
            "line": 19,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "23cfefbb-c3b9-409c-8353-7760c52448f3",
            "line": 209,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e30bbe1a-4a8b-4272-bff6-21b18e312a3d",
            "line": 231,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eb7de7ef-6da0-46de-ac3f-a0126309cd96",
            "line": 361,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-08T00:18:23.033Z",
      "totalRecommendations": 72
    },
    {
      "id": "7a80194c-f7f9-43f9-82dc-5a7e30f29205",
      "name": "protocol-reboot (a5df4c5)",
      "state": "2",
      "finishedTime": "2021-07-08T15:19:40.348Z",
      "recommendations": {
        "/var/yp/handcrafted_even_keeled.txf.exe": [
          {
            "id": "34c5e379-ad80-43e8-9471-9746367870fa",
            "line": 373,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cc4c7151-4e20-4dc9-a82c-0d093dbaa6ee",
            "line": 67,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bfe27f56-e812-4845-9bd6-526e2761177c",
            "line": 206,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b8a9a949-acbc-4749-89f3-208c6c839a49",
            "line": 349,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "36652e4a-558e-4732-9bf4-6e11af77ffee",
            "line": 249,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "47ef2c45-5b4f-4cb8-a922-d4a522147bbc",
            "line": 285,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a5eae8e3-87fb-43ec-a29c-10e73a6fc66c",
            "line": 324,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "60c6e6e6-194c-47a3-b78f-efe44844e1cf",
            "line": 279,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/sys/engineer_panel.obd.mkd": [
          {
            "id": "e416730e-dc6d-4bb2-a456-d2e17ced8cee",
            "line": 84,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d7d6e44d-ed4c-4571-a42d-7ee0b6ac1024",
            "line": 77,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ebf5d336-dd64-4794-851a-f76baeb73eb4",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f63b9c2a-5627-481e-bb53-490c336b1924",
            "line": 319,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e2173839-bab2-41ed-a9da-52a3ec2e5106",
            "line": 449,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8fa16417-0cbc-4f54-90a5-9c7b09321e33",
            "line": 307,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7dded067-83ea-4451-a5a0-62c834ac3f39",
            "line": 122,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/share/redefine.xlf.mp4v": [
          {
            "id": "1e733509-b906-4c58-959c-8423acdb37d1",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "29c5a685-a900-4f07-be0f-1d26cb6aba21",
            "line": 308,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a20294a5-1780-4670-8ee8-69eb9f8d23df",
            "line": 201,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "39f23471-a824-4218-b2ab-770c263f2c34",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "865fa807-57d3-412e-a2fb-4d05b6ec2b17",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c4204e9e-6877-4007-8982-7c52f5232713",
            "line": 11,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8670ddf6-9ee4-47c3-8746-25bdfd605af7",
            "line": 144,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9b98495d-d75a-4346-86e3-c5d354232906",
            "line": 433,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a7777001-746a-4152-9a68-6fb2526c9039",
            "line": 261,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f10b19ad-3f4d-4f5c-8779-df0005c51ea8",
            "line": 28,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "999978cc-56c2-4c55-93d5-e43a64f45613",
            "line": 58,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/defaults/cyan.exe.cxx": [
          {
            "id": "4abb1748-1582-40d7-b605-5c6f88376d52",
            "line": 105,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b0f9183e-3556-413e-8ba4-1f5aaf7f9f96",
            "line": 226,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e74f78b4-9bfc-4fcb-924b-51f5688dc615",
            "line": 469,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f69825cb-e07c-4f4b-b2ff-196344d76f53",
            "line": 301,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bc44afa3-562e-452e-ac5d-f86cf3d66757",
            "line": 89,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b8f26c08-1cb7-4768-bafc-ce2905e53993",
            "line": 307,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8f6cd4bf-b2f4-4a6c-bcac-f18c26030f22",
            "line": 104,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "deb56a51-e335-4b06-a403-a53afa0798f7",
            "line": 176,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "36c68d1a-6800-47b2-899a-3aff94711379",
            "line": 219,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e05e7873-a074-4976-8484-fccc03b7fcbb",
            "line": 46,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b3c4bf4b-0a75-4711-98f6-da80c60adbed",
            "line": 197,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "500707ee-89ad-4ba1-a4e4-7731dac6de82",
            "line": 414,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "99bfaa1a-55ef-4e55-9721-d22ddc283a89",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "91b7aa15-cb12-4b9b-a6d5-7499b03bd9b5",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e0bdbfc6-2c45-42f3-a115-5d887cf65087",
            "line": 0,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/home/user/dir/concrete_revolutionary.uvz.semf": [
          {
            "id": "5f90b1e2-e0e1-406c-ab45-633206803410",
            "line": 148,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5e84addb-9cf1-4557-a12b-4d3c146d3c9c",
            "line": 39,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f85fd2b6-45db-4862-8668-d51b7f6b4265",
            "line": 347,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bf053f06-6d6c-4ce9-8d62-c5d152b58961",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8528e6fb-64a7-4c7c-8fb6-15cb2b684f5b",
            "line": 242,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "51064a59-7bb0-45e4-94ea-8268e58995b8",
            "line": 103,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ad201148-7ad5-4c4f-9de6-0e14b726b981",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "25b5359f-0c2d-4b48-8db4-58385febe4d1",
            "line": 47,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3d9322f3-2cd1-4ab7-86fe-c9e47ff1ca87",
            "line": 215,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "20cd271e-edfd-4501-b284-b74fcfd20b8e",
            "line": 375,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d986a899-49f2-4509-b450-a6c83dd62e1b",
            "line": 187,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0b293fca-84e3-471d-ae86-394d9c4cbef2",
            "line": 198,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d5c705aa-c218-4b9b-9c9f-47d445a2226c",
            "line": 86,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5b2bd47e-aa4e-4a29-9c57-79e31fcd41cb",
            "line": 492,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5b3ab758-2957-441b-bdc4-7df113cbd59f",
            "line": 443,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9c7d936a-02af-4130-b299-114e9657d8d5",
            "line": 284,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "77314d67-281c-4891-b949-d22429b76f0d",
            "line": 271,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "da7ea7f3-d893-4ddc-988f-dbad742e7493",
            "line": 424,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/selinux/north.msm.str": [
          {
            "id": "576337b2-5641-4797-9284-bc53312faf9c",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4fd57f49-4be8-4597-8f21-4dc29d111031",
            "line": 136,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "65c83be3-f44b-49a7-adf4-9e3aac7044a4",
            "line": 174,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aef5ae8e-426d-4b72-b999-f64fdb0e984b",
            "line": 193,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d0aa145b-e80d-40fc-a8e9-e90354eb209d",
            "line": 339,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ad9ecf34-d221-430e-b04d-aac115ae1a5a",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a6ce1e68-0a04-4cf1-994d-96b193014307",
            "line": 103,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fd1bd489-a723-4332-9044-17424e540a37",
            "line": 369,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-08T01:17:30.526Z",
      "totalRecommendations": 67
    },
    {
      "id": "8cb1b360-165e-43e8-a84e-1beb375f37d3",
      "name": "array-generate (f7c72b2)",
      "state": "2",
      "finishedTime": "2021-07-08T15:33:45.896Z",
      "recommendations": {
        "/boot/defaults/fuerte_strategic_tactics.dd2.boz": [
          {
            "id": "e34f8448-078a-41e7-befb-60423dec7420",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "193685df-e73e-48ab-be14-3f1f35aecc0f",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b86124d0-0385-410c-bc6d-3519ba5705fc",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ba91aa8f-d43f-48ba-b169-b52dcc0ef3f0",
            "line": 379,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lib/borders.csml.wmls": [
          {
            "id": "2c58b808-b57b-4de1-a18a-8929d18f27f6",
            "line": 138,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "05d69bb0-3c9d-483c-ac6f-026ed8ae55d7",
            "line": 295,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d0978ae9-1c17-4613-b061-9732fefea352",
            "line": 469,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5d2aee7a-bb16-4722-83f7-1c1ce8cddec2",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "70b9468e-d071-41d3-8f39-f0d1b08681f4",
            "line": 55,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5a92f66d-cb6d-4c16-ae81-6652d161dc9a",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dff8a5cf-6779-4ad8-8f20-110bf0026ff1",
            "line": 434,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/local/bin/implementation_efficient_buckinghamshire.webp.odft": [
          {
            "id": "ffe68212-9a6f-4a21-9377-5599b09b094f",
            "line": 117,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f8940906-21f5-40f3-9b3a-9313cecb8575",
            "line": 424,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "96aa6436-774f-41a2-8388-dda4befc2b84",
            "line": 62,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2e699b4f-ca56-4c33-854c-60011d60c1bc",
            "line": 292,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "df32cdcc-1753-4611-a34f-7b41c444ef79",
            "line": 446,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "820eaac1-0103-4382-a133-252a4360a8d3",
            "line": 176,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ba66879b-fa64-4f11-82fa-33c77ebe6587",
            "line": 287,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "34127011-01fc-4382-bb82-fdd22379d587",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ed7678f1-7eb2-4100-ac55-853c3a039399",
            "line": 73,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b0ce913c-369c-4a6d-be88-a1f54ba48559",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "67433665-37bd-4d32-83d4-be72d2f66501",
            "line": 444,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "98c1b301-5b9a-42e9-8145-e21690061d0d",
            "line": 407,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "06565b7c-7f23-4f50-9705-63b1b8563437",
            "line": 39,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1c31bd44-11c5-4414-a2f3-e097a02c5179",
            "line": 132,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4b9ff4c9-246a-4210-9e0c-52327fe4162d",
            "line": 0,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2314a54c-ac45-4e57-9b93-0aefd80b9f2c",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0b6474b5-07b5-4f2f-b70b-c7d416c59972",
            "line": 349,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "05862e42-3983-465b-9b90-b348783ecc22",
            "line": 476,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "852499e1-fd4d-4cea-b59b-3e4788daaa01",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/opt/lib/cotton_creative.inkml.ts": [
          {
            "id": "375dd74b-3cd0-4a95-b90b-8afa09fab150",
            "line": 109,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a3ebe869-e294-41a2-8a7f-398f4a9346cc",
            "line": 382,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f71b275c-d0d1-4179-aff9-a17d3ca22981",
            "line": 128,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "882ffc93-a03b-426d-8951-bfd5d231701a",
            "line": 178,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "10f88f32-f2c5-4cbc-a5ce-84e764d49a02",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1edf9af1-3122-4c74-b2cd-5efda4fa3373",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3ea3a2f5-5dc9-473b-971a-4997781ba97d",
            "line": 99,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2974aa17-8ec6-4342-baf6-414b536320e4",
            "line": 120,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f3e855a0-8bfb-4b47-b401-e5fd7d2cf9e2",
            "line": 193,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c27bbd81-1bcd-4ea1-9086-8e49b82778b1",
            "line": 259,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "820fc1fc-5727-4413-8275-6c8b72dd23a0",
            "line": 112,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "82e29f4b-3480-474b-aed4-a1ff176225d0",
            "line": 95,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "20121191-cdbb-4e41-98ad-fb09321e74f1",
            "line": 340,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "60d2ff7e-ac91-49b6-b67f-5a40f11a1cf4",
            "line": 342,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fabd54d5-61a5-43f9-b0cb-a0b0bf7f9514",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a0e472bb-d2aa-403b-94d5-1ccb0defa546",
            "line": 328,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/bin/dinar_morph_intranet.src.mbox": [
          {
            "id": "4625eba9-3436-41b1-99eb-8e9b1e1a5419",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6a072a13-1401-4c94-b29c-4bc2b0f99711",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e990ec60-35c4-46d4-b990-c92a555f0978",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0e5de420-0631-4fb7-99c1-dc995cdf7c5c",
            "line": 469,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fb53bc80-db9f-4bdb-9fcb-b5313872635e",
            "line": 56,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cb056d48-b993-428a-b70f-6383208a80ae",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3ee3f8a9-5d66-483d-a398-454ef99e5127",
            "line": 148,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b5f5240b-3342-49b4-b62e-ac9a94bada90",
            "line": 438,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f45d7a3f-91fa-4ca2-ba76-82eb31685085",
            "line": 1,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f0540bcc-794f-4c13-99b6-f9896111ca0b",
            "line": 265,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d0060d0a-0743-425c-8097-141bd94b2d53",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0305605-95d8-41c8-a988-25906b35dcb3",
            "line": 210,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2ba671fb-b610-42a2-9c82-b1a66e0389ef",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "63426b04-3140-4985-9597-9a27645c96ea",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3d337c56-f595-4d34-bc8f-c4bd6a10fa6f",
            "line": 284,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3227d1b2-32e0-4b7c-9dbd-b920c9456f49",
            "line": 175,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cd470d92-caba-42b6-9aa6-b5e5473ccba6",
            "line": 29,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a620cf17-b849-4622-875f-5251fd2c1acc",
            "line": 398,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "90ec72a4-6a44-4304-b219-fb8efad55526",
            "line": 383,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2a25def8-111a-460c-bff5-45285d7858e2",
            "line": 214,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/mnt/ivory_blue.ext.ipfix": [
          {
            "id": "4dc093df-c3f1-4645-b954-0c01f9fb7b46",
            "line": 472,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "65116041-e3b1-46d4-8b45-ec27e1aeff34",
            "line": 389,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b4297d60-97ed-4a98-82c2-113f64dd5c44",
            "line": 395,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9f145e5f-e225-410f-8aeb-c06370ca5050",
            "line": 311,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "00a3d596-409f-4e5d-ba81-ff4157485cf0",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "db7c4d57-a93d-4e8b-b3fd-69e8c6907170",
            "line": 285,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5e8875ae-b65e-4de1-870e-7b21ac7deebc",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b19f5bfe-b9cf-4240-b9fd-5f8042638a86",
            "line": 345,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2b9b5395-98bd-48a0-88f0-6655a66a6833",
            "line": 257,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9642a1b8-3bd8-49b2-bdf5-80f65b35234d",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "47a17c3c-d664-4c50-a410-73b433304e42",
            "line": 104,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "56021e71-af86-4e00-80f0-90007133f6ff",
            "line": 57,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "02e51df7-7ad7-48e5-a65a-63a982fe79d2",
            "line": 26,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/purple_initiatives_home.mrcx.f": [
          {
            "id": "5f71c495-7c1c-4f1f-82ab-9b992e1a69cf",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "218eb604-719e-47a5-994d-e28236817787",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ae798d8c-8126-4f9f-8f89-d1145b24831e",
            "line": 87,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bf58a822-f9e2-4958-bebf-cff600004732",
            "line": 6,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7f0f0425-d9c2-4686-af59-99808a024120",
            "line": 499,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8c23634b-fe7a-4a52-981c-532036b6b8dd",
            "line": 121,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4d710d90-109e-493a-b1ec-4d481d03c0d3",
            "line": 409,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "da725e09-ac59-4d1d-a5b3-48d414e78faf",
            "line": 424,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/boot/defaults/program_fort_deposit.p10.wmd": [
          {
            "id": "d72f39c2-0d4a-4cb0-964b-41b5a0227d42",
            "line": 266,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7c9a0add-d7d0-49a3-b28e-4fe1945ff473",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e4e7ed16-e7ec-4e98-abe0-493a8297dda9",
            "line": 388,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f07543a1-2ea1-49ea-8476-44f96f425b87",
            "line": 447,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a1da6ad4-0bfb-4d2a-8c61-009c3b3d3832",
            "line": 487,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "05c553f4-a3c3-4635-a10c-34e6afc26346",
            "line": 251,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e9ee36d9-53d9-4a0c-840b-b1e08f52b666",
            "line": 171,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "db3c5a5c-c626-4831-94e1-40ca00dd8457",
            "line": 316,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fb83d7af-c23e-4925-ac0d-77c3c6213a74",
            "line": 332,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6d298b84-58d7-46ae-83ec-e61cf73894af",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0d34c590-5e5e-429b-8cfd-f7fb82076f78",
            "line": 115,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "44333f6e-7e59-4d8e-bf3b-bffa5ca76d9c",
            "line": 210,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ab065ab0-8524-492e-9166-38af1dca417e",
            "line": 38,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "21af3f3a-ac9c-4057-bafc-33691314a4d5",
            "line": 43,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7c2ee715-422b-4026-b93d-5b93c36a638f",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cd659f6d-a14c-43ba-8fa7-4655dbd485fd",
            "line": 459,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2871be24-eb15-44e9-96c4-389f13dc648f",
            "line": 315,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dd7ad80f-ed58-4a13-86fe-b7bca0e7529f",
            "line": 297,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4c63bf6d-df9f-4e91-a1a7-1c3fc4d9d57d",
            "line": 154,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Library/synthesize.lbe.xul": [
          {
            "id": "9a48d104-a5f7-4c69-b16e-11d88d1f8e59",
            "line": 274,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "19595fd4-bd2f-4e3e-9d1e-0e303c28742d",
            "line": 365,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f0f831bf-3a13-4bb0-b422-72cef11e7afb",
            "line": 388,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4b26dc36-2174-433c-a6aa-99592095f282",
            "line": 51,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1bb26ebe-f6f0-424e-a5b1-7fe78959cd45",
            "line": 1,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "66787556-57b6-4d83-8199-7b25860194fc",
            "line": 408,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b18b0721-70ae-4f91-b460-78fe2297a507",
            "line": 124,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c000ccfc-1190-4915-9470-ca74ff1b4cf6",
            "line": 464,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a8407c73-64c8-4521-bd7a-3e90d5da4cea",
            "line": 469,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5a3215c9-7f19-4e1c-9c39-66cf9e641f38",
            "line": 455,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "121ca3ed-9c06-4f47-a30a-e57975a94793",
            "line": 365,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f58b7632-6c5e-4b2d-a4e0-b13060eb61cf",
            "line": 120,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1b2206c9-3074-406d-b8b7-824339f89169",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a9e79184-e028-4e20-ad39-dbed7f3a3fa5",
            "line": 480,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b014220a-6954-47d5-8dc5-1219d9755284",
            "line": 223,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "58beda4b-a8f1-447c-b0f2-6792a560d050",
            "line": 255,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e18a4326-9bb6-4151-9f30-4143ebf7f6a4",
            "line": 397,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-07T21:23:33.501Z",
      "totalRecommendations": 123
    },
    {
      "id": "9c4de8c1-345a-4651-aee2-aae0856698e7",
      "name": "sensor-copy (861d16b)",
      "state": "2",
      "finishedTime": "2021-07-09T05:24:40.962Z",
      "recommendations": {
        "/usr/local/src/engineer_iowa.clkp.rmvb": [
          {
            "id": "24d84375-8d9b-446c-b2f8-7ee2f2e62cbe",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b00fc613-d18a-43ca-90aa-2f5e5e29aff4",
            "line": 149,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7c4a2dd8-4bec-477b-be62-aceffd8ccf3f",
            "line": 281,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1cdfac0c-9719-485f-9d01-31abad9ed6e6",
            "line": 475,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a2f65bf2-9f4f-4bf1-9134-7622d8603691",
            "line": 160,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dab1ad40-8462-46dc-9faa-7866c76a7d0f",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d2f782c4-b00c-4537-af1d-74c10030dc27",
            "line": 102,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fc146c0d-a9e4-4657-8202-e70867423b5c",
            "line": 474,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b341a915-5c12-42a6-93cd-467d2cdb1230",
            "line": 110,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "aae18610-1cd9-40ff-9bc7-a0186a3f11d7",
            "line": 257,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9c7557f5-1a3a-45f6-afe2-adbebaca7184",
            "line": 371,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/card.woff2.csv": [
          {
            "id": "ccaf417b-0169-4028-a114-510baa59d8b9",
            "line": 200,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2ff10599-3b07-496f-8900-59fa3cd52ccd",
            "line": 476,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "69af687c-935c-4eb1-89dc-1080bceb980b",
            "line": 94,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "26dd4576-5521-4759-bcb1-90d81da753a1",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4e8625af-db22-405b-b78e-20f200d0c3b5",
            "line": 185,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9a049c87-1148-4ed0-b44e-1b3f7ca048c3",
            "line": 163,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5d15d9d0-25a4-4c75-9ab6-35d24686e09b",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "228fcbf6-50c9-4628-b011-1f8e38db8900",
            "line": 278,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c9371620-bf3f-4673-acbb-abae3436e550",
            "line": 425,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e940b6d1-6fe3-4cfe-a2cf-46fb52dd9801",
            "line": 341,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "accfacec-2bd0-4764-867e-3ef2a1096870",
            "line": 435,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "13a6bfbc-65f3-49ec-98af-a186fa0dd520",
            "line": 81,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "dde5e503-5452-4fb1-a395-9d734ea250ed",
            "line": 297,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8b6b067e-369d-439f-9d05-757cb7c8e9fd",
            "line": 129,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ab0d5e8a-e52e-47be-a987-1e77644d1513",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "efbba966-687e-47b2-bf8a-5838af35a9a2",
            "line": 248,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/rescue/checking.oti.fg5": [
          {
            "id": "1a63cbf1-a34a-4859-bc39-16a25288a739",
            "line": 424,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fd66bb3a-e41f-4a54-b1ce-a34e541814b4",
            "line": 461,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f6cad318-cbfd-4a94-b48d-63f99d303996",
            "line": 72,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b6956b0d-5a41-42b4-a312-0b32aae8ec39",
            "line": 312,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1e58c608-aa33-4c81-a7ef-ac55d463f81c",
            "line": 176,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/boot/car.mpy.crt": [
          {
            "id": "07d0f172-0fee-4d27-8bda-ed085dc41552",
            "line": 442,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "55cdc05c-f8b3-4f72-8388-0554339eed68",
            "line": 361,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a1f0dda8-9ad5-4460-b68e-43f7231d388c",
            "line": 135,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/sbin/ergonomic_keyboard_fresh.ppd.swi": [
          {
            "id": "710b0260-3118-4171-95cb-e67d60321b8d",
            "line": 434,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "75279527-c8c5-40ec-9aa4-c3f9cac30543",
            "line": 104,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "919b73b5-d6f0-45af-858e-b7b62ca42f46",
            "line": 178,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "90bafb9e-7713-4ee7-9ec3-6ca37c568bfc",
            "line": 386,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "12476c18-cb8b-48c1-ba23-3617b84de84b",
            "line": 99,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a7b9289d-b40e-4f2e-ab5d-744727528f5d",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "13645a04-f3c9-4f47-a345-7b45850267dc",
            "line": 292,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a927778d-5ea7-4be3-bb38-25f1b04ae079",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/yp/serbian_pound_primary.pbm.dfac": [
          {
            "id": "50d91edb-6288-45b6-b112-d33b5e0e25e1",
            "line": 153,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d8217a81-8582-4e7b-ae58-dbe2e8b59db1",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "129f9810-97ea-448a-8a40-a83fec70e530",
            "line": 293,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "33e916ab-aaf9-4917-a7d2-178d0d2f58e5",
            "line": 57,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e3940494-755c-4167-b06d-3199d8207b97",
            "line": 239,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b04a640e-8d35-4dd3-ab5c-490383977ce2",
            "line": 338,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "329b0763-0a07-47bc-9038-1a37bce690e0",
            "line": 137,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "77e4a5c9-82b9-4290-b36c-8309868b3fb6",
            "line": 282,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "85449a03-3448-40aa-b0d6-f56c3aa6b431",
            "line": 220,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5ed7f32e-8c3c-416c-a63e-812675bef5e0",
            "line": 252,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "aca30a76-7cbc-409f-9365-fb4e2332d737",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7ff778ef-1f55-4a6f-80c1-1ee5aa394d44",
            "line": 357,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "05e9904d-0f8d-4e01-b41f-15492bc19e23",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/bin/salad_protocol.pcx.smi": [
          {
            "id": "ec4bb36d-ff47-4b0d-a680-722219b613d0",
            "line": 246,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "21f3ada9-d90c-42b5-b043-e9188d24110c",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4801c001-65f5-4d56-b828-9ec054c004a2",
            "line": 40,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "90dfe437-5076-43fb-8fa6-eb0c9e98be45",
            "line": 235,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c9d01aa6-dd02-4495-ae71-c43a3baaa7bc",
            "line": 417,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b04476a3-befb-49f3-b0e3-3f4080b73102",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dc1a9e3f-6f8d-43c0-8bab-ce889ae31801",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4b7c02b7-6fab-4611-90e9-4e8fca9f98cc",
            "line": 103,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/tmp/white_division_franc.jpg.gim": [
          {
            "id": "6f698d9b-c2b5-449e-981f-11a3e4712ccf",
            "line": 142,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b7005d19-6a4c-4a8d-9353-8b89073b9370",
            "line": 391,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e309787c-2434-4226-983c-f92ab1610561",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "934f8d6b-ac4c-4137-8422-c33063d2dda1",
            "line": 207,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef802912-6eba-4364-bf40-782e4f6de86c",
            "line": 403,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "aefebc44-94de-4395-8592-506b5b59f8c9",
            "line": 399,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f1bd5e14-dc2b-40b2-ba4c-20bc7339cd31",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "adac4b9d-7e36-4e89-8000-6240ee4ae596",
            "line": 266,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2784f0f5-b5de-402b-82e6-a9382c1364b5",
            "line": 124,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "acc50289-af5a-446e-b368-fc0abf58092b",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "82bc07e6-ed93-4406-88cc-eeeba5180603",
            "line": 338,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "355952e1-a91c-4504-9627-320d93c2663d",
            "line": 358,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6e0610fc-fde2-4ef2-93fc-0c792b4fff48",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5be01f0d-7ff6-4798-a40d-e84bddd461e9",
            "line": 107,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/sys/algerian_concept.nitf.wcm": [
          {
            "id": "6189ec47-0f41-4ce0-8c31-724d787c1cf9",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6d17657d-9b8b-48c4-9345-96fe6d58a45f",
            "line": 180,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a60a1cb5-1765-4b22-8436-7d3140d6a2ba",
            "line": 153,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "200462a3-d923-44ba-acb7-4e6e1da3bbab",
            "line": 280,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/media/extend_poland_process.pct.p12": [
          {
            "id": "86348407-9b35-4ecf-9014-e23ea1a26578",
            "line": 279,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e1ed51cc-0417-4dd3-97e6-bca7100da639",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b5ff9f18-ee47-4751-ae6d-b312e538569c",
            "line": 170,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "85faa30c-2570-46ba-b59c-8f4bb878463d",
            "line": 307,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0e99931a-10de-4baa-8a5b-e9592bcf5cdf",
            "line": 212,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b323823-4cbb-4778-9a78-49b3544ccf10",
            "line": 157,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bf31a5df-c815-463f-b41d-57cfb177adfb",
            "line": 169,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c110e08c-ee8f-425e-8474-248646c73d1e",
            "line": 10,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "11a27540-83f2-4753-a045-136b960fdeec",
            "line": 161,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4c917afd-83f7-44ed-9036-81cf7a3ad26b",
            "line": 482,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c8881027-b500-4d64-a338-a6c1683ddcc8",
            "line": 141,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f1d9f47d-10d7-4d9d-9103-78d887b8706f",
            "line": 326,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/home/user/dir/sausages_corporate.c4p.rld": [
          {
            "id": "194070c7-12c2-49b3-91c1-4cb8e0af8a20",
            "line": 467,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b5a792d7-aa03-4a95-b7a1-852bf4d0d1ca",
            "line": 479,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "859e6386-042f-4230-a29d-24f9cd3b48ad",
            "line": 82,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "618055fa-e5fc-475d-919b-924438ccdfcf",
            "line": 473,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/private/var/nevada_borders_monitoring.otg.xlf": [
          {
            "id": "f13c696b-c15f-4857-aef3-ac2cf117b7f6",
            "line": 285,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "baaa63c8-0515-4025-bbd6-22e9d9ae56c5",
            "line": 77,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9ca30072-d1e8-4c6a-844e-782e6ba00d0b",
            "line": 129,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "76a915da-cde7-48bf-93da-1c47f67697c1",
            "line": 387,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "44e9ca7c-cd3e-49ca-9b8b-4d17ca297590",
            "line": 131,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bb6ce953-eedb-4185-b212-01aa5fe69c37",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2e1bb842-05fc-4352-9238-495f1ac8701d",
            "line": 476,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3636a7e6-6f05-4b5f-9c1e-42ae77272f73",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9ad89fe6-4987-4903-8994-fa7236a6d72b",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "700e4394-50a6-49d2-a5c5-c32c3796309e",
            "line": 19,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c9cda984-ae47-40a8-8729-25ac1fc1665c",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "540b606b-162c-4ef5-8b70-d41626914e3d",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0c6ae0a1-f930-4c5c-aecc-cdb39d46cea8",
            "line": 316,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "490bb339-32fd-4311-bbec-a4df23013108",
            "line": 395,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9ae5b574-0ade-48d9-9af4-66e29dc49194",
            "line": 331,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/libexec/fundamental_tools_home.yaml.p7b": [
          {
            "id": "cd1341c4-888b-4854-a1ca-1616f8d52a46",
            "line": 344,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4728937f-bb97-43bb-aeda-785ce4ec8511",
            "line": 119,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "430ae73f-cef4-414e-9f09-5a74552472c4",
            "line": 471,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "61377ccb-388f-42b3-ae16-748940f8f828",
            "line": 75,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "35b3556e-f685-4b34-9a00-e303a051e011",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "daf3de76-ea19-4829-83f5-029c1bc8b70e",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "d7b731f9-3011-4f76-ba68-39d5afb6fa8f",
            "line": 71,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bed53441-f08a-465b-a321-459884a587ac",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8cb6cacc-8c34-477d-b671-58d85fa48d3e",
            "line": 137,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "51eaed13-fcf8-4d76-b064-e55da5d1d74c",
            "line": 451,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b7ed8290-2c20-4699-99d4-3eb5e558a50b",
            "line": 188,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1a24b4ae-04e8-46e6-a130-2fc972cd38d7",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2cf79218-4abe-42ad-b5dc-d593462304aa",
            "line": 400,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3feaf12e-dfd6-47bb-b1c6-37131fb8242c",
            "line": 411,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "afb34f38-f5ec-4ddc-8b67-c28c69760583",
            "line": 224,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0edec4dc-5fc7-4bff-912a-1525692d337d",
            "line": 435,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "70ac482b-6a67-47d4-b500-f58d1471bd16",
            "line": 362,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/ports/refined_washington_e_services.wmd.srx": [
          {
            "id": "911e8b3b-dac1-41f6-a425-a990d4142408",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1bfe9861-8d38-4b8b-aea9-83557e4a640d",
            "line": 332,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1ea90fcd-d187-482d-bf82-13ca1bca07f6",
            "line": 132,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7b4ca710-f2a0-4ab1-a6e3-158ee3a3d20a",
            "line": 179,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0b4e0b5-b2ec-4da9-9fa5-c0ceb29b9dd8",
            "line": 310,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "853b67a3-76bb-4616-acad-4fac40836314",
            "line": 234,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0eb89942-088d-4d18-a595-d2e6c3bad488",
            "line": 19,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "021d54c0-6cc5-490a-bc4d-ab2c7a3a4e50",
            "line": 441,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5d43cea1-c5d5-423b-b396-a1d3ec5796b4",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/var/yp/business_focused.nns.mj2": [
          {
            "id": "daa2cabb-b80b-4a34-9d37-925c55b2ef51",
            "line": 148,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "504ad13b-0184-4c32-bf23-14f93c920fe2",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c22e060-a10d-4195-be0b-1a1f68216969",
            "line": 254,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a8f3da92-67a6-4ce4-806f-be04b412821d",
            "line": 54,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0534d172-3116-4288-8a7b-96b48e04f68f",
            "line": 48,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c2921aed-1651-4359-90cd-1dd896bd6004",
            "line": 442,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d5834a7a-1f58-4da2-965f-0745af1e2046",
            "line": 343,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5c2d1fb4-12f5-4b59-9351-98c89567837d",
            "line": 156,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7957c62d-a190-4a05-9ee8-8be814c15156",
            "line": 313,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e6b53ac5-cf4d-4dfa-87d9-31ba1f33d25e",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "25707f9b-ade3-4435-9bd8-082ef1cb5f6c",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bc8110c0-f9e9-4a4a-91f8-26bbc6b7a8f9",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8cea8b2b-2bb9-4e05-a46d-16d03b3b2286",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f63c9dd1-6017-40a4-9515-eaf3d18d2a61",
            "line": 114,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/local/src/agent_dinar_agent.ami.xla": [
          {
            "id": "bd58b9f2-628f-42fd-ad34-404b069def32",
            "line": 357,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "93f76272-c38d-487f-ade8-36132c3aecc8",
            "line": 81,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b78e8ab-3560-4227-a216-e191b0b638c9",
            "line": 275,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/include/matrix.pac.hdf": [
          {
            "id": "1f94f068-8632-4e63-8829-405db55926f5",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "01834b96-3555-465f-b58f-dc463c62f3aa",
            "line": 498,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5b37ecb1-2066-4f64-87b8-18e76bd8325b",
            "line": 337,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "18407144-5836-426a-a52f-fb677a579ed9",
            "line": 239,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "78dda278-ea71-4a39-bd91-44092d19d455",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b104fe2b-4be2-4701-8db9-52312deecb2e",
            "line": 467,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e0b06c2d-fd13-4be9-a245-0ede941ccb2d",
            "line": 213,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "470fd91c-b1c2-4d52-afbe-5010985dabd4",
            "line": 221,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "46102bed-9863-4ce9-8106-a8625543e133",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "7275704b-370d-46ad-bf94-522c37724331",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "300d8178-5c10-4889-acea-685183458733",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c02a1b69-710c-4485-8a7e-13a25aab38b6",
            "line": 426,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4c2dc566-dd65-4b37-9727-1b2737548745",
            "line": 115,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "20ada50e-7426-4278-987d-188bb318fa04",
            "line": 28,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d3e70e7b-d77c-4aed-96d7-34d826da5ffd",
            "line": 322,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "56447ade-15a7-4599-a48b-f040004087e5",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3d08eed2-3000-4fac-be35-f50e03090e35",
            "line": 236,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "288f640e-f126-4df2-a7cb-928765fb716a",
            "line": 459,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/System/motivating_ergonomic_nevada.pcl.oprc": [
          {
            "id": "f2cdf149-c3d8-4ab5-92ed-9a9e07974ade",
            "line": 208,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "baa878c2-9bd5-4174-8eef-68f5dd14d7fa",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bf6c7639-d62b-4d84-ab47-71ffb4af9365",
            "line": 250,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9db475ff-c28f-4dc0-8f3b-c1bb4877f79a",
            "line": 208,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1371420f-00ec-4137-a0ef-8692ce7a311a",
            "line": 324,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f34bc276-7b5c-4ea0-b4b8-0c58cf7ca7fa",
            "line": 365,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "96a0e0c2-f80d-4bcf-a86c-1be35622ef18",
            "line": 78,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "61afc8b2-0af9-4997-8083-7034f5db72e8",
            "line": 275,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f4475ea2-fb9e-4ccc-a41e-0a26b830e27b",
            "line": 186,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "31b27e02-1eca-4d01-af5d-b3998f550860",
            "line": 146,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "184621de-30bb-42e6-844b-86e37f87a19f",
            "line": 18,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "814c1cbd-8522-4997-a1f2-19e91c51d86d",
            "line": 76,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "92aebf8b-eaf3-454c-bc47-31609f749b6e",
            "line": 123,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5795de52-5bed-4be1-b860-4c0e29d7eb70",
            "line": 4,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ff0bdfb0-4be7-47cd-a2e3-8c37ddce3d75",
            "line": 327,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21b53795-567e-4464-ba13-2b308405f622",
            "line": 220,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1c29a784-065a-4ce7-87d5-dbd019e67234",
            "line": 103,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/Users/mobility_schemas.icm.texinfo": [
          {
            "id": "514e93f4-23eb-4fa3-a621-55a2d8bfb8d6",
            "line": 201,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "935d2139-b091-42dd-98f3-6f98fe1d0fdb",
            "line": 42,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "34d66548-4783-47a2-9e0d-d7ffcd695ed3",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "91116cc6-157c-46c4-88f6-9ebf57edc029",
            "line": 254,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "195514a1-a34e-47bf-88bf-a6835fb35713",
            "line": 104,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "118546a9-82ca-4693-804a-c327bb002123",
            "line": 162,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f51a4220-b6a9-416e-b95f-0a89aefbc489",
            "line": 481,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b7b31d7f-df9e-4788-8458-1df0d1270f87",
            "line": 124,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e8b6a844-15eb-4856-a549-d1931c4de70c",
            "line": 21,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "18d7b2ab-1a89-467b-be78-fc0705d71e83",
            "line": 425,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ffbe3c17-95fa-478d-b13f-edc31314d25b",
            "line": 124,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "702af7fe-8d05-40d4-bc20-766eb5e0f4b9",
            "line": 174,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5b66ae45-2c47-425d-90b1-91b46b51c369",
            "line": 326,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3a6188a8-d7ce-4e88-ad4c-a0091bf04b41",
            "line": 123,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ec6469d9-2077-4d16-92c1-7684d68c0253",
            "line": 194,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/net/cotton_rest.webp.rmi": [
          {
            "id": "8f1f26c4-c28e-4cb7-b31b-964e9e3e57db",
            "line": 219,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "66182beb-13b0-40b0-83b6-b750dcb25b4f",
            "line": 370,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "819f4af9-f44e-40e0-b605-05104d25ef25",
            "line": 404,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "969d2823-1c8f-4114-ab14-0ccba2a717a3",
            "line": 179,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "38b206aa-6803-402b-92cb-15498026b57b",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "70da64c9-8a57-429b-aa10-67cb46152dc4",
            "line": 122,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8409b88f-d94d-4157-8c17-092ccabb8a71",
            "line": 30,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "cfa1f51b-a658-418c-a406-b1cf2238f2c4",
            "line": 181,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "009f6dec-baf3-41cb-ad88-827dee8b9881",
            "line": 225,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b6fc2453-fe2d-45ca-b451-5e49b9505cc9",
            "line": 17,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "883c4e8d-72f0-4d7c-9a33-6529d962ae2b",
            "line": 80,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3afa0134-abd2-4d61-9055-a8321472c99b",
            "line": 409,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "fe6e2d17-a142-4042-9ee1-7cdefe3ab14d",
            "line": 161,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ]
      },
      "startTime": "2021-07-08T08:55:25.250Z",
      "totalRecommendations": 219
    },
    {
      "id": "3d790e6a-b698-4392-a9ca-89aeb0629c15",
      "name": "alarm-quantify (9a35d56)",
      "state": "2",
      "finishedTime": "2021-07-08T15:14:05.644Z",
      "recommendations": {
        "/usr/ports/taka.hpid.jlt": [
          {
            "id": "1f5c8d16-e323-4ae3-b9bb-e7a495513f3c",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "89df724c-1922-44b9-bc16-4ffcf6b41539",
            "line": 239,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "281d0239-fdda-48c4-b194-3a6ca271e448",
            "line": 30,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "adb48f7c-4ebf-4af0-bf82-bd982ef45004",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ec7c32a4-5b27-42d7-8d60-9f8e71ffc6f5",
            "line": 137,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "34890650-e6e2-4dd9-8c40-cbd23ddc4299",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0680457b-7f78-4759-9b4e-46598d167620",
            "line": 305,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d2ed940a-9799-4539-8b72-271bbe9f99fc",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1ebe6f02-c33a-4894-bf71-37a02b1fdbc6",
            "line": 462,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7bfb2b20-358c-4042-8fd1-76151a19b38d",
            "line": 299,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "994987ef-18bf-4fc9-b894-e3b103c9e31b",
            "line": 383,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e2e87b04-bbc7-412a-821b-ed9640e12069",
            "line": 43,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/log/territory_indexing.3g2.nnw": [
          {
            "id": "b58093cf-f203-4e6d-853c-5b06116d1947",
            "line": 375,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0b88ff3b-3b9b-439f-8e4a-628a185d003b",
            "line": 5,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0863b63a-5592-4d6b-8a7e-6bbd69b4fd38",
            "line": 31,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "23c6dff6-5c26-4b57-a6c0-fbd30f67f552",
            "line": 106,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "42e6bd51-457f-4ffa-a666-81174da81a55",
            "line": 139,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ebdee5c0-365b-4bd8-9dc0-7db847c69116",
            "line": 162,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e5f05c39-cab6-42bb-a4eb-e318e5d47de6",
            "line": 486,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bfa8b260-8ec9-48cf-a568-0dacc3150bd9",
            "line": 166,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7cf32cc4-f085-4a54-a187-598acabc24d2",
            "line": 79,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "55d6546b-2494-4e00-9904-942c157acb8e",
            "line": 24,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7a68d04d-f2fd-46ea-9f77-5a38aa2f8889",
            "line": 40,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "766ff253-93b3-45b4-8cbc-ecafb9eade3f",
            "line": 443,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1325a010-c4fb-465e-91dc-5e62e0e2ac18",
            "line": 83,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e367dc38-9a1b-45f6-bf55-846b596a3540",
            "line": 230,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "416de325-ca6c-4a9f-8ea1-5a8cbf203ea5",
            "line": 392,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f6c45440-a8f7-40ab-812d-13245f07b08e",
            "line": 128,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/dev/assistant.mlp.oxps": [
          {
            "id": "850322ba-d6ac-450a-a194-7bb6e2ce88b5",
            "line": 116,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2a6d80b6-8ff5-4ba8-b8b8-f4ef5b5b9ff3",
            "line": 233,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7d568d49-6295-4976-b6c1-0b5a9aada628",
            "line": 25,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c313917b-8d2e-46ab-8fcb-17cc47d783a3",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b3a494d2-518f-49e7-b274-5fa410cd158a",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/include/borders_virginia.jpg.trm": [
          {
            "id": "455cfcac-d4d6-43c4-9bb0-b3fc97b1ab9d",
            "line": 473,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a9a81b56-c3df-470d-83ea-27c0dd37ae00",
            "line": 454,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f58247ce-3da3-4cac-be35-1221f8abe8b3",
            "line": 251,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/bin/darussalam_associate_back.rms.mxml": [
          {
            "id": "784c1b47-6c10-43a6-a674-bffb8e097727",
            "line": 114,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "78f13ad0-77fe-415b-bab8-bfd471b33aed",
            "line": 353,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e6375b95-da73-42fd-a77f-6eeb73756c16",
            "line": 47,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d061f9ac-6512-4593-871c-2120491ed3cf",
            "line": 367,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21529eff-6ae9-4bc2-a282-5615a9311b88",
            "line": 275,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "598f1323-9118-4a49-8424-30f1c52cf7c7",
            "line": 325,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "84ac2ee6-9eab-46c0-b944-07aac04a7f80",
            "line": 199,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a65badf1-fa84-451b-a4c6-f646fbe8e9cd",
            "line": 110,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5e981b31-8b5f-4c7e-902b-b053a990167f",
            "line": 109,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5934d56d-5dff-4b6b-8b4b-169ef2c96df0",
            "line": 1,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/opt/sbin/time_frame_modular_deposit.pfb.cgm": [
          {
            "id": "f8ed1c88-d8ba-4131-885b-bdccfc166c5a",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6ffa3057-e6d7-429c-a0e2-ae3a175914c1",
            "line": 331,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "cad07b76-f7fe-42ba-8189-ca9980dc5630",
            "line": 33,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c0e42169-8f29-487a-a636-b4039bd93957",
            "line": 81,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8a94a491-ced0-413d-ae24-a3b92c6dd330",
            "line": 458,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4a027895-5581-4c8a-9932-22cf764afeec",
            "line": 12,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/selinux/dynamic_small.distz.rnc": [
          {
            "id": "9cf591f9-a3fc-4420-a79f-81ea4b1b1a36",
            "line": 219,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1e033e95-839a-4c36-a185-76543b5b40f5",
            "line": 153,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "749fcef6-207f-4f01-8897-2b86c7ccb05c",
            "line": 218,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e2a78f0e-5420-4c46-8dae-c3401c21e642",
            "line": 466,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "22d509e6-2a7b-4031-a7c9-6af7b4bd76ed",
            "line": 204,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "74847340-be58-4098-9eb0-ab2d5820135b",
            "line": 211,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6237c162-5db4-453f-b24d-21e3067c039b",
            "line": 360,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f4b2818b-18ef-4e1b-b7b8-6dc953f5c071",
            "line": 113,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bcfc6b10-04c4-446f-81b6-e26ca2b162bf",
            "line": 114,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c6547e6a-df9d-4302-958b-25be8a1a25ad",
            "line": 303,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/src/brand_solutions.mpn.less": [
          {
            "id": "db6dabc2-47b7-4e89-b79d-5ab39a289ff5",
            "line": 275,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ab7142d7-f42b-4105-af99-507fab65800a",
            "line": 93,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3a167151-8035-446d-9d9c-bdbff7971e0e",
            "line": 322,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "397f48bc-42bf-425c-85a3-3bc0c3b1b280",
            "line": 324,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1d089421-ccab-4f06-b37e-bc8b9c832100",
            "line": 346,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "dbae9655-e355-4ef4-b55d-57e668822c25",
            "line": 486,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5581a88f-79c8-415e-8975-2f3d44a3e67b",
            "line": 147,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3f6b6fc5-4e7d-45a8-b807-9185c0259827",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2b9db4ef-4254-4a85-9aec-d1efa5ccda0c",
            "line": 308,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5ee9e0d2-c4cd-489a-850a-e5e4233d0baf",
            "line": 134,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "90aed605-fba9-4c50-90ee-075cb26a0f17",
            "line": 237,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b2ed331a-a1bb-4e37-96a6-c11ec88b581d",
            "line": 342,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/home/asynchronous_outdoors.pcap.clkt": [
          {
            "id": "5c334982-3c6b-46a1-b2b3-84cf4665c937",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "23f5c999-dfce-40c7-9cf0-26fce346cc8b",
            "line": 481,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e40ad6a1-a600-4784-a01a-a8bf0b55e00a",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "37caa183-25a9-444f-8b66-21d95bb07e7d",
            "line": 293,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/mnt/metal.dir.sil": [
          {
            "id": "08dadfba-c27a-42b3-8085-81a5c5f74a2c",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "eadf5a19-ad75-40f2-89d9-9de04043cd98",
            "line": 326,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b5c24d37-9917-4ab1-be70-c99db08fcce9",
            "line": 232,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f153f10b-7fc0-4856-abc3-242df46b016c",
            "line": 196,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "79328b0e-d001-4d01-b057-19a4e3a0c59e",
            "line": 9,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5448f8a1-667d-40b7-8085-030e2ff28c11",
            "line": 449,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3a561ca1-e2e1-4efa-9547-72e26f085b64",
            "line": 121,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a4d2383a-ed56-4b9b-83e6-42225ec3270f",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b9749526-6e00-4b06-af68-d33d428c7036",
            "line": 239,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c601aff7-6e44-4445-803f-0f3f70f280c6",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b843bf0e-a7cb-4c18-b2ea-8787507cfac3",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "61bd0944-118c-47f7-a0b6-3ad9f292f849",
            "line": 254,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2412dfed-e54b-4715-b77a-45c97fa54c92",
            "line": 363,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/bin/diverse.doc.cxx": [
          {
            "id": "3945f970-836d-4483-aa56-8b209b191b31",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "108d6662-055e-4629-b906-0c4fdaeb04c8",
            "line": 140,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6db261f3-857b-4eb6-9004-fb9489bc9791",
            "line": 295,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9922dae6-5d39-4e30-8c25-5c61a1f5f3d2",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c4ee3cb8-96fc-487d-855b-441d2ccb2208",
            "line": 423,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7634ac63-b306-41aa-8c05-bb3a794582c2",
            "line": 57,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "72f634ee-5eb1-4994-89db-796f73786f74",
            "line": 278,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b435dc55-bfe8-4559-a369-de2ba5f9ee7e",
            "line": 244,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "31f9ec73-6641-4f63-8474-2351015a0d02",
            "line": 149,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "602c5a6d-4170-44bb-85ef-ea6b1db1a945",
            "line": 473,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "62f63a23-15b0-4a87-a991-cef7f267cfe1",
            "line": 105,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4a4803f4-1889-4390-ae12-8be5ec7a6981",
            "line": 203,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "87554277-0cd3-436e-a7f1-0c89d1110fbf",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5d486149-8f7b-4b22-9707-c32ed034496f",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9c6e351c-dcf8-4847-a4da-e26d7f469e92",
            "line": 270,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "185a9b0b-287c-4e36-88f8-e552ec857f19",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "92c75f3a-54ed-4ae6-ac09-84457779fcbb",
            "line": 158,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "64e3588d-a9fa-47a2-8897-975803ee3f8f",
            "line": 142,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "acf44c96-1f8e-4603-b56a-5d003c48f72d",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a9b41861-060b-4d62-9c4b-cf077c890dd5",
            "line": 269,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/mail/cotton_parsing_saint.sit.pbm": [
          {
            "id": "ea102208-dbad-4d29-8b5a-091fa62373a5",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a5a72964-c4f1-4773-8065-a3d841c75c79",
            "line": 161,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "aa685e4f-21d0-4f5e-ab26-1bef1e46bb5d",
            "line": 419,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2d0c4d19-157f-4fef-95e1-b9f4f60f17a9",
            "line": 18,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ecefa5c9-3356-4b0b-83ab-e36c680ea1db",
            "line": 432,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9d388bdc-fd33-4875-b4eb-6401737c347b",
            "line": 380,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "28f5d6b8-3d00-41f7-a027-2854fcc6c4b4",
            "line": 404,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4a7bc26b-10fb-4fe1-b40b-9032fdf5ac67",
            "line": 268,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f28fb978-d539-47ff-b476-056cccbf9c11",
            "line": 459,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1f3016cf-dd7a-4115-a327-df31db628e1f",
            "line": 46,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fd569bb8-1a97-466e-8358-5ac387bca07c",
            "line": 186,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1e29aef7-1e6c-4bbf-a729-e609ae7c2c87",
            "line": 130,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "570ba792-e2e0-4852-8d96-51e4f1449c3b",
            "line": 476,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-07T14:22:39.888Z",
      "totalRecommendations": 124
    },
    {
      "id": "f720b4e2-2575-4456-b827-70c3ece5a2c9",
      "name": "program-calculate (de111a0)",
      "state": "2",
      "finishedTime": "2021-07-08T18:09:09.003Z",
      "recommendations": {
        "/usr/obj/transmitting.mpg4.distz": [
          {
            "id": "f4ef36cb-98f6-4798-8a75-a635d38c406e",
            "line": 342,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ae2a4225-ae19-4369-a846-9d3eeef8b139",
            "line": 133,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "69d354d1-8b54-41d4-a868-96a1edc04e3e",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "75130aef-8962-4f09-bef0-6e01913a2f55",
            "line": 181,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/obj/account_rubber_bedfordshire.docm.sema": [
          {
            "id": "33424581-899d-478d-a1d1-616d362da53e",
            "line": 484,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/obj/thx_tuna_york.wmv.xlam": [
          {
            "id": "eca6865d-6189-4b1a-88f2-81f661b9c51c",
            "line": 18,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e1337c67-ba27-4671-9d3a-103613466d68",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ee26eea2-172f-469b-8c25-a27613090ab3",
            "line": 347,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b52fe173-d1ea-4bdd-b29e-6e6541c9e2aa",
            "line": 138,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4ed93fde-9613-4250-b568-c869a6000f9b",
            "line": 272,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/Network/latvian_quantify_roi.mbk.rip": [
          {
            "id": "f928105b-516c-4318-a5f1-5c39f4e5d0f6",
            "line": 331,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "33a98588-13da-4ab6-9d9b-d839bff5615c",
            "line": 30,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "23083a4a-27d9-4aba-a813-7e3f46d9c9e1",
            "line": 298,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1a49f581-c13c-4f6e-bdf2-dcfc8b4bda4d",
            "line": 100,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef96a66a-df9e-4dbc-b777-105d6ae38b39",
            "line": 491,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bec82d2b-3f37-44cb-ba37-93b4fe618b0f",
            "line": 22,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "76a2182d-33de-4181-b583-852bebf8dd1a",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "037181c0-7045-43d3-90db-b48b8b964563",
            "line": 279,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "6c22f3bc-051d-4751-a636-e927caffd567",
            "line": 163,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1f6a07ed-2bbc-47e5-8ba3-725a8071ecfb",
            "line": 206,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ba376812-803a-489c-a468-40385b85a8d9",
            "line": 59,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0209e790-c5bc-45a9-b089-cfe13b97cfcb",
            "line": 126,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2715f4b8-91bd-4ed0-8c25-861becab1d34",
            "line": 60,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/boot/withdrawal_payment.xif.gex": [
          {
            "id": "ac83b53c-306d-4d19-b5a9-19e5c9128a3a",
            "line": 426,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "bbd6104e-1880-4a98-b480-e0e81ed9064e",
            "line": 186,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6d257d95-6a73-4b63-910a-e2ef656f36df",
            "line": 337,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eeff3bbd-c000-4fab-a62b-b0d93df685a1",
            "line": 353,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "72ccf99c-8a5e-4b23-99ba-76f0b46f2e56",
            "line": 379,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b9b25de0-51c4-4005-b262-2e61b80363cb",
            "line": 368,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8f8eec86-0a96-485e-b3b4-6f39011e5523",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "618c2514-1f2a-4016-ad5a-c04cdb57a58a",
            "line": 318,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5696f996-05ba-428f-95e4-4d13cc6fdc70",
            "line": 55,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fcd01b5a-21a6-462f-8557-095b6d036f12",
            "line": 432,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b01f4052-934a-4572-9ee8-24207f0e86b5",
            "line": 149,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "325afc5e-3e3d-4c96-9bf6-c8d7a748b8d0",
            "line": 466,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/media/coves.jpgm.smf": [
          {
            "id": "59553f5b-86bf-4759-adc7-b1edfb7abfaf",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2543fe3c-b2d0-41d6-8e9d-77a48f92b98a",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5ff6ff78-04fa-4acb-9bb4-cfd1a033b179",
            "line": 353,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f0dd745e-461c-4996-ade5-f57b8195bf32",
            "line": 433,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c87e6620-c063-4bcd-94a6-5d0465f5bcd5",
            "line": 75,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "92878751-27b3-4d16-9fbb-1dfe72dbfe66",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e86b86b7-8bcc-493f-9277-0bc9ed2414b0",
            "line": 400,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3290f18a-9200-4dc4-9a5f-c77e157b902d",
            "line": 431,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0e887c43-c0f3-4b97-be5e-b37a5b4e0b58",
            "line": 420,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "665fd9e8-0fc9-4328-bc47-15a3c5f661dc",
            "line": 277,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a50c47e5-55ff-4496-932e-16323411c61c",
            "line": 374,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8ab75bc4-16ab-47cc-9922-d2e690e0b9af",
            "line": 112,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/libdata/somalia_concrete_cambridgeshire.mdp.mp4a": [
          {
            "id": "2e1f5d51-0c5b-449e-a28e-55c1dd91e485",
            "line": 478,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "73ce6c27-3905-4545-b7fd-70f3224e4184",
            "line": 418,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5ada0656-f953-4574-a959-85acaca18e10",
            "line": 351,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1e1a2c4c-2e2f-4d74-802a-621d96d602d8",
            "line": 144,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bddd8da9-510c-420b-904d-d02879897fb5",
            "line": 297,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "00962672-c08f-4baa-b5d0-4663dde577e7",
            "line": 487,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2764164f-180d-4d6e-94e4-63b588856014",
            "line": 136,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/usr/obj/organized_empowering_concrete.ics.str": [
          {
            "id": "3780a6fa-8695-43e9-aeb3-1a945adcd86a",
            "line": 271,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "330e9202-a28e-44a5-a5b9-5f9cc56b4787",
            "line": 290,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ee9bad19-f22a-4954-8243-edfa500f6934",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3c40af62-478a-4e1d-bc85-34a3ed89369a",
            "line": 189,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "756f5329-83db-4cab-934a-0af6274c031e",
            "line": 196,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "33bff10f-be63-4d6d-8cf0-d7fd080cc3bc",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "873d4d33-be86-4399-a47f-119e841f7c9b",
            "line": 336,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2c9954e5-bfe7-481d-9a93-e077361491bb",
            "line": 482,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f8f1219f-199e-4a08-921d-c9af16bd210a",
            "line": 306,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "de9b9c34-2179-42c5-a362-37fc12582db3",
            "line": 30,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e46ce2bc-c34d-4401-9d5f-5d960ee72a1e",
            "line": 412,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/boot/deposit_chief.3g2.3gp": [
          {
            "id": "91260e2f-9417-45ee-9c03-ee7376a0ade5",
            "line": 86,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d62aef10-ce57-4b49-9e97-d2e03183a34c",
            "line": 216,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2df16c16-872a-482c-8e48-1945ca78f225",
            "line": 96,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e3c0f15e-d4e4-46e0-b2c5-ea74c2cddf34",
            "line": 252,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "164de92b-deda-4850-b8ca-28d7465f4fa0",
            "line": 173,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/sbin/calculating_executive.djv.qfx": [
          {
            "id": "b0a76dc7-f168-47ca-8f8b-113a08de8353",
            "line": 40,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "21fa8f63-d9a0-47cb-8733-e550fa03690e",
            "line": 77,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5d712b6e-24e4-47b2-8ef1-9de4fee6d705",
            "line": 11,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "478650e8-9e3e-4b4a-a75a-911380202a96",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c7721db3-a7f1-4316-aa19-d4e620c17959",
            "line": 348,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "fda75244-4a49-4325-80c1-16aaa3babf98",
            "line": 452,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5d055f7d-39d9-4501-bedb-13deb6acbc9f",
            "line": 192,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f99887ac-fc75-4650-a559-f7df3179203f",
            "line": 92,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/var/tmp/circuit.gac.mus": [
          {
            "id": "5ec2c1aa-c486-4b93-a092-4d566ef4e2ee",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "23336a46-c3cb-4bed-a037-d5a761a1e1f3",
            "line": 250,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "66e40fb3-f773-41bc-b3fb-760552805bb1",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5fb5efc4-1857-4e9d-855b-0e5873b8acb4",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "80979c2a-441b-4611-8988-ad8e2bcd4ef3",
            "line": 20,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "05c98a42-51b7-4c1a-ba3a-d3adf87e7aae",
            "line": 253,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8a6f9775-7e29-4dd5-9d7c-8e566c2a77b7",
            "line": 269,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8ecb3370-fd5f-4e1c-8ab1-a69924ddfd29",
            "line": 108,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "83851c08-3d37-46bc-84d7-d85fa38e193c",
            "line": 90,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "22525b25-3116-448d-9bb0-a3ee1930fe47",
            "line": 240,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "13433f8b-9a68-4be6-84cd-aa1461c329fb",
            "line": 337,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4c8a840b-f9c2-4058-a276-66b63fc44c0d",
            "line": 228,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6d28ece5-9237-4dbb-ad6c-23c67c6d70a5",
            "line": 101,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4e79c199-223e-49fe-947f-f9e2e61efa53",
            "line": 392,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8818802f-42ea-4ecd-ae5b-9b93b3c0589c",
            "line": 366,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "1806766c-c832-44bd-b934-870128b44910",
            "line": 494,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef170181-e59c-4169-a770-342e52e460db",
            "line": 242,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/var/tmp/payment_pizza.ott.c4u": [
          {
            "id": "65695c8c-57f2-479a-ae63-4c4377fea631",
            "line": 500,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b4ae572d-b068-409a-86f1-3ccb9dfa5090",
            "line": 186,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d92c1301-de50-4344-8ac1-4f6ccf81a682",
            "line": 200,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3e0d343e-6412-439f-bcf0-dd3e6f1b183d",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bb567a54-0106-4547-8cea-2c47869f7972",
            "line": 399,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bd984abc-b85e-4d2a-a1ad-42b1b3ac3492",
            "line": 500,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6ca0a079-fde3-4ad7-841a-925f0cc65e3f",
            "line": 461,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef4a29c5-00f4-4556-9024-bde140093c79",
            "line": 397,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "61b68842-f6c7-467f-a692-bd44ac19a10e",
            "line": 438,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "9f08ac3c-cf83-490c-93e7-e0126d01dc97",
            "line": 94,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "458a518c-6554-4795-a4c8-2bdf1c360d99",
            "line": 403,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "522deed8-1344-4bfa-80c3-d283b5539a5b",
            "line": 146,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f2e55d5f-2ff2-4f46-a0a5-50c800016e20",
            "line": 36,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a2e6067b-bce5-4f1b-8e95-3ee20fc7fdfa",
            "line": 191,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d0ad7e44-1c33-48fc-93bf-9f89d2568154",
            "line": 202,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "965aa956-7c05-4d2c-bc7d-c1f519b0a5ad",
            "line": 49,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0b668665-4c19-4a01-a241-29464bfc63a2",
            "line": 251,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dd8003b9-9632-4531-9b77-2067c2d4c63c",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/business_focused.mads.fdf": [
          {
            "id": "91b2f6e6-9b3a-4853-a085-897b86c98922",
            "line": 72,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "003974b8-0d57-4f9d-b285-5cb82cfb0231",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a31941c0-6664-4304-8a8b-d4c083a7406b",
            "line": 105,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "78a0e923-ada5-4aeb-b5c0-6a6436ec94a1",
            "line": 270,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5f5147a4-f00b-4100-85f1-e9ca74b86901",
            "line": 243,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "49465ee3-ec62-406f-8322-b6a8a9209c45",
            "line": 407,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8da6e702-0796-44f6-a02a-ec012a7c2b5a",
            "line": 376,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "c23db90e-e761-42a8-90de-583f4784cb46",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e0f21ca3-8e63-4c33-8204-2fdc00d68e02",
            "line": 272,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c7c0b683-dc62-475d-86a7-9403d6c77b82",
            "line": 215,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d7539684-7a83-472f-a2bd-0bfb20a185b7",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "691efcd0-1ea8-4ddd-82ad-4b507264adff",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a605ce43-040d-4501-903e-b1ff12bfba19",
            "line": 23,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ce19c907-0c84-4f22-a985-6f1f618a4a81",
            "line": 270,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "65b43ec3-d721-4c61-bab9-a5494264026d",
            "line": 79,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9d698824-0a91-4032-908c-3faca390bc34",
            "line": 185,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "97ba6709-a79f-4e12-b01d-bd3e844825e5",
            "line": 174,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2f35d9b3-554a-4ae4-9127-277068ce22b3",
            "line": 307,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "92169c53-4e2f-4ad1-a9cc-77af100493ad",
            "line": 52,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2a9aeef3-7793-4708-9f5b-4371f15f208f",
            "line": 251,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/include/branding_com_tuna.fsc.vxml": [
          {
            "id": "fbc34cdc-cc47-43b7-b0aa-aa03d7ff65eb",
            "line": 242,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e8ad202b-8089-44d7-8ed0-6a38acd462c0",
            "line": 75,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "80c8e50d-242a-430b-b9ed-e289b80b07b5",
            "line": 451,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/namedb/grocery_tactics.xla.pml": [
          {
            "id": "0650d0cc-de89-4c62-8690-b2e3a0a48c60",
            "line": 191,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "8a4fc3f4-bdde-4463-9d38-180715849cc3",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c22dd020-28a7-4bed-ba61-600180ae046b",
            "line": 280,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "72b86746-c2c2-4d72-931b-88d102529049",
            "line": 375,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e9ef6cd7-51ad-4c77-84d5-d69afde0bd70",
            "line": 260,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/private/var/shoes.otc.pml": [
          {
            "id": "563ab162-1ba3-4571-b7a9-2f146d36d11f",
            "line": 297,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "438940ff-866d-4ee6-b027-c1149a45e204",
            "line": 497,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c3f4a7e3-b980-46ee-9485-d3ee44a3a654",
            "line": 329,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6b1c6251-3eee-4727-ad1c-fbc2ff6bf809",
            "line": 417,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "30e03e80-eb3e-41c2-88cf-e46125e8a42f",
            "line": 223,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "16b7dd7d-d368-46a9-aac3-ef061b2df614",
            "line": 250,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "755f2d10-f781-413b-b8de-6acdd3931022",
            "line": 482,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "811ccb4f-32c9-4077-9649-4ed234e90430",
            "line": 92,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f9dd53e5-be97-4465-8fa7-74dc0fef1689",
            "line": 2,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "65f7f877-5e89-49d0-88c3-4a7520359d80",
            "line": 203,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "99a61a48-c1f9-4425-b390-1fdf60c1d7c2",
            "line": 466,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "32514fb9-47fd-4a95-ae38-9086addedbb8",
            "line": 251,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "809269cc-00b4-4aaf-b80a-8c078e45acac",
            "line": 147,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e34f93a8-79fd-41a0-937d-30dfe857914e",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0de439ab-14bd-4809-b26e-34d5b657a171",
            "line": 296,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "64f93d97-bb09-4bdd-b26e-4b54a42792a2",
            "line": 139,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/boot/envisioneer.odf.ngdat": [
          {
            "id": "602962ba-af87-4f6a-87e8-1ca977e101ea",
            "line": 461,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b12cab15-ad60-48b8-85fa-f0715fbd3e90",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "17d7be7e-9bf7-4b6a-9b53-eaf8b35a389f",
            "line": 452,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a0da3122-c465-4404-a0f2-a8499414e800",
            "line": 344,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "ef02c971-dcb9-4a6e-98ae-75e065702921",
            "line": 486,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "92308d44-079e-487c-aef4-1f4263c961a3",
            "line": 76,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/sbin/driver_gorgeous_ai.dae.vxml": [
          {
            "id": "cef3d1ca-d771-4426-b92b-792351aa7d2f",
            "line": 93,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f254a99f-92ca-4eff-87e8-f9265bdd294d",
            "line": 392,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f082e924-7d21-42f2-9427-dd92d1879618",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3d70a589-be81-49a8-9e45-e60e1525eb01",
            "line": 181,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea404f7a-4439-4996-b1e3-95aa250142f3",
            "line": 422,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1e8dc300-d44d-4b59-aa08-ff229983b535",
            "line": 26,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fa466884-e92d-44ef-b220-af278393b9db",
            "line": 325,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "31781d6c-4c6c-4929-82ae-401d9b1918f7",
            "line": 414,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5627385e-7d59-435d-859f-06a02ebcdef6",
            "line": 74,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "aa846f07-656d-471d-8fde-2ac0f06823cc",
            "line": 109,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ee7b8ae1-1344-42f5-9188-d3e76927a096",
            "line": 198,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f9933484-0b1a-4906-88b9-efdfee904849",
            "line": 97,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/etc/ppp/infomediaries_intelligent_bypassing.p10.cba": [
          {
            "id": "58cf14ad-a010-4e1d-a25c-1b1a7591bc6c",
            "line": 325,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f72e7764-4711-47c8-a186-2874b4d18247",
            "line": 180,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5efac559-5b5e-4321-9b02-bacafa84fe5e",
            "line": 400,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7b2ccdc9-e382-475a-bb8a-e56e59ef43a0",
            "line": 430,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3b4c61b4-0220-482b-bc28-82a1447b87b2",
            "line": 166,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "57a25b8f-c62c-40e7-8ea9-1a0b3a7aede0",
            "line": 15,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "857d6442-855b-4061-97e2-fd6afb9d2285",
            "line": 109,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b68279f3-ff7e-4e9c-9b19-5ac72f03cc28",
            "line": 247,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0261db1c-89ac-438d-9a1d-53f78cf991f7",
            "line": 189,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "373d7486-50c7-4c17-b6d6-8d64fbf61ffc",
            "line": 435,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "623200f0-094c-423d-9ebc-f13a87758d1e",
            "line": 452,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f898ecca-5e21-417f-a165-ea9cde6f2f42",
            "line": 460,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ef456c5b-80fa-4395-9547-6f3a58615d6c",
            "line": 183,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a5606552-6c51-4a53-b3a2-eba43775ddba",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ]
      },
      "startTime": "2021-07-07T15:26:59.211Z",
      "totalRecommendations": 189
    },
    {
      "id": "d4be01b8-c055-4037-8f58-fdd16d0be4b0",
      "name": "panel-synthesize (94b1a26)",
      "state": "2",
      "finishedTime": "2021-07-09T08:25:52.395Z",
      "recommendations": {
        "/Library/dinar_springs_franc.c4d.onepkg": [
          {
            "id": "0c056380-9a10-4dac-ac01-0bd606cc87e8",
            "line": 208,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bcc6f1c3-fb97-402d-bc55-50219badff31",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "68f3e856-b2c1-463f-91e3-0f7caea73047",
            "line": 57,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "14f21ce7-aaee-47e8-af16-224bec19f165",
            "line": 288,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0de4c965-768f-47e7-8cd1-46d8440636b2",
            "line": 151,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/mnt/innovate_rubber_village.xm.csml": [
          {
            "id": "aeea92f5-e5e5-46c1-b634-f84a31b1ef2c",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "aa75b101-5051-4eae-8889-13e3c49a14fb",
            "line": 209,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a625f419-7e54-4a5b-bcba-202ddb9aed12",
            "line": 160,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ceceec37-dca1-4953-88a5-e49343290d1a",
            "line": 306,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "d78b0f7e-d070-494f-b86e-c26b4b66066e",
            "line": 168,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0f8a5aa3-31a3-449c-b56d-11187cd8e02d",
            "line": 248,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "263b6647-6a0e-484a-b9f6-7c01ee94dfbe",
            "line": 165,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "f60a8755-aed3-4d4f-94b3-a269bd313d12",
            "line": 396,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3edaea01-4b83-426b-acc5-3c10b1d1ebaf",
            "line": 121,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "989b3ce6-4be8-45a2-bff7-b4aa1a155623",
            "line": 302,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/private/withdrawal_azure_24_365.vcf.oa2": [
          {
            "id": "f5fa80e2-61e3-4087-a7e7-ae4e5889f804",
            "line": 369,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fc8790d5-721a-4b24-ad2f-075325b1a62a",
            "line": 405,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "17d59cec-5cab-4acb-8c71-250da96d060b",
            "line": 238,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6a78cd67-d4ba-47ce-a0f1-a654ff860952",
            "line": 36,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "68038c66-004e-43fd-ba23-3130d2a5926d",
            "line": 166,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "0cf11c17-dd05-4b47-85c2-a7ee73355177",
            "line": 472,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4555b226-8b1b-4185-b0ed-0ba4b68858cb",
            "line": 338,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/opt/include/central.exi.jpgv": [
          {
            "id": "d67731be-ad37-417c-b4a4-8c5a8ca95ac5",
            "line": 30,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "c55d246f-20c7-4d79-97f1-9fbfeec27418",
            "line": 327,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "59766f24-aee0-44b5-969d-6ec60a10d785",
            "line": 358,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4161de68-c183-4d2e-9468-01646d0955d7",
            "line": 238,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3c9578cf-c957-42a3-ac46-d787d8638396",
            "line": 76,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9298fe50-19bd-4c54-822d-ed88b9f0af18",
            "line": 406,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9b79731f-b866-466e-9fee-ec94ac2933d9",
            "line": 107,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "00d76c27-d4eb-4335-bdec-414fa6f89d5a",
            "line": 91,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "41ba2255-e155-499c-9dd1-e6756a93a419",
            "line": 405,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "da3dfa9b-c9a8-430a-b389-03813ada698b",
            "line": 496,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "86a69a22-2d7d-430b-808e-3285d326cf45",
            "line": 261,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "5b1547a3-f0e6-4f22-8957-014e0b98e32c",
            "line": 99,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "618690fb-0517-4806-934d-53b8ac8dacaf",
            "line": 289,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f558a5cc-93f5-4f97-9669-5f415ccf061c",
            "line": 275,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a7a4c83e-1e35-4dad-b4b8-c59e95e985ab",
            "line": 5,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "2770e24b-db9b-4604-b78f-bdbd984cbffa",
            "line": 310,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "726ff477-9daa-4833-9635-dbe106e6ce89",
            "line": 12,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "a0e9ce14-4b6d-4f9b-99bc-c05e5e0d2372",
            "line": 201,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "a5b1d2a6-5922-47e8-93a5-12968f0f9e24",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/etc/mail/sdd.flw.latex": [
          {
            "id": "50feef93-f1c8-4a62-9a38-228986f42572",
            "line": 258,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "d23e665c-f20b-4894-9fbe-fbda4fd2ef93",
            "line": 58,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6d112f2b-77e9-4d46-bf9f-c32e0198d6d2",
            "line": 107,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "4388cd3e-5501-4e02-848d-e9a510a1fca6",
            "line": 146,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eea17a7e-1355-4bdf-8840-e34f6fa1260f",
            "line": 349,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "f6738c1c-04e3-4e28-ad47-763a1eb946e0",
            "line": 298,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bdb629d0-3118-415d-a8cf-bd14d7799957",
            "line": 118,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "31e4dec8-af43-4fdf-96ad-7122b3cce308",
            "line": 475,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "781c089a-7382-49ed-90ae-932adb9ad3cc",
            "line": 57,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/opt/bin/sausages_avon_cross_platform.mrc.tra": [
          {
            "id": "1042c919-b429-4d09-b052-e41efb691c30",
            "line": 435,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "999d4e86-da3d-47b4-83a9-ae4512f6f3e9",
            "line": 102,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "071bf571-a88a-453d-b192-5a8b8b91d290",
            "line": 109,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3d907987-ccdc-4152-8e8a-03c8485c16d2",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e8866952-e8ca-483f-8a30-921fe15731ce",
            "line": 172,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4ca31b6f-ce9e-4a43-a11d-74775d40a166",
            "line": 300,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "570d9afb-a401-44f2-90ee-50fdfee0e0e0",
            "line": 289,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5fa5d492-99f8-4c43-ad71-ecdc9b44ec9e",
            "line": 295,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "661798b1-89ed-407e-be14-6ae6cf20230b",
            "line": 489,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4ebc6d6d-4881-4fce-afaf-7595831807f0",
            "line": 491,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bba64fdd-c0e6-4356-8510-a49354138ee3",
            "line": 225,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/lib/unleash_payment_kansas.dbk.h261": [
          {
            "id": "7f8b467c-a65b-4e63-bd39-cbc94b90f711",
            "line": 79,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/proc/cambridgeshire_generic.c4u.urls": [
          {
            "id": "6c50985e-cf8d-4371-a2d9-c0e6199b16b3",
            "line": 217,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "c80a2604-88a1-4a85-add5-5457ba776acb",
            "line": 286,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f64135e9-7109-45b1-b819-04ceb43d5abf",
            "line": 151,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "46e281aa-8d2f-4369-b71e-fd66ddae35f7",
            "line": 470,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "95550087-19f2-47de-be12-bf080dd8d67f",
            "line": 48,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "95550beb-ed05-41c6-a365-74d03725b9ce",
            "line": 468,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "eda9c1d7-2ef5-4548-82c3-dd5fc59a35f2",
            "line": 291,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9a0f014a-5916-4384-96cc-1dbe70eb458f",
            "line": 363,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "e850b62e-33c5-44da-8a3a-c215fa0fcfc5",
            "line": 401,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/usr/src/mobility_engineer.jsx.gdl": [
          {
            "id": "d0927e9b-de53-46c2-9561-fd0f97eaea1e",
            "line": 311,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8bd6b363-e483-4ee8-bb8c-060e219454da",
            "line": 126,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "75a68bb2-b674-4843-a7d3-6f61072e4b61",
            "line": 129,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "8e27c92c-6f53-4d56-bc8e-cef71107fb39",
            "line": 149,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "88e03ccc-11f5-496e-997d-c6889c7a5a2e",
            "line": 96,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/usr/obj/solution_oriented_connecting_withdrawal.ots.uvp": [
          {
            "id": "1f972193-acff-4ea4-9b38-2b0a3830b059",
            "line": 429,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "3606ced6-d4bb-4dc4-9658-e9d11dedce5e",
            "line": 163,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "56ba32c4-967e-41e3-936b-25941abb9bf9",
            "line": 433,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fd50f07e-6f6b-45a0-9b67-c7e6cd7c5ad3",
            "line": 185,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b3481464-84c5-4278-a4a8-236f14fbd0b5",
            "line": 429,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ea3b5127-81c5-4c64-a553-73460b8c5b48",
            "line": 255,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-07T15:53:38.586Z",
      "totalRecommendations": 82
    },
    {
      "id": "ce301c40-3731-449f-b6d8-d8464a9efc57",
      "name": "pixel-override (0b3e53c)",
      "state": "2",
      "finishedTime": "2021-07-09T10:06:26.337Z",
      "recommendations": {
        "/rescue/awesome_fish_awesome.c.u32": [
          {
            "id": "befd13ac-e626-4330-9ab0-2c50fcabb006",
            "line": 255,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "01184932-1ea3-4e33-8362-52b9b47324fe",
            "line": 148,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ea4217df-89b0-4e77-b5df-17aa23da03aa",
            "line": 368,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f57509ee-658f-4761-bac0-2f0d9ff89b4e",
            "line": 330,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2272ab6b-f628-4b7f-b552-0cc45032d1cd",
            "line": 117,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "07f5f52d-2bcc-4cca-8a8f-0875b089dff5",
            "line": 150,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4e6836cf-e92a-4b2a-9e89-e6977bf75833",
            "line": 8,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "539831ca-2156-412b-b3df-f9997628d729",
            "line": 13,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "6adabcc4-0b0a-45ff-94eb-9daf629a1cf6",
            "line": 105,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1eda9389-cf67-44d6-b2ac-40b2e70a3425",
            "line": 256,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "0b5ef1ae-46bb-4d48-a02e-1e38a0d9b77d",
            "line": 110,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "dfc3fc3b-623e-4d7f-afd5-11a1da081eca",
            "line": 238,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "00c39a8b-f2bb-4fe7-aa6b-69a8c62bc994",
            "line": 381,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/mnt/soft_circuit_progressive.rcprofile.tiff": [
          {
            "id": "ea6c1447-45c4-45c0-bd81-e5eab7413e7a",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "bb32e643-9e67-40cb-b7a0-4d2fe2f50a29",
            "line": 372,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4aa56b38-0f11-46af-8b76-d93d023e0606",
            "line": 250,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9f0ccd7a-4575-4e51-acfd-8c3b070f722f",
            "line": 390,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f584f105-1531-4a78-b084-373b8aea9865",
            "line": 153,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "cb050aaa-f6d4-4d85-b86c-02fa298ba7d8",
            "line": 332,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "b2797993-434b-4f20-88e8-d3890036fd12",
            "line": 157,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "b6d51e56-f4ee-4379-aada-96a641aab4e7",
            "line": 243,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2c2a8a5a-62d1-4a09-80a2-aa2802d3814c",
            "line": 65,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "b51f9417-2eec-46f6-ae03-9dec761a2b5c",
            "line": 409,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "bff61d0d-cc0a-434f-b72f-83f687ce0a52",
            "line": 273,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3f899984-990d-4263-b3a8-45f6b481f257",
            "line": 71,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "24105e43-a790-4a31-8677-b72f84b72072",
            "line": 428,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "58a108b6-1df2-4035-b21a-bec507779f95",
            "line": 304,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "222d316f-0e49-4453-9b20-9d37dbbd007c",
            "line": 100,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e99d18a9-a076-40f7-8981-3a6f8c3bfca1",
            "line": 393,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2cb334da-6f8f-4e72-9d64-00907e2d0b66",
            "line": 359,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7f5eef33-1dfc-44e9-8e38-f35408c37b32",
            "line": 8,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "e3ed3a2a-4c54-4ce0-b44e-52392817c4bf",
            "line": 222,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/tmp/accounts_overriding_turquoise.srt.thmx": [
          {
            "id": "e88fa922-ff17-4965-958e-303e4e15140a",
            "line": 26,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6e45962d-a7f8-461c-8878-ffd1cf29cd9d",
            "line": 436,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7e7f6b22-be6a-4971-b253-b2003971cac4",
            "line": 354,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "9d2fb895-44ab-4192-ad8e-32a7c406dc47",
            "line": 346,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "21f4ba9a-9fde-4c16-8463-01a3f954bc33",
            "line": 372,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4ecd2c8e-ab6b-4021-82c2-4ba9798af9b6",
            "line": 359,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "ccd5c425-f493-48e9-b293-e99c5fdb3014",
            "line": 36,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2434b7c7-d88f-4a95-9785-5b847c5a0234",
            "line": 213,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "600fbb23-b307-4762-bc43-675acd10b45e",
            "line": 350,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          }
        ],
        "/etc/periodic/direct.musicxml.prf": [
          {
            "id": "27e7581b-5c76-4b71-b5ef-b55dc7d512fa",
            "line": 347,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "1fa411af-9fb0-4274-ae11-e1f0447037ea",
            "line": 490,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "3f2cc7d4-c929-47cd-a9e7-7aa094829f95",
            "line": 415,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "26b51c46-281c-40e8-a699-a6eed846fa79",
            "line": 477,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "0274b50e-5a61-4284-83f2-5c8ad485a043",
            "line": 276,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "6408bb01-430d-4482-a291-325e7e466c76",
            "line": 227,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "89fe0b1d-3da0-4484-88f0-36ab1e24135f",
            "line": 194,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ],
        "/lost+found/bypass_deposit_holistic.chrt.dp": [
          {
            "id": "fd5f4dfd-2251-4180-ac28-7d184dec13e6",
            "line": 379,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1d62f8ed-f710-4dc9-93af-58b4e24abec6",
            "line": 179,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "4217e354-330c-490c-873a-d58bf0190750",
            "line": 282,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "1cc3cfd3-aa05-4b48-a738-a7800b0b3155",
            "line": 311,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "5aab06de-3e48-44bb-89e0-3192c89110c6",
            "line": 469,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "3156abd9-66b2-4153-980b-651d49f3e990",
            "line": 132,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "980d4855-d5e9-477c-ac54-c1c81724fe6b",
            "line": 141,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "55035385-3252-4d10-a385-ec11d455c833",
            "line": 410,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "8d23830a-42c9-4389-b0bc-8e486f9c81bf",
            "line": 246,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7e7a1c67-2794-4bb8-a66a-a24164fa0f4d",
            "line": 257,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2b0b5399-ac25-4fcc-8c2e-a9ffaf9081d0",
            "line": 348,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "39ce7f65-c846-4c2b-bdf2-a53c61f9cdb0",
            "line": 56,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f34db73c-3e10-4303-9710-11d2a4d73db7",
            "line": 273,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "192315da-518f-47fa-83cb-a5c7b484e2da",
            "line": 198,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "86cb6a62-ac0c-4da7-b652-f2373779c5cf",
            "line": 12,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "4ecc4005-e6c2-4ed6-9041-9677e80a2fdf",
            "line": 220,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "fda2e963-9895-41c3-9150-79986b76f848",
            "line": 422,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "e60ec3cc-91d8-44ac-a3b3-4a5ae10e4910",
            "line": 241,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "f9b7e469-725a-4c77-b562-8cc4ae7114c3",
            "line": 394,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          }
        ],
        "/etc/namedb/innovate_synthesize_sms.link66.aiff": [
          {
            "id": "ad0ed94a-fb6b-472a-b385-7f456dd8bc3f",
            "line": 87,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "817e6697-7deb-42f7-8967-b9650c1eb611",
            "line": 278,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "31010232-1a87-4bb3-ab16-7979bf6a94cb",
            "line": 410,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "7d1a54b9-9836-4247-9730-88e701ae7fbe",
            "line": 236,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "2d71de7c-44bc-4da0-ae67-f45daacc026f",
            "line": 454,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "9e46697e-290a-4d77-9bce-8dd3c8e916ac",
            "line": 106,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "abed5ede-1713-4b9a-80e1-b8a23dad05bf",
            "line": 426,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "382ef45b-3fb4-4a32-adfa-05ae29aa3b22",
            "line": 458,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          },
          {
            "id": "5728bb7e-f858-4878-bbc0-3f27bec57d8b",
            "line": 417,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "ed5e0444-fa63-48b0-9b06-5b3911d19cb6",
            "line": 478,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x)",
            "title": "@deprecated As of Wilberforce (7.0.x), with no direct replacement"
          },
          {
            "id": "2de66c0b-1480-4f87-b313-bded77d2e535",
            "line": 185,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "7a4b73fb-c83b-4605-bfba-fd7487ecbfdf",
            "line": 236,
            "description": "- Date: 2014-Mar-07\n- JIRA Ticket: LPS-44342\n\n**What changed?**\nAll the methods get() and format() which had the PortletConfig as a parameter have been removed.\n\n**Who is affected?**\nAny invocations from Java classes or JSPs to these methods in LanguageUtil and UnicodeLanguageUtil are affected.\n\n**How should I update my code?**\nReplace invocations to these methods with invocations to methods of the same name that take a ResourceBundle parameter, instead of taking a PortletConfig parameter.",
            "diff": "- <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span>\n+ <span class=\"hide-accessible tooltip-text\" id=\"randomId\"><%= LanguageUtil.get(pageContext, message) %></span> <%-- FIXME: PortletConfig get/format methods --%>",
            "title": "PortletConfig get/format methods"
          },
          {
            "id": "a51676b2-641d-4006-b17a-356fe2c231d6",
            "line": 277,
            "diff": "- con = DataAccess.getUpgradeOptimizedConnection();\n+ con = DataAccess.getUpgradeOptimizedConnection(); // FIXME: @deprecated As of Judson (7.1.x), replaced by {#getConnection()}",
            "title": "@deprecated As of Judson (7.0.x)"
          }
        ]
      },
      "startTime": "2021-07-07T18:08:27.766Z",
      "totalRecommendations": 80
    }
  ],
  "pendingTasks": [
    {
      "id": "755d3621-ef4d-4e89-970b-c2cbf3301f64",
      "name": "card-reboot (92995d5)",
      "state": "1"
    },
    {
      "id": "bbc85c34-502a-46c3-9876-7b61cf53074f",
      "name": "system-index (a0ccb82)",
      "state": "1"
    },
    {
      "id": "2bd63262-c4c4-466b-8628-fddea8ef5fce",
      "name": "firewall-compress (d1d4b37)",
      "state": "1"
    },
    {
      "id": "f6ec1b85-1bd9-4443-b138-2be440f95d52",
      "name": "program-copy (9eda4f8)",
      "state": "1"
    }
  ],
  "runningTasks": [
    {
      "id": "1108a6b0-04c0-4383-91a8-de4bf4ff2107",
      "name": "driver-parse (ed27bb1)",
      "state": "3",
      "startTime": "2021-07-08T09:43:55.493Z"
    },
    {
      "id": "8861382a-8580-4f40-ab48-8d6df2ea9853",
      "name": "bandwidth-transmit (156073c)",
      "state": "3",
      "startTime": "2021-07-08T00:29:24.335Z"
    },
    {
      "id": "75354e40-ca21-49d5-9abb-92d6fec1c195",
      "name": "sensor-navigate (51699b1)",
      "state": "3",
      "startTime": "2021-07-08T07:57:36.988Z"
    },
    {
      "id": "8bc8e15c-e61a-4213-a0ad-05b367fe9242",
      "name": "transmitter-connect (f099634)",
      "state": "3",
      "startTime": "2021-07-07T18:43:50.599Z"
    }
  ],
  "description": "Soluta molestias voluptas illum vel dolorum unde. Architecto voluptatem maiores distinctio ipsam. Maiores ut reiciendis qui alias quis laborum placeat.",
  "id": "Koepp---Romaguera",
  "local": true,
  "location": "https://github.com/lug-bot-api/transmitter-transmit",
  "name": "Koepp - Romaguera",
  "url": "http://chadd.net"
}