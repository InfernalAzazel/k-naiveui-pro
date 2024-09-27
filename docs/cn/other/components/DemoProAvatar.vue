<docs lang="md">
---
title: 基础用法
---
</docs>
<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import {createDiscreteApi} from "naive-ui";
import {h} from "vue";

const { message} = createDiscreteApi(
    ['message'],
)

function renderIcon(icon: string) {
  return () => {
    return h(Icon, {icon: icon})
  }
}

const options = [
  {
    label: '用户资料',
    key: 'profile',
    icon: renderIcon('ei:user')
  },
  {
    label: '编辑用户资料',
    key: 'editProfile',
    icon: renderIcon('material-symbols-light:edit-sharp')
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon('material-symbols-light:logout')
  }
]
function handleSelect(key: string | number) {
  message.info(String(key))
}

</script>

<template>
  <div class="flex justify-center">
    <pro-avatar class="w-40" :options="options" name="admin" @select="handleSelect"/>
  </div>

</template>

<style scoped>

</style>