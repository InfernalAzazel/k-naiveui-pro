<docs lang="md">
---
title: 基础用法
---
</docs>
<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' },
  // 更多配置项...
])

const data = ref({
  name: '张三',
  age: 28,
  address: '北京市朝阳区',
  // 更多数据...
})
</script>

<template>
  <ProDescriptions :columns="columns" :data="data" title="用户详情" bordered />
</template>

