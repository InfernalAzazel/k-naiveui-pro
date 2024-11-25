<script setup lang="ts">
export interface ProDescriptionsProps {
  columns: Array<{
    title: string
    key: string
    render?: (data: any) => any
  }>
  data: Record<string, any>
  title?: string
  colNumber?: number
  size?: 'small' | 'medium' | 'large'
  bordered?: boolean
}
defineOptions({ name: 'ProDescriptions', inheritAttrs: false })
const props = withDefaults(defineProps<ProDescriptionsProps>(),{
  colNumber: 2,
  size: 'medium',
  bordered: false,
})
</script>

<template>
  <n-descriptions :title="props.title" :columns="colNumber" :size="props.size" :bordered="props.bordered" >
    <template v-for="column in props.columns" :key="column.key">
      <n-descriptions-item :label="column.title">
        <template v-if="column.render">
          {{ column.render(props.data) }}
        </template>
        <template v-else>
          {{ props.data[column.key] }}
        </template>
      </n-descriptions-item>
    </template>
  </n-descriptions>
</template>

<style scoped>
</style>