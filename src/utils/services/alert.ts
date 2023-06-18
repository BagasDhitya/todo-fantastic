import { Alert } from 'react-native';

export interface SweetAlertProps {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  isCancel?: boolean
}

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
