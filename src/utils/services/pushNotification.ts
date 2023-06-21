import * as Notifications from "expo-notifications";

import { NotificationState } from "../../utils/types/notification";

export const registerNotifications = async () => {
  try {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus === "granted") {
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log("Expo token:", token);
    }
  } catch (error) {
    console.log("Error getting Expo token:", error);
  }
};

export const getNotifications = async (
  title: string,
  body: string,
  seconds: number
) => {
  const data: NotificationState = {
    title: title,
    body: body,
    seconds: seconds,
  };

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  });
  await Notifications.scheduleNotificationAsync({
    content: {
      title: data.title,
      body: data.body,
    },
    trigger: {
      seconds: data.seconds,
    },
  });
};
