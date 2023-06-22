import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { palette } from '../../utils/colors/colors';

import Navbar from '../../components/Navbar';

const { width, height } = Dimensions.get("screen")

const ListTask = () => {

    const currentDate = new Date();
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

    const tasks = [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' },
    ];

    const getTask = async () => {
        const data = await AsyncStorage.getItem("todos")
        console.log(data)
    }

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
                        {tasks.map((task) => (
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
