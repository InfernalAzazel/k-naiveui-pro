# ProToggleLanguage

> `ProToggleLanguage` 是一个用于语言切换的 Vue 3 组件。它使用 `naive-ui` 的 `n-dropdown` 组件和 `@iconify/vue` 的图标来显示语言选择菜单。用户可以通过点击图标打开下拉菜单，选择需要的语言。

<demo path="./components/DemoProToggleLanguage" />

## **属性 (Props)**

| 参数          | 类型                                                                                              | 默认值              | 描述                 |
|-------------|-------------------------------------------------------------------------------------------------|------------------|--------------------|
| **options** | `Array<DropdownOption \| DropdownGroupOption \| DropdownDividerOption \| DropdownRenderOption>` | `[]`             | 下拉菜单的选项列表          |
| **icon**    | `string`                                                                                        | `'mdi:language'` | 显示在语言切换按钮上的图标，可自定义 |
| **height**  | `number`                                                                                        | `24`             | 图标的高度，单位为像素        |
| **width**   | `number`                                                                                        | `24`             | 图标的宽度，单位为像素        |


## **事件 (Emits)**

| 事件名        | 回调参数                      | 描述                   |
|------------|---------------------------|----------------------|
| **select** | `(key: string \| number)` | 当选择下拉菜单项时触发，返回所选项的键值 |