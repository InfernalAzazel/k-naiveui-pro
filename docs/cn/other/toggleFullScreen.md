# ProToggleFullScreen

> `ProToggleFullScreen` 是一个用于切换全屏状态的 Vue 3 组件。它依赖于 `@vueuse/core` 的 `useFullscreen` 组合式函数，实现对指定元素的全屏控制。组件会根据当前的全屏状态显示不同的图标，点击图标即可在全屏和退出全屏之间切换。

<demo path="./components/DemoProToggleFullScreen" />

<demo path="./components/DemoProToggleFullScreen2" />

<demo path="./components/DemoProToggleFullScreen3" />

## **属性 (Props)**

| 参数                     | 类型                | 默认值                                     | 描述                 |
|------------------------|-------------------|-----------------------------------------|--------------------|
| **target**             | `MaybeElementRef` | —                                       | 可选，需要全屏的目标元素，默认为文档 |
| **height**             | `number`          | `24`                                    | 图标的高度，单位为像素        |
| **width**              | `number`          | `24`                                    | 图标的宽度，单位为像素        |
| **fullScreenIcon**     | `string`          | `'ant-design:fullscreen-outlined'`      | 进入全屏状态时显示的图标       |
| **exitFullScreenIcon** | `string`          | `'ant-design:fullscreen-exit-outlined'` | 退出全屏状态时显示的图标       |

