import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { palette } from "../../utils/colors/colors";

import Input from "../../components/Input";
import Button from "../../components/Button";

const { width } = Dimensions.get("screen");

const Register = () => {
  const navigation: any = useNavigation();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onRegister = async (email: string, password: string) => {
    // try {
    //   const response = await app.auth().createUserWithEmailAndPassword(email, password)
    //   console.log(response.user)
    // } catch (error) {
    //   console.log(error)
    // }
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
