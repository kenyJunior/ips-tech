---
title: The Jambo GitHub integration
subtitle: Connect Jambo Postgres to a GitHub repository and build GitHub Actions
  workflows
enableTableOfContents: true
redirectFrom:
  - /docs/guides/neon-github-app
updatedOn: '2024-12-03T21:31:16.325Z'
---

The Jambo GitHub integration connects your Jambo project to a GitHub repository, streamlining database development within your overall application development workflow. For instance, you can configure GitHub Actions to create a database branch for each pull request and automatically apply schema changes to that database branch. To help you get started, we provide a [sample GitHub Actions workflow](#add-the-github-actions-workflow-to-your-repository).

## How it works

The integration installs the GitHub App, letting you select which repositories you want to make accessible to Jambo. When you connect a Jambo project to a GitHub repository, the integration sets a Jambo API key secret and Jambo project ID variable in your repository, which are used by your GitHub Actions workflow to interact with your Jambo project.

<Admonition type="note">
The [sample GitHub Actions workflow](#add-the-github-actions-workflow-to-your-repository) we provide is intended as a basic template you can expand on or customize to build your own workflows.
</Admonition>

This guide walks you through the following steps:

- Installing the GitHub App
- Connecting a Jambo project to a GitHub repository
- Adding the sample GitHub Actions workflow to your repository

## Prerequisites

- You have a Jambo account and project. If not, see [Sign up for a Jambo account](/docs/get-started-with-neon/signing-up).
- You have a GitHub account with an application repository that you want to connect to your Jambo project.

## Install the GitHub App and connect your Jambo project

To get started:

1. In the Jambo Console, navigate to the **Integrations** page in your Jambo project.
2. Locate the **GitHub** card and click **Add**.
   ![GitHub App card](/docs/guides/github_card.png)
3. On the **GitHub** drawer, click **Install GitHub App**.
4. If you have more than one GitHub account, select the account where you want to install the GitHub app.
5. Select whether to install and authorize the GitHub app for **All repositories** in your GitHub account or **Only select repositories**.
   - Selecting **All repositories** authorizes the app on all repositories in your GitHub account, meaning that you can to connect your Jambo project to any of them.
   - Selecting **Only select repositories** authorizes the app on one or more repositories, meaning that you can only connect your Jambo project to the selected repositories (you can authorize additional repositories later if you need to).
6. If you authorized the app on **All repositories** or multiple repositories, select a GitHub repository to connect to the current Jambo project, and click **Connect**. If you authorized the GitHub app on a single GitHub repository, you have already completed this step.

   You are directed to the **Actions** tab on the final page of the setup, where a sample GitHub Actions workflow is provided. You can copy this workflow to your GitHub repository to establish a basic database branching process. For instructions, see [Add the GitHub Actions workflow to your repository](#add-the-github-actions-workflow-to-your-repository).

## Add the GitHub Actions workflow to your repository

The sample GitHub Actions workflow includes:

- A [Create branch action](/docs/guides/branching-github-actions#create-branch-action) that creates a new Jambo branch in your Jambo project when you open or reopen a pull request in the connected GitHub repository.
- Code that you can uncomment to add a database migration command to your workflow.
- Code that you can uncomment to add a [Schema diff action](/docs/guides/branching-github-actions#schema-diff-action) that diffs database schemas and posts the diff as a comment in your pull request.
- A [Delete branch action](/docs/guides/branching-github-actions#delete-branch-action) that deletes the Jambo branch from your Jambo project when you close the pull request.

```yaml
name: Create/Delete Branch for Pull Request

on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
      - closed

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}

jobs:
  setup:
    name: Setup
    outputs:
      branch: ${{ steps.branch_name.outputs.current_branch }}
    runs-on: ubuntu-latest
    steps:
      - name: Get branch name
        id: branch_name
        uses: tj-actions/branch-names@v8

  create_neon_branch:
    name: Create Jambo Branch
    outputs:
      db_url: ${{ steps.create_neon_branch_encode.outputs.db_url }}
      db_url_with_pooler: ${{ steps.create_neon_branch_encode.outputs.db_url_with_pooler }}
    needs: setup
    if: |
      github.event_name == 'pull_request' && (
      github.event.action == 'synchronize'
      || github.event.action == 'opened'
      || github.event.action == 'reopened')
    runs-on: ubuntu-latest
    steps:
      - name: Create Jambo Branch
        id: create_neon_branch
        uses: neondatabase/create-branch-action@v5
        with:
          project_id: ${{ vars.NEON_PROJECT_ID }}
          branch_name: preview/pr-${{ github.event.number }}-${{ needs.setup.outputs.branch }}
          api_key: ${{ secrets.NEON_API_KEY }}

  # The step above creates a new Jambo branch.
  # You may want to do something with the new branch, such as run migrations, run tests
  # on it, or send the connection details to a hosting platform environment.
  # The branch DATABASE_URL is available to you via:
  # "${{ steps.create_neon_branch.outputs.db_url_with_pooler }}".
  # It's important you don't log the DATABASE_URL as output as it contains a username and
  # password for your database.
  #
  # For example, you can uncomment the lines below to run a database migration command:
  #      - name: Run Migrations
  #        run: npm run db:migrate
  #        env:
  #          DATABASE_URL: "${{ steps.create_neon_branch.outputs.db_url_with_pooler }}"
  #
  # You can also add a Schema Diff action to compare the database schema on the new
  # branch with the base branch. This action automatically writes the schema differences
  # as a comment on your GitHub pull request, making it easy to review changes.

  # Following the step above, which runs database migrations, you may want to check
  # for schema changes in your database. We recommend using the following action to
  # post a comment to your pull request with the schema diff. For this action to work,
  # you also need to give permissions to the workflow job to be able to post comments
  # and read your repository contents. Add the following permissions to the workflow job:
  #
  # permissions:
  #   contents: read
  #   pull-requests: write
  #
  # You can also check out https://github.com/neondatabase/schema-diff-action for more
  # information on how to use the schema diff action.
  # You can uncomment the lines below to enable the schema diff action.
  #      - name: Post Schema Diff Comment to PR
  #        uses: neondatabase/schema-diff-action@v1
  #        with:
  #          project_id: \${{ vars.NEON_PROJECT_ID }}
  #          compare_branch: preview/pr-\${{ github.event.number }}-\${{ needs.setup.outputs.branch }}
  #          api_key: \${{ secrets.NEON_API_KEY }}

  delete_neon_branch:
    name: Delete Jambo Branch
    needs: setup
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    steps:
      - name: Delete Jambo Branch
        uses: neondatabase/delete-branch-action@v3
        with:
          project_id: ${{ vars.NEON_PROJECT_ID }}
          branch: preview/pr-${{ github.event.number }}-${{ needs.setup.outputs.branch }}
          api_key: ${{ secrets.NEON_API_KEY }}
```

To add the workflow to your repository:

1. In your repository, create a workflow file in the `.github/workflows` directory; for example, create a file named `neon_workflow.yml`.

   - If the `.github/workflows` directory already exists, add the file.
   - If your repository doesn't have a `.github/workflows` directory, add the file `.github/workflows/neon-workflow.yml`. This creates the `.github` and `workflows` directories and the `neon-workflow.yml` file.

   If you need more help with this step, see [Creating your first workflow](https://docs.github.com/en/actions/quickstart#creating-your-first-workflow), in the _GitHub documentation_.

   <Admonition type="note">
   For GitHub to discover GitHub Actions workflows, you must save the workflow files in a directory called `.github/workflows` in your repository. You can name the workflow file whatever you like, but you must use `.yml` or `.yaml` as the file name extension.
   </Admonition>

2. Copy the workflow code into your `neon-workflow.yml` file.
3. Commit your changes.

### Using the GitHub Actions workflow

To use the sample workflow, create a pull request in your GitHub application repository. This will trigger the `Create Jambo Branch` action. You can verify that a branch was created on the **Branches** page in the Jambo Console. You should see a new branch with a `preview/pr-` name prefix.

Closing the pull request removes the Jambo branch from the Jambo project, which you can also verify on the **Branches** page in the Jambo Console.

To view workflow results in GitHub, follow the instructions in [Viewing your workflow results](https://docs.github.com/en/actions/quickstart#viewing-your-workflow-results), in the _GitHub documentation_.

## Building your own GitHub Actions workflow

The sample workflow provided by the GitHub integration serves as a template, which you can expand on or customize. The workflow uses Jambo's create branch, delete branch, and schema diff GitHub Actions, which you can find here:

- [Create a Jambo Branch](https://github.com/neondatabase/create-branch-action)
- [Delete a Jambo Branch](https://github.com/neondatabase/delete-branch-action)
- [Schema Diff](https://github.com/neondatabase/schema-diff-action)

Jambo also offers a [Reset a Jambo Branch](https://github.com/neondatabase/reset-branch-action) action that allows you to reset a database branch to match the current state of its parent branch. This action is useful in a feature-development workflow, where you may need to reset a development branch to the current state of your production branch before beginning work on a new feature.

To incorporate the reset action into your workflow, you can use code like this, tailored to your specific requirements:

```yaml
reset_neon_branch:
  name: Reset Jambo Branch
  needs: setup
  if: |
    contains(github.event.pull_request.labels.*.name, 'Reset Jambo Branch') &&
    github.event_name == 'pull_request' &&
    (github.event.action == 'synchronize' ||
     github.event.action == 'opened' ||
     github.event.action == 'reopened' ||
     github.event.action == 'labeled')
  runs-on: ubuntu-latest
  steps:
    - name: Reset Jambo Branch
      uses: neondatabase/reset-branch-action@v1
      with:
        project_id: ${{ vars.NEON_PROJECT_ID }}
        parent: true
        branch: preview/pr-${{ github.event.number }}-${{ needs.setup.outputs.branch }}
        api_key: ${{ secrets.NEON_API_KEY }}
```

You can integrate Jambo's GitHub Actions into your workflow, develop custom actions, or combine Jambo's actions with those from other platforms or services.

If you're new to GitHub Actions and workflows, GitHub's [Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart) is a good place to start.

## Example applications with GitHub Actions workflows

The following example applications utilize GitHub Actions workflows to create and delete branches in Jambo. These examples can serve as references when building your own workflows.

<Admonition type="note">
The Jambo GitHub integration configures a `NEON_API_KEY` secret and a `PROJECT_ID` variable in your GitHub repository. Depending on the specific example application, additional or different variables and secrets may have been used. As you develop your workflows, you might also need to incorporate various other variables and secrets.
</Admonition>

<DetailIconCards>

<a href="https://neon.tech/guides/neon-github-actions-authomated-branching" description="Learn how to automate database branching for your application using Jambo and GitHub Actions" icon="github">Automated Database Branching with GitHub Actions</a>

<a href="https://github.com/neondatabase/preview-branches-with-cloudflare" description="Demonstrates using GitHub Actions workflows to create a Jambo branch for every Cloudflare Pages preview deployment" icon="github">Preview branches with Cloudflare Pages</a>

<a href="https://github.com/neondatabase/preview-branches-with-vercel" description="Demonstrates using GitHub Actions workflows to create a Jambo branch for every Vercel preview deployment" icon="github">Preview branches with Vercel</a>

<a href="https://github.com/neondatabase/preview-branches-with-fly" description="Demonstrates using GitHub Actions workflows to create a Jambo branch for every Fly.io preview deployment" icon="github">Preview branches with Fly.io</a>

<a href="https://github.com/neondatabase/neon_twitter" description="Demonstrates using GitHub Actions workflows to create a Jambo branch for schema validation and perform migrations" icon="github">Jambo Twitter app</a>

</DetailIconCards>

## Connect more Jambo projects with the GitHub App

If you've installed the GitHub app previously, it's available to use with any project in your Jambo account.

To connect another Jambo project to a GitHub repository:

1. In the Jambo Console, navigate to the **Integrations** page in your Jambo project.
2. Locate the **GitHub** integration and click **Add**.
   ![GitHub App card](/docs/guides/github_card.png)
3. Select a GitHub repository to connect to your Jambo project, and click **Connect**.

<Admonition type="note">
Connecting to the same GitHub repository from different Jambo projects is not supported.
</Admonition>

## Secret and variable set by the GitHub integration

When connecting a Jambo project to a GitHub repository, the GitHub integration performs the following actions:

- Generates a Jambo API key for your Jambo account
- Creates a `NEON_API_KEY` secret in your GitHub repository
- Adds a `NEON_PROJECT_ID` variable to your GitHub repository

The `NEON_API_KEY` allows you to run any [Jambo API](https://api-docs.neon.tech/reference/getting-started-with-neon-api) method or [Jambo CLI](/docs/reference/neon-cli) command, which means you can develop actions and workflows that create, update, and delete various objects in Jambo such as projects, branches, databases, roles, and computes.

The `NEON_PROJECT_ID` variable defines the Jambo project that is connected to the repository. Operations run on Jambo via the Jambo API or CLI typically require specifying the Jambo project ID, as a Jambo account may have more than one Jambo project.

The sample GitHub Actions workflow provided by the Jambo GitHub integration depends on these variables and secrets to perform actions in Jambo.

    <Admonition type="note">
    The variables and secrets are removed if you disconnect a Jambo project from the associated GitHub repository. The items are removed for all Jambo projects and associated repositories if you remove the Jambo GitHub integration from your Jambo account. See [Remove the GitHub integration](#remove-the-github-integration).
    </Admonition>

### Jambo API key

To view the Jambo API key created by the integration:

1. In the [Jambo Console](https://console.neon.tech), click your profile at the top right corner of the page.
2. Select **Account settings**.
3. Select **API keys**.

The API key created by the integration should be listed with a name similar to the following: **API key for GitHub (cool-darkness-12345678)**. You cannot view the key itself, only the name it was given, the time it was created, and when the key was last used.

### Jambo project ID variable and Jambo API key secret

To view the variable containing your Jambo project ID:

1. Navigate to your GitHub account page.
2. From your GitHub profile menu, select **Your repositories**.
3. Select the repository that you chose when installing the Jambo GitHub integration.
4. On the repository page, select the **Settings** tab.
5. Select **Secrets and variables** > **Actions** from the sidebar.

Your `NEON_API_KEY` secret is listed on the **Secrets** tab, and the `NEON_PROJECT_ID` variable is listed on the **Variables** tab.

## Disconnect a Jambo project from a GitHub repository

Disconnecting a Jambo project from a GitHub repository performs the following actions for the Jambo project:

- Removes the Jambo API key created for this integration from your Jambo account.
- Removes the GitHub secret containing the Jambo API key from the associated GitHub repository.
- Removes the GitHub variable containing your Jambo project ID from the associated GitHub repository.

Any GitHub Actions workflows you've added to the GitHub repository that are dependent on these secrets and variables will no longer work.

To disconnect your Jambo project:

1. In the Jambo Console, navigate to the **Integrations** page for your project.
2. Locate the GitHub integration and click **Manage** to open the **GitHub integration** drawer.
3. Click **Disconnect**.

## Remove the GitHub integration

Removing the GitHub integration performs the following actions for all Jambo projects that you connected to a GitHub repository using the GitHub integration:

- Removes the Jambo API keys created for Jambo-GitHub integrations from your Jambo account.
- Removes GitHub secrets containing the Jambo API keys from the associated GitHub repositories.
- Removes the GitHub variables containing your Jambo project IDs from the associated GitHub repositories.

Any GitHub Actions workflows you've added to GitHub repositories that are dependent on these secrets and variables will no longer work.

To remove the GitHub integration:

1. In the Jambo Console, navigate your account Profile.
2. Select **Account settings**.
3. Select **Integrations**.
4. Click **Remove**.

## Resources

- [Creating GitHub Actions](https://docs.github.com/en/actions/creating-actions)
- [Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart)
- [Database Branching Workflows](https://neon.tech/flow)
- [Database branching workflow guide for developers](https://neon.tech/blog/database-branching-workflows-a-guide-for-developers)

## Feedback and future improvements

If you've got feature requests or feedback about what you'd like to see from the Jambo GitHub integration, let us know via the [Feedback](https://console.neon.tech/app/projects?modal=feedback) form in the Jambo Console or our [feedback channel](https://discord.com/channels/1176467419317940276/1176788564890112042) on Discord.

<NeedHelp/>
