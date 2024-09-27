<script setup lang="ts">
import {computed} from "vue";
import {useDark} from "@vueuse/core";

defineOptions({ name: 'ProBackground', inheritAttrs: false })

const isDark = useDark()
const color = (opacity: number) => {
  const colorValue = isDark.value ? 180 : 255
  return `rgba(${colorValue}, ${colorValue}, ${colorValue}, ${opacity / 10})`
}
const lightColor = computed(() => 'rgb(186, 224, 255)')
const darkColor = computed(() => 'rgb(9, 88, 217)')

const bg = computed(() => `linear-gradient(200deg, ${lightColor.value} 0%, ${darkColor.value} 100%)`)
</script>

<template>
  <div :style="{ background: bg }" class="flex relative h-screen overflow-hidden">
    <svg class="waves absolute bottom-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
      </defs>
      <g class="animate-wave">
        <use xlink:href="#gentle-wave" x="48" y="0" :fill="color(7)" />
        <use xlink:href="#gentle-wave" x="48" y="3" :fill="color(5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" :fill="color(3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" :fill="color(10)" />
      </g>
    </svg>
<!--    <div :style="{ background: color(10) }" class="absolute bottom-0 w-full h-[20vh]"></div>-->
    <slot />
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}
.animate-wave use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.animate-wave > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.animate-wave > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.animate-wave > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.animate-wave > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

</style>