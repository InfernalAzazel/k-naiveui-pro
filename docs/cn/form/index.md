# ProForm

> 高级表单用于快速构建表单视图

<demo path="./components/DemoProForm1" /> 

## 表单校验

<demo path="./components/DemoProForm2" />

## 栅格表单

<demo path="./components/DemoProForm3" />

## Props

| 参数      | 类型                                            | 可选值               | 默认值    | 说明                                 |
|---------|-----------------------------------------------|-------------------|--------|------------------------------------|
| v-model | `object \|  array`                            | -                 | -      | 绑定值                                |
| columns | `array`                                       | -                 | -      | 表单配置参考下面 `columns`                 |
| toolbar | `ProFormNormalToolBar \| ProFormStepsToolBar` | -                 | -      | 表单工具栏配置参考下面 `toolbar`，默认值按表单类型自动设置 |
| type    | `string`                                      | `normal \| steps` | normal | 表单类型                               |
| rules   | `object`                                      | -                 | -      | 表单验证规则                             |
| grid    | `boolean`                                     | -                 | true   | 栅格布局                               |
| cols    | `number`                                      | -                 | 24     | 显示的栅格数量                            |
| xGap    | `number`                                      | -                 | 12     | 横向间隔槽                              |
| yGap    | `number`                                      | -                 | 0      | 纵向间隔槽                              |

> 更多参数请参考 [n-form](https://www.naiveui.com/zh-CN/os-theme/components/form) 和 [n-grid](https://www.naiveui.com/zh-CN/os-theme/components/grid) 的属性。

## 事件
| 事件名    | 参数                           | 说明      |
|--------|------------------------------|---------|
| submit | `(isValid: boolean) => void` | 提交表单时触发 |
| reset  | `() => void`                 | 重置表单时触发 |

## 方法

| 方法名               | 参数                                                                                     | 说明                                                           |
|-------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------|
| validate          | `(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) => void` | 还原到未校验的状态                                                    |
| restoreValidation | `() => void`                                                                           | 验证表单，Promise rejection 的返回值的是类型 `Array<FormValidationError>` |
| resetFields       | `() => void`                                                                           | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果                                |

## Columns

| 参数          | 类型                | 默认值  | 说明                               |
|-------------|-------------------|------|----------------------------------|
| label       | `string`          | -    | 	标签文本                            |
| prop        | `string`          | -    | v-model 绑定的字段名 *(需要是唯一值)*        |
| component   | `string \| VNode` | -    | 组件配置参考下面 `Component Field Types` |
| props       | `object`          | -    | 传递的对应的组件的参数                      |
| span        | `number`          | 24   | 栅格占据的列数，为 0 的时候会隐藏               |
| show        | `boolean`         | true | 默认显示状态，设置 `false` 时会隐藏           |                       |
| description | `string`          | -    | 表单类型为 steps 时有效，步骤描述             |                 |
| children    | `ProFormColumn[]` | -    | 表单类型为 steps 时有效                  |


## Component Field Types

| 名称            | 说明    |
|---------------|-------|
| date-picker   | 日期选择器 |
| auto-complete | 自动完成  |
| cascader      | 级联选择器 |
| input         | 输入框   |
| input-number  | 数字输入框 |
| rate          | 评分    |
| time-picker   | 时间选择器 |
| mention       | 提及    |
| select        | 选择器   |
| switch        | 开关    |
| slider        | 滑块    |
| radio         | 单选框   |
| checkbox      | 多选框   |
| textarea      | 多行输入框 |

## Toolbar
### defineProFormNormalToolBar

- 普通表单使用

| 参数          | 类型            | 可选值                                                                                   | 默认值               | 说明                |
|-------------|---------------|---------------------------------------------------------------------------------------|-------------------|-------------------|
| justify     | `string`      | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start             | 布局对齐方式            |
| submit      | `boolean`     | -                                                                                     | true              | 提交按钮              |
| submitText  | `string`      | -                                                                                     | -                 | 默认 i18n 文本        |
| submitProps | `ButtonProps` | -                                                                                     | {type: 'primary'} | 提交按钮 传入的**props** |
| reset       | `boolean`     | -                                                                                     | true              | 重设按钮              |
| resetText   | `string`      | -                                                                                     | -                 | 默认 i18n 文本        |
| resetProps  | `ButtonProps` | -                                                                                     | -                 | 重设按钮 传入的**props** |

### defineProFormStepsToolBar

> defineProFormStepsToolBar 继承于 defineProFormNormalToolBar 的所有参数
- 步骤表单使用

| 参数        | 类型            | 默认值  | 说明                 |
|-----------|---------------|------|--------------------|
| prev      | `boolean`     | true | 上一步按钮              |
| prevProps | `ButtonProps` | -    | 上一步按钮 传入的**props** |
| next      | `boolean`     | true | 下一步按钮              |
| nextProps | `ButtonProps` | -    | 下一步按钮 传入的**props** |
