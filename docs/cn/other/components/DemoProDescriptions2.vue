<docs lang="md">
---
title: 自定义列数和尺寸
---
</docs>
<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '职位', key: 'position' },
  { title: '部门', key: 'department' },
  { title: '地址', key: 'address' },
  // 更多配置项...
])

const data = ref({
  name: '李四',
  age: 35,
  position: '产品经理',
  department: '产品部',
  address: '上海市浦东新区',
  // 更多数据...
})
</script>

<template>
  <ProDescriptions
      :columns="columns"
      :data="data"
      title="员工详情"
      :colNumber="3"
      size="large"
      bordered
  />
</template>

