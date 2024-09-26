<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({}); // 初始化为空对象

const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

const columns = [
  {
    label: '姓名',
    prop: 'name',
    component: 'NInput',
    props: {
      placeholder: '请输入姓名'
    },
  },
  {
    label: '地址',
    prop: 'address',
    component: 'NInput',
  },
  {
    label: '选择',
    prop: 'select',
    component: 'n-select',
    props: {
      options: options,
      placeholder: '请选择地址'
    },
  },
]



</script>

<template>
  <n-space vertical>
    <ProQueryForm
      v-model="formData"
      :columns="columns"
      @search="()=>console.log('搜索结果')"
      @reset="()=>console.log('重置')"
    />
    {{ JSON.stringify(formData) }}
  </n-space>
</template>

<style scoped>
</style>