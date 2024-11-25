# ProLayout

> 高级布局用于快速构建Admin视图

<demo path="./components/DemoLayout" /> 

## **属性 (Props)**

| 参数                    | 类型                                                          | 默认值           | 描述                                                                                     |
|-----------------------|-------------------------------------------------------------|---------------|----------------------------------------------------------------------------------------|
| **title**             | `string`                                                    | `'Naive Pro'` | 标题，显示在头部 Logo 旁边。                                                                      |
| **headerHeight**      | `number`                                                    | `60`          | 头部的高度，单位为像素。                                                                           |
| **isFooter**          | `boolean`                                                   | `true`        | 是否显示底部区域。                                                                              |
| **logo**              | `string`                                                    | -             | Logo 的图片地址，如果为空，则使用默认的 Naive UI Logo。                                                  |
| **logoSize**          | `number`                                                    | `24`          | Logo 的宽高，单位为像素。                                                                        |
| **menus**             | `Array<MenuOption \| MenuDividerOption \| MenuGroupOption>` | -             | 菜单项的数据，支持 `MenuOption`（菜单项）、`MenuDividerOption`（分割线）和 `MenuGroupOption`（分组）。           |
| **accordion**         | `boolean`                                                   | `false`       | 菜单是否以手风琴模式（每次仅展开一个菜单）显示。                                                               |
| **showTrigger**       | `boolean \| 'bar' \| 'arrow-circle'`                        | `true`        | 是否显示侧边栏的触发器，可选值为 `true`（显示）、`false`（隐藏）、`'bar'`（显示 bar 样式）、`'arrow-circle'`（显示箭头圆形样式）。 |
| **collapsed**         | `boolean`                                                   | `false`       | 侧边栏是否折叠。                                                                               |
| **collapsedWidth**    | `number`                                                    | `64`          | 侧边栏折叠时的宽度，单位为像素。                                                                       |
| **collapsedIconSize** | `number`                                                    | `20`          | 折叠时菜单图标的尺寸，单位为像素。                                                                      |
| **inverted**          | `boolean`                                                   | `false`       | 菜单是否使用反色模式（适用于深色主题）。                                                                   |
| **indent**            | `number`                                                    | `32`          | 菜单的缩进距离，单位为像素。                                                                         |
| **openKeys**          | `Array<string>`                                             | -             | 当前展开的菜单项的 key 数组。                                                                      |
| **selectedKey**       | `string \| null`                                            | -             | 当前选中的菜单项的 key。                                                                         |
| **clickMenuItem**     | `(key: string, item: MenuOption) => void`                   | -             | 点击菜单项时触发的回调函数，`key` 是菜单项的标识，`item` 是被点击的菜单项对象。                                         |
| **updateOpenKeys**    | `(keys: string[]) => void`                                  | -             | 菜单展开状态变化时触发的回调函数，`keys` 是当前展开的菜单项 key 数组。                                              |



### **卡槽 (Slot)**

| 插槽名称             | 参数 | 描述                                           |
|------------------|----|----------------------------------------------|
| **header-start** | -  | 自定义头部左侧内容（Logo 左边的区域）。                       |
| **logo**         | -  | 自定义 Logo 区域，替换默认的 Logo 显示。                   |
| **header-right** | -  | 自定义头部右侧区域（整体，包括 `actions` 插槽）。               |
| **actions**      | -  | 自定义头部右侧的操作部分（`header-right` 的子集，只作用于右上角的部分）。 |
| **footer**       | -  | 自定义底部内容，替换默认的底部区域。                           |
| **slot**         | -  | 自定义主内容部分，替换 `n-layout-content` 中的内容。         |
