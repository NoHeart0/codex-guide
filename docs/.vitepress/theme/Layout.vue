<script setup>
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData } from 'vitepress'
import { onMounted } from 'vue'

const { site } = useData()

function normalizedBase() {
  const currentBase = site.value.base || '/'
  return currentBase.endsWith('/') ? currentBase : `${currentBase}/`
}

function stripBase(pathname) {
  const base = normalizedBase()

  if (base !== '/' && pathname.startsWith(base)) {
    const stripped = pathname.slice(base.length)
    return stripped ? `/${stripped}` : '/'
  }

  return pathname
}

function browserPrefersChinese() {
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language]
  return languages.some((item) => item.toLowerCase().startsWith('zh'))
}

onMounted(() => {
  if (!inBrowser) return

  const pagePath = stripBase(window.location.pathname)
  const isRootPage = pagePath === '/' || pagePath === '/index.html'

  if (isRootPage && browserPrefersChinese()) {
    window.location.replace(`${normalizedBase()}zh/`)
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
