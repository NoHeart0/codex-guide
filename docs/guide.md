---
title: Codex Setup Guide
---

# Codex Setup Guide

## 1. Create an API Key and Select a Group

After getting a subscription or making sure your balance is sufficient, create an API key and select a group for it.

> Replace these placeholders with your own screenshots after adding images to `docs/public/images/`.

![Create API key](/images/create-key.svg)

![Select group](/images/select-group.svg)

## 2. Configure the Key on Windows

Press `Win + R`, enter the following path, and press Enter:

```text
%userprofile%\.codex/config.toml
```

![Open config path](/images/run-config-path.svg)

Find `config.toml`, right-click it, and open it with Notepad.

If the file does not exist, create `config.toml` manually inside the `.codex` folder.

![Config file](/images/config-file.svg)

![Open with Notepad](/images/open-notepad.svg)

Put the following content at the top of the file, then save and close it:

```toml
model_provider = "OpenAI"
model = "gpt-5.4"
review_model = "gpt-5.4"
model_reasoning_effort = "xhigh"
disable_response_storage = true
network_access = "enabled"
windows_wsl_setup_acknowledged = true
model_context_window = 1000000
model_auto_compact_token_limit = 900000

[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://api.codemax.store"
wire_api = "responses"
requires_openai_auth = true
```

## 3. Configure `auth.json`

In the same folder, find `auth.json`, right-click it, and open it with Notepad.

Paste your website API key into the file, then save it.

![auth.json file](/images/auth-json.svg)

![Paste API key](/images/paste-key.svg)

## 4. Test the Configuration

After finishing the configuration, open Codex and send a message.

If Codex replies normally, the configuration is complete.
