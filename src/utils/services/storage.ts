import AsyncStorage from "@react-native-async-storage/async-storage";

const setItemWithExpiry = async (
  key: any,
  value: number | string | [] | {},
  expiryInMinutes: number
) => {
  const item = {
    value,
    expiry: Date.now() + expiryInMinutes * 60 * 1000,
  };
  await AsyncStorage.setItem(key, JSON.stringify(item));
};

const getItemWithExpiry = async (key: any) => {
  const itemString = await AsyncStorage.getItem(key);
  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);
  const now = Date.now();
  if (now > item.expiry) {
    await AsyncStorage.removeItem(key);
    return null;
  }

  return item.value;
};

export { setItemWithExpiry, getItemWithExpiry };
