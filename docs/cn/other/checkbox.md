# ProCheckbox

> `ProCheckbox` 是对 `naive-ui` 的 `n-checkbox-group` 组件的封装，旨在提供更简洁、更易用的多选框组组件。通过 `ProCheckbox`，您可以更方便地使用多选框组，并支持更多的配置选项和自定义功能。

<demo path="./components/DemoProCheckbox" />

<demo path="./components/DemoProCheckbox2" />

## Props

| 参数       | 类型                                   | 默认值        | 说明                                |
|----------|--------------------------------------|------------|-----------------------------------|
| options  | `ProCheckboxOption[]`                | `[]`       | 多选框选项列表，包含每个选项的 `label` 和 `value` |
| value    | `Array<string \| number>`            | `[]`       | 选中的值数组，支持 `v-model` 双向绑定          |
| name     | `string`                             | `''`       | 多选框组的名称                           |
| disabled | `boolean`                            | `false`    | 是否禁用整个多选框组                        |
| size     | `'small'` \| `'medium'` \| `'large'` | `'medium'` | 多选框的尺寸大小                          ||

### ProCheckboxOption

| 参数       | 类型                   | 默认值     | 说明              |
|----------|----------------------|---------|-----------------|
| label    | `string`             | —       | 多选框的显示文本        |
| value    | `string` \| `number` | —       | 多选框的值，用于绑定和提交数据 |
| disabled | `boolean`            | `false` | 是否禁用该选项         |
