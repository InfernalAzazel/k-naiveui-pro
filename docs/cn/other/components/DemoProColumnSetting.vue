<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { DataTableColumn } from 'naive-ui'

const allColumns = ref<DataTableColumn<any>[]>([
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' },
  // 更多列...
])

const columns = ref([...allColumns.value])

const visibleColumns = computed(() => {
  return columns.value.filter(col => !col.hide)
})

const tableData = ref([
  { name: '张三', age: 18, address: '北京' },
  { name: '李四', age: 25, address: '上海' },
  // 更多数据...
])
</script>

<template>
  <pro-column-setting v-model="columns" />
  <n-data-table :columns="visibleColumns" :data="tableData" />
</template>

<style scoped>

</style>