import type { ButtonProps } from 'naive-ui'
import type { ProBaseFormProps } from '../ProBaseForm'


export interface ProFormToolBar {
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
    submit?: boolean
    submitText?: string
    submitProps?: ButtonProps
    reset?: boolean
    resetText?: string
    resetProps?: ButtonProps
}

export interface ProFormProps extends ProBaseFormProps {
    toolbar? : ProFormToolBar
    submit?: (isValid: boolean) => void
    reset?: () => void
}
