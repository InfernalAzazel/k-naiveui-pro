<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {type MaybeElementRef, useFullscreen} from "@vueuse/core";
export interface ProToggleFullScreenProps {
  target: MaybeElementRef
  height?: number
  width?: number
}

defineOptions({ name: 'ProToggleFullScreen', inheritAttrs: false })
const props = withDefaults(defineProps<ProToggleFullScreenProps>(), {
  height: 24,
  width: 24
})
const { isFullscreen, toggle } = useFullscreen(props.target)

</script>

<template>
  <Icon
      class="cursor-pointer"
      :icon="isFullscreen?'ant-design:fullscreen-exit-outlined':'ant-design:fullscreen-outlined'"
      :height="props.height"
      :width="props.width"
      @click="toggle"
  />
</template>

<style scoped>

</style>