<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import {ref} from "vue";

const fullscreenRef = ref<HTMLElement | null>(null)
</script>

<template>


  <div ref="fullscreenRef">
    <pro-toggle-full-screen :target="fullscreenRef"/>
  </div>
</template>

<style scoped>

</style>