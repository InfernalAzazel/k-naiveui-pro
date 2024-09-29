<docs lang="md">
---
title: 自定义渲染示例
---
</docs>
<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  {
    title: '姓名',
    key: 'name',
  },
  {
    title: '注册日期',
    key: 'registerDate',
    render: (data) => {
      return new Date(data.registerDate).toLocaleDateString()
    },
  },
  {
    title: '邮箱',
    key: 'email',
  },
  // 更多配置项...
])

const data = ref({
  name: '张三',
  registerDate: '2023-09-30T12:34:56Z',
  email: 'zhangsan@example.com',
  // 更多数据...
})
</script>

<template>
  <ProDescriptions :columns="columns" :data="data" title="用户详情"  bordered/>
</template>

