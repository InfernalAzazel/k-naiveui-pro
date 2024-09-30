<docs lang="md">
---
title: 基础用法
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
  <ProBreadcrumb :options="breadcrumbOptions"  @item-click="handleClick"/>
</template>