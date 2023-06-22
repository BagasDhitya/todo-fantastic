import { Alert } from 'react-native';

import { SweetAlertProps } from '../types/component';

export const SweetAlert = ({
  title,
  message,
  confirmText = 'OK',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  isCancel
}: SweetAlertProps) => {

  const cancelTrue =  [
    {
      text: cancelText,
      onPress: onCancel,
      style: 'cancel',
    },
    {
      text: confirmText,
      onPress: onConfirm,
    },
  ] 

  const cancelFalse = [
    {
      text: confirmText,
      onPress: onConfirm,
    },
  ]

  Alert.alert(
    title,
    message,
    isCancel ?
    cancelTrue : cancelFalse
    ,
    { cancelable: false }
  );
};
