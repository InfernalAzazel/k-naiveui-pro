<script lang="ts" setup>
import {computed, ref, useAttrs} from 'vue'
import {Icon} from '@iconify/vue';
import type {FormValidateCallback, ShouldRuleBeApplied} from 'naive-ui/es/form/src/interface'
import type {ButtonProps} from 'naive-ui'
import {default as ProBaseForm, type ProBaseFormColumn, type ProBaseFormProps} from './ProBaseForm.vue'
import type {ProFormToolBar} from "./ProForm.vue";

export interface ProFormStepsToolBar extends ProFormToolBar {
  prev?: boolean
  prevProps?: ButtonProps
  next?: boolean
  nextProps?: ButtonProps
}

export interface ProStepsFormColumn {
  label: string
  description?: string | any
  children: ProBaseFormColumn[]
}

export interface ProStepsFormProps extends Omit<ProBaseFormProps, 'columns'> {
  columns: ProStepsFormColumn[]
  toolbar?: ProFormStepsToolBar
}

defineOptions({name: 'ProStepsForm', inheritAttrs: false})

const props = withDefaults(defineProps<ProStepsFormProps>(), {
  toolbar: () => ({
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
const modelValue = defineModel<Record<string, any>>({default: {}})
const attrs = useAttrs()
const formInstRef = ref()
const currentStep = ref(1)
const isMinStep = computed(() => currentStep.value === 1)
const isMaxStep = computed(() => currentStep.value === props.columns.length)
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
    <ProBaseForm ref="formInstRef" v-model="modelValue" :columns="props.columns[currentStep - 1].children"
                 v-bind="attrs">
      <template #header>
        <n-steps :current="currentStep">
          <NStep v-for="(step, index) in props.columns" :key="index" :description="step.description"
                 :title="step.label"/>
        </n-steps>
      </template>
      <!-- 工具栏 -->
      <template #footer>
        <n-space :justify="props.toolbar.justify">
          <slot name="toolbar">
            <n-button v-if="props.toolbar.prev" :disabled="isMinStep" v-bind="props.toolbar.prevProps"
                      @click="prevStep">
              <template #icon>
                <icon icon="ion:arrow-back-outline"/>
              </template>
            </n-button>
            <n-button v-if="props.toolbar.next" :disabled="isMaxStep" v-bind="props.toolbar.nextProps"
                      @click="nextStep">
              <template #icon>
                <icon icon="ion:arrow-forward-outline"/>
              </template>
            </n-button>
            <n-button v-if="props.toolbar.submit" :disabled="!isMaxStep" v-bind="toolbar.submitProps" @click="submit">
              {{ props.toolbar.submitText }}
            </n-button>
            <n-button v-if="props.toolbar.reset" v-bind="props.toolbar.resetProps" @click="reset">
              {{ props.toolbar.resetText }}
            </n-button>
          </slot>
        </n-space>
      </template>
    </ProBaseForm>
  </n-space>
</template>