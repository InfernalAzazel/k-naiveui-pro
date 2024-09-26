import type { ButtonProps } from 'naive-ui'
import type { ProBaseFormProps, ProBaseFormColumn } from '../ProBaseForm'
import type {ProFormToolBar} from "../ProForm";

export interface ProFormStepsToolBar extends ProFormToolBar{
    prev?: boolean
    prevProps?: ButtonProps
    next?: boolean
    nextProps?: ButtonProps
}

export interface ProStepsFormColumn {
    label: string
    description?: string | any
    children: ProBaseFormColumn[]
}
export interface ProStepsFormProps extends Omit<ProBaseFormProps, 'columns'>  {
    columns: ProStepsFormColumn[]
    toolbar? : ProFormStepsToolBar
    submit?: (isValid: boolean) => void
    reset?: () => void
}
