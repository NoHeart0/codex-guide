import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  cleanUrls: true,
  title: 'Codex Setup Guide',
  description: 'Codex setup guide.',
  lastUpdated: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Codex Setup Guide',
      description: 'Codex setup guide.',
      themeConfig: {
        nav: [{ text: 'Guide', link: '/guide' }],
        sidebar: [
          {
            text: 'Pages',
            items: [
              { text: 'Codex Setup Guide', link: '/guide' }
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
      title: 'Codex 配置教程',
      description: 'Codex 配置教程。',
      themeConfig: {
        nav: [{ text: '教程', link: '/zh/guide' }],
        sidebar: [
          {
            text: '页面',
            items: [
              { text: 'Codex 配置教程', link: '/zh/guide' }
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
      message: 'Codex setup guide.',
      copyright: 'Copyright © 2026'
    }
  }
})
