<docs lang="md">
---
title: 自定义卡片内容
---
</docs>
<script lang="ts" setup>
import { ref } from 'vue'

const selectedValue = ref(null)
const cardOptions = [
  { label: '选项一', value: 1, description: '这是选项一的描述' },
  { label: '选项二', value: 2, description: '这是选项二的描述' },
  { label: '选项三', value: 3, description: '这是选项三的描述' },
]
</script>

<template>
  <ProCheckCard v-model="selectedValue" :options="cardOptions">
    <template #option="{ option }">
      <div>
        <h3>{{ option.label }}</h3>
        <p>{{ option.description }}</p>
        <!-- 其他自定义内容，如图片、图标等 -->
      </div>
    </template>
  </ProCheckCard>
</template>

<style scoped>

</style>