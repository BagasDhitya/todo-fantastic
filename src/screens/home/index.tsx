import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { TodoState } from "../../utils/types/todo";
import { palette } from "../../utils/colors/colors";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import TodoList from "../../components/TodoList";
import Input from "../../components/Input";

const { width } = Dimensions.get("screen");

const Home = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);
  const [item, setItem] = useState<string>("");

  const handleChange = (item: string) => {
    setItem(item);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    const newTodo: TodoState[] = [
      {
        id: Date.now(),
        title: item,
      },
    ];
    setTodos((prevTodos) => [...prevTodos, ...newTodo]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {todos ? (
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: width / 1.1,
          }}
        >
          <Text style={{ margin: 10, color: palette.sage700, fontSize: 18 }}>
            You don't have any task today!
          </Text>
        </View>
      )}
      <View style={styles.inputContainer}>
        <Input id="addToDo" value={item} onChangeText={handleChange} />
      </View>
      <View style={styles.buttonContainer}>
        <Button id="submitToDo" title="Add Todo" onPress={handleAddTodo} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: width / 1.2,
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  inputContainer: {
    top: width / 0.7,
  }
});
