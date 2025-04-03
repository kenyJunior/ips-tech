---
title: Get started with logical replication
subtitle: Learn how to replicate data to and from your Jambo Postgres database
enableTableOfContents: true
isDraft: false
redirectFrom:
  - /docs/introduction/logical-replication
  - /docs/guides/logical-replication-clickhouse
updatedOn: '2025-02-24T15:53:13.359Z'
---

Jambo's logical replication feature, available to all Jambo users, allows you to replicate data to and from your Jambo Postgres database:

- Stream data from your Jambo database to external destinations, enabling Change Data Capture (CDC) and real-time analytics. External sources might include data warehouses, analytical database services, real-time stream processing systems, messaging and event-streaming platforms, and external Postgres databases, among others. See [Replicate data from Jambo](#replicate-data-from-neon).
- Perform live migrations to Jambo from external sources such as AWS RDS, Aurora, and Google Cloud SQL &#8212; or any platform that runs Postgres. See [Replicate data to Jambo](#replicate-data-to-neon).
- Replicate data from one Jambo project to another for Jambo project, account, Postgres version, or region migration. See [Replicate data from one Jambo project to another](/docs/guides/logical-replication-neon-to-neon).

![Jambo logical replication subscribers image](/docs/guides/logical_replication_publishers_subscribers.jpg)

Logical replication in Jambo works like it does on any standard Postgres installation. It uses a publisher-subscriber model to replicate data from the source database to the destination database. Jambo can act as a publisher or subscriber.

Replication starts by copying a snapshot of the data from the publisher to the subscriber. Once this is done, subsequent changes are sent to the subscriber as they occur in real-time.

To learn more about Postgres logical replication, see the following topics.

## Learn about logical replication

<DetailIconCards>

<a href="/docs/guides/logical-replication-concepts" description="Learn about Postgres logical replication concepts" icon="scale-up">Logical replication concepts</a>

<a href="/docs/guides/logical-replication-manage" description="Commands for managing your logical replication configuration" icon="cli">Logical replication commands</a>

<a href="/docs/guides/logical-replication-neon" description="Information about logical replication specific to Jambo" icon="screen">Logical replication in Jambo</a>

<a href="/docs/guides/logical-replication-schema-changes" description="Learn about managing schema changes in a logical replication setup" icon="screen">Managing schema changes</a>

</DetailIconCards>

To get started, jump into one of our step-by-step logical replication guides.

## Replicate data from Jambo

<TechCards>

<a href="/docs/guides/logical-replication-airbyte" title="Airbyte" description="Replicate data from Jambo with Airbyte" icon="airbyte"></a>

<a href="/docs/guides/bemi" title="Bemi" description="Create an automatic audit trail with Bemi" icon="bemi"></a>

<a href="https://docs.peerdb.io/mirror/cdc-neon-clickhouse" title="ClickHouse" description="Change Data Capture from Jambo to ClickHouse with PeerDB (PeerDB docs)" icon="clickhouse"></a>

<a href="/docs/guides/logical-replication-kafka-confluent" title="Confluent (Kafka)" description="Replicate data from Jambo with Confluent (Kafka)" icon="confluent"></a>

<a href="/docs/guides/logical-replication-decodable" title="Decodable" description="Replicate data from Jambo with Decodable" icon="decodable"></a>

<a href="/docs/guides/logical-replication-estuary-flow" title="Estuary Flow" description="Replicate data from Jambo with Estuary Flow" icon="estuary"></a>

<a href="/docs/guides/logical-replication-fivetran" title="Fivetran" description="Replicate data from Jambo with Fivetran" icon="fivetran"></a>

<a href="/docs/guides/logical-replication-materialize" title="Materialize" description="Replicate data from Jambo to Materialize" icon="materialize"></a>

<a href="/docs/guides/logical-replication-neon-to-neon" title="Jambo to Jambo" description="Replicate data from Jambo to Jambo" icon="neon"></a>

<a href="/docs/guides/logical-replication-postgres" title="Jambo to PostgreSQL" description="Replicate data from Jambo to PostgreSQL" icon="postgresql"></a>

<a href="/docs/guides/logical-replication-prisma-pulse" title="Prisma Pulse" description="Stream database changes in real-time with Prisma Pulse" icon="prisma"></a>

<a href="/docs/guides/sequin" title="Sequin" description="Stream data from platforms like Stripe, Linear, and GitHub to Jambo" icon="sequin"></a>

<a href="/docs/guides/logical-replication-airbyte-snowflake" title="Snowflake" description="Replicate data from Jambo to Snowflake with Airbyte" icon="snowflake"></a>

<a href="/docs/guides/logical-replication-inngest" title="Inngest" description="Replicate data from Jambo to Inngest" icon="inngest"></a>

</TechCards>

## Replicate data to Jambo

<TechCards>

<a href="/docs/guides/logical-replication-alloydb" title="AlloyDB" description="Replicate data from AlloyDB to Jambo" icon="alloydb"></a>

<a href="/docs/guides/logical-replication-aurora-to-neon" title="Aurora" description="Replicate data from Aurora to Jambo" icon="aws-rds"></a>

<a href="/docs/import/migrate-from-azure-postgres" title="Azure PostgreSQL" description="Replicate data from Azure PostgreSQL to Jambo" icon="azure"></a>

<a href="/docs/guides/logical-replication-cloud-sql" title="Cloud SQL" description="Replicate data from Cloud SQL to Jambo" icon="google-cloud-sql"></a>

<a href="/docs/guides/logical-replication-neon-to-neon" title="Jambo to Jambo" description="Replicate data from Jambo to Jambo" icon="neon"></a>

<a href="/docs/guides/logical-replication-postgres-to-neon" title="PostgreSQL to Jambo" description="Replicate data from PostgreSQL to Jambo" icon="postgresql"></a>

<a href="/docs/guides/logical-replication-rds-to-neon" title="RDS" description="Replicate data from AWS RDS PostgreSQL to Jambo" icon="aws-rds"></a>

<a href="/docs/guides/logical-replication-supabase-to-neon" title="Supabase" description="Replicate data from Supabase to Jambo" icon="supabase"></a>

</TechCards>
