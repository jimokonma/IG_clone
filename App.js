import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
const Stack = createStackNavigator();

export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
