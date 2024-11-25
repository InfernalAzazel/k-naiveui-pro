<script setup lang="ts">
import { toRefs } from 'vue'

export interface ProCheckboxOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface ProCheckboxProps {
  options: ProCheckboxOption[]
  name?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

defineOptions({ name: 'ProCheckbox', inheritAttrs: false })
const modelValue = defineModel<Array<string | number> | null>({default: null})
const props = defineProps<ProCheckboxProps>()

const { options, name, disabled, size } = toRefs(props)
</script>

<template>
  <n-checkbox-group
      v-model:value="modelValue"
      :name="name"
      :disabled="disabled"
      :size="size"
  >
    <n-checkbox
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
    >
      {{ option.label }}
    </n-checkbox>
  </n-checkbox-group>
</template>

<style scoped>
</style>