# ProDescriptions

> `ProDescriptions` 是对 `naive-ui` 的 `n-descriptions` 组件的封装，提供了更强大的功能和更便捷的使用方式。它可以与 `n-table` 和 `n-form` 组件配合使用，用于展示详细的信息列表或数据项的描述。`ProDescriptions` 组件支持自动生成描述列表，当与表格或表单一起使用时，可以方便地显示数据的详细信息，包括字段名称、值以及自定义的渲染方式。

<demo path="./components/DemoProDescriptions" />

<demo path="./components/DemoProDescriptions2" />

<demo path="./components/DemoProDescriptions3" />

## 参数

| 参数        | 类型                                                         | 可选值                            | 默认值        | 说明                                        |
|-----------|------------------------------------------------------------|--------------------------------|------------|-------------------------------------------|
| columns   | `Array<{ title: string; key: string; render?: Function }>` | —                              | `[]`       | 描述列表的列配置，与 `n-table` 的 columns 配置类似，可直接复用 |
| data      | `Record<string, any>`                                      | —                              | `{}`       | 描述列表的数据对象，包含要展示的字段和值                      |
| title     | `string`                                                   | —                              | `''`       | 描述列表的标题，显示在列表的顶部                          |
| colNumber | `number`                                                   | —                              | `2`        | 每行显示的描述项数量                                |
| size      | `'small'` \| `'medium'` \| `'large'`                       | `'small'` `'medium'` `'large'` | `'medium'` | 描述列表的尺寸大小                                 |
| bordered  | `boolean`                                                  | `true` `false`                 | `false`    | 是否显示边框                                    |