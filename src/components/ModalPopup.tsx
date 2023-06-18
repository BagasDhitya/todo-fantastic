import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

import { ModalProps } from '../utils/types/modal';

const ModalPopup: React.FC<ModalProps> = ({ id, visible, onClose, children }) => {
    return (
        <Modal id={id} visible={visible} onRequestClose={onClose} transparent>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        elevation: 4,
    },
});

export default ModalPopup;
