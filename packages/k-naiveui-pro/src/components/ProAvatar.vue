<script setup lang="ts">
import type {DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption} from "naive-ui"
// @ts-ignore
import defaultAvatar from '../assets/default-avatar.png'

export interface ProAvatarProps {
  name?: string;
  options: Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>
  src?: any | string
  size?: 'small' | 'medium' | 'large' | number
  lazy?: boolean
  round?: boolean
}

defineOptions({ name: 'ProAvatar', inheritAttrs: false })
const props = withDefaults(defineProps<ProAvatarProps>(),{
  size: 'medium',
  lazy: false,
  round: false,
})
const emit = defineEmits<{
  (e: 'select', key: string | number): void
}>()
</script>

<template>
  <n-dropdown :options="props.options" @select="(key: string | number) => emit('select', key)">
    <div class="flex flex-row cursor-pointer items-center space-x-1">
      <n-avatar :src='props.src || defaultAvatar' :size="props.size" :lazy="props.round" :round="props.round"/>
      <span>{{props?.name}}</span>
    </div>
  </n-dropdown>
</template>

<style scoped>

</style>