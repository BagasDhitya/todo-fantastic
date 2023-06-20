import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useLanguageStore } from "../utils/zustand/languageState";
import { TodoItemProps } from "../utils/types/todo";

const TodoItem: React.FC<TodoItemProps> = ({ id, title, onDelete }) => {
  const { language } = useLanguageStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={() => onDelete(id)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>
          {language === "Indonesia" ? "Hapus" : "Delete"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "red",
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "white",
  },
});

export default TodoItem;
