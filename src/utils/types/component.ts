import { TodoState } from "./todo";
import {ReactNode} from "react"

export interface ButtonProps {
    id: string;
    title: string;
    onPress?: () => void;
}

export interface InputProps {
    id: string,
    placeholder?: string;
    value?: TodoState[] | any;
    onChangeText?: (text: string) => void;
}

export interface ModalProps {
    id: string,
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}

export interface SweetAlertProps {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    isCancel?: boolean
  }