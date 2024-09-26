<script setup lang="ts">
import { ref} from 'vue'

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
    span: 12,
  },
  {
    label: '地址',
    prop: 'address',
    component: 'NInput',
    span: 12,
  },
  {
    label: '选择',
    prop: 'select',
    component: 'n-select',
    props: {
      options: options,
    },
  },
];
</script>

<template>
  <ProForm v-model="formData" :columns="columns" />
  {{ JSON.stringify(formData) }}
</template>