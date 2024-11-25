<script setup lang="ts">
import { computed } from 'vue'

type ProCheckCardValue = string | number

export interface ProCheckCardOption {
  label?: string
  value: ProCheckCardValue
  disabled?: boolean
  description?: string
  // 其他自定义属性
}

export interface ProCheckCardProps {
  value?: ProCheckCardValue | ProCheckCardValue[]
  modelValue?: ProCheckCardValue | ProCheckCardValue[]
  options: ProCheckCardOption[]
  multiple?: boolean
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
}
defineOptions({ name: 'ProCheckCard', inheritAttrs: false })
const props = defineProps<ProCheckCardProps>()
const emit = defineEmits(['update:modelValue', 'change'])

// 计算选中值，支持 modelValue 和 value，两者等效
const selectedValue = computed({
  get: () => props.modelValue ?? props.value,
  set: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})

// 判断是否多选模式
const isMultiple = computed(() => props.multiple)

// 定义 isSelected 函数，用于判断选项是否被选中
function isSelected(value: ProCheckCardValue) {
  if (isMultiple.value) {
    return Array.isArray(selectedValue.value) && selectedValue.value.includes(value)
  } else {
    return selectedValue.value === value
  }
}

// 处理点击事件
function handleClick(option: ProCheckCardOption) {
  if (props.disabled || option.disabled) {
    return
  }
  if (isMultiple.value) {
    const currentValues = Array.isArray(selectedValue.value) ? [...selectedValue.value] : []
    const valueIndex = currentValues.indexOf(option.value)
    if (valueIndex > -1) {
      currentValues.splice(valueIndex, 1)
    } else {
      currentValues.push(option.value)
    }
    selectedValue.value = currentValues
  } else {
    selectedValue.value = option.value
  }
}
</script>

<template>
  <div class="pro-check-card">
    <div
        v-for="option in props.options"
        :key="option.value"
        class="pro-check-card-item"
    >
      <n-card
          :size="props.size"
          :hoverable="!props.disabled && !option.disabled"
          :class="{
          'pro-check-card-selected': isSelected(option.value),
          'pro-check-card-disabled': props.disabled || option.disabled,
        }"
          @click="handleClick(option)"
      >
        <template #header>
          <div class="pro-check-card-header">
            <span>{{ option.label }}</span>
            <span v-if="isMultiple">
              <n-checkbox
                  :disabled="props.disabled || option.disabled"
                  :checked="isSelected(option.value)"
              />
            </span>
            <span v-else>
              <n-radio
                  :disabled="props.disabled || option.disabled"
                  :checked="isSelected(option.value)"
              />
            </span>
          </div>
        </template>
        <div>
          <slot name="option" :option="option">
            <!-- 默认内容，可以在这里展示 option.description 或其他内容 -->
            <p>{{ option.description }}</p>
          </slot>
        </div>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.pro-check-card {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.pro-check-card-item {
  width: calc(33.333% - 10.666px); /* 三列布局，减去 gap 的影响 */
}

.pro-check-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pro-check-card-selected {
  border: 1px solid var(--color-primary);
}

.pro-check-card-disabled {
  opacity: 0.6;
  pointer-events: none;
}
</style>