<script setup>
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useData } from 'vitepress'
import { onMounted, watch } from 'vue'

const { lang, site } = useData()

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

function getSavedLanguage() {
  try {
    return localStorage.getItem('preferred-lang')
  } catch {
    return null
  }
}

function saveLanguage(value) {
  try {
    localStorage.setItem('preferred-lang', value)
  } catch {
    // Ignore private browsing or storage-disabled environments.
  }
}

onMounted(() => {
  if (!inBrowser) return

  const pagePath = stripBase(window.location.pathname)
  const isRootPage = pagePath === '/' || pagePath === '/index.html'

  if (isRootPage) {
    const savedLanguage = getSavedLanguage()
    const shouldUseChinese = savedLanguage
      ? savedLanguage.toLowerCase().startsWith('zh')
      : browserPrefersChinese()

    if (shouldUseChinese) {
      saveLanguage('zh-CN')
      window.location.replace(`${normalizedBase()}zh/`)
      return
    }
  }

  saveLanguage(lang.value)
})

watch(lang, (value) => {
  if (inBrowser) {
    saveLanguage(value)
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
