import { StyleSheet, Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getItemWithExpiry } from "../../utils/services/storage";

import React, { useEffect } from "react";

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
    } catch (error) { }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: `https://i.pinimg.com/originals/1f/86/39/1f86398b6b66f39b2d85ac5cc75387f5.png`,
        }}
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
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});
