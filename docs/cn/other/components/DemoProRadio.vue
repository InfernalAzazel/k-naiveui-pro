<docs lang="md">
---
title: 基础用法
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
  <ProRadio v-model="selectedValue" :options="radioOptions" />
  {{ JSON.stringify(selectedValue) }}
</template>

