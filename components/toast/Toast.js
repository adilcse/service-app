import { ToastAndroid } from "react-native";
export const Toast = (text) => {
  ToastAndroid.show(text, ToastAndroid.SHORT);
};
