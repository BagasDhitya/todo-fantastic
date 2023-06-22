import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { ButtonProps } from '../utils/types/component';
import { palette } from "../utils/colors/colors"

const Button: React.FC<ButtonProps> = ({ id, title, onPress }) => {
    return (
        <TouchableOpacity id={id} style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: palette.sage400,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Button;