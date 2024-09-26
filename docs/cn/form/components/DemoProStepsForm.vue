<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const formData = ref({});

const columns = [
  {
    label: 'Name',
    description: '这是第一个步骤',
    children: [
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
    ]
  },
  {
    label: 'Name2',
    description: '这是第二个步骤',
    children: [
      {
        label: 'Name2',
        prop: 'name2',
        component: 'NInput',
        props: {
          placeholder: '请输入姓名'
        }
      },
      {
        label: 'Address2',
        prop: 'address2',
        component: 'NInput',
      },
    ]
  },

];
watchEffect(() => {
  console.log(formData.value)
})

</script>

<template>
  <ProStepsForm v-model="formData" :columns="columns"/>
  {{ JSON.stringify(formData) }}
</template>