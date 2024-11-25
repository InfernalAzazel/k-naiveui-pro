# ProToggleTheme

> `ProToggleTheme` 是一个用于切换主题（浅色模式和深色模式）的 Vue 3 组件。它使用 `@vueuse/core` 的 `useDark` 组合式函数，实现对应用主题的切换。组件会根据当前的主题状态显示不同的图标，用户可以自定义在不同主题状态下显示的图标。点击图标即可在浅色模式和深色模式之间切换。


<demo path="./components/DemoProToggleTheme" />


## **属性 (Props)**

| 参数           | 类型       | 默认值                          | 说明                 |
|--------------|----------|------------------------------|--------------------|
| **moonIcon** | `string` | `'ant-design:moon-outlined'` | 深色模式下显示的图标，表示为月亮图标 |
| **sunIcon**  | `string` | `'ant-design:sun-outlined'`  | 浅色模式下显示的图标，表示为太阳图标 |
| **height**   | `number` | `24`                         | 图标的高度，单位为像素        |
| **width**    | `number` | `24`                         | 图标的宽度，单位为像素        |
