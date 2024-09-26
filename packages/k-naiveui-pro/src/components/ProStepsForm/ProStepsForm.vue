<script setup lang="ts">
import { ref, useAttrs, computed } from 'vue'
import {  ProStepsFormProps } from './props'
import { Icon } from '@iconify/vue';
import { FormValidateCallback, ShouldRuleBeApplied } from 'naive-ui/es/form/src/interface'
import {ProBaseForm} from '../ProBaseForm'

defineOptions({ name: 'ProStepsForm', inheritAttrs: false })

const props = withDefaults(defineProps<ProStepsFormProps>(), {
  toolbar:() => ({
    justify: 'start',
    submit: true,
    submitText: '提交',
    submitProps: {
      type: 'primary',
    },
    reset: true,
    resetText: '重置',
    prev: true,
    next: true,
  })
})
const modelValue = defineModel({default:{}})
const attrs = useAttrs()
const formInstRef = ref()
const currentStep = ref(1)
const isMinStep = computed(()=> currentStep.value === 1)
const isMaxStep = computed(()=> currentStep.value === props.columns.length)
const emits = defineEmits<{
  (e: 'submit', isValid: boolean): void
  (e: 'reset'): void
}>()

// 定义暴露的方法
const validate = (callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) =>
    formInstRef.value?.inst().validate(callback, shouldRuleBeApplied)
const restoreValidation = () => formInstRef.value?.inst().restoreValidation()
const resetFields = () => props.columns[currentStep.value - 1].children.forEach(column => {
  modelValue.value[column.prop] = ''
})

function submit() {
  validate((errors: any) => emits('submit', !errors))
}

function reset() {
  resetFields()
  emits('reset')
}


const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

const nextStep = () => {
  if (currentStep.value < props.columns.length) {
    currentStep.value++
    for (const column of props.columns[currentStep.value - 1].children) {
      if (!(column.prop in modelValue.value)) {
        modelValue.value[column.prop] = ''
      }
    }
  }
}

defineExpose({
  validate,
  restoreValidation,
  resetFields,
})
</script>

<template>
  <n-space vertical>
    <ProBaseForm ref="formInstRef" v-model="modelValue" v-bind="attrs" :columns="props.columns[currentStep - 1].children">
      <template #header>
        <n-steps :current="currentStep">
          <NStep v-for="(step, index) in props.columns" :key="index" :title="step.label" :description="step.description"/>
        </n-steps>
      </template>
      <!-- 工具栏 -->
      <template #footer>
        <n-space :justify="props.toolbar.justify" >
          <n-button v-if="props.toolbar.prev" v-bind="props.toolbar.prevProps" :disabled="isMinStep" @click="prevStep">
            <template #icon><icon icon="ion:arrow-back-outline"/></template>
          </n-button>
          <n-button v-if="props.toolbar.next" v-bind="props.toolbar.nextProps" :disabled="isMaxStep" @click="nextStep">
            <template #icon><icon icon="ion:arrow-forward-outline"/></template>
          </n-button>
          <n-button v-if="props.toolbar.submit" v-bind="toolbar.submitProps" :disabled="!isMaxStep" @click="submit">{{ props.toolbar.submitText }}</n-button>
          <n-button v-if="props.toolbar.reset" v-bind="props.toolbar.resetProps" @click="reset">{{ props.toolbar.resetText }}</n-button>
        </n-space>
      </template>
    </ProBaseForm>
  </n-space>
</template>