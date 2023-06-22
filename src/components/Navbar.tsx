import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { palette } from "../utils/colors/colors";
import { getGreeting } from "../utils/services/time"
import { useLanguageStore } from "../utils/zustand/languageStore";
import { useAuthStore } from "../utils/zustand/authStore";

const { height, width } = Dimensions.get("screen");

const Navbar = () => {
  const navigation: any = useNavigation();

  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguageStore();
  const { email } = useAuthStore()

  const menuScale = useRef(new Animated.Value(0)).current;
  const greeting = getGreeting(language)

  const uri =
    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg";
  const pages = [
    {
      title: `${language === "Indonesia" ? "Halaman Utama" : "Home"}`,
      component: "Home",
    },
    {
      title: `${language === "Indonesia" ? "Pengaturan" : "Setting"}`,
      component: "Setting",
    },
    {
      title: `${language === "Indonesia" ? "Daftar To Do" : "To Do List"}`,
      component: "ListStack",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigateToPage = (component: string) => {
    setIsOpen(false);
    navigation.navigate(component);
  };

  const toggleMenuAnimation = () => {
    console.log(isOpen)
    if (isOpen) {
      Animated.timing(menuScale, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        setIsOpen(false);
      });
    } else {
      setIsOpen(true);
      Animated.timing(menuScale, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={[styles.navbarContainer, { zIndex: 2 }]}>
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text style={{ color: "white" }}>{greeting}, {email?.split('@')[0]}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            toggleMenu();
            toggleMenuAnimation();
          }}
          style={styles.avatarContainer}
        >
          <Image source={{ uri: uri }} style={styles.avatar} />
        </TouchableOpacity>
        {isOpen && (
          <Animated.View
            style={[
              styles.menu,
              {
                transform: [
                  {
                    scale: menuScale.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            {pages.map((page: any, index: number) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => navigateToPage(page.component)}
              >
                <Text style={styles.menuText}>{page.title}</Text>
              </TouchableOpacity>
            ))}
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    height: height * 0.15,
    backgroundColor: palette.sage400,
  },
  menuIconContainer: {
    marginLeft: 10,
    marginRight: 5,
  },
  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  avatarContainer: {
    marginRight: width * 0.07,
    marginTop: height * 0.05,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
  menu: {
    position: "absolute",
    top: height * 0.1 + 10,
    right: width * 0.1,
    backgroundColor: palette.sage400,
    padding: 10,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: height * 0.01,
  },
  menuText: {
    fontSize: 16,
    color: "white",
  },
  welcome: {
    marginHorizontal: width * 0.04,
    marginTop: height * 0.05,
  }
});

export default Navbar;
