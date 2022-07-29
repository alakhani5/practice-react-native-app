import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  Dimensions
} from "react-native";
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import OfficePixels from "./app/screens/OfficePixels";

export default function App() {


  return (
    <OfficePixels />
  );
}
