<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { Icon } from '@iconify/vue';
import clsx from 'clsx';

export interface ProBreadcrumbOption {
  label: string;
  icon?: string;
  path?: string;
}

export interface ProBreadcrumbProps {
  customClass?: string | string[] | Record<string, boolean>;
  customLinkClass?: string | string[] | Record<string, boolean>;
  options: ProBreadcrumbOption[];
  separator?: string;
}

defineOptions({ name: 'ProBreadcrumb', inheritAttrs: false });

const props = defineProps<ProBreadcrumbProps>();
const emit = defineEmits(['item-click']);

const { customClass, customLinkClass, options, separator } = toRefs(props);

const breadcrumbClass = computed(() => clsx(customClass.value));

// 定义 breadcrumb-link 的类名
const breadcrumbLinkClass = computed(() =>
    clsx(
        'inline-flex',
        'space-x-1',
        'items-center',
        'no-underline',
        'text-[var(--n-text-color)]',
        'hover:text-[var(--n-text-color-hover)]',
        customLinkClass.value, // 合并用户传入的自定义链接类名
    ),
);

// 处理点击事件
const handleClick = (item: ProBreadcrumbOption) => {
  if (item.path) {
    emit('item-click', item.path);
  }
};
</script>

<template>
  <n-breadcrumb :class="breadcrumbClass" :separator="separator">
    <n-breadcrumb-item
        v-for="(item, index) in options"
        :key="index"
    >
      <div
          :class="breadcrumbLinkClass"
          @click="handleClick(item)"
          style="cursor: pointer;"
      >
        <Icon v-if="item.icon" :icon="item.icon" />
        <span>{{ item.label }}</span>
      </div>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>