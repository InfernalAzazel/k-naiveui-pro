<script setup lang="ts">
import { resolveComponent, useAttrs, ref } from 'vue'
import type { FormInst } from 'naive-ui'
import type { FormProps} from 'naive-ui'
import type { VNode } from 'vue';


export interface ProBaseFormColumn {
  label: string
  prop: string
  component: string | VNode
  props?: Record<string, any>
  span?: number
  show?: boolean

}

export interface ProBaseFormProps extends  /* @vue-ignore */ FormProps {
  columns: ProBaseFormColumn[],
  cols?: number
  xGap?: number
  yGap?: number
  columnsSpan?: number
  footerSpan?: number
  collapsed?: boolean
  collapsedRows?: number
}


defineOptions({ name: 'ProBaseForm', inheritAttrs: false })
const props = withDefaults(defineProps<ProBaseFormProps>(), {
  cols: 24,
  xGap: 12,
  yGap: 0,
  columnsSpan: 24,
  footerSpan: 24,
  collapsed: false,
  collapsedRows: 1,
})
const formInstRef = ref<FormInst | null>(null)
const modelValue = defineModel({default: {}})
const attrs = useAttrs()
function renderComponent(column: ProBaseFormColumn) {
  return typeof column.component === 'string' ? resolveComponent(column.component) : column.component
}

defineExpose({inst: ()=> formInstRef.value})
</script>

<template>
  <n-form ref="formInstRef" :model="modelValue" v-bind="attrs">
    <n-space vertical>
      <slot name="header" />
      <n-grid
          :cols="props.cols"
          :x-gap="props.xGap"
          :y-gap="props.yGap"
          :collapsed="props.collapsed"
          :collapsed-rows="props.collapsedRows"
      >
        <template v-for="(column, _) in columns" :key="_">
          <n-form-item-gi v-if="column.show !== false"
                          :span="column.span || props.columnsSpan"
                          :label="column.label"
                          :path="column.prop">
            <component :is="renderComponent(column)"
                       v-bind="column.props"
                       v-model:value="modelValue[column.prop]"
                       @update:value="(value: any) => modelValue[column.prop] = value" />
          </n-form-item-gi>
        </template>
        <n-grid-item suffix :span="props.footerSpan" #="{ overflow }" >
          <slot name="footer" :overflow="overflow as boolean"/>
        </n-grid-item>
      </n-grid>
    </n-space>
  </n-form>
</template>