# Codex、Claude Code、Gemini CLI 使用说明

| 快速导航 |  |
|---|---|
| [Codex 使用说明](#codex) | OpenAI Codex CLI 配置教程 |
| [Claude Code 使用说明](#claude-code) | Claude Code 配置教程 |
| [Gemini CLI 使用说明](#gemini-cli) | Gemini CLI 配置教程 |

---

## 配置前准备

在开始配置前，请先完成以下准备：

1. 登录 CodeMax API 控制台。
2. 确认账号已订阅或余额充足。
3. 创建 API Key。
4. 保存好 API Key，后续配置时会用到。

> 请勿把自己的 API Key 发给他人，也不要公开到 GitHub、论坛或网页中。

## 请求地址说明

不同工具使用的请求地址不同，请注意区分：

| 工具 | 请求地址 |
|---|---|
| Codex | `https://codemaxapi.com` |
| Claude Code | `https://codemaxapi.com` |
| Gemini CLI | `https://codemaxapi.com` |

---

<a id="codex"></a>

## 1. Codex 使用说明

Codex 是 OpenAI 出品的 AI 编码代理，可以在终端中运行。

### 安装 Codex

在 Windows 中，可以按 `Win + X` 打开 Windows PowerShell，然后输入：

```bash
npm install -g @openai/codex
```

也可以下载桌面端：

[https://openai.com/codex/](https://openai.com/codex/)

### 使用 CC Switch 配置（推荐）

打开 CC Switch，选择顶部的 **Codex** 标签，点击 `+` 添加配置。

| 字段 | 填写内容 |
|---|---|
| 供应商名称 | 自定义，例如 `codemaxapi_codex` |
| API Key | 填写你的 API Key |
| 请求地址 | `https://codemaxapi.com` |

### 手动配置 Codex

按 `Win + R`，输入：

```text
%userprofile%\.codex
```

找到或创建 `config.toml` 文件，用记事本打开。

Windows 用户对应路径一般为：

```text
C:\Users\你的用户名\.codex\config.toml
```

写入以下内容：

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

保存后，在同一个 `.codex` 文件夹中找到或创建 `auth.json` 文件，用记事本打开。

写入以下内容：

```json
{
  "OPENAI_API_KEY": "你的 API Key"
}
```

保存后重新打开 Codex 测试。

### 切换模型

可以直接在 Codex 中点击右下角，选择推理强度和具体模型。

---

<a id="claude-code"></a>

## 2. Claude Code 使用说明

Claude Code 是 Anthropic 出品的 AI 编码代理，可以在终端中读取代码、编辑文件和运行命令。

### 安装 Claude Code

在 Windows 中，可以按 `Win + X` 打开 Windows PowerShell，然后输入：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### 使用 CC Switch 配置（推荐）

打开 CC Switch，选择顶部的 **Claude** 标签，点击 `+` 添加配置。

| 字段 | 填写内容 |
|---|---|
| 供应商名称 | 自定义，例如 `codemaxapi` |
| API Key | 填写你的 API Key |
| 请求地址 | `https://codemaxapi.com` |

> 注意：Claude Code 的请求地址不要加 `/v1`。

正确：

```text
https://codemaxapi.com
```

错误：

```text
https://codemaxapi.com/v1
```

### 切换模型

除了 Claude 原生模型，也可以使用 `gpt-5.5`、GLM、Kimi、DeepSeek 等第三方模型。

在 CC Switch 中打开：

```text
编辑供应商 -> 模型映射
```

然后把 Claude 的别名指向你想使用的模型。

| 字段 | 作用 |
|---|---|
| 主模型 | Claude Code 默认调用的模型 |
| 推理模型 Thinking | 开启深度思考 / Reasoning 时使用的模型 |
| Haiku 默认模型 | `haiku` 别名对应的目标模型 |
| Sonnet 默认模型 | `sonnet` 别名对应的目标模型 |
| Opus 默认模型 | `opus` 别名对应的目标模型 |

如果供应商原生就是 Claude 模型，这些项目可以留空。

### 手动配置 Claude Code

按 `Win + R`，输入：

```text
%userprofile%\.claude
```

找到或创建 `settings.json` 文件，用记事本打开。

Windows 用户对应路径一般为：

```text
C:\Users\你的用户名\.claude\settings.json
```

写入：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://codemaxapi.com",
    "ANTHROPIC_AUTH_TOKEN": "sk-你的KEY",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
    "CLAUDE_CODE_ATTRIBUTION_HEADER": "0"
  }
}
```

也可以通过环境变量配置。

macOS / Linux：

```bash
export ANTHROPIC_BASE_URL=https://codemaxapi.com
export ANTHROPIC_AUTH_TOKEN=sk-你的KEY
export CLAUDE_CODE_ATTRIBUTION_HEADER=0
```

Windows PowerShell：

```powershell
$env:ANTHROPIC_BASE_URL="https://codemaxapi.com"
$env:ANTHROPIC_AUTH_TOKEN="sk-你的KEY"
$env:CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC="1"
$env:CLAUDE_CODE_ATTRIBUTION_HEADER="0"
```

### 配置上下文压缩

Claude Code 默认在上下文窗口使用约 83% 时自动压缩。

如果使用 1M 上下文窗口，可以通过 `CLAUDE_AUTOCOMPACT_PCT_OVERRIDE` 调整压缩触发时机。

例如希望在约 180k tokens 时触发压缩，可以在 `~/.claude/settings.json` 的 `env` 中添加：

```json
{
  "env": {
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "18"
  }
}
```

参考值：

| 值 | 1M 窗口下触发时机 | 适合场景 |
|---|---|---|
| `18` | 约 180k tokens | 频繁保持干净上下文 |
| `50` | 约 500k tokens | 平衡性能和上下文保留 |
| `83` | 约 830k tokens，默认值 | 最大化上下文利用 |

> 注意：只能设置低于 `83` 的值，高于 `83` 可能会被忽略。

---

<a id="gemini-cli"></a>

## 3. Gemini CLI 使用说明

Gemini CLI 是 Google 出品的开源 AI 编码代理，可以在终端中运行。

### 安装 Gemini CLI

使用 npm 安装：

```bash
npm install -g @google/gemini-cli
```

或通过 Homebrew 安装：

```bash
brew install gemini-cli
```

### 使用 CC Switch 配置（推荐）

打开 CC Switch，选择顶部的 **Gemini** 标签，点击 `+` 添加配置。

| 字段 | 填写内容 |
|---|---|
| 供应商名称 | 自定义，例如 `codemaxapi_gemini` |
| API Key | 填写你的 API Key |
| 请求地址 | `https://codemaxapi.com` |

> 注意：Gemini CLI 的请求地址不要加 `/v1`。

正确：

```text
https://codemaxapi.com
```

错误：

```text
https://codemaxapi.com/v1
```

### 手动配置 Gemini CLI

设置环境变量。

macOS / Linux：

```bash
export GOOGLE_GEMINI_BASE_URL="https://codemaxapi.com"
export GEMINI_API_KEY="sk-你的KEY"
export GEMINI_MODEL="gemini-2.0-flash"
```

如果你有 Gemini 3 权限，可以将模型改为：

```bash
export GEMINI_MODEL="gemini-3-pro-preview"
```

建议写入 `~/.zshrc` 或 `~/.bashrc`：

```bash
echo 'export GOOGLE_GEMINI_BASE_URL=https://codemaxapi.com' >> ~/.zshrc
echo 'export GEMINI_API_KEY=sk-你的KEY' >> ~/.zshrc
```

Windows PowerShell：

```powershell
$env:GOOGLE_GEMINI_BASE_URL="https://codemaxapi.com"
$env:GEMINI_API_KEY="sk-你的KEY"
$env:GEMINI_MODEL="gemini-2.0-flash"
```

如果你有 Gemini 3 权限，可以将模型改为：

```powershell
$env:GEMINI_MODEL="gemini-3-pro-preview"
```

### 切换模型

启动时指定模型：

```bash
gemini --model pro
gemini --model flash
```

也可以在 Gemini CLI 会话中使用：

```text
/model
```

进行模型切换。

如果使用 CC Switch，也可以直接在 CC Switch 中切换模型。

---

## 常见问题

### 1. API Key 应该填在哪里？

如果使用 CC Switch，直接填到 CC Switch 的 `API Key` 字段。

如果手动配置，则需要根据工具设置对应环境变量：

| 工具 | 环境变量 |
|---|---|
| Codex | `OPENAI_API_KEY` |
| Claude Code | `ANTHROPIC_AUTH_TOKEN` |
| Gemini CLI | `GEMINI_API_KEY` |

### 2. 配置完成后如何测试？

配置完成后，打开对应工具并发送一条简单消息。

例如：

```text
你好，请回复“配置成功”
```

如果工具可以正常回复，说明配置成功。

### 3. 修改环境变量后没有生效怎么办？

修改环境变量后，请重新打开终端。

如果仍然不生效，可以重启电脑后再测试。

---


