# VitePress + GitHub + Markdown Editor

这是一个可直接推送到 GitHub Pages 的 VitePress 双语教程项目。

它包含：

- 中英文双语页面
- 根据浏览器语言自动进入中文首页
- GitHub Pages 自动部署工作流
- 客户可直接查看的配置教程页面

## 本地运行

```bash
npm install
npm run docs:dev
```

打开终端显示的本地地址即可查看网页。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个空仓库。
2. 把本项目推送到仓库的 `main` 分支。
3. 进入仓库 `Settings -> Pages`。
4. 将 `Build and deployment -> Source` 设置为 `GitHub Actions`。
5. 等待 Actions 跑完，网页会发布到 GitHub Pages。

如果仓库是普通项目仓库，例如 `username.github.io/my-docs/`，工作流会自动设置 VitePress 的 `base` 为 `/my-docs/`。

如果仓库名是 `username.github.io`，工作流会自动使用根路径 `/`。

## 编辑教程

中文教程内容在 `docs/zh/guide.md`。

英文教程内容在 `docs/guide.md`。
