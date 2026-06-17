import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  cleanUrls: true,
  title: 'CodeMax Guide',
  description: 'Setup guide for Codex, Claude Code, and Gemini CLI.',
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'CodeMax Guide',
      description: 'Setup guide for Codex, Claude Code, and Gemini CLI.',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/guide' }],
        sidebar: [
          {
            text: 'Pages',
            items: [
              { text: 'Codex, Claude Code, Gemini CLI Guide', link: '/guide' }
            ]
          }
        ],
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        outline: {
          label: 'On this page'
        },
        lastUpdated: {
          text: 'Last updated'
        },
        langMenuLabel: 'Language'
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'CodeMax 教程',
      description: 'Codex、Claude Code、Gemini CLI 使用说明。',
      themeConfig: {
        nav: [{ text: '教程', link: '/zh/guide' }],
        sidebar: [
          {
            text: '页面',
            items: [
              { text: 'Codex、Claude Code、Gemini CLI 使用说明', link: '/zh/guide' }
            ]
          }
        ],
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '本页目录'
        },
        lastUpdated: {
          text: '最后更新'
        },
        langMenuLabel: '语言'
      }
    }
  },
  themeConfig: {
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Setup guide.',
      copyright: 'Copyright © 2026'
    }
  }
})
