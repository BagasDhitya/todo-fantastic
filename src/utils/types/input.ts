import { TodoState } from "./todo";

export interface InputProps {
    id: string,
    placeholder?: string;
    value?: TodoState[] | any;
    onChangeText?: (text: string) => void;
}