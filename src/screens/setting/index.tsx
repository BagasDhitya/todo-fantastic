import React from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useLanguageStore } from "../../utils/zustand/languageStore";

import { palette } from "../../utils/colors/colors";
import { removeItem } from "../../utils/services/storage";

import Navbar from "../../components/Navbar";

const Setting = () => {
  const navigation: any = useNavigation();
  const { language, setLanguage } = useLanguageStore();

  const handleLogout = () => {
    removeItem("token");
    navigation.navigate("Login");
  };

  const toggleLanguage = () => {
    const newLanguage = language === "English" ? "Indonesia" : "English";
    setLanguage(newLanguage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Text style={styles.itemText}>
            {language === "Indonesia" ? "Tentang" : "About"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={toggleLanguage}>
          <View style={styles.languageContainer}>
            <Text style={styles.itemText}>
              {" "}
              {language === "Indonesia" ? "Bahasa" : "Language"}
            </Text>
            <Text style={styles.languageText}>{language}</Text>
          </View>
          <Switch
            thumbColor={palette.sage400}
            value={language === "English"}
            onValueChange={toggleLanguage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Text style={styles.logoutText}>
            {" "}
            {language === "Indonesia" ? "Keluar" : "Logout"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: palette.sage600,
  },
  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageText: {
    marginLeft: 5,
    fontWeight: "bold",
    color: palette.sage700,
  },
  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
  switch: {
    color: palette.sage700,
  },
});

export default Setting;
