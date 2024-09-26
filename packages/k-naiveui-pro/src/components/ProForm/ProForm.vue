<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import type { ProFormProps} from './props'
import type { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import { ProBaseForm } from "../ProBaseForm"

defineOptions({ name: 'ProForm', inheritAttrs: false })
const props = withDefaults(defineProps<ProFormProps>(), {
  toolbar:() => ({
    justify: 'start',
    submit: true,
    submitText: '提交',
    submitProps: {
      type: 'primary',
    },
    reset: true,
    resetText: '重置',
  })
})
const modelValue = defineModel()
const attrs = useAttrs()
const formInstRef = ref()
const emits = defineEmits<{
  (e: 'submit', isValid: boolean): void
  (e: 'reset'): void
}>()


// 定义暴露的方法
const validate = (callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) =>
    formInstRef.value?.inst().validate(callback, shouldRuleBeApplied)
const restoreValidation = () => formInstRef.value?.inst().restoreValidation()
const resetFields = () => props.columns.forEach(column => modelValue.value[column.prop] = '')

function submit() {
  validate((errors: any) => emits('submit', !errors))
}

function reset() {
  resetFields()
  emits('reset')
}

defineExpose({
  validate,
  restoreValidation,
  resetFields,
})

</script>

<template>
  <ProBaseForm ref="formInstRef" v-model="modelValue" v-bind="attrs" :columns="props.columns">
    <template #footer>
      <n-space :justify="toolbar.justify">
        <slot name="toolbar">
          <n-button v-if="props.toolbar.submit" v-bind="props.toolbar.submitProps" @click="submit">{{ props.toolbar.submitText }}</n-button>
          <n-button v-if="props.toolbar.reset" v-bind="props.toolbar.resetProps" @click="reset">{{ props.toolbar.resetText }}</n-button>
        </slot>
      </n-space>
    </template>
  </ProBaseForm>
</template>