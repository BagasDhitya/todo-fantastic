import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { InputProps } from '../utils/types/input';

const Input: React.FC<InputProps> = ({ id, placeholder, value, onChangeText }) => {
    return (
        <TextInput
            id={id}
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default Input;