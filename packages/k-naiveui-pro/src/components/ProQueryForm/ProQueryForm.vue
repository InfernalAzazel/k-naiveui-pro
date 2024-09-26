<script setup lang="ts">
import { ref, useAttrs, mergeProps } from 'vue'
import { ProQueryFormProps } from './props'
import { ProBaseForm } from '../ProBaseForm'
import { Icon } from '@iconify/vue'

defineOptions({ name: 'ProQueryForm', inheritAttrs: false })
const props = withDefaults(defineProps<ProQueryFormProps>(), {
  showNumber: 3,
  defaultCollapsed: true,
  toolbar: () => ({
    justify: 'end',
    search: true,
    searchText: '搜索',
    searchProps: {
      type: 'primary'
    },
    reset: true,
    resetText: '重置'
  })
})
const emits = defineEmits<{
  (e: 'search'): void
  (e: 'reset'): void
}>()
const modelValue = defineModel()
const attrs = useAttrs()
const formInstRef = ref()
const collapsed = ref(props.defaultCollapsed)

// 定义暴露的方法
const resetFields = () => props.columns.forEach(column => modelValue.value[column.prop] = '')

function search() {
  emits('search')
}

function reset() {
  resetFields()
  emits('reset')
}

defineExpose({
  resetFields
})
</script>

<template>
  <ProBaseForm
      ref="formInstRef"
      v-model="modelValue"
      v-bind="mergeProps(attrs, {
      labelPlacement: 'left',

    })"
      :columns="props.columns"
      :columns-span="1"
      :footer-span="1"
      :cols="props.showNumber"
      :x-gap="12"
      :y-gap="0"
      :collapsed="collapsed"
  >
    <!-- 工具栏 -->
    <template #footer="{overflow}">
      <n-space :justify="toolbar.justify">
        <slot name="toolbar">
          <n-button v-if="props.toolbar.search" v-bind="props.toolbar.searchProps" @click="search">
            {{ props.toolbar.searchText }}
          </n-button>
          <n-button v-if="props.toolbar.reset" v-bind="props.toolbar.resetProps" @click="reset">
            {{ props.toolbar.resetText }}
          </n-button>
          <n-button text icon-placement="right" @click="collapsed = !collapsed">
            <template #icon>
              <icon :icon="overflow? 'ion:chevron-down-outline': 'ion:chevron-up-outline'" />
            </template>
            <span>{{ overflow ? '展开' : '收起' }}</span>
          </n-button>
        </slot>
      </n-space>
    </template>
  </ProBaseForm>
</template>