<script setup lang="ts">
import {toRefs} from 'vue';
import { Icon } from '@iconify/vue';
import {useLocalStorage} from "@vueuse/core";

export interface ProTabData {
  icon?: string;
  title?: string;
  path?: string;
}

export interface ProTabsProps {
  storageKey?: string;
}

defineOptions({ name: 'ProTabs', inheritAttrs: false });
const modelValue = defineModel({default: []})
const props = withDefaults(defineProps<ProTabsProps>(), {
  storageKey: 'proTabs',
});
const emit = defineEmits<{
  (e: 'select', path: string): void
}>()
const {storageKey} = toRefs(props)
const tabHistory = useLocalStorage<ProTabData[]>(storageKey.value, modelValue.value || []);
const selected = useLocalStorage<number>(`${storageKey.value}-selected`, 0);



function handleRemove(index: number) {
  if (index >= 0 && index < modelValue.value.length) {
    modelValue.value.splice(index, 1);
    tabHistory.value = [...modelValue.value];
    selected.value = selected.value >= tabHistory.value.length ? tabHistory.value.length - 1 : selected.value;
  }

}

const horizontalScroll = (event: WheelEvent) => {
  const { deltaY } = event;
  const proTabs = document.querySelector('.pro-tabs');
  if (proTabs) {
    proTabs.scrollLeft += deltaY;
  }
}

function handleSelect(index: number) {
  selected.value = index
  emit('select', tabHistory.value[index].path || '')
}


</script>

<template>
  <n-el
      class="pro-tabs flex space-x-1 w-full h-[40px] px-[20px] overflow-x-auto overflow-x-hidden  text-ellipsis whitespace-nowrap items-center scroll-smooth"
      @wheel="horizontalScroll"
  >
    <n-el
        v-for="(tab, index) in modelValue"
        :key="index"
        class="flex flex-row cursor-pointer items-center pl-2 pr-2 space-x-2 border dark:border-gray-800 rounded hover:border-[var(--primary-color-hover)] hover:text-[var(--primary-color-hover)]"
        :class="{ 'border-[var(--primary-color-pressed)] text-[var(--primary-color-pressed)]': selected === index }"
        @click="()=> handleSelect(index)"
        @wheel="horizontalScroll"
    >
      <Icon v-if="tab.icon" :icon="tab.icon" />
      <span>{{ tab.title }}</span>
      <Icon icon="carbon:close" @click.stop="handleRemove(index)" />
    </n-el>
  </n-el>
</template>

<style scoped>
</style>