import {ReactNode} from "react"

export interface ModalProps {
    id: string,
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}