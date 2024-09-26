<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({})
const columns = [
  {
    label: 'Name',
    prop: 'name',
    component: 'NInput',
  },
  {
    label: 'Address',
    prop: 'address',
    component: 'NInput',
  },
];

const rules ={
  name: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  address: {
    required: true,
    message: '请输入地址',
    trigger: 'blur'
  },
}
</script>

<template>
  <ProForm v-model="formData" :columns="columns" :rules="rules" />
  {{ JSON.stringify(formData) }}
</template>