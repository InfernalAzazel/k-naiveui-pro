<docs lang="md">
---
title: 自定义类名和样式
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
      customClass="my-breadcrumb"
      customLinkClass="my-breadcrumb-link"
      @item-click="handleClick"
  />
</template>

<style scoped>
.my-breadcrumb {
  /* 自定义面包屑容器的样式 */
}

.my-breadcrumb-link {
  /* 自定义面包屑链接的样式 */
}
</style>