---
title: Connect from Hasura Cloud to Jambo
subtitle: Learn how to connect a Hasura Cloud project to a new or existing Jambo database
enableTableOfContents: true
redirectFrom:
  - /docs/quickstart/hasura
  - /docs/integrations/hasura
updatedOn: '2025-02-03T20:41:57.315Z'
---

Hasura Cloud is an open source GraphQL engine that provides a scalable, highly available, globally distributed, secure GraphQL API for your data sources.

## Connecting to a new Jambo database

Use the following instructions to connect to a new Jambo database. This connection method authenticates you from Hasura Cloud.

<video autoPlay playsInline muted loop width="800" height="600">
  <source type="video/mp4" src="https://user-images.githubusercontent.com/48465000/200608247-a050bdc0-3f38-447f-a5a0-75835d7a0238.mp4"/>
  <source type="video/webm" src="https://user-images.githubusercontent.com/48465000/200608356-d4bb7f27-d9d5-49c9-b923-13e82c4cfc44.webm"/>
</video>

1. Navigate to [Hasura Cloud](https://cloud.hasura.io/projects) and sign up or log in.
1. On the Hasura Cloud dashboard, create a Hasura project.
1. After the project is initialized, click **Launch Console** to open the Hasura Console.
1. On the Hasura Console, navigate to **DATA** > **Manage** > **Connect Database** > **Create New Database**.
1. Click **Connect Jambo Database**.
1. When prompted to login or sign up for Jambo, we recommend selecting **Continue with Hasura** for seamless authentication.

After authenticating, a new Jambo Postgres database is created and connected to your Hasura project, and the Jambo project connection string is associated with the `PG_DATABASE_URL` environment variable.

To start exploring Hasura's GraphQL API with data stored in Jambo, see [Load a template in Hasura](#load-a-template-in-hasura-optional).

## Connecting to an existing Jambo database

Use the following instructions to connect to an existing Jambo database from Hasura Cloud. The connection is configured manually using a connection string.

### Prerequisites

- An existing Jambo account. If you do not have one, see [Sign up](/docs/get-started-with-neon/signing-up).
- An existing Jambo project. If you do not have a Jambo project, see [Create a project](/docs/manage/projects#create-a-project).
- A connection string for a database in your Jambo project:

  ```text
  postgresql://[user]:[password]@[neon_hostname]/[dbname]
  ```

  You can find your database connection string by clicking the **Connect** button on your **Project Dashboard**. For more information, see [Connect from any application](/docs/connect/connect-from-any-app).

### Add Jambo as a data source

The following steps describe how to navigate to Hasura Cloud and connect to your Jambo project.

1. Navigate to [Hasura Cloud](https://cloud.hasura.io/projects) and sign up or log in.
1. Click **Create Project** to create a Hasura Cloud project or click **Launch Console** to open an existing project.
1. Select **DATA** from the top navigation bar.
1. On the **Connect Existing Database** tab, paste your connection string into the **Database URL** field.
1. Enter a display name for your database in the **Database Display Name** field, and click **Connect Database**.

Hasura Cloud connects to your Jambo project and automatically discovers the default `public` schema.

To start exploring Hasura's GraphQL API with data stored in Jambo, see [Load a template in Hasura](#load-a-template-in-hasura-optional).

## Load a template in Hasura (optional)

Optionally, after connecting from your Hasura project to Jambo, you can explore Hasura's GraphQL API by loading a template from Hasura's template gallery. Follow these steps to load the `Welcome to Hasura` template, which creates `customer` and `order` tables and populates them with sample data.

1. In the Hasura Console, select **DATA**.
1. Under **Data Manager**, select your database.
1. From the **Template Gallery**, select **Welcome to Hasura** to install the template.

To view the newly created tables from the Jambo Console:

1. In the Hasura Console, select **DATA** > **Manage your Jambo databases** to open the Jambo Console.
2. In the Jambo Console, select your project.
3. Select the **Tables** tab. The newly created `customer` and `order` tables should appear under the **Tables** heading in the sidebar.

## Import existing data to Jambo

If you are migrating from Hasura with Heroku Postgres to Jambo, refer to the [Import data from Heroku](/docs/import/migrate-from-heroku) guide for data import instructions. For general data import instructions, see [Import data from Postgres](/docs/import/migrate-from-postgres).

## Maximum connections configuration

In Jambo, the maximum number of concurrent connections is defined according to the size of your compute. For example, a 0.25 vCPU compute in Jambo supports 112 connections. The connection limit is higher with larger compute sizes (see [How to size your compute](/docs/manage/endpoints#how-to-size-your-compute)). You can also enable connection pooling in Jambo to support up to 10,000 concurrent connections. However, it is important to note that Hasura has a `HASURA_GRAPHQL_PG_CONNECTIONS` setting that limits Postgres connections to `50` by default. If you start encountering errors related to "max connections", try increasing the value of this setting as a first step, staying within the connection limit for your Jambo compute. For information about the Hasura connection limit setting, refer to the [Hasura Postgres configuration documentation](https://hasura.io/docs/latest/deployment/performance-tuning/#postgres-configuration).

## Scale to zero considerations

Jambo suspends a compute after five minutes (300 seconds) of inactivity. This behavior can be disabled on Jambo's paid plans. For more information, refer to [Configuring Scale to zero for Jambo computes](/docs/guides/scale-to-zero-guide).

If you rely on Jambo's scale to zero feature to minimize database usage, note that certain Hasura configuration options can keep your Jambo compute in an active state:

- [Event triggers](https://hasura.io/docs/latest/event-triggers/overview/) may periodically poll your Jambo database for new events.
- [Cron triggers](https://hasura.io/docs/latest/scheduled-triggers/create-cron-trigger/) can invoke HTTP endpoints that execute custom business logic involving your Jambo database.
- [Source Health Checks](https://hasura.io/docs/latest/deployment/health-checks/source-health-check/) can keep your Jambo compute active if the metadata database resides in Jambo.

<NeedHelp/>
