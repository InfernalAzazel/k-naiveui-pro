<docs lang="md">
---
title: 自定义布局和组件
---
</docs>
<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({ email: '', password: '', remember: false })

const columns = [
  {
    label: '邮箱',
    prop: 'email',
    component: 'n-input',
    props: {
      placeholder: '请输入邮箱',
      type: 'email',
    },
  },
  {
    label: '密码',
    prop: 'password',
    component: 'n-input',
    props: {
      placeholder: '请输入密码',
      type: 'password',
    },
  },
  {
    prop: 'remember',
    props:{
      label: '记住我',
    },
    component: 'n-checkbox',
  },
]
</script>

<template>
  <ProBaseForm
      v-model="formData"
      :columns="columns"
      :cols="24"
      :xGap="16"
      :yGap="16"
      :columnsSpan="12"
  >
    <template #footer>
      <n-button type="primary">提交</n-button>
    </template>
  </ProBaseForm>
  {{ JSON.stringify(formData) }}
</template>

<style scoped>

</style>