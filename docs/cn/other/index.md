# ProAvatar

> `ProAvatar` 组件是一个包含头像和下拉菜单的组合组件，常用于导航栏的用户信息展示。它封装了 `n-avatar` 和 `n-dropdown` 组件，提供了自定义头像、用户名显示、下拉菜单选项等功能，支持灵活的配置和扩展。

<demo path="./components/DemoProAvatar" />


## Props

| 参数      | 类型                                                                                              | 可选值                                   | 默认值             | 说明          |
|---------|-------------------------------------------------------------------------------------------------|---------------------------------------|-----------------|-------------|
| name    | `string`                                                                                        | —                                     | —               | 用户名，显示在头像旁边 |
| options | `Array<DropdownOption \| DropdownGroupOption \| DropdownDividerOption \| DropdownRenderOption>` | —                                     | **必填**          | 下拉菜单的选项列表   |
| src     | `string` \| `any`                                                                               | —                                     | `defaultAvatar` | 头像图片的资源地址   |
| size    | `'small'` \| `'medium'` \| `'large'` \| `number`                                                | `'small'`、`'medium'`、`'large'`、number | `'medium'`      | 头像的尺寸       |
| lazy    | `boolean`                                                                                       | `true`、`false`                        | `false`         | 是否开启图片懒加载   |
| round   | `boolean`                                                                                       | `true`、`false`                        | `false`         | 头像是否为圆形     |

## 事件

| 事件名    | 回调参数                      | 说明                   |
|--------|---------------------------|----------------------|
| select | `(key: string \| number)` | 当选择下拉菜单项时触发，返回所选项的键值 |


