<script setup lang="ts">
import { useDark } from '@vueuse/core'
import {Icon} from '@iconify/vue'

export interface ProToggleThemeProps {
  moonIcon?: string
  sunIcon?: string
  height?: number
  width?: number
}

defineOptions({ name: 'ProToggleTheme', inheritAttrs: false })
const props = withDefaults(defineProps<ProToggleThemeProps>(), {
  moonIcon: 'ant-design:moon-outlined',
  sunIcon: 'ant-design:sun-outlined',
  height: 24,
  width: 24
})

const isDark = useDark()

</script>

<template>
<Icon
    class="cursor-pointer"
    :icon="isDark ? props.moonIcon : props.sunIcon"
    :height="props.height"
    :width="props.width"
    @click="() => isDark = !isDark"
/>
</template>

<style scoped>

</style>