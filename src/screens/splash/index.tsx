import { StyleSheet, Image, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { getItemWithExpiry } from "../../utils/services/storage";
import { SweetAlert } from "../../utils/services/alert";

const Splash = () => {
  const navigation: any = useNavigation();

  const checkToken = async () => {
    try {
      const token = await getItemWithExpiry("token");
      if (token !== null) {
        setTimeout(() => {
          navigation.navigate("Home");
        }, 3000);
      } else {
        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
      }
    } catch (error) {
      SweetAlert({
        title: "Something went wrong",
        message: "Please reload your app",
        confirmText: "OK",
      });
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/logo.png')}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 400,
    resizeMode: "contain",
  },
});
