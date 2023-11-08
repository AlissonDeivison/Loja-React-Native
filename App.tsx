import { NavigationContainer, NavigationRouteContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;