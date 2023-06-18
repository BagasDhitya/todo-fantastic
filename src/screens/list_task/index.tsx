import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Navbar from '../../components/Navbar'

const ListTask = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Navbar />
        </SafeAreaView>
    )
}

export default ListTask

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
})