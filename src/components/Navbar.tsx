import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { palette } from '../utils/colors/colors';

const { height } = Dimensions.get("screen");

const Navbar = () => {
    const navigation: any = useNavigation();
    const [isOpen, setIsOpen] = useState(false);
    const uri = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
    const pages = [
        {
            title: "Home",
            component: "Home"
        },
        {
            title: "Setting",
            component: "Setting"
        },
        {
            title: "List",
            component: "ListStack"
        }
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navigateToPage = (component: string) => {
        setIsOpen(false);
        navigation.navigate(component);
    };

    return (
        <SafeAreaView style={[styles.navbarContainer, { zIndex: 2 }]}>
            <View style={styles.container}>
                <TouchableOpacity onPress={toggleMenu} style={styles.avatarContainer}>
                    <Image source={{ uri: uri }} style={styles.avatar} />
                </TouchableOpacity>
                {isOpen && (
                    <View style={styles.menu}>
                        {pages.map((page: any, index: number) => (
                            <TouchableOpacity key={index} style={styles.menuItem} onPress={() => navigateToPage(page.component)}>
                                <Text style={styles.menuText}>{page.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    navbarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: height * 0.06,
        backgroundColor: palette.sage400,
    },
    avatarContainer: {
        marginRight: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    menu: {
        position: 'absolute',
        top: height * 0.05 + 10,
        right: 10,
        backgroundColor: palette.sage400,
        padding: 10,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    menuItem: {
        paddingVertical: 8
    },
    menuText: {
        fontSize: 16,
        color: 'white'
    },
});

export default Navbar;
