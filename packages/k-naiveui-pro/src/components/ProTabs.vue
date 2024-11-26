<script lang="ts" setup>
import {computed, ref} from 'vue';
import {Icon} from '@iconify/vue';

export interface ProTabData {
  title?: string; // 选项卡的标题
  path?: string; // 路由路径
}

export interface ProTabsProps {
  borderStyle?: 'all' | 'bottom';
}

defineOptions({name: 'ProTabs', inheritAttrs: false});
defineExpose({
  setSelected
});
const props = withDefaults(defineProps<ProTabsProps>(), {
  borderStyle: 'all', // 默认值为完整边框
});

const modelValue = defineModel<ProTabData[]>({default: []});

const emit = defineEmits<{
  (e: 'select', path: string): void; // 选项卡切换事件
}>();
// 当前选中的选项卡索引
const selected = ref(0);
// 动态计算边框样式
const borderClass = computed(() => {
  return props.borderStyle === 'bottom'
      ? 'border-b border-[var(--border-color)]'
      : 'border border-[var(--border-color)]';
});

// 删除选项卡（第一个选项卡不可删除）
function handleRemove(index: number) {
  if (index === 0) return; // 阻止删除第一个选项卡
  modelValue.value.splice(index, 1); // 移除选项卡
  if (selected.value >= modelValue.value.length) {
    selected.value = modelValue.value.length - 1; // 更新选中状态
  }
}

// 横向滚动逻辑
const horizontalScroll = (event: WheelEvent) => {
  const {deltaY} = event;
  const proTabs = document.querySelector('.pro-tabs');
  if (proTabs) {
    proTabs.scrollLeft += deltaY; // 横向滚动
  }
};

// 选项卡切换逻辑
function handleSelect(index: number) {
  selected.value = index; // 更新当前选中的索引
  emit('select', modelValue.value[index].path || ''); // 触发选中事件
}

// 设置选中的选项卡
function setSelected(index: number) {
  if (index >= 0 && index < modelValue.value.length) {
    selected.value = index; // 更新选中索引
    emit('select', modelValue.value[index]?.path || ''); // 触发选中事件
  }
}

</script>

<template>
  <n-el  class="flex flex-row items-center pr-4" :class="borderClass" tag="div">
    <n-el
        class="pro-tabs flex space-x-1 w-full h-[40px] px-[20px] overflow-x-auto overflow-x-hidden text-ellipsis whitespace-nowrap items-center scroll-smooth"
        tag="div"
        @wheel="horizontalScroll"
    >
      <n-el
          v-for="(tab, index) in modelValue"
          :key="index"
          :class="[{ 'border-[var(--primary-color-pressed)] text-[var(--primary-color-pressed)]': selected === index }]"
          class="flex flex-row cursor-pointer items-center pl-2 pr-2 space-x-2 border dark:border-gray-800 rounded hover:border-[var(--primary-color-hover)] hover:text-[var(--primary-color-hover)]"
          tag="div"
          @click="() => handleSelect(index)"
          @wheel="horizontalScroll"
      >
        <!-- 显示选中状态的小圆点 -->
        <span
            v-if="selected === index"
            class="w-2 h-2 bg-[var(--primary-color-pressed)] rounded-full"
        ></span>
        <span>{{ tab.title }}</span>
        <!-- 删除按钮（第一个选项卡禁用删除） -->
        <Icon
            v-if="index !== 0"
            icon="carbon:close"
            @click.stop="handleRemove(index)"
        />
      </n-el>
    </n-el>
    <div class="flex-grow"/>
    <slot name="toolbar" />
  </n-el>
</template>

<style scoped>
</style>