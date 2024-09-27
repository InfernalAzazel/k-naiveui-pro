<script setup lang="ts">
import {Icon} from '@iconify/vue'
import type {DropdownDividerOption, DropdownGroupOption, DropdownOption, DropdownRenderOption} from "naive-ui"
import {useI18n} from "vue-i18n";

export interface ProToggleLanguageProps {
  options: Array<DropdownOption | DropdownGroupOption | DropdownDividerOption | DropdownRenderOption>
}
defineOptions({ name: 'ProToggleLanguage', inheritAttrs: false })
const props = defineProps<ProToggleLanguageProps>()
const { setLocale } = useI18n()

function handleSelect(key: string) {
  setLocale(key)
}
</script>

<template>
  <n-dropdown :options="props.options" @select="handleSelect" >
    <Icon class="cursor-pointer" icon="mdi:language" :height="24" :width="24"/>
  </n-dropdown>
</template>

<style scoped>

</style>