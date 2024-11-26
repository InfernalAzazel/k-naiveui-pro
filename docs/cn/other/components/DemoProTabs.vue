<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import {ref, h} from "vue";
import type { ProTabData } from 'k-naiveui-pro';
import {createDiscreteApi} from "naive-ui";
import { Icon } from '@iconify/vue';

const { message} = createDiscreteApi(
    ['message'],
)

const tabs = ref<ProTabData[]>([
  { title: '首页', path: '/home' },
  { title: '我的账户', path: '/account' },
  { title: '设置', path: '/settings' }
])

const dropdownOptions = [
  {
    label: '刷新',
    key: 'refresh',
    icon: () =>
        h(Icon, {
          icon: 'carbon:renew',
        }),
  },
  {
    label: '关闭全部',
    key: 'close-all',
    icon: () =>
        h(Icon, {
          icon: 'carbon:close-outline',
        }),
  },
];

function handleTabSelect(path: string) {
  message.info(path)
}
function handleDropdownSelect(key: string) {
  if (key === 'refresh') {
    message.info(key)
  } else if (key === 'close-all') {
    tabs.value = tabs.value.slice(0, 1)
    message.info(key)
  }
}
</script>

<template>
  <ProTabs v-model="tabs"  @select="handleTabSelect" >
    <template #toolbar>
      <n-dropdown trigger="hover" :options="dropdownOptions" @select="handleDropdownSelect">
        <Icon icon="ant-design:appstore-outlined" height="24" width="24" />
      </n-dropdown>
    </template>
  </ProTabs>
</template>

<style scoped>

</style>