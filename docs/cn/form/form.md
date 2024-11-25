# ProForm

> `ProForm` 是一个基于 `ProBaseForm` 的高级表单组件，支持表单工具栏（提交、重置按钮）的配置，提供表单验证、重置字段等常用功能，可通过插槽自定义工具栏内容。

<demo path="./components/DemoProForm1" /> 

## 表单校验

<demo path="./components/DemoProForm2" />

## 栅格表单

<demo path="./components/DemoProForm3" />

## **属性 (Props)**

> 继承 `ProBaseFormProps`

| 参数          | 类型               | 默认值 | 描述                                 |
|-------------|------------------|-----|------------------------------------|
| **toolbar** | `ProFormToolBar` | -   | 表单工具栏配置参考下面 `toolbar`，默认值按表单类型自动设置 |

> 更多参数请参考 [n-form](https://www.naiveui.com/zh-CN/os-theme/components/form)
> 和 [n-grid](https://www.naiveui.com/zh-CN/os-theme/components/grid) 的属性。

## **事件 (Emits)**

| 事件名        | 参数                           | 描述      |
|------------|------------------------------|---------|
| **submit** | `(isValid: boolean) => void` | 提交表单时触发 |
| **reset**  | `() => void`                 | 重置表单时触发 |


### **插槽 (Slots)**

| 插槽名称        | 参数                                    | 描述                                         |
|-------------|---------------------------------------|--------------------------------------------|
| **toolbar** | -                                     | 自定义工具栏内容。如果提供了该插槽，将完全替换默认的搜索、重置和展开/收起按钮。   |
| **footer**  | `{ overflow: boolean }` - 表单是否处于折叠状态。 | 自定义表单底部内容，默认包含工具栏。                         |
| **default** | -                                     | 表单的主体内容，继承自 `ProBaseForm`，用于自定义表单字段的布局与显示。 |

## **方法 (Expose)**

| 方法名                   | 参数                                                                                     | 描述                                                           |
|-----------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------|
| **validate**          | `(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) => void` | 还原到未校验的状态                                                    |
| **restoreValidation** | `() => void`                                                                           | 验证表单，Promise rejection 的返回值的是类型 `Array<FormValidationError>` |
| **resetFields**       | `() => void`                                                                           | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                |

## Columns 配置

> 参考 `ProBaseFormColumn`

## Toolbar 配置

| 参数              | 类型                                                                                    | 默认值               | 描述                           |
|-----------------|---------------------------------------------------------------------------------------|-------------------|------------------------------|
| **justify**     | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start             | 布局对齐方式                       |
| **submit**      | `boolean`                                                                             | true              | 提交按钮                         |
| **submitText**  | `string`                                                                              | '提交'              | 提交按钮的文本                      |
| **submitProps** | `ButtonProps`                                                                         | {type: 'primary'} | 提交按钮的属性，支持 Naive UI 按钮的所有属性  |
| **reset**       | `boolean`                                                                             | true              | 重设按钮                         |
| **resetText**   | `string`                                                                              | '重置'              | 默认 i18n 文本                   |
| **resetProps**  | `ButtonProps`                                                                         | -                 | 重设按钮的属性， 支持 Naive UI 按钮的所有属性 |