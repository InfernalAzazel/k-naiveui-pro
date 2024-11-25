# ProBaseForm

> `ProBaseForm` 是一个基于 `Naive UI` 的表单组件封装，旨在简化表单的开发过程。通过配置化的方式，您可以快速生成表单，并具备灵活的布局和组件定制能力。该组件使用了 `n-form`、`n-grid`、`n-form-item-gi` 等 `Naive UI` 组件，实现响应式布局和表单项的快速渲染。

<demo path="./components/DemoProBaseForm" /> 

<demo path="./components/DemoProBaseForm2" /> 

## **属性 (Props)**

| 参数                | 类型                    | 默认值     | 描述                                         |
|-------------------|-----------------------|---------|--------------------------------------------|
| **v-model**       | `object`              | `{}`    | 表单的数据对象，使用 `v-model` 进行双向绑定                |
| **columns**       | `ProBaseFormColumn[]` | —       | 表单项的配置数组，定义每个表单项的属性                        |
| **cols**          | `number`              | `24`    | 网格布局的列数，总共 24 列                            |
| **xGap**          | `number`              | `12`    | 网格项之间的水平间距，单位为像素                           |
| **yGap**          | `number`              | `0`     | 网格项之间的垂直间距，单位为像素                           |
| **columnsSpan**   | `number`              | `24`    | 表单项在网格布局中占据的列数                             |
| **footerSpan**    | `number`              | `24`    | 底部插槽在网格布局中占据的列数                            |
| **collapsed**     | `boolean`             | `false` | 是否折叠网格布局，参见 `n-grid` 的 `collapsed` 属性      |
| **collapsedRows** | `number`              | `1`     | 折叠时显示的行数，参见 `n-grid` 的 `collapsed-rows` 属性 |


> 更多参数请参考 [n-form](https://www.naiveui.com/zh-CN/os-theme/components/form) 和 [n-grid](https://www.naiveui.com/zh-CN/os-theme/components/grid) 的属性。

### **卡槽 (Slot)**

| 插槽名称        | 参数 | 描述                       |
|-------------|----|--------------------------|
| **header**  | -  | 自定义表单头部区域                |
| **footer**  | -  | 自定义脚部区域                  |

## Columns 配置

| 参数            | 类型                    | 默认值    | 描述                                  |
|---------------|-----------------------|--------|-------------------------------------|
| **label**     | `string`              | —      | 表单项的标签文本                            |
| **prop**      | `string`              | —      | 表单项绑定的数据字段名                         |
| **component** | `string \| VNode`     | —      | 表单项使用的组件，可以是组件名字符串或 VNode 对象        |
| **props**     | `Record<string, any>` | `{}`   | 传递给组件的属性，键值对形式                      |
| **span**      | `number`              | —      | 表单项在网格布局中占据的列数，默认为 `columnsSpan` 的值 |
| **show**      | `boolean`             | `true` | 是否显示该表单项，`false` 时隐藏                |


## Component Field Types 配置

| 名称                | 描述    |
|-------------------|-------|
| **date-picker**   | 日期选择器 |
| **auto-complete** | 自动完成  |
| **cascader**      | 级联选择器 |
| **input**         | 输入框   |
| **input-number**  | 数字输入框 |
| **rate**          | 评分    |
| **time-picker**   | 时间选择器 |
| **mention**       | 提及    |
| **select**        | 选择器   |
| **switch**        | 开关    |
| **slider**        | 滑块    |
| **radio**         | 单选框   |
| **checkbox**      | 多选框   |
| **textarea**      | 多行输入框 |
