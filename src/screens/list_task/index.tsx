import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useLanguageStore } from "../../utils/zustand/languageStore";
import { palette } from '../../utils/colors/colors';
import { SweetAlert } from '../../utils/services/alert';

import Navbar from '../../components/Navbar';

const { width, height } = Dimensions.get("screen")

const ListTask = () => {

    const currentDate = new Date();
    const { language } = useLanguageStore()
    const [task, setTasks] = useState<any | []>([])

    const dates = Array.from({ length: 30 }, (_, index) => {
        const newDate = new Date();
        newDate.setDate(currentDate.getDate() + index);
        return newDate.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
    });

    const renderDateItem = ({ item }: { item: string }) => (
        <View style={styles.dateItem}>
            <Text style={styles.dateText}>{item}</Text>
        </View>
    );

    const getTask = async () => {
        try {
            const data: string | null = await AsyncStorage.getItem("todos");
            if (data) {
                const tasksArray = JSON.parse(data);
                setTasks(tasksArray);
            }
        } catch (error) {
            SweetAlert({
                title: `${language === "Indonesia" ? "Gagal" : "Failed"}`,
                message: `${language === "Indonesia"
                    ? "Terjadi kesalahan, tutup aplikasi kemudian buka kembali!"
                    : "Something went wrong, close your app and then open again!"
                    }`,
                confirmText: "OK",
            });
        }
    };

    useEffect(() => {
        getTask()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
            <ScrollView horizontal>
                <View style={styles.contentContainer}>
                    <FlatList
                        data={dates}
                        horizontal
                        renderItem={renderDateItem}
                        keyExtractor={(index) => index.toString()}
                    />
                    <View style={styles.tasksContainer}>
                        {task.map((task: any) => (
                            <View key={task.id} style={styles.taskItem}>
                                <Text style={styles.taskTitle}>{task.title}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    contentContainer: {
        bottom: height * 0.07,
        flexDirection: 'column',
    },
    datesContainer: {
        flexDirection: 'column',
    },
    dateItem: {
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: palette.sage700,
    },
    tasksContainer: {
        flex: 1,
        bottom: height * 0.2,
    },
    taskItem: {
        paddingVertical: 10,
        marginLeft: width * 0.05
    },
    taskTitle: {
        fontSize: 16,
        color: palette.sage600
    },
    taskDueDate: {
        fontSize: 12,
        color: '#888',
    },
});


export default ListTask;
