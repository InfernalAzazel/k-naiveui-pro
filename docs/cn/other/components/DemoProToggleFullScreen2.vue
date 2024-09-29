<docs lang="md">
---
title: 指定需要全屏的元素
---
</docs>
<script lang="ts" setup>
import { ref } from 'vue'
const fullscreenTarget = ref<HTMLElement | null>(null)

</script>

<template>
  <pro-toggle-full-screen/>
  <div ref="fullscreenTarget">
    <!-- 需要全屏的内容 -->
    <p>这是需要全屏显示的内容。</p>
  </div>
</template>

<style scoped>

</style>