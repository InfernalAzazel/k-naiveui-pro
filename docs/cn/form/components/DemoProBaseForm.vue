<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({ name: '', age: null, address: '' })

const columns = [
  {
    label: '姓名',
    prop: 'name',
    component: 'n-input',
    props: {
      placeholder: '请输入姓名',
    },
  },
  {
    label: '年龄',
    prop: 'age',
    component: 'n-input-number',
    props: {
      placeholder: '请输入年龄',
    },
  },
  {
    label: '地址',
    prop: 'address',
    component: 'n-input',
    props: {
      placeholder: '请输入地址',
    },
  },
]
</script>

<template>
  <ProBaseForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>

<style scoped>

</style>