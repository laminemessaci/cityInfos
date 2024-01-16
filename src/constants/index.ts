import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const isIOS = Platform.OS === "ios";



export const BASE_URL = () => "https://restcountries.com/v3.1/name";
