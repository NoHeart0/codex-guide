# Codex, Claude Code, and Gemini CLI Guide

| Quick Navigation |  |
|---|---|
| [Codex Guide](#codex) | OpenAI Codex CLI setup guide |
| [Claude Code Guide](#claude-code) | Claude Code setup guide |
| [Gemini CLI Guide](#gemini-cli) | Gemini CLI setup guide |

---

## Before You Start

Before configuring the tools, complete the following steps:

1. Log in to the CodeMax API console.
2. Make sure your account has an active subscription or enough balance.
3. Create an API Key.
4. Save your API Key. You will need it during configuration.

> Do not share your API Key with other people, and do not publish it on GitHub, forums, or public webpages.

## Request URL

Different tools use different request URLs.

| Tool | Request URL |
|---|---|
| Codex | `https://codemaxapi.com` |
| Claude Code | `https://codemaxapi.com` |
| Gemini CLI | `https://codemaxapi.com` |

---

<a id="codex"></a>

## 1. Codex Guide

Codex is an AI coding agent from OpenAI. It can run in your terminal.

### Install Codex

On Windows, press `Win + X` to open Windows PowerShell, then run:

```bash
npm install -g @openai/codex
```

You can also download the desktop app:

[https://openai.com/codex/](https://openai.com/codex/)

### Configure with CC Switch

Open CC Switch, select the **Codex** tab at the top, then click `+` to add a configuration.

| Field | Value |
|---|---|
| Provider name | Custom name, for example `codemaxapi_codex` |
| API Key | Your API Key |
| Request URL | `https://codemaxapi.com` |

### Manual Codex Configuration

Press `Win + R`, then enter:

```text
%userprofile%\.codex
```

Find or create `config.toml`, then open it with Notepad.

The Windows path is usually:

```text
C:\Users\YourUserName\.codex\config.toml
```

Paste the following content:

```toml
model_provider = "OpenAI"
model = "gpt-5.5"
review_model = "gpt-5.5"
model_reasoning_effort = "xhigh"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://codemaxapi.com"
wire_api = "responses"
requires_openai_auth = true

[features]
goals = true
```

Save the file. In the same `.codex` folder, find or create `auth.json`, then open it with Notepad.

Paste the following content:

```json
{
  "OPENAI_API_KEY": "your API Key"
}
```

Save the file and reopen Codex to test.

### Switch Models

In Codex, you can click the lower-right corner to select reasoning effort and the specific model.

---

<a id="claude-code"></a>

## 2. Claude Code Guide

Claude Code is an AI coding agent from Anthropic. It can read code, edit files, and run commands in your terminal.

### Install Claude Code

On Windows, press `Win + X` to open Windows PowerShell, then run:

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Configure with CC Switch

Open CC Switch, select the **Claude** tab at the top, then click `+` to add a configuration.

| Field | Value |
|---|---|
| Provider name | Custom name, for example `codemaxapi` |
| API Key | Your API Key |
| Request URL | `https://codemaxapi.com` |

> Note: Do not add `/v1` to the Claude Code request URL.

Correct:

```text
https://codemaxapi.com
```

Incorrect:

```text
https://codemaxapi.com/v1
```

### Switch Models

In addition to native Claude models, you can also use third-party models such as `gpt-5.5`, GLM, Kimi, and DeepSeek.

In CC Switch, open:

```text
Edit Provider -> Model Mapping
```

Then map Claude aliases to the models you want to use.

| Field | Purpose |
|---|---|
| Main model | The default model used by Claude Code |
| Thinking model | The model used for deep thinking / reasoning |
| Haiku default model | Target model for the `haiku` alias |
| Sonnet default model | Target model for the `sonnet` alias |
| Opus default model | Target model for the `opus` alias |

If the provider already uses native Claude models, these fields can be left empty.

### Manual Claude Code Configuration

Press `Win + R`, then enter:

```text
%userprofile%\.claude
```

Find or create `settings.json`, then open it with Notepad.

The Windows path is usually:

```text
C:\Users\YourUserName\.claude\settings.json
```

Paste the following content:

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://codemaxapi.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-key",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```

You can also configure it with environment variables.

macOS / Linux:

```bash
export ANTHROPIC_BASE_URL=https://codemaxapi.com
export ANTHROPIC_AUTH_TOKEN=sk-your-key
export CLAUDE_CODE_ATTRIBUTION_HEADER=0
```

Windows PowerShell:

```powershell
$env:ANTHROPIC_BASE_URL="https://codemaxapi.com"
$env:ANTHROPIC_AUTH_TOKEN="sk-your-key"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1"
$env:CLAUDE_CODE_ATTRIBUTION_HEADER="0"
```

### Configure Context Compaction

Claude Code automatically compacts context when the context window reaches about 83%.

If you use a 1M context window, you can adjust the compaction trigger with `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE`.

For example, to trigger compaction at about 180k tokens, add this to the `env` section in `~/.claude/settings.json`:

```json
{
  "env": {
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "18"
  }
}
```

Reference values:

| Value | Trigger point with a 1M window | Recommended use |
|---|---|---|
| `18` | About 180k tokens | Keep context clean more frequently |
| `50` | About 500k tokens | Balance performance and context retention |
| `83` | About 830k tokens, default | Maximize context usage |

> Note: Only values below `83` should be used. Values above `83` may be ignored.

---

<a id="gemini-cli"></a>

## 3. Gemini CLI Guide

Gemini CLI is an open-source AI coding agent from Google. It can run in your terminal.

### Install Gemini CLI

Install with npm:

```bash
npm install -g @google/gemini-cli
```

Or install with Homebrew:

```bash
brew install gemini-cli
```

### Configure with CC Switch

Open CC Switch, select the **Gemini** tab at the top, then click `+` to add a configuration.

| Field | Value |
|---|---|
| Provider name | Custom name, for example `codemaxapi_gemini` |
| API Key | Your API Key |
| Request URL | `https://codemaxapi.com` |

> Note: Do not add `/v1` to the Gemini CLI request URL.

Correct:

```text
https://codemaxapi.com
```

Incorrect:

```text
https://codemaxapi.com/v1
```

### Manual Gemini CLI Configuration

Set environment variables.

macOS / Linux:

```bash
export GOOGLE_GEMINI_BASE_URL="https://codemaxapi.com"
export GEMINI_API_KEY="sk-your-key"
export GEMINI_MODEL="gemini-2.0-flash"
```

If you have Gemini 3 access, you can use:

```bash
export GEMINI_MODEL="gemini-3-pro-preview"
```

It is recommended to write the variables to `~/.zshrc` or `~/.bashrc`:

```bash
echo 'export GOOGLE_GEMINI_BASE_URL=https://codemaxapi.com' >> ~/.zshrc
echo 'export GEMINI_API_KEY=sk-your-key' >> ~/.zshrc
```

Windows PowerShell:

```powershell
$env:GOOGLE_GEMINI_BASE_URL="https://codemaxapi.com"
$env:GEMINI_API_KEY="sk-your-key"
$env:GEMINI_MODEL="gemini-2.0-flash"
```

If you have Gemini 3 access, you can use:

```powershell
$env:GEMINI_MODEL="gemini-3-pro-preview"
```

### Switch Models

Specify a model when starting Gemini CLI:

```bash
gemini --model pro
gemini --model flash
```

You can also use the following command inside a Gemini CLI session:

```text
/model
```

If you use CC Switch, you can also switch models directly in CC Switch.

---

## FAQ

### 1. Where should I put the API Key?

If you use CC Switch, put it directly in the `API Key` field.

If you configure manually, set the corresponding environment variable for each tool:

| Tool | Environment variable |
|---|---|
| Codex | `OPENAI_API_KEY` |
| Claude Code | `ANTHROPIC_AUTH_TOKEN` |
| Gemini CLI | `GEMINI_API_KEY` |

### 2. How do I test after configuration?

After configuration, open the corresponding tool and send a simple message.

For example:

```text
Hello, please reply with "configuration successful".
```

If the tool replies normally, the configuration is successful.

### 3. What should I do if environment variable changes do not take effect?

After modifying environment variables, reopen your terminal.

If it still does not work, restart your computer and test again.
