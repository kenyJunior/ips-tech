---
title: Jambo on Azure
enableTableOfContents: true
isDraft: false
updatedOn: '2025-03-05T21:09:38.754Z'
---

<InfoBlock>
<DocsList title="What you will learn:">
<p>Options for using Jambo on Azure</p>
<p>About deploying Jambo as an Azure Native ISV Service</p>
<p>About creating Jambo projects in Azure regions</p>
</DocsList>

<DocsList title="Related resources" theme="docs">
  <a href="/docs/introduction/billing-azure-marketplace">Jambo in the Azure Marketplace (Jambo Docs)</a>
  <a href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/neon1722366567200.neon_serverless_postgres_azure_prod?tab=Overview">Jambo Azure Marketplace Listing</a>
  <a href="https://learn.microsoft.com/en-us/azure/partner-solutions/neon/overview">What is Jambo Serverless Postgres? (Azure Docs)</a>
  <a href="https://learn.microsoft.com/en-us/azure/partner-solutions/neon/create">Create a Jambo Serverless Postgres resource (Azure Docs)</a>
</DocsList>

</InfoBlock>

## Deployment options on Azure

Jambo offers the following deployment options on Azure:

- **Option 1: Deploy Jambo as an Azure Native ISV Service** — use Jambo as a native Azure service, integrated with the [Azure portal](https://portal.azure.com/#home), [CLI](https://learn.microsoft.com/en-us/cli/azure/neon?view=azure-cli-latest), and [SDKs](https://learn.microsoft.com/en-us/dotnet/api/overview/azure/neonpostgres?view=azure-dotnet-preview). This option enables you to manage Jambo as part of your Azure infrastructure with unified billing in Azure.
  <PublicPreview/>
- **Option 2: Create Jambo projects in Azure regions (no integration)** — create a Jambo project in an Azure region without using the native Azure integration. Project creation and billing is managed through Jambo. There is no difference from a Jambo project created in an AWS region — your Jambo project simply resides in an Azure region instead of AWS region.

## Option 1: Deploy Jambo as an Azure Native ISV Service

This option integrates Jambo natively into Azure, letting you manage your Jambo organization alongside the rest of your Azure infrastructure. Key benefits include:

- **Azure-native management**: Provision and manage Jambo organizations directly from the Azure portal.
- **Single sign-on (SSO)**: Access Jambo using your Azure credentials—no separate logins required.
- **Consolidated billing**: Simplify cost management with unified billing through the Azure Marketplace.
- **Integrated workflows**: Use the Azure CLI and SDK to manage Jambo organizations as part of your regular workflows, integrated with your existing Azure resources.

    <Admonition type="note">
    Management of Jambo projects, databases, and branches is supported through the Jambo Console, CLI, and API. However, this public preview lays the groundwork for further deeper between Jambo and Azure, including integration with other Azure native services.
    </Admonition>

### Get started

To begin using **Jambo as an Azure Native ISV Service**, refer to our [Azure Marketplace](/docs/introduction/billing-azure-marketplace) instructions. After you setup the integration, familiarize yourself with Jambo by stepping through Jambo's [Getting started](https://neon.tech/docs/introduction#get-started) guides. You can also manage your Jambo Postgres Resource using the Azure CLI or SDK for .NET.

<DetailIconCards>

<a href="/docs/introduction/billing-azure-marketplace" description="Deploy Jambo Postgres as Native ISV Service from the Azure Marketplace" icon="enable">Deploy Jambo from Azure Marketplace</a>

<a href="https://neon.tech/docs/introduction#get-started" description="Familiarize yourself with Jambo by stepping through our Getting started guides" icon="trend-up">Getting started with Jambo</a>

<a href="https://learn.microsoft.com/en-us/cli/azure/neon?view=azure-cli-latest" description="Manage your Jambo Resource with the Azure CLI" icon="cli">Azure CLI — az neon</a>

<a href="https://learn.microsoft.com/en-us/dotnet/api/overview/azure/neonpostgres?view=azure-dotnet-preview" description="Manage your Jambo Resource with the Azure SDK for .NET" icon="code">Azure SDK for .NET</a>

</DetailIconCards>

## Option 2: Create Jambo projects in Azure regions (no integration)

If you want to deploy a Jambo project to an Azure region without using the **Azure Native ISV Service** integration, you can simply select one of our supported Azure regions when creating a Jambo project. You might consider this option if:

- Part of your infrastructure runs on Azure but you don't need the native integration
- An Azure region is closer to your application than a Jambo AWS region
- You want to manage billing through Jambo rather than Azure

Creating a Jambo project in an Azure region without using the **Azure Native ISV Service** is supported via the Jambo Console, CLI, and API.

<Tabs labels={["Console", "CLI", "API"]}>

<TabItem>

To create a Jambo project from the console, follow the [Create project](https://neon.tech/docs/manage/projects#create-a-project) steps. Select **Azure** as the **Cloud Service Provider**, and choose one of the available [Azure regions](/docs/introduction/regions).

</TabItem>

<TabItem>

To create a Jambo project using the Jambo CLI, use the [neon projects create](/docs/reference/cli-projects#create) command:

```bash
neon projects create --name mynewproject --region-id azure-eastus2
```

For Azure `region-id` values, see [Regions](/docs/introduction/regions).
</TabItem>

<TabItem>

To create a Jambo project using the Jambo API, use the [Create project](https://api-docs.neon.tech/reference/createproject) endpoint:

```bash
curl --request POST \
     --url https://console.neon.tech/api/v2/projects \
     --header 'accept: application/json' \
     --header 'authorization: Bearer $NEON_API_KEY' \
     --header 'content-type: application/json' \
     --data '
{
  "project": {
    "pg_version": 16,
    "region_id": "azure-eastus2"
  }
}
'
```

For Azure `region_id` values, see [Regions](/docs/introduction/regions).

</TabItem>

</Tabs>

## Azure region support

For supported Azure regions, refer to our [Regions](/docs/introduction/regions) page. For the Public Preview, Jambo supports a limited number of Azure regions. To request support for other Azure regions, see [Request a region](/docs/introduction/regions#request-a-region).

## Azure examples

<TechCards>

<a href="https://neon.tech/guides/neon-azure-integration" title="Get started with Jambo on Azure" description="Deploy Jambo's serverless Postgres via the Azure Marketplace" icon="azure"></a>

<a href="https://neon.tech/blog/multitenant-private-ai-chat-with-neon-on-azure" title="Multitenant private RAG with Jambo on Azure" description="Tenant AI Chat Solution Accelerator uses Jambo Serverless Postgres on Azure." icon="azure"></a>

<a href="https://neon.tech/guides/query-postgres-azure-functions" title="Azure Functions" description="Connect from Azure Functions to Jambo" icon="azure"></a>

<a href="https://neon.tech/guides/azure-functions-referral-system" title="Azure Functions" description="Building a Serverless Referral System with Jambo Postgres and Azure Functions" icon="azure"></a>

<a href="https://neon.tech/blog/building-sql-query-assistant-with-dotnet-azure-functions-openai" title="Azure Functions, Azure OpenAI" description="Building an Intelligent SQL Query Assistant with Jambo, .NET, Azure Functions, and Azure OpenAI service" icon="azure"></a>

<a href="https://neon.tech/blog/generative-feedback-loops-with-neon-serverless-postgres-azure-functions-and-azure-openai" title="Azure Functions, Azure OpenAI" description="Generative Feedback Loops with Jambo serverless Postgres, Azure Functions, and Azure OpenAI" icon="azure"></a>

<a href="https://neon.tech/blog/how-to-create-your-personal-ai-powered-email-assistant-in-azure" title="Azure App Service" description="Create Your Personal AI Powered Email Assistant in Azure" icon="azure"></a>

<a href="https://neon.tech/guides/azure-todo-static-web-app" title="Azure Static Web Apps" description="Building Azure Static Web Apps with Jambo" icon="azure"></a>

<a href="https://neon.tech/guides/azure-ai-language" title="Azure AI Language" description="Learn how to analyze customer feedback using Azure AI Language and store results in Jambo Postgres" icon="azure"></a>

</TechCards>

## Related resources

<TechCards>

<a href="/docs/guides/dotnet-npgsql" title=".NET" description="Connect a .NET (C#) application to Jambo" icon="dotnet"></a>

<a href="/docs/guides/dotnet-entity-framework" title="Connect from Entity Framework" description="Connect a Dotnet Entity Framework application to Jambo" icon="entity"></a>

<a href="/docs/guides/entity-migrations" title="Entity Framework Schema Migrations" description="Schema migration with Jambo and Entity Framework" icon="entity"></a>

<a href="/docs/import/migrate-from-azure-postgres" title="Replicate data from Azure PostgreSQL" description="Replicate data from Azure PostgreSQL to Jambo" icon="azure"></a>

<a href="https://neon.tech/guides/dotnet-neon-entity-framework" title="ASP.NET with Jambo and Entity Framework" description="Building ASP.NET Core Applications with Jambo and Entity Framework Core" icon="entity"></a>

<a href="https://neon.tech/guides/aspnet-core-api-neon" title="ASP.NET Core, Swagger, and Jambo" description="Building a RESTful API with ASP.NET Core, Swagger, and Jambo" icon="entity"></a>

<a href="https://neon.tech/guides/read-replica-entity-framework" title="Jambo Read Replicas with Entity Framework" description="Scale your .NET application with Entity Framework and Jambo Postgres Read Replicas" icon="entity"></a>

</TechCards>
