import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { palette } from '../utils/colors/colors';

const { height } = Dimensions.get("screen");

const Navbar = () => {

    const navigation: any = useNavigation()
    const [isOpen, setIsOpen] = useState(false);
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
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={toggleMenu} style={styles.button}>
                <Text style={styles.buttonText}>{isOpen ? '✕' : '☰'}</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.menu}>
                    {pages.map((page: any, index: number) => (
                        <TouchableOpacity key={index} style={styles.menuItem}>
                            <Text style={styles.menuText} onPress={() => navigation.navigate(page.component)}>{page.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height * 0.05,
        backgroundColor: palette.sage400,
        borderRadius: 5
    },
    button: {
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 24,
        color: 'white'
    },
    menu: {
        position: 'absolute',
        top: 40,
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
        paddingVertical: 8,
    },
    menuText: {
        fontSize: 16,
        color: 'white'
    },
});

export default Navbar;
