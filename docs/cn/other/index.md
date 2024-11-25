# ProAvatar

> `ProAvatar` 组件是一个包含头像和下拉菜单的组合组件，常用于导航栏的用户信息展示。它封装了 `n-avatar` 和 `n-dropdown` 组件，提供了自定义头像、用户名显示、下拉菜单选项等功能，支持灵活的配置和扩展。

<demo path="./components/DemoProAvatar" />


## **属性 (Props)**

| 参数          | 类型                                                                                              | 默认值             | 描述          |
|-------------|-------------------------------------------------------------------------------------------------|-----------------|-------------|
| **name**    | `string`                                                                                        | —               | 用户名，显示在头像旁边 |
| **options** | `Array<DropdownOption \| DropdownGroupOption \| DropdownDividerOption \| DropdownRenderOption>` | **必填**          | 下拉菜单的选项列表   |
| **src**     | `string` \| `any`                                                                               | `defaultAvatar` | 头像图片的资源地址   |
| **size**    | `'small'` \| `'medium'` \| `'large'` \| `number`                                                | `'medium'`      | 头像的尺寸       |
| **lazy**    | `boolean`                                                                                       | `false`         | 是否开启图片懒加载   |
| **round**   | `boolean`                                                                                       | `false`         | 头像是否为圆形     |

## **事件 (Emits)**

| 事件名        | 参数                        | 描述                   |
|------------|---------------------------|----------------------|
| **select** | `(key: string \| number)` | 当选择下拉菜单项时触发，返回所选项的键值 |


