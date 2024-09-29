# ProToggleFullScreen

> `ProToggleFullScreen` 是一个用于切换全屏状态的 Vue 3 组件。它依赖于 `@vueuse/core` 的 `useFullscreen` 组合式函数，实现对指定元素的全屏控制。组件会根据当前的全屏状态显示不同的图标，点击图标即可在全屏和退出全屏之间切换。

<demo path="./components/DemoProToggleFullScreen" />


## Props

| 参数                 | 类型                | 可选值 | 默认值                                     | 说明                 |
|--------------------|-------------------|-----|-----------------------------------------|--------------------|
| target             | `MaybeElementRef` | —   | —                                       | 可选，需要全屏的目标元素，默认为文档 |
| height             | `number`          | —   | `24`                                    | 图标的高度，单位为像素        |
| width              | `number`          | —   | `24`                                    | 图标的宽度，单位为像素        |
| fullScreenIcon     | `string`          | —   | `'ant-design:fullscreen-outlined'`      | 进入全屏状态时显示的图标       |
| exitFullScreenIcon | `string`          | —   | `'ant-design:fullscreen-exit-outlined'` | 退出全屏状态时显示的图标       |



## 使用示例

### 基本用法

```vue
<template>
  <ProToggleFullScreen />
</template>

<script setup lang="ts">
import ProToggleFullScreen from './ProToggleFullScreen.vue'
</script>
```

### 自定义全屏和退出全屏的图标

```vue
<template>
  <ProToggleFullScreen
    fullScreenIcon="mdi:fullscreen"
    exitFullScreenIcon="mdi:fullscreen-exit"
  />
</template>

<script setup lang="ts">
import ProToggleFullScreen from './ProToggleFullScreen.vue'
</script>
```

### 指定需要全屏的元素

```vue
<template>
  <div ref="fullscreenTarget">
    <!-- 需要全屏的内容 -->
    <p>这是需要全屏显示的内容。</p>
  </div>
  <ProToggleFullScreen :target="fullscreenTarget" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProToggleFullScreen from './ProToggleFullScreen.vue'

const fullscreenTarget = ref<HTMLElement | null>(null)
</script>
```

---

