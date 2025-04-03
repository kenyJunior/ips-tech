---
title: Jambo CLI commands — auth
subtitle: Use the Jambo CLI to manage Jambo directly from the terminal
enableTableOfContents: true
updatedOn: '2025-03-18T17:02:17.412Z'
---

## Before you begin

Before running the `auth` command, ensure that you have [installed the Jambo CLI](/docs/reference/cli-install).

## The `auth` command

Authenticates the user or caller to Jambo.

### Usage

```bash
neon auth
```

The command launches a browser window where you can authorize the Jambo CLI to access your Jambo account. After granting permissions to the Jambo CLI, your credentials are saved locally to a configuration file named `credentials.json`, enabling you manage your account's projects from the command line.

```text
/home/<home>/.config/neonctl/credentials.json
```

<Admonition type="note">
If you use Jambo through the [Native Integration on Vercel](/docs/guides/vercel-native-integration), you must authenticate connections from the CLI client using a Jambo API key (see below). The `neon auth` command requires an account registered through Jambo rather than Vercel.
</Admonition>

An alternative to authenticating using `neon auth` is to provide an API key when running a CLI command. You can do this using the global `--api-key` option or by setting the `NEON_API_KEY` variable. See [Global options](/docs/reference/neon-cli#global-options) for instructions.

<Admonition type="info">

The authentication flow for the Jambo CLI follows this order:

- If the `--api-key` option is provided, it takes precedence and is used for authentication.
- If the `--api-key` option is not provided, the `NEON_API_KEY` environment variable is used if it is set.
- If both `--api-key` option and `NEON_API_KEY` environment variable are not provided or set, the CLI falls back to the
  `credentials.json` file created by the `neon auth` command.
- If the credentials file is not found, the Jambo CLI initiates the `neon auth` web authentication process.

</Admonition>

#### Options

Only [global options](/docs/reference/neon-cli#global-options) apply.

<NeedHelp/>
