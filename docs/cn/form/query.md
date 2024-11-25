# ProQueryForm

> `ProQueryForm` 是一个基于 `ProBaseForm` 的高级查询表单组件，支持自定义工具栏（如搜索、重置按钮），支持表单字段动态折叠与展开功能，适用于复杂的查询条件表单场景。

## 基础用法

<demo path="./components/DemoProQueryForm1" />


### **属性 (Props)**

| 属性名                  | 类型                     | 默认值                                                                                | 描述                                                                            |
|----------------------|------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| **columns**          | `ProQueryFormColumn[]` | `[]`                                                                               | 表单字段配置，定义查询表单的结构。继承自 `ProBaseForm` 的 `columns` 属性，支持所有基础字段配置。注： 不支持 `span` 设置 |
| **toolbar**          | `ProQueryFormToolBar`  | `{ justify: 'end', search: true, searchText: '搜索', reset: true, resetText: '重置' }` | 查询表单工具栏配置，定义搜索、重置按钮的行为和显示。                                                    |
| **showNumber**       | `number`               | `3`                                                                                | 可见字段数，表示展开时最多显示的表单字段数量。其余字段会被折叠，点击展开按钮后显示全部字段。                                |
| **labelPlacement**   | `'left' \| 'top'`      | `'left'`                                                                           | 表单标签的位置，`left` 表示左对齐，`top` 表示顶部对齐。                                            |
| **defaultCollapsed** | `boolean`              | `true`                                                                             | 是否默认折叠表单字段。                                                                   |
| **search**           | `() => void`           | `undefined`                                                                        | 搜索按钮点击时触发的回调函数。                                                               |
| **reset**            | `() => void`           | `undefined`                                                                        | 重置按钮点击时触发的回调函数。                                                               |

---

### **`toolbar` 配置**

`toolbar` 对象用于配置工具栏，包含搜索和重置按钮的显示、文案以及样式。

| 属性名             | 类型                                                                                    | 默认值                   | 描述                           |
|-----------------|---------------------------------------------------------------------------------------|-----------------------|------------------------------|
| **justify**     | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'end'`               | 按钮在工具栏中的对齐方式。                |
| **search**      | `boolean`                                                                             | `true`                | 是否显示搜索按钮。                    |
| **searchText**  | `string`                                                                              | `'搜索'`                | 搜索按钮的文本。                     |
| **searchProps** | `ButtonProps`（Naive UI 按钮属性）                                                          | `{ type: 'primary' }` | 搜索按钮的属性，支持 Naive UI 按钮的所有属性。 |
| **reset**       | `boolean`                                                                             | `true`                | 是否显示重置按钮。                    |
| **resetText**   | `string`                                                                              | `'重置'`                | 重置按钮的文本。                     |
| **resetProps**  | `ButtonProps`（Naive UI 按钮属性）                                                          | `{}`                  | 重置按钮的属性，支持 Naive UI 按钮的所有属性。 |

---

### **事件 (Emits)**

| 事件名        | 参数 | 描述                         |
|------------|----|----------------------------|
| **search** | 无  | 点击搜索按钮时触发的事件，表示用户执行搜索操作。   |
| **reset**  | 无  | 点击重置按钮时触发的事件，表示用户执行重置表单操作。 |

---

### **插槽 (Slots)**

| 插槽名称        | 参数                                    | 描述                                         |
|-------------|---------------------------------------|--------------------------------------------|
| **toolbar** | -                                     | 自定义工具栏内容。如果提供了该插槽，将完全替换默认的搜索、重置和展开/收起按钮。   |
| **footer**  | `{ overflow: boolean }` - 表单是否处于折叠状态。 | 自定义表单底部内容，默认包含工具栏。                         |
| **default** | -                                     | 表单的主体内容，继承自 `ProBaseForm`，用于自定义表单字段的布局与显示。 |

**插槽使用示例：**

```vue

<ProQueryForm>
  <template #toolbar>
    <n-button type="info">Custom Search</n-button>
    <n-button type="error">Custom Reset</n-button>
  </template>
</ProQueryForm>
```

---

### **方法 (Expose)**

| 方法名             | 参数 | 描述            |
|-----------------|----|---------------|
| **resetFields** | -  | 重置表单字段值为空字符串。 |
