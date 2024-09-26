import type { FormProps, ButtonProps } from 'naive-ui'
import type { ProBaseFormColumn } from '../ProBaseForm'


export interface ProQueryFormToolBar {
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
    search?: boolean
    searchText?: string
    searchProps?: ButtonProps
    reset?: boolean
    resetText?: string
    resetProps?: ButtonProps
}

export interface ProQueryFormColumn extends Omit<ProBaseFormColumn, 'span'>{}
export interface ProQueryFormProps extends /* @vue-ignore */ FormProps {
    columns: ProQueryFormColumn[]
    toolbar? : ProQueryFormToolBar
    showNumber?: number
    labelPlacement?: 'left' | 'top'
    defaultCollapsed?: boolean
    search?: () => void
    reset?: () => void
}