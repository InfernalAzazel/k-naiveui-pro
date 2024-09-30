<docs lang="md">
---
title: 使用 UnoCSS 进行样式定制
---
</docs>
<script setup lang="ts">
import {createDiscreteApi} from "naive-ui";

const { message} = createDiscreteApi(
    ['message'],
)
const breadcrumbOptions = [
  {
    label: '首页',
    to: '/',
    icon: 'mdi:home',
  },
  {
    label: '分类',
    to: '/category',
    icon: 'mdi:folder-outline',
  },
  {
    label: '文章详情',
    icon: 'mdi:file-document-outline',
  },
];
function handleClick(path: string) {
  message.info(`Clicked path: ${path}`);
}
</script>
<template>
  <ProBreadcrumb
      :options="breadcrumbOptions"
      :customLinkClass="['text-blue-500', 'hover:text-blue-700']"
      @item-click="handleClick"
  />
</template>