<script setup lang="ts">
import {Icon} from '@iconify/vue'
import {type MaybeElementRef, useFullscreen} from "@vueuse/core";
import {toRef} from "vue";
export interface ProToggleFullScreenProps {
  target?: MaybeElementRef
  fullScreenIcon?: string
  exitFullScreenIcon?: string
  height?: number
  width?: number
}

defineOptions({ name: 'ProToggleFullScreen', inheritAttrs: false })
const props = withDefaults(defineProps<ProToggleFullScreenProps>(), {
  fullScreenIcon: 'ant-design:fullscreen-outlined',
  exitFullScreenIcon: 'ant-design:fullscreen-exit-outlined',
  height: 24,
  width: 24
})
const targetRef = toRef(props, 'target')
const { isFullscreen, toggle } = useFullscreen(targetRef)

</script>

<template>
  <Icon
      class="cursor-pointer"
      :icon="isFullscreen? props.exitFullScreenIcon: props.fullScreenIcon"
      :height="props.height"
      :width="props.width"
      @click="toggle"
  />
</template>

<style scoped>

</style>