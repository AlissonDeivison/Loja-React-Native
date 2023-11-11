import { NavigationContainer, NavigationRouteContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";
import CreateAccount from "./src/pages/CreateAccount";
import ForgotPassword from "./src/pages/ForgotPassword";
import PreLoadingScreen from "./src/pages/PreLoadingScreen";
import Home from "./src/pages/Home";
import Market from "./src/pages/Market";


const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="preloading" options={{headerShown:false}} component={PreLoadingScreen}></Stack.Screen>
        <Stack.Screen options={{headerShown:true, title:'Entrar', headerTintColor:'#FD91E4'}} name="login" component={Login}></Stack.Screen>
        <Stack.Screen options={{title: 'Criar Usuário', headerTintColor:'#FD91E4'}} name="createAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen options={{title: 'Recuperar Senha', headerTintColor:'#FD91E4'}} name="forgotPassword" component={ForgotPassword}></Stack.Screen>
        <Stack.Screen options={{title: 'Home', headerTintColor:'#FD91E4', headerShown:false}} name="home" component={Home}></Stack.Screen>
        <Stack.Screen  options= {{headerShown:false}} name="market" component={Market}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;