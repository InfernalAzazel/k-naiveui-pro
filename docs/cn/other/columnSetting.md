# ProColumnSetting

> `ProColumnSetting` 是一个用于管理列设置的 Vue 3 组件，常用于表格组件中，提供列的显示/隐藏以及排序功能。该组件结合了 `naive-ui` 的 `n-popover`、`n-button`、`n-tree` 组件，允许用户通过勾选和拖拽的方式，自定义列的可见性和顺序。

<demo path="./components/DemoProColumnSetting" />

<demo path="./components/DemoProColumnSetting2" />

## Props

| 参数     | 类型       | 可选值 | 默认值                             | 说明             |
|--------|----------|-----|---------------------------------|----------------|
| icon   | `string` | —   | `'ant-design:setting-outlined'` | 图标的名称，显示在设置按钮上 |
| height | `number` | —   | `24`                            | 图标的高度，单位为像素    |
| width  | `number` | —   | `24`                            | 图标的宽度，单位为像素    |


## 事件

| 事件名                 | 回调参数                    | 说明                           |
|---------------------|-------------------------|------------------------------|
| `update:modelValue` | `(columns: Array<any>)` | 当列的显示/隐藏或顺序发生变化时触发，返回更新后的列数据 |
