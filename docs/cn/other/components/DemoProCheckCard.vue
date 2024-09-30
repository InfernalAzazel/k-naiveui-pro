<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import { ref } from 'vue'

const selectedValue = ref(null)
const cardOptions = [
  { label: '选项一', value: 1, description: '这是选项一的描述' },
  { label: '选项二', value: 2, description: '这是选项二的描述' },
  { label: '选项三', value: 3, description: '这是选项三的描述' },
]
</script>

<template>
  <ProCheckCard v-model="selectedValue" :options="cardOptions" />
</template>

<style scoped>

</style>