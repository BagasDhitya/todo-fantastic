import * as Notifications from "expo-notifications";

export const registerForPushNotifications = async () => {
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
