import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { auth } from "../../../firebase";
import { SweetAlert } from "../../utils/services/alert";
import { palette } from "../../utils/colors/colors";
import { setItemWithExpiry } from "../../utils/services/storage";

import { useLanguageStore } from "../../utils/zustand/languageStore";
import { useAuthStore } from "../../utils/zustand/authStore";

import Input from "../../components/Input";
import Button from "../../components/Button";

const { width } = Dimensions.get("screen");

const Login = () => {

  const navigation: any = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { language } = useLanguageStore();
  const { login } = useAuthStore()

  const onLogin = async (email: string, password: string) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      const token = response.user;
      return token
        ?.getIdToken()
        .then((token) => {
          login(email, password)
          setItemWithExpiry("token", token, 3600);
          SweetAlert({
            title: `${language === "Indonesia" ? "Berhasil" : "Success"}`,
            message: `${language === "Indonesia"
              ? "Selamat datang!"
              : "Welcome to the App!"
              }`,
            confirmText: "OK",
          });
          navigation.navigate("Home");
        })
        .catch((error) => {
          SweetAlert({
            title: `${language === "Indonesia"
              ? "Terjadi kesalahan"
              : "Something went wrong"
              }`,
            message: `${error.message}`,
            confirmText: "OK",
          });
        });
    } catch (error) {
      SweetAlert({
        title: `${language === "Indonesia"
          ? "Terjadi kesalahan"
          : "Something went wrong"
          }`,
        message: `${error}`,
        confirmText: "OK",
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Input
          id="email"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.gap} />
        <Input
          id="password"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.gap} />
        <View style={styles.buttonContainer}>
          <Button
            id="login"
            title="Login"
            onPress={() => onLogin(email, password)}
          />
          <Text
            style={{
              marginTop: 15,
              alignSelf: "center",
              color: palette.sage700,
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("Register")}
          >
            {language === "Indonesia"
              ? "Belum punya akun disini? Daftar sekarang!"
              : "Don't have an account yet? Please register here!"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  buttonContainer: {
    width: width / 1.2,
    position: "absolute",
    top: width / 1.1,
    alignSelf: "center",
  },
  form: {
    width: width / 1.3,
    position: "absolute",
  },
  gap: {
    height: 16,
  },
});
