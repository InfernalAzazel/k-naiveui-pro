<script setup lang="ts">
import { toRefs } from 'vue'

export interface ProRadioOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface ProRadioProps {
  options: ProRadioOption[]
  name?: string
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

defineOptions({ name: 'ProRadio', inheritAttrs: false })
const modelValue = defineModel<string | number | boolean | null>({default: null})
const props = defineProps<ProRadioProps>()
const { options, name, disabled, size } = toRefs(props)

</script>

<template>
  <n-radio-group
      v-model:value="modelValue"
      :name="name"
      :disabled="disabled"
      :size="size"
  >
    <n-radio
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
    >
      {{ option.label }}
    </n-radio>
  </n-radio-group>
</template>

<style scoped>
</style>