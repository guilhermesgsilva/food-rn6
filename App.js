import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import BusinessDetailScreen from "./src/screens/BusinessDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BusinessDetail" component={BusinessDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
