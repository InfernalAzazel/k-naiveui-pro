# ProBreadcrumb

> `ProBreadcrumb` 是基于 `Naive UI` 的 `n-breadcrumb` 组件封装的面包屑导航组件。它提供了更加灵活的配置方式，支持自定义样式和类名，能够满足更多样化的需求。

<demo path="./components/DemoProBreadcrumb" />

<demo path="./components/DemoProBreadcrumb2" />

<demo path="./components/DemoProBreadcrumb3" />


## **属性 (Props)**

| 参数                  | 类型                                              | 默认值   | 描述                              |
|---------------------|-------------------------------------------------|-------|---------------------------------|
| **customClass**     | `string \| string[] \| Record<string, boolean>` | —     | 自定义面包屑容器的类名，支持字符串、字符串数组或对象形式的类名 |
| **customLinkClass** | `string \| string[] \| Record<string, boolean>` | —     | 自定义面包屑链接的类名，支持字符串、字符串数组或对象形式的类名 |
| **options**         | `BreadcrumbOption[]`                            | `[]`  | 面包屑导航项的配置数组，包含每个导航项的属性          |
| **separator**       | `string \| (() => JSX.Element)`                 | `'/'` | 分隔符，可以是字符串或返回 JSX 元素的函数         |

### **ProBreadcrumbOption 配置**

| 参数        | 类型       | 默认值         | 描述                              |
|-----------|----------|-------------|---------------------------------|
| **label** | `string` | `''`        | 导航项的显示文本                        |
| **path**  | `string` | `undefined` | 导航项的路径，点击后会通过事件传递给外部处理          |
| **icon**  | `string` | `undefined` | 面包屑项的图标，传入 `@iconify/vue` 的图标名称 |


### **事件 (Emits)**

| 事件名            | 	参数              | 描述                                                                       |
|----------------|------------------|--------------------------------------------------------------------------|
| **item-click** | `(path: string)` | 当点击带有 path 属性的面包屑项时，会触发 item-click 事件，并将 path 作为参数传递出去，外部组件可以监听该事件并进行处理。 |