# ProRadio

> `ProRadio` 是对 `naive-ui` 的 `n-radio-group` 组件的封装，旨在提供更简洁、更易用的单选框组组件。通过 `ProRadio`，您可以更方便地使用单选框组，并支持更多的配置选项和自定义功能。

<demo path="./components/DemoProRadio" />

<demo path="./components/DemoProRadio2" />

## Props

| 参数       | 类型                                   | 默认值         | 说明                                |
|----------|--------------------------------------|-------------|-----------------------------------|
| options  | `ProRadioOption[]`                   | `[]`        | 单选框选项列表，包含每个选项的 `label` 和 `value` |
| value    | `string` \| `number`                 | `undefined` | 选中的值，支持 `v-model` 双向绑定            |
| name     | `string`                             | `''`        | 单选框组的名称                           |
| disabled | `boolean`                            | `false`     | 是否禁用整个单选框组                        |
| size     | `'small'` \| `'medium'` \| `'large'` | `'medium'`  | 单选框的尺寸大小                          |

### ProRadioOption

| 参数       | 类型                   | 默认值     | 说明              |
|----------|----------------------|---------|-----------------|
| label    | `string`             | —       | 单选框的显示文本        |
| value    | `string` \| `number` | —       | 单选框的值，用于绑定和提交数据 |
| disabled | `boolean`            | `false` | 是否禁用该选项         |
