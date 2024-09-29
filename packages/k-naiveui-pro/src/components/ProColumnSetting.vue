<script setup lang="ts">
import { ref} from 'vue'
import { type TreeOption, type TreeDropInfo } from 'naive-ui'
import { Icon } from "@iconify/vue";

export interface ProColumnSettingProps {
  icon?: string
  height?: number
  width?: number
}
defineOptions({ name: 'ProColumnSetting', inheritAttrs: false })
const props = withDefaults(defineProps<ProColumnSettingProps>(), {
  icon: 'ant-design:setting-outlined',
  height: 24,
  width: 24
})

// 定义 modelValue，用于双向绑定列数据
const modelValue = defineModel<Array<any>>({default: []})

// 获取所有可见的列的 key
const getAllCheckedKeys = (columns: any[]): (string | number)[] => {
  let keys: (string | number)[] = []
  columns.forEach(col => {
    if (!col.hide) {
      keys.push(col.key)
    }
    if (col.children) {
      keys = keys.concat(getAllCheckedKeys(col.children))
    }
  })
  return keys
}

// 初始化 checkedKeys，包含所有未隐藏的列的 key
const checkedKeys = ref(getAllCheckedKeys(modelValue.value || []))

// 更新 checkedKeys，并同步更新列的 hide 属性
function updateCheckedKeys(
    keys: Array<string | number>,
    options: Array<TreeOption | null>,
    meta: {
      node: TreeOption | null
      action: 'check' | 'uncheck'
    }
) {
  checkedKeys.value = keys
  function updateNodeHide(columns: any[]) {
    columns.forEach(col => {
      if (col.key === meta.node?.key) {
        col.hide = meta.action === 'uncheck'
      }
      if (col.children) {
        updateNodeHide(col.children)
      }
    })
  }
  updateNodeHide(modelValue.value || [])
}

// 查找指定节点的兄弟节点数组和索引
function findSiblingsAndIndex (
    node: TreeOption,
    nodes?: TreeOption[]
): [TreeOption[], number] | [null, null] {
  if (!nodes) return [null, null]
  for (let i = 0; i < nodes.length; ++i) {
    const siblingNode = nodes[i]
    if (siblingNode.key === node.key) return [nodes, i]
    if (siblingNode.children) {
      const [siblings, index] = findSiblingsAndIndex(node, siblingNode.children)
      if (siblings !== null && index !== null) return [siblings, index]
    }
  }
  return [null, null]
}

// 处理拖拽事件，更新列的顺序
function handleDrop ({ node, dragNode, dropPosition }: TreeDropInfo) {
  // 从原位置移除拖拽的节点
  const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(
      dragNode,
      modelValue.value
  )
  if (dragNodeSiblings === null || dragNodeIndex === null) return
  const [dragNodeRemoved] = dragNodeSiblings.splice(dragNodeIndex, 1)

  // 将拖拽的节点插入新位置
  if (dropPosition === 'inside') {
    if (!node.children) {
      node.children = []
    }
    node.children.unshift(dragNodeRemoved)
  } else {
    const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(
        node,
        modelValue.value
    )
    if (nodeSiblings === null || nodeIndex === null) return
    if (dropPosition === 'before') {
      nodeSiblings.splice(nodeIndex, 0, dragNodeRemoved)
    } else if (dropPosition === 'after') {
      nodeSiblings.splice(nodeIndex + 1, 0, dragNodeRemoved)
    }
  }
  // 触发响应式更新
  modelValue.value = [...modelValue.value]
}
</script>

<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button tertiary circle type="primary">
        <template #icon>
          <Icon
              :icon="props.icon"
              :height="props.height"
              :width="props.width"
          />
        </template>
      </n-button>
    </template>
    <n-tree
        :data="modelValue"
        label-field="title"
        key-field="key"
        :checked-keys="checkedKeys"
        @update:checked-keys="updateCheckedKeys"
        @drop="handleDrop"
        expand-on-click
        cascade
        multiple
        checkable
        draggable>
    </n-tree>
  </n-popover>

</template>

<style scoped>

</style>