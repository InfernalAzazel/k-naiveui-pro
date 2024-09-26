import type { MenuDividerOption, MenuGroupOption, MenuOption } from 'naive-ui'

export interface ProLayoutProps {
  title?: string
  isMobile?: boolean
  headerHeight?: number
  isFooter?: boolean
  logo?: string | undefined
  logoSize?: number
  menus: Array<MenuOption | MenuDividerOption | MenuGroupOption>
  accordion?: boolean
  showTrigger?: boolean | 'bar' | 'arrow-circle'
  collapsed?: boolean
  collapsedWidth?: number
  collapsedIconSize?: number
  inverted?: boolean
  indent?: number
  openKeys?: Array<string>
  selectedKey?:	string | null
  clickMenuItem?: (key: string, item: MenuOption) => void
  updateOpenKeys?: (keys: string[]) => void
}