import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'

import { TodoState } from "../../utils/todo"

import Button from "../../components/Button"
import TodoList from '../../components/TodoList';
import Input from '../../components/Input';

const Home = () => {
    const [todos, setTodos] = useState<TodoState[]>([
        {
            id: 1,
            title: "Playing with dog"
        },
        {
            id: 2,
            title: "Breakfast"
        }
    ]);
    const [item, setItem] = useState<string>()

    const handleChange = (item: string) => {
        setItem(item)
    }

    const handleDeleteTodo = (id: number) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const handleAddTodo = () => {
        const newTodo = {
            id: Date.now(),
            title: item,
        };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Input id='addToDo' onChangeText={handleChange} />
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
            <Button id='submitToDo' title='Add Todo' onPress={handleAddTodo} />
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
})