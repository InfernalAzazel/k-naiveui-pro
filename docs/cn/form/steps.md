# ProStepsForm

> `ProStepsForm` 是一个基于 `ProBaseForm` 的分步表单组件，支持多步表单的配置、表单切换、工具栏（如上一步、下一步、提交、重置按钮）等功能，适用于需要分步骤填写的复杂表单场景。



## 步骤表单


<demo path="./components/DemoProStepsForm" />


### **属性 (Props)**

> 继承 ProBaseFormProps

| 属性名            | 类型                     | 默认值                                                                       | 描述                               |
|----------------|------------------------|---------------------------------------------------------------------------|----------------------------------|
| **v-model** | `Record<string, any>`  | `{}`                                                                      | 表单的双向绑定数据对象，存储分步表单的所有字段值。        |
| **columns**    | `ProStepsFormColumn[]` | `[]`                                                                      | 分步表单字段配置，定义每一步的表单结构及描述信息。        |
| **toolbar**    | `ProFormStepsToolBar`  | `{ justify: 'start', submit: true, reset: true, prev: true, next: true }` | 工具栏配置对象，定义上一步、下一步、提交、重置按钮的行为和显示。 |

---

### **`columns` 配置**

| 属性名             | 类型                    | 描述                                   |
|-----------------|-----------------------|--------------------------------------|
| **label**       | `string`              | 当前步骤的标题。                             |
| **description** | `string`              | 当前步骤的描述信息，可为字符串或自定义内容。               |
| **children**    | `ProBaseFormColumn[]` | 当前步骤的表单字段配置，继承自 `ProBaseForm` 的字段定义。 |

**示例：**
```ts
[
  {
    label: 'Step 1',
    description: 'Basic Information',
    children: [
      { prop: 'name', label: 'Name', required: true },
      { prop: 'email', label: 'Email', required: true }
    ]
  },
  {
    label: 'Step 2',
    description: 'Additional Information',
    children: [
      { prop: 'age', label: 'Age' },
      { prop: 'address', label: 'Address' }
    ]
  }
]
```

---

### **`toolbar` 配置**

| 属性名             | 类型                                                                                    | 默认值                   | 描述                            |
|-----------------|---------------------------------------------------------------------------------------|-----------------------|-------------------------------|
| **justify**     | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'`             | 按钮在工具栏中的对齐方式。                 |
| **submit**      | `boolean`                                                                             | `true`                | 是否显示提交按钮。                     |
| **submitText**  | `string`                                                                              | `'提交'`                | 提交按钮的文本。                      |
| **submitProps** | `ButtonProps`（Naive UI 按钮属性）                                                          | `{ type: 'primary' }` | 提交按钮的属性，支持 Naive UI 按钮的所有属性。  |
| **reset**       | `boolean`                                                                             | `true`                | 是否显示重置按钮。                     |
| **resetText**   | `string`                                                                              | `'重置'`                | 重置按钮的文本。                      |
| **resetProps**  | `ButtonProps`（Naive UI 按钮属性）                                                          | `{}`                  | 重置按钮的属性，支持 Naive UI 按钮的所有属性。  |
| **prev**        | `boolean`                                                                             | `true`                | 是否显示上一步按钮。                    |
| **prevProps**   | `ButtonProps`（Naive UI 按钮属性）                                                          | `{}`                  | 上一步按钮的属性，支持 Naive UI 按钮的所有属性。 |
| **next**        | `boolean`                                                                             | `true`                | 是否显示下一步按钮。                    |
| **nextProps**   | `ButtonProps`（Naive UI 按钮属性）                                                          | `{}`                  | 下一步按钮的属性，支持 Naive UI 按钮的所有属性。 |

---

### **事件 (Emits)**

| 事件名        | 参数                 | 描述                                 |
|------------|--------------------|------------------------------------|
| **submit** | `isValid: boolean` | 点击提交按钮时触发的事件，`isValid` 表示表单是否验证成功。 |
| **reset**  | -                  | 点击重置按钮时触发的事件，表示用户执行了表单重置操作。        |

---

### **插槽 (Slots)**

| 插槽名称        | 参数 | 描述                                         |
|-------------|----|--------------------------------------------|
| **header**  | -  | 自定义表单头部内容，默认包含分步导航栏（`n-steps`）。            |
| **footer**  | -  | 自定义表单底部内容，默认包含工具栏（上一步、下一步、提交、重置按钮）。        |
| **default** | -  | 表单的主体内容，继承自 `ProBaseForm`，用于自定义表单字段的布局与显示。 |

**插槽使用示例：**

```vue
<ProStepsForm>
  <template #header>
    <div>Custom Header</div>
  </template>
  <template #footer>
    <div>Custom Footer</div>
  </template>
</ProStepsForm>
```

---

### **方法 (Expose)**

| 方法名                   | 参数                                                                                     | 描述                               |
|-----------------------|----------------------------------------------------------------------------------------|----------------------------------|
| **validate**          | `(callback?: FormValidateCallback, shouldRuleBeApplied?: ShouldRuleBeApplied) => void` | 验证当前步骤的表单字段，成功时触发回调函数，失败时返回错误信息。 |
| **restoreValidation** | `() => void`                                                                           | 恢复当前步骤表单验证状态，清除所有验证错误。           |
| **resetFields**       | `() => void`                                                                           | 重置当前步骤的表单字段值为空字符串。               |

**方法使用示例：**

```vue
<script setup>
import { ref } from 'vue'
const stepsFormRef = ref()

function handleSubmit() {
  stepsFormRef.value.validate((isValid) => {
    if (isValid) {
      console.log('Form is valid and submitted!')
    }
  })
}

function handleReset() {
  stepsFormRef.value.resetFields()
}
</script>

<ProStepsForm ref="stepsFormRef" @submit="handleSubmit" @reset="handleReset" />
```