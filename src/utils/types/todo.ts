interface Todo {
    id: number;
    title: string;
}

export interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
}

export interface TodoItemProps {
    id: number;
    title: string;
    onDelete: (id: number) => void;
}

export interface TodoState {
    id: number,
    title: string,
}