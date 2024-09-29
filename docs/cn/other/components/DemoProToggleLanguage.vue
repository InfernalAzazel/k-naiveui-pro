<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import {ref} from "vue";
import  type {DropdownOption} from "naive-ui";
import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)

const languageOptions = ref<DropdownOption[]>([
  { label: 'English', key: 'en' },
  { label: '中文', key: 'zh' },
  { label: 'Español', key: 'es' }
])
function handleLanguageSelect(key: string | number) {
  message.info(`选择的语言键值为：${key}`)
  // 在这里处理语言切换的逻辑
}
</script>

<template>
  <pro-toggle-language :options="languageOptions" @select="handleLanguageSelect"/>
</template>

<style scoped>

</style>