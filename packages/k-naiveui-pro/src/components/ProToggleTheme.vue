<script setup lang="ts">
import { useDark } from '@vueuse/core'
import {Icon} from '@iconify/vue'

export interface ProToggleThemeProps {
  height?: number
  width?: number
}

defineOptions({ name: 'ProToggleTheme', inheritAttrs: false })
const props = withDefaults(defineProps<ProToggleThemeProps>(), {
  height: 24,
  width: 24
})

const isDark = useDark()

</script>

<template>
<Icon
    class="cursor-pointer"
    :icon="isDark ? 'ant-design:moon-outlined' : 'ant-design:sun-outlined'"
    :height="props.height"
    :width="props.width"
    @click="() => isDark = !isDark"
/>
</template>

<style scoped>

</style>