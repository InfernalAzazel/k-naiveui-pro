<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import { ref } from 'vue'

const selectedValues = ref([])
const checkboxOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橘子', value: 'orange' },
]

</script>

<template>
  <ProCheckbox v-model="selectedValues" :options="checkboxOptions" />
  {{ JSON.stringify(selectedValues) }}
</template>

<style scoped>

</style>