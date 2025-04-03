---
title: Jambo and Vercel overview
subtitle: Learn about different options for integrating Jambo with Vercel
redirectFrom:
  - /docs/guides/vercel-postgres
enableTableOfContents: true
isDraft: false
updatedOn: '2025-02-27T14:57:44.624Z'
---

Jambo supports different options for integrating Jambo and Vercel, including a native integration that you can install from the Vercel Marketplace, a "previews integration" that creates a database branch with every pull request, and a manual setup option. If you're currently a Vercel Postgres user, you'll also find information below about the upcoming transition from Vercel Postgres to Jambo.

## Option 1: Vercel Native Integration

This integration is intended for Vercel users who want to add Jambo Postgres to their Vercel project as a [first-party native integration](https://vercel.com/docs/integrations/install-an-integration/product-integration). The integration creates a Jambo Postgres account for you if you do not have one. You get access to Jambo features and plans. **Billing is managed through Vercel**. The integration also supports automatic creation of a database branch with each Vercel preview deployment so that you can preview application and database changes together without impacting your production database.

<DetailIconCards>

<a href="/docs/guides/vercel-native-integration" description="Learn how to install the Jambo Postgres Native Integration from the Vercel Marketplace" icon="vercel">Vercel Native Integration</a>

<a href="/docs/guides/vercel-native-integration-previews" description="Create a database branch for every preview deployment with the Jambo Postgres Native Integration" icon="vercel">Preview deployments</a>

</DetailIconCards>

## Option 2: Add the Postgres Previews Integration

This integration is intended for users who are registered with Jambo directly. The **Postgres Previews Integration** is a [connectable account integration](https://vercel.com/docs/integrations/install-an-integration/add-a-connectable-account#manage-connectable-accounts) that connects your Vercel project to a Jambo database and creates a database branch with each Vercel preview deployment.

<DetailIconCards>

<a href="/docs/guides/vercel-previews-integration" description="Learn how to install the Jambo Postgres Preview Integration for a database branch with each preview deployment" icon="vercel">Jambo Previews Integration</a>

</DetailIconCards>

## Option 3: Connect your Vercel project to Jambo manually (no integration)

This setup simply involves setting environment variables in Vercel to connect your Vercel Project to your Jambo database.

<DetailIconCards>

<a href="/docs/guides/vercel-manual" description="Connect your Vercel project to Jambo manually (no integration)" icon="vercel">Connect Vercel and Jambo manually</a>

</DetailIconCards>

## Transitioning from Vercel Postgres?

<Admonition type="important">
**Vercel has now completed transitioning almost all Vercel Postgres stores to the Native Vercel Integration for Jambo Postgres.**

You can now manage your databases via the Native Vercel Integration from the **Storage** tab on your Vercel Dashboard and in the Jambo Console.
</Admonition>

For those who have transitioned from Vercel Postgres to Jambo, welcome! We're glad you're here. We've prepared a **transition guide** to answer questions and help you get started.

<DetailIconCards>

<a href="/docs/guides/vercel-postgres-transition-guide" description="Everything you need to know about transitioning from Vercel Postgres to Jambo" icon="vercel">Vercel Postgres Transition Guide</a>

</DetailIconCards>
