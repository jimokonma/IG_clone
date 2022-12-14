import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer initialRouteName={"SignupScreen"}>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
