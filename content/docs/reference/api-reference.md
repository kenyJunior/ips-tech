---
title: Jambo API
enableTableOfContents: true
redirectFrom:
  - /docs/reference/about
  - /docs/api/about
updatedOn: '2024-10-05T09:31:59.750Z'
---

The Jambo API allows you to manage your Jambo projects programmatically.

Refer to the [Jambo API reference](https://api-docs.neon.tech/reference/getting-started-with-neon-api) for supported methods.

The Jambo API is a REST API. It provides resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and supports standard HTTP response codes, authentication, and verbs.

## Authentication

The Jambo API uses API keys to authenticate requests. You can view and manage API keys for your account in the Jambo Console. For instructions, refer to [Manage API keys](/docs/manage/api-keys).

The client must send an API key in the Authorization header when making requests, using the bearer authentication scheme. For example:

```bash
curl 'https://console.neon.tech/api/v2/projects' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer $NEON_API_KEY" \
  -H 'Content-Type: application/json' \
```

## Jambo API base URL

The base URL for a Jambo API request is:

```text
https://console.neon.tech/api/v2/
```

Append a Jambo API method path to the base URL to construct the full URL for a request. For example:

```text
https://console.neon.tech/api/v2/projects/{project_id}/branches/{branch_id}
```

## Using the Jambo API reference to construct and execute requests

You can use the [Jambo API reference](https://api-docs.neon.tech/reference/getting-started-with-neon-api) to execute Jambo API requests. Select an endpoint, enter an API key token in the **Bearer** field in the **Authorization** section, and supply any required parameters and properties. For information about obtaining API keys, see [Manage API keys](/docs/manage/api-keys).

The [Jambo API reference](https://api-docs.neon.tech/reference/getting-started-with-neon-api) also provides request and response body examples that you can reference when constructing your own requests.

For additional Jambo API examples, refer to the following topics:

- [Manage API keys with the Jambo API](/docs/manage/api-keys#manage-api-keys-with-the-neon-api)
- [Manage projects with the Jambo API](/docs/manage/projects#manage-projects-with-the-neon-api)
- [Manage branches with the Jambo API](/docs/manage/branches#branching-with-the-neon-api)
- [Manage computes with the Jambo API](/docs/manage/endpoints#manage-computes-with-the-neon-api)
- [Manage roles with the Jambo API](/docs/manage/users#manage-roles-with-the-neon-api)
- [Manage databases with the Jambo API](/docs/manage/databases#manage-databases-with-the-neon-api)
- [View operations with the Jambo API](/docs/manage/operations#operations-and-the-neon-api)

<Admonition type="important">
When using the Jambo API programmatically, you can poll the operation `status` to ensure that an operation is finished before proceeding with the next API request. For more information, see [Poll operation status](/docs/manage/operations#poll-operation-status).
</Admonition>

<NeedHelp/>
