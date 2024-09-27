<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import {ref} from "vue";

const generateTabs = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    icon: 'ion:ellipsis-vertical-sharp',
    title: `Title ${i + 1}`
  }))
}
const tabs = ref(generateTabs())
</script>

<template>
  <ProTabs v-model="tabs"/>
</template>

<style scoped>

</style>