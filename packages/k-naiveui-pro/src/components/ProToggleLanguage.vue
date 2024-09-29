<script setup lang="ts">
import {Icon} from '@iconify/vue'
import type {DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption} from "naive-ui"

export interface ProToggleLanguageProps {
  options?: Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>
  icon?: string
  height?: number
  width?: number
}
defineOptions({ name: 'ProToggleLanguage', inheritAttrs: false })
const props = withDefaults(defineProps<ProToggleLanguageProps>(), {
  icon: 'mdi:language',
  height: 24,
  width: 24
})
const emit = defineEmits<{
  (e: 'select', key: string | number): void
}>()

</script>

<template>
  <n-dropdown :options="props.options" @select="(key) => emit('select', key)">
    <Icon class="cursor-pointer" :icon="props.icon" :height="props.height" :width="props.width"/>
  </n-dropdown>
</template>

<style scoped>

</style>