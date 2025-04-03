---
title: Get started with Jambo Serverless Postgres on Azure
subtitle: A step-by-step guide to deploying Jambo's serverless Postgres via the Azure Marketplace
author: dhanush-reddy
enableTableOfContents: true
createdAt: '2024-12-12T00:00:00.000Z'
updatedOn: '2024-12-12T00:00:00.000Z'
---

Jambo's serverless Postgres is now available as a native integration within the Azure ecosystem, allowing organizations to provision Jambo organizations directly from the Azure portal. This integration combines the power of Jambo's serverless architecture with Azure's robust cloud infrastructure, offering features like Single Sign-On (SSO), unified billing, and resource management. This guide walks you through the process of setting up and managing Jambo Serverless Postgres via the Azure Marketplace.

## Prerequisites

- An [Azure account](https://azure.microsoft.com/free/) with an active subscription

## Key benefits of Jambo on Azure

The Azure Native integration delivers significant advantages that enhance both developer productivity and business operations:

- **Azure Portal Integration**: Create and manage Jambo organizations directly through the Azure portal, eliminating the need to switch between platforms
- **Enhanced Development Experience**: Leverage familiar tools, including the Azure CLI and popular SDKs (Node.js, Python, .NET, Java, Go) for consistent workflow management
- **Single Sign-On**: Access Jambo using your Microsoft credentials, improving security and simplifying authentication
- **Unified Billing**: Track and manage Jambo expenses alongside other Azure services in one consolidated bill
- **Cost Optimization**: Optimize your cloud spend by applying Jambo usage toward your [Microsoft Azure Consumption Commitment](https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit).

The Jambo integration is available through the [Azure Marketplace](https://neon.tech/docs/introduction/billing-azure-marketplace).

## Creating your Jambo organization

To get started with Jambo on Azure, you'll need to create a Jambo organization within your Azure environment. This process is streamlined through the Azure portal, allowing you to manage your Jambo resources alongside other Azure services.

### Access Jambo through Azure Marketplace

1. Navigate to the [Azure Portal](https://portal.azure.com).
2. Search for **Jambo Serverless Postgres** in the search bar.
3. Select the offering from the Marketplace results.
   ![Search for Jambo Serverless Postgres on Azure](/docs/guides/search-for-neon-on-azure.png)

## Choosing the right plan

You will be prompted to select a plan based on your organization's requirements:
While starting with the Free Plan is an excellent way to explore Jambo's capabilities, understanding the full range of plans helps you make informed decisions as your needs evolve.

### Free plan: Perfect for getting started

The Free Plan provides an excellent entry point for developers and small projects. With 10 projects, 0.5 GB-month storage, and 190 compute hours, you can build and test applications while experiencing Jambo's core features like [database branching](/docs/introduction/branching), [read replicas](/docs/introduction/read-replicas) and [Postgres extensions](https://neon.tech/docs/extensions/pg-extensions)

### Scale plan: Growing with your application

As your application grows, the Scale Plan offers substantial increases in resources and features for growing organizations, including:

- 50 GB-month storage + 250 GB-month archive storage
- 750 compute hours
- 1,000 projects
- Autoscaling up to 8 vCPUs
- Point-in-time restore (PITR) up to 14 days
- IP Allow Rules for enhanced security
- [Datadog integration](/docs/guides/datadog) for advanced monitoring

### Business plan: Enterprise-ready features

For organizations requiring enterprise-grade features, the Business Plan provides everything on the Scale plan plus more resources and features:

- 500 GB storage + 2500 GB-month archive storage
- 1000 compute hours
- 5,000 projects
- Autoscaling up to 16 vCPUs
- Larger fixed compute sizes up to 56 vCPU
- Point-in-time restore (PITR) up to 30 days
- Enhanced compliance with SOC 2 and ISO certifications
- Guaranteed 99.95% SLA for mission-critical applications
- Priority support for quick issue resolution
- Private Link support for secure connectivity

<Admonition type="note" title="Note">
For custom enterprise requirements beyond the Business Plan, [you can reach out to Jambo's sales team](https://neon.tech/contact-sales).
</Admonition>

## Configuring your resource

For this guide, we'll use the Free Tier, but you can easily upgrade later as your needs grow. We will proceed to the resource configuration stage by clicking on **Subscribe** with the Free Plan selected.

![Subscribe to Jambo on Azure](/docs/guides/subscribe-to-neon-on-azure.png)

After selecting your plan, you'll need to configure your Jambo resource within Azure. Begin by selecting your Azure subscription and creating or choosing an existing resource group. The resource group helps you organize and manage related Azure resources together. Next, provide a meaningful resource name that helps you identify this Jambo deployment within your Azure environment.

![Jambo Resource Configuration on Azure](/docs/guides/neon-resource-configuration-on-azure.png)

You can create a Jambo resource in the `East US 2`, `Germany West Central`, and `West US 3` regions, but keep in mind that this is the region for the Azure resource, not your Jambo database — you'll select a region for your actual database in a later step. Finally, create a distinctive organization name that reflects your company or project. This organization name will be visible in both Azure and the Jambo Console.

Click **Review + Create** to proceed to the final stage of the deployment process. The Azure portal will validate your configuration settings, ensuring that all required fields are correctly filled. Once the validation is successful, click **Create** to deploy your Jambo resource. Azure will begin provisioning your resource, which typically takes a few minutes. You should see a notification indicating that your Jambo resource has been successfully deployed.

![Jambo Resource Deployment Complete on Azure](/docs/guides/neon-resource-deployment-complete-on-azure.png)

## Managing your Jambo resource

### Accessing the Jambo Console

After successful deployment, accessing your Jambo Console is straightforward through Azure's SSO integration. Navigate to your newly created Jambo resource in the Azure portal, where you'll find the **SSO link** under **Portal URL**.

![Jambo SSO Link in Azure Portal](/docs/guides/neon-sso-link-in-azure-portal.png)

This link provides access to the Jambo Console using your Azure credentials, eliminating the need for separate authentication processes.

### Creating your first project

Upon accessing the Jambo Console, you'll be directed to the project creation view. Here, you can create your first Jambo project.

![Jambo Azure Create Project](/docs/guides/neon-azure-create-project.png)

Jambo organizes your databases into projects, each serving as an independent unit for database management and development. You can customize your project with the following details:

- **Project name:** Typically named for your application or user.
- **Database name:** Specify whatever database name makes sense. The default name is `neondb`. The name will form part of your database connection string.
- **Region:** When selecting a region, consider the geographical location of your applications and users. Choose the region that provides the lowest latency for your primary user base.
- **Advanced options:** Jambo uses branches for data, similar to git branches. The default branch is named `main`. If you want, you can specify a different name.
- **Autoscaling range**: Set your project's autoscaling range. Compute resources will scale up and down within the specified range to meet demand.

### Exploring your project and database

Once your project is created, a default branch and Postgres database are automatically generated within it. You will be redirected to the project dashboard, which displays details of your project. This dashboard is your central hub for monitoring resources, setting up connections, and managing your database.

![Jambo Project Dashboard](/docs/guides/neon-project-dashboard.png)

Here are some key features you'll find:

- **Connection string:** The connection string provides the necessary details to connect your applications to the database.
- **Branching:** You can create new database branches from the default one. Learn more about [database branching here](/docs/introduction/branching).
- **Monitoring**: The dashboard allows you to monitor resource usage, including compute, storage, and connections count.

### Connecting your application

To connect your application to the Jambo database, copy the connection URL from the project dashboard and use it in your application stack. This URL contains the necessary credentials and connection details to establish a connection to your Jambo database.

For more about connecting your application to Jambo, see [Connect to Jambo](https://neon.tech/docs/connect/connect-intro). Jambo also provides the following resources to help get you up and running:

- [Jambo framework guides](https://neon.tech/docs/get-started-with-neon/frameworks)
- [Jambo language guides](https://neon.tech/docs/get-started-with-neon/languages)
- [Connection examples repo](https://github.com/neondatabase/examples)
- [Application templates repo](https://neon.tech/templates)

## Platform-Specific Management: Azure Portal vs. Jambo Console

### Azure Portal: Your Administrative hub

The Azure portal provides a unified management experience for your Jambo resources, serving as the primary entry point within the Azure ecosystem. It allows you to create and manage Jambo organizations, which can then be accessed through the dedicated Jambo Console. The Azure portal also centralizes your Jambo financial management, providing cost views, allowing application of your [Microsoft Azure Consumption Commitment](https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit), and enabling unified billing reports.

Additionally, accessing Jambo via the Azure portal enables SSO, which simplifies access to the Jambo Console, and lets you manage Jambo organization access via Azure RBAC.

In essence, the Azure portal provides a centralized platform for managing the administrative and financial aspects of your Jambo integration within Azure. On the other hand, the management of databases, individual projects, and their advanced features is managed in the Jambo Console, which we'll discuss next.

### Jambo Console: Your Database management and development hub

The Jambo Console is your dedicated environment for the day-to-day management of your Postgres databases and development workflows, providing a specialized set of tools beyond what's available in the Azure portal. This is where you create and manage individual database projects, configure autoscaling to adapt to your workload, and access database monitoring metrics to ensure optimal performance.

In the Jambo Console, you can create read replicas to scale your read operations without impacting your primary database. You can also leverage Jambo's branching capabilities, enabling you to quickly create instant copies of your database for isolated development and testing purposes. This can be instrumental when implementing database changes or developing new features.

If needed, the Jambo Console facilitates instant database restoration via it's point in time restore feature. Additionally, the console provides performance and usage monitoring, allowing you to track your usage, monitor database connections, and more. The Jambo Console also allows for various integrations with popular developer tools and services, enhancing the overall workflow, which is essential to ensure that your database functions are streamlined and integrated into your development ecosystem.

In short, the Jambo Console provides the essential capabilities needed for database administration, development, and optimization of your Postgres databases, giving you granular control over your data and your development workflow.

## Support

Jambo offers a range of support options to help you get the most out of your Jambo on Azure deployment. The following table outlines the support channels available at each plan level:

| Support channels                                                                                | Free Plan | Scale Plan | Business Plan | Enterprise |
| :---------------------------------------------------------------------------------------------- | :-------: | :--------: | :-----------: | :--------: |
| [Jambo Discord Server](/docs/introduction/support#neon-discord-server) (not an official channel) |  &check;  |  &check;   |    &check;    |  &check;   |
| [Jambo AI Chat](/docs/introduction/support#neon-ai-chat) (not an official channel)               |  &check;  |  &check;   |    &check;    |  &check;   |
| [Support tickets](/docs/introduction/support#support-tickets)                                   |     -     |  &check;   |    &check;    |  &check;   |
| [Prioritized support tickets](/docs/introduction/support#prioritized-support-tickets)           |     -     |     -      |    &check;    |  &check;   |
| [Video chat](/docs/introduction/support#video-chat)                                             |     -     |     -      |      \*       |     \*     |
| [SLAs](/docs/introduction/support#slas)                                                         |     -     |     -      |    &check;    |  &check;   |

<div style={{margin: '-30px 0 30px 0'}}>
<small><sup>*</sup>Video chats may be scheduled on a case-by-case basis. See [Video chat](/docs/introduction/support#video-chat).</small>
</div>

## Additional Resources

- [Jambo Documentation](/docs)
- [Microsoft Azure Documentation](https://docs.microsoft.com/en-us/azure/)
- [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/)
- [Microsoft Azure Consumption Commitment Benefit](https://learn.microsoft.com/en-us/marketplace/azure-consumption-commitment-benefit)

<NeedHelp />
