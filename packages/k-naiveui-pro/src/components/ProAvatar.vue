<script setup lang="ts">
import type {DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption} from "naive-ui"
import defaultAvatar from '../assets/default-avatar.png'
import {useAttrs} from "vue";

export interface ProAvatarProps {
  name?: string;
  options: Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>
  src?: any | string
}
const attrs = useAttrs()
defineOptions({ name: 'ProAvatar', inheritAttrs: false })
const props = defineProps<ProAvatarProps>()
</script>

<template>
  <n-dropdown :options="props.options" v-bind="attrs">
    <div class="flex flex-row cursor-pointer items-center space-x-1">
      <n-avatar :src='props.src || defaultAvatar' round/>
      <span>{{props?.name}}</span>
    </div>
  </n-dropdown>
</template>

<style scoped>

</style>