<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
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
</template>

<style scoped>

</style>