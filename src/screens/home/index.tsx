import { StyleSheet, View, Text, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { useLanguageStore } from "../../utils/zustand/languageState";
import { TodoState } from "../../utils/types/todo";
import { palette } from "../../utils/colors/colors";

import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import TodoList from "../../components/TodoList";
import * as Notifications from "expo-notifications";

import Input from "../../components/Input";
import ModalPopup from "../../components/ModalPopup";

const { width, height } = Dimensions.get("screen");

const Home = () => {
  const [todos, setTodos] = useState<TodoState[]>([]);
  const [item, setItem] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language } = useLanguageStore();

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
    setIsOpen(false);
  };

  const createTodo = () => {
    setIsOpen(true);
  };

  const getNotification = async () => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
    await Notifications.scheduleNotificationAsync({
      content: {
        title: `${
          language === "Indonesia"
            ? "Todo Baru Ditambahkan!"
            : "New Todo Added!"
        }`,
        body: `${
          language === "Indonesia" ? "Todo telah ditambahkan" : "Todo was added"
        }`,
      },
      trigger: {
        seconds: 1,
      },
    });
  };

  useEffect(() => {
    getNotification();
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {todos ? (
        <View
          style={{
            marginTop: height * 0.05,
            marginBottom: height * 0.15,
            justifyContent: "center",
          }}
        >
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </View>
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
            {language === "Indonesia"
              ? "Kamu tidak memiliki task hari ini!"
              : "You don't have any task, today!"}
          </Text>
        </View>
      )}
      <ModalPopup
        id="addToDoPopup"
        onClose={() => setIsOpen(false)}
        visible={isOpen}
      >
        <View style={styles.inputContainer}>
          <Input
            id="addToDo"
            value={item}
            onChangeText={handleChange}
            placeholder={
              language === "Indonesia"
                ? "Tulis To Do disini ..."
                : "Type your todo here ..."
            }
          />
        </View>
        <View style={styles.buttonAdd}>
          <Button
            id="submitToDo"
            title={language === "Indonesia" ? "Tambahkan To Do" : "Add Todo"}
            onPress={handleAddTodo}
          />
        </View>
      </ModalPopup>
      <View style={styles.buttonContainer}>
        <Button
          id="createToDo"
          title={language === "Indonesia" ? "Buat To Do" : "Create Todo"}
          onPress={createTodo}
        />
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
  buttonAdd: {
    width: width / 1.2,
    marginVertical: 10,
    alignSelf: "center",
  },
  inputContainer: {
    width: width * 0.85,
  },
});
