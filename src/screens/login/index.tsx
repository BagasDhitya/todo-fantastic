import { StyleSheet, SafeAreaView, View, Dimensions } from 'react-native'
import React, { useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

const { width } = Dimensions.get('screen')

const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onLogin = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <Input
                    id='email'
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={styles.gap} />
                <Input
                    id='password'
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                />
                <View style={styles.gap} />
                <View style={styles.buttonContainer}>
                    <Button id='login' title='Login' />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    buttonContainer: {
        width: width / 1.2,
        position: 'absolute',
        top: width / 1,
        alignSelf: 'center',
    },
    form: {
        width: width / 1.3,
        position: "absolute",
    },
    gap: {
        height: 16,
    }
})