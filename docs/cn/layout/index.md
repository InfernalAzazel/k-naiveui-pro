# ProLayout

> 高级布局用于快速构建Admin视图

<demo path="./components/DemoLayout" /> 

## Props

| 参数                | 类型                                                          | 可选值 | 默认值 | 说明 |
|-------------------|-------------------------------------------------------------|-----|-----|----|
| title             | `string`                                                    | -   | -   |    |
| isMobile          | `boolean`                                                   | -   | -   |    |
| headerHeight      | `number`                                                    | -   | -   |    |
| isFooter          | `boolean`                                                   | -   |     |    |
| logo              | `string`                                                    | -   | -   |    |
| logoSize          | `number`                                                    | -   |     |    |
| menus             | `Array<MenuOption \| MenuDividerOption \| MenuGroupOption>` | -   |     |    |
| accordion         | `boolean`                                                   | -   |     |    |
| showTrigger       | `boolean \| 'bar' \| 'arrow-circle'`                        | -   |     |    |
| collapsed         | `boolean`                                                   |     |     |    |
| collapsedWidth    | `number`                                                    |     |     |    |
| collapsedIconSize | `number`                                                    |     |     |    |
| inverted          | `boolean`                                                   |     |     |    |
| indent            | `number`                                                    |     |     |    |
| openKeys          | `Array<string>`                                             |     |     |    |
| selectedKey       | `string \| null`                                            |     |     |    |
| clickMenuItem     | `(key: string, item: MenuOption) => void`                   |     |     |    |
| updateOpenKeys    | `(keys: string[]) => void`                                  |     |     |    |

