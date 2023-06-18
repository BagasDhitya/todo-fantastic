import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { palette } from '../../utils/colors/colors';
import { removeItem } from '../../utils/services/storage';

import Navbar from '../../components/Navbar';

const Setting = () => {

    const navigation: any = useNavigation()
    const [isEnglish, setIsEnglish] = useState(false);

    const handleLanguageToggle = () => {
        setIsEnglish(!isEnglish);
    };

    const handleLogout = () => {
        removeItem("token")
        navigation.navigate("Login")
    };

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <View style={styles.content}>
                <TouchableOpacity style={styles.item} onPress={handleLogout}>
                    <Text style={styles.itemText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={handleLanguageToggle}>
                    <View style={styles.languageContainer}>
                        <Text style={styles.itemText}>Language:</Text>
                        <Text style={styles.languageText}>{isEnglish ? 'English' : 'Indonesia'}</Text>
                    </View>
                    <Switch thumbColor={palette.sage400} value={isEnglish} onValueChange={handleLanguageToggle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={handleLogout}>
                    <Text style={styles.logoutText}>Logout</Text>
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
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: palette.sage600
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    languageText: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: palette.sage700
    },
    logoutText: {
        color: 'red',
        fontWeight: 'bold',
    },
    switch: {
        color: palette.sage700
    }
});

export default Setting;
