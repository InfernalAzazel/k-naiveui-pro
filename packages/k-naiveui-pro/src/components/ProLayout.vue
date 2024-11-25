<script setup lang="ts">
import type { MenuDividerOption, MenuGroupOption, MenuOption } from 'naive-ui'

export interface ProLayoutProps {
  title?: string
  headerHeight?: number
  isFooter?: boolean
  logo?: string | undefined
  logoSize?: number
  menus: Array<MenuOption | MenuDividerOption | MenuGroupOption>
  accordion?: boolean
  showTrigger?: boolean | 'bar' | 'arrow-circle'
  collapsed?: boolean
  collapsedWidth?: number
  collapsedIconSize?: number
  inverted?: boolean
  indent?: number
  openKeys?: Array<string>
  selectedKey?: string | null
  clickMenuItem?: (key: string, item: MenuOption) => void
  updateOpenKeys?: (keys: string[]) => void
}

defineOptions({ name: 'ProLayout', inheritAttrs: false })
const props = withDefaults(defineProps<ProLayoutProps>(), {
  title: 'Naive Pro',
  headerHeight: 60,
  isFooter: true,
  logoSize: 24,
  accordion: false,
  showTrigger: true,
  collapsed: false,
  collapsedWidth: 64,
  collapsedIconSize: 20,
  inverted: false,
  indent: 32,
})
const modelCollapsed = defineModel('collapsed', { default: false })
</script>

<template>
  <n-layout position="absolute">
    <!-- Header -->
    <n-layout-header class="flex flex-row items-center pl-10 pr-4 space-x-3" :style="`height: ${props.headerHeight}px;`" bordered>
      <!-- logo -->
      <slot name="header-start">
        <!-- logo -->
        <slot name="logo">
          <div class="flex flex-row justify-center items-center space-x-2">
            <n-image
                :width="props.logoSize"
                :height="props.logoSize"
                :src="props.logo ? props.logo : 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg'"
            />
            <span class="text-2xl"> {{ props.title }}</span>
          </div>
        </slot>
      </slot>
      <div class="flex-grow" />
      <!-- header-right -->
      <slot name="header-right">
        <slot name="actions" />
      </slot>
    </n-layout-header>

    <n-layout position="absolute" has-sider :style="`top: ${props.headerHeight}px;`">
      <!-- Sidebar -->
      <n-layout-sider
          :show-trigger="props.showTrigger"
          collapse-mode="width"
          :collapsed="modelCollapsed"
          :collapsed-width="props.collapsedWidth"
          @update-collapsed="(UCollapsed: boolean) => (modelCollapsed = UCollapsed)"
          :native-scrollbar="false"
          bordered
      >
        <n-menu
            :options="props.menus"
            :accordion="props.accordion"
            :collapsed="modelCollapsed"
            :collapsed-width="props.collapsedWidth"
            :collapsed-icon-size="props.collapsedIconSize"
            :indent="props.indent"
            :inverted="props.inverted"
            :expanded-keys="props.openKeys"
            :value="props.selectedKey"
            @update:value="props.clickMenuItem"
            @update:expanded-keys="props.updateOpenKeys"
        />
      </n-layout-sider>

      <!-- Main Content -->
      <n-layout-content>
        <slot />
      </n-layout-content>

      <!-- Footer -->
      <n-layout-footer v-if="props.isFooter" position="absolute" bordered>
        <div class="flex justify-center items-center">
          <slot name="footer" />
        </div>
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>