import { useState } from "react";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { useLanguageStore } from "../../utils/zustand/languageStore";
import { useAuthStore } from "../../utils/zustand/authStore";
import { palette } from "../../utils/colors/colors";
import { removeItem } from "../../utils/services/storage";

import Navbar from "../../components/Navbar";
import ModalPopup from "../../components/ModalPopup";


const Setting = () => {
  const navigation: any = useNavigation();
  const { language, setLanguage } = useLanguageStore();
  const { logout } = useAuthStore();

  const [open, setOpen] = useState<boolean>(false);

  const handleLogout = () => {
    removeItem("token");
    logout();
    navigation.navigate("Login");
  };

  const handleAbout = () => {
    setOpen(true);
  };

  const toggleLanguage = () => {
    const newLanguage = language === "English" ? "Indonesia" : "English";
    setLanguage(newLanguage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <TouchableOpacity style={styles.item} onPress={handleAbout}>
          <Text style={styles.itemText}>
            {language === "Indonesia" ? "Tentang" : "About"}
          </Text>
        </TouchableOpacity>
        <View style={styles.item}>
          <View style={styles.languageContainer}>
            <Text style={styles.itemText}>
              {language === "Indonesia" ? "Bahasa" : "Language"}
            </Text>
            <Text style={styles.languageText}>{language}</Text>
          </View>
          <Switch
            thumbColor={palette.sage400}
            value={language === "English"}
            onValueChange={toggleLanguage}
          />
        </View>
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <Text style={[styles.itemText, styles.logoutText]}>
            {language === "Indonesia" ? "Keluar" : "Logout"}
          </Text>
        </TouchableOpacity>
      </View>
      <ModalPopup id="about" visible={open} onClose={() => setOpen(false)}>
        {language === "Indonesia" ? (
          <View style={{ marginVertical: 10, alignItems: 'center' }}>
            <Text style={{ marginBottom: 10, color: palette.sage700, fontWeight: 'bold' }}>Tentang Aplikasi Daily Goals</Text>
            <Text style={{ marginHorizontal: 14, textAlign: 'center', color: palette.sage600 }}>Aplikasi ini digunakan untuk mencatat tugas sehari-hari. Terdapat fitur tanggal dan notifikasi yang dapat membantu pengguna mengingat tugas-tugas mereka</Text>
          </View>
        ) : (
          <View style={{ marginVertical: 10, alignItems: 'center' }}>
            <Text style={{ marginBottom: 10, color: palette.sage700, fontWeight: 'bold' }}>About Daily Goals App</Text>
            <Text style={{ marginHorizontal: 14, textAlign: 'center', color: palette.sage600 }}>This application is used to record daily tasks. It features date and notification functions to help users remember their tasks.</Text>
          </View>
        )}
      </ModalPopup>
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
    borderWidth: 1,
    borderColor: palette.sage700,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
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
    marginLeft: 15,
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
