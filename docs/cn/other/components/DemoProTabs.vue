<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import {ref} from "vue";
import type { ProTabData } from 'k-naiveui-pro'
import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)

const tabs = ref<ProTabData[]>([
  { icon: 'mdi:home', title: '首页', path: '/home' },
  { icon: 'mdi:account', title: '我的账户', path: '/account' },
  { icon: 'mdi:settings', title: '设置', path: '/settings' }
])

function handleTabSelect(path: string) {
  message.info(path)
}

</script>

<template>
  <ProTabs v-model="tabs" @select="handleTabSelect" />
</template>

<style scoped>

</style>