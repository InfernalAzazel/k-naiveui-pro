<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import type { MenuDividerOption, MenuGroupOption, MenuOption } from 'naive-ui'

export interface ProLayoutProps {
  title?: string
  isMobile?: boolean
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
  selectedKey?:	string | null
  clickMenuItem?: (key: string, item: MenuOption) => void
  updateOpenKeys?: (keys: string[]) => void
}

defineOptions({ name: 'ProLayout', inheritAttrs: false })
const props = withDefaults(defineProps<ProLayoutProps>(), {
  title: 'Naive Pro',
  isMobile: false,
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
const modelCollapsed= defineModel('collapsed', {default: false})

const menuDrawerActive = ref(false)
const rightDrawerActive = ref(false)


function handleRightDrawer() {
  rightDrawerActive.value = true
}
function handleMenuDrawer() {
  menuDrawerActive.value = true
}
</script>

<template>
  <n-layout position="absolute">
    <!-- Header -->
    <n-layout-header class="flex flex-row items-center pl-10 pr-4 space-x-4" :style="`height: ${props.headerHeight}px;`" bordered>
      <!-- logo -->
      <slot name="header-start">
        <!-- apps -->
        <slot v-if="props.isMobile" name="apps">
          <n-button quaternary @click="handleMenuDrawer" >
            <template #icon>
              <Icon icon="ion:apps-sharp"></Icon>
            </template>
          </n-button>
        </slot>
        <!-- logo -->
        <slot name="logo">
          <div class="flex flex-row justify-center items-center space-x-2">
            <n-image
              :width="props.logoSize" :height="props.logoSize"
              :src="props.logo?  props.logo: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg'" />
            <span class="text-2xl"> {{ props.title }}</span>
          </div>
        </slot>
      </slot>
      <div class="flex-grow"/>
      <!-- header-right -->
     <slot name="header-right" >
       <div v-if="props.isMobile">
         <n-button quaternary @click="handleRightDrawer">
           <template #icon>
             <Icon icon="ion:ellipsis-vertical-sharp"></Icon>
           </template>
         </n-button>
         <n-drawer  v-model:show="rightDrawerActive"  placement="right">
           <n-drawer-content >
             <slot name="mobile-actions" />
           </n-drawer-content>
         </n-drawer>
       </div>
       <slot v-else name="actions" />
     </slot>
    </n-layout-header>
    <n-layout position="absolute" has-sider :style="`top: ${props.headerHeight}px;`">
      <!-- Sidebar -->
      <n-layout-sider  v-if="!props.isMobile"
                       :show-trigger="props.showTrigger"
                       collapse-mode="width"
                       :collapsed="modelCollapsed"
                       :collapsed-width="props.collapsedWidth"
                       @update-collapsed="(UCollapsed: boolean) => modelCollapsed = UCollapsed"
                       :native-scrollbar="false"
                       bordered
      >
        <n-menu  :options="props.menus"
                 :accordion="props.accordion"
                 :collapsed="modelCollapsed"
                 :collapsed-width="props.collapsedWidth"
                 :collapsed-icon-size="props.collapsedIconSize"
                 :indent="props.indent"
                 :inverted="props.inverted"
                 :expanded-keys="props.openKeys"
                 :value="props.selectedKey"
                 @update:value="props.clickMenuItem"
                 @update:expanded-keys="props.updateOpenKeys" />
      </n-layout-sider>
      <n-drawer v-else v-model:show="menuDrawerActive" placement="left">
        <n-drawer-content>
          <n-menu  :options="props.menus"
                   :accordion="props.accordion"
                   :collapsed="modelCollapsed"
                   :collapsed-width="props.collapsedWidth"
                   :collapsed-icon-size="props.collapsedIconSize"
                   :indent="props.indent"
                   :inverted="props.inverted"
                   :expanded-keys="props.openKeys"
                   :value="props.selectedKey"
                   @update:value="props.clickMenuItem"
                   @update:expanded-keys="props.updateOpenKeys" />
        </n-drawer-content>
      </n-drawer>
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