import type { FormProps} from 'naive-ui'
import type { VNode } from 'vue';


export interface ProBaseFormColumn {
  label: string
  prop: string
  component: string | VNode
  props?: Record<string, any>
  span?: number
  show?: boolean

}

export interface ProBaseFormProps extends  /* @vue-ignore */ FormProps {
  columns: ProBaseFormColumn[],
  cols?: number
  xGap?: number
  yGap?: number
  columnsSpan?: number
  footerSpan?: number
  collapsed?: boolean
  collapsedRows?: number
}
