import React, { ReactNode } from 'react';
import { Modal, StyleSheet, View } from 'react-native';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: ReactNode;
}

const ModalPopup: React.FC<ModalProps> = ({ visible, onClose, children }) => {
    return (
        <Modal visible={visible} onRequestClose={onClose} transparent>
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
