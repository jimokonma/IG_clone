import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
const Stack = createStackNavigator();

export default function App() {
  // return <HomeScreen />;
  return <NewPostScreen />;
}

const styles = StyleSheet.create({
  container: {},
});
