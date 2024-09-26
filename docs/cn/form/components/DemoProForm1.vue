<docs lang="md">
---
title: 基础用法
---
</docs>
<script setup lang="ts">
import { ref } from 'vue'
const formData = ref({});
const columns = [
  {
    label: 'Name',
    prop: 'name',
    component: 'NInput',
    props: {
      placeholder: '请输入姓名'
    }
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'NInput',
  },
];
</script>

<template>
  <ProForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>