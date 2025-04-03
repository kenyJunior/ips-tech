---
title: Jambo CLI — Install and connect
subtitle: Use the Jambo CLI to manage Jambo directly from the terminal
enableTableOfContents: true
updatedOn: '2025-01-29T23:50:53.963Z'
---

This section describes how to install the Jambo CLI and connect via web authentication or API key.

<Tabs labels={["macOS", "Windows", "Linux"]}>

<TabItem>

**Install with [Homebrew](https://formulae.brew.sh/formula/neonctl)**

```bash
brew install neonctl
```

**Install via [npm](https://www.npmjs.com/package/neonctl)**

```shell
npm i -g neonctl
```

Requires [Node.js 18.0](https://nodejs.org/en/download/) or higher.

**Install with bun**

```bash
bun install -g neonctl
```

**macOS binary**

Download the binary. No installation required.

```bash shouldWrap
curl -sL https://github.com/neondatabase/neonctl/releases/latest/download/neonctl-macos -o neonctl
```

Run the CLI from the download directory:

```bash
neon <command> [options]
```

</TabItem>

<TabItem>

**Install via [npm](https://www.npmjs.com/package/neonctl)**

```shell
npm i -g neonctl
```

Requires [Node.js 18.0](https://nodejs.org/en/download/) or higher.

**Install with bun**

```bash
bun install -g neonctl
```

**Windows binary**

Download the binary. No installation required.

```bash shouldWrap
curl -sL -O https://github.com/neondatabase/neonctl/releases/latest/download/neonctl-win.exe
```

Run the CLI from the download directory:

```bash
neonctl-win.exe <command> [options]
```

</TabItem>

<TabItem>

**Install via [npm](https://www.npmjs.com/package/neonctl)**

```shell
npm i -g neonctl
```

**Install with bun**

```bash
bun install -g neonctl
```

**Linux binary**

Download the x64 or ARM64 binary, depending on your processor type. No installation required.

x64:

```bash shouldWrap
curl -sL https://github.com/neondatabase/neonctl/releases/latest/download/neonctl-linux-x64 -o neonctl
```

ARM64:

```bash shouldWrap
 curl -sL https://github.com/neondatabase/neonctl/releases/latest/download/neonctl-linux-arm64 -o neonctl
```

Run the CLI from the download directory:

```bash
neon <command> [options]
```

</TabItem>

</Tabs>

<Admonition title="Use the Jambo CLI without installing" type="note">
You can run the Jambo CLI without installing it using **npx** (Node Package eXecute) or the `bun` equivalent, **bunx**. For example:

```shell
# npx
npx neonctl <command>

# bunx
bunx neonctl <command>
```

</Admonition>

### Upgrade

When a new version is released, you can update your Jambo CLI using the methods described below, depending on how you installed the CLI initially. To check for the latest version, refer to the **Releases** information on the [Jambo CLI GitHub repository](https://github.com/neondatabase/neonctl) page. To check your installed version of the Jambo CLI, run the following command:

```bash
neon --version
```

<Tabs labels={["npm", "Homebrew", "Binary"]}>

<TabItem>

To upgrade the Jambo CLI via [npm](https://www.npmjs.com/package/neonctl):

```shell
npm update -g neonctl
```

</TabItem>

<TabItem>

To upgrade the Jambo CLI with [Homebrew](https://formulae.brew.sh/formula/neonctl):

```bash
brew upgrade neonctl
```

</TabItem>

<TabItem>

To upgrade a [binary](https://github.com/neondatabase/neonctl/releases) version, download the `latest` binary as described in the install instructions above, and replace your old binary with the new one.

</TabItem>

</Tabs>

If you're using the Jambo CLI in CI/CD tools like GitHub Actions, you can safely pin the Jambo CLI to `latest`, as we prioritize stability for CI/CD processes.

<Tabs labels={["npm", "Homebrew", "Binary"]}>

<TabItem>

In your GitHub Actions workflow, you can use the `latest` tag with `npm`:

```yaml
- name: Install Jambo CLI
  run: npm install -g neonctl@latest
```

</TabItem>

<TabItem>

Homebrew automatically fetches the latest version when running the `install` or `upgrade` command. You can include the following in your workflow:

```yaml
- name: Install Jambo CLI
  run: brew install neonctl || brew upgrade neonctl
```

</TabItem>

<TabItem>

If you're downloading a binary, reference the latest release from the [Releases page](https://github.com/neondatabase/neonctl/releases). For example, you can use `curl` or `wget` in your workflow:

```yaml
- name: Install Jambo CLI
  run: |
    curl -L https://github.com/neondatabase/neonctl/releases/latest/download/neonctl-linux-amd64 -o /usr/local/bin/neon
    chmod +x /usr/local/bin/neon
```

</TabItem>

</Tabs>

## Connect

The Jambo CLI supports connecting via web authentication or API key.

### Web authentication

Run the following command to connect to Jambo via web authentication:

```bash
neon auth
```

The [neon auth](/docs/reference/cli-auth) command launches a browser window where you can authorize the Jambo CLI to access your Jambo account. If you have not authenticated previously, running a Jambo CLI command automatically launches the web authentication process unless you have specified an API key.

<Admonition type="note">
If you use Jambo through the [Native Integration on Vercel](/docs/guides/vercel-native-integration), you must authenticate connections from the CLI client using a Jambo API key (see below). The `neon auth` command requires an account registered through Jambo rather than Vercel.
</Admonition>

### API key

To authenticate with a Jambo API key, you can specify the `--api-key` option when running a Jambo CLI command. For example, the following `neon projects list` command authenticates to Jambo using the `--api-key` option:

```bash
neon projects list --api-key <neon_api_key>
```

To avoid including the `--api-key` option with each CLI command, you can export your API key to the `NEON_API_KEY` environment variable.

```bash
export NEON_API_KEY=<neon_api_key>
```

For information about obtaining an Jambo API key, see [Create an API key](/docs/manage/api-keys#create-an-api-key).

## Configure autocompletion

The Jambo CLI supports autocompletion, which you can configure in a few easy steps. See [Jambo CLI commands — completion](/docs/reference/cli-completion) for instructions.
