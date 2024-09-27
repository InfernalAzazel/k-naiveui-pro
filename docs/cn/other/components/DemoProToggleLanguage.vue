<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

const languageOptions = [
  {
    label: '中文',
    key: 'zh-CN',
  },
  {
    label: 'English',
    key: 'en-US',
  },
]

</script>

<template>
  <pro-toggle-language :options="languageOptions"/>
  {{ t(`hello`)}}
</template>

<style scoped>

</style>