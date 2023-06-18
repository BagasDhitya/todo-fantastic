import React from 'react';
import { View, FlatList } from 'react-native';

import { TodoListProps } from "../utils/types/todo"

import TodoItem from './TodoItem';

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
    return (
        <View>
            <FlatList
                data={todos}
                renderItem={({ item }) => (
                    <TodoItem
                        id={item.id}
                        title={item.title}
                        onDelete={onDeleteTodo}
                    />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default TodoList;