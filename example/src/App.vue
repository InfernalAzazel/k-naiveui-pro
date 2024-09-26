<template>
  <div style="height: 50vh;">
    <ProLayout :menus="menuOptions" v-model:collapsed="collapsed">
      <template #actions>
        <n-button>功能1</n-button>
        <n-button>功能2</n-button>
        <n-button>功能3</n-button>
      </template>
      <template #footer>
        © 2024 Your Company. All rights reserved.
      </template>
      我是内容
    </ProLayout>
  </div>
</template>
<script setup lang="ts">
import { h, ref } from 'vue'
import { Icon } from '@iconify/vue'

function renderIcon (icon: string) {
  return () => h(Icon, {icon: icon})
}

const menuOptions = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon('ion:chevron-up-outline')
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon('ion:chevron-up-outline'),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon('ion:chevron-up-outline'),
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon('ion:chevron-up-outline'),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon('ion:chevron-up-outline'),

          },
          {
            label: '羊男',
            key: 'sheep-man',

          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon('ion:chevron-up-outline'),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const collapsed = ref(true)
</script>