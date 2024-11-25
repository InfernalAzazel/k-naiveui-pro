<docs lang="md">
---
title: 不支持 处理多级列或嵌套列的示例
---
</docs>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { DataTableColumn } from 'naive-ui'

const columns = ref<DataTableColumn<any>[]>([
  {
    title: '个人信息',
    key: 'personalInfo',
    children: [
      { title: '姓名', key: 'name' },
      { title: '年龄', key: 'age' },
    ],
  },
  {
    title: '联系方式',
    key: 'contactInfo',
    children: [
      { title: '电话', key: 'phone' },
      { title: '邮箱', key: 'email' },
    ],
  },
  { title: '地址', key: 'address' },
])

// 计算可见的列，根据 hide 属性过滤
const visibleColumns = computed(() => {
  function filterColumns(columns: any[]): any[] {
    return columns
        .filter(col => !col.hide)
        .map(col => {
          const newCol = { ...col }
          if (col.children) {
            newCol.children = filterColumns(col.children)
          }
          return newCol
        })
  }
  return filterColumns(columns.value)
})

const tableData = ref([
  {
    name: '张三',
    age: 18,
    phone: '123456789',
    email: 'zhangsan@example.com',
    address: '北京',
  },
  {
    name: '李四',
    age: 25,
    phone: '987654321',
    email: 'lisi@example.com',
    address: '上海',
  },
  // 更多数据...
])
</script>

<template>
  <pro-column-setting v-model="columns" />
  <n-data-table :columns="visibleColumns" :data="tableData" />
</template>

<style scoped>

</style>