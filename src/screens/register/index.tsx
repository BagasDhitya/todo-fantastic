import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../../../firebase"
import { palette } from "../../utils/colors/colors";
import { SweetAlert } from "../../utils/services/alert";

import Input from "../../components/Input";
import Button from "../../components/Button";

const { width } = Dimensions.get("screen");

const Register = () => {
  const navigation: any = useNavigation();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onRegister = async (email: string, password: string) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          SweetAlert({
            title: "Success",
            message: "Successfully register",
            confirmText: "OK"
          })
          navigation.navigate("Login")
        })
        .catch((error) => {
          SweetAlert({
            title: "Something went wrong!",
            message: `${error.message}`,
            confirmText: "OK"
          })
        })
    } catch (error) {
      SweetAlert({
        title: "Something went wrong!",
        message: `${error}`,
        confirmText: "OK"
      })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Input
          id="username"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.gap} />
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
          <Button id="register" title="Register" onPress={() => onRegister(email, password)} />
          <Text
            style={{
              marginTop: 15,
              alignSelf: "center",
              color: palette.sage700,
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Please log in here!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    top: width / 1,
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
