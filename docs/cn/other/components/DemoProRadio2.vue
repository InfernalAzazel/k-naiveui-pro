<docs lang="md">
---
title: 设置尺寸和禁用整个单选框组
---
</docs>
<script setup lang="ts">
import { ref } from 'vue'

const selectedValue = ref(null)
const radioOptions = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '橘子', value: 'orange' },
]
</script>
<template>
  <ProRadio v-model="selectedValue" :options="radioOptions"  size="large" disabled />
  {{ JSON.stringify(selectedValue) }}
</template>

