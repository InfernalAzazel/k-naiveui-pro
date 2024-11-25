# ProCheckCard

> `ProCheckCard` 是基于 `Naive UI` 组件库封装的多功能选择卡片组件。它集成了选择（多选或单选）和卡片样式展示的功能，适用于需要以卡片形式展示内容且支持选择的场景，如商品选择、选项卡等。

<demo path="./components/DemoProCheckCard" />

<demo path="./components/DemoProCheckCard2" />

<demo path="./components/DemoProCheckCard3" />

## **属性 (Props)**

| 参数             | 类型                                           | 默认值         | 说明                                 |
|----------------|----------------------------------------------|-------------|------------------------------------|
| **value**      | `ProCheckCardValue` \| `ProCheckCardValue[]` | `undefined` | 选中的值，支持单个值或数组形式（与 `modelValue` 等效） |
| **modelValue** | `ProCheckCardValue` \| `ProCheckCardValue[]` | `undefined` | 选中的值，支持 `v-model` 双向绑定             |
| **options**    | `Array<Option>`                              | `[]`        | 选项列表，包含每个选项的详细信息                   |
| **multiple**   | `boolean`                                    | `false`     | 是否多选模式，默认单选                        |
| **size**       | `'small'` \| `'medium'` \| `'large'`         | `'medium'`  | 卡片尺寸大小                             |
| **disabled**   | `boolean`                                    | `false`     | 是否禁用整个组件                           |

### **Option 配置**

| 参数              | 类型                  | 默认值     | 说明                |
|-----------------|---------------------|---------|-------------------|
| **label**       | `string`            | `''`    | 选项的显示文本           |
| **value**       | `ProCheckCardValue` | —       | 选项的值，用于绑定和提交数据    |
| **disabled**    | `boolean`           | `false` | 是否禁用该选项           |
| **description** | `string`            | `''`    | 选项的描述信息，可用于展示更多内容 |
