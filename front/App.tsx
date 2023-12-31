import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/pages/Login";
import CreateAccount from "./src/pages/CreateAccount";
import ForgotPassword from "./src/pages/ForgotPassword";
import PreLoadingScreen from "./src/pages/PreLoadingScreen";
import Home from "./src/pages/Home";
import Market from "./src/pages/Market";
import Icon from "react-native-vector-icons/AntDesign"
import ShoppingCart from "./src/pages/Market/ShoppingCart";
import { CartProvider } from "./src/pages/CartContext";
import { getAuth, signOut } from 'firebase/auth';

const App = () => {
  const Stack = createNativeStackNavigator();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Usuário desconectado com sucesso.');
    } catch (error) {
      console.error('Erro ao desconectar usuário:', error.message);
    }
  };


  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="PreLoading" options={{ headerShown: false }} component={PreLoadingScreen}></Stack.Screen>
          <Stack.Screen options={{ headerShown: true, title: 'Entrar', headerTintColor: '#FD91E4' }} name="Login" component={Login}></Stack.Screen>
          <Stack.Screen options={{ title: 'Criar Usuário', headerTintColor: '#FD91E4' }} name="CreateAccount" component={CreateAccount}></Stack.Screen>
          <Stack.Screen options={{ title: 'Recuperar Senha', headerTintColor: '#FD91E4' }} name="ForgotPassword" component={ForgotPassword}></Stack.Screen>
          <Stack.Screen options={{ title: 'Home', headerTintColor: '#FD91E4', headerShown: false }} name="Home" component={Home}></Stack.Screen>
          <Stack.Screen options={{ title: 'Carrinho de compras', headerTintColor: '#FD91E4', headerShown: true }} name="ShoppingCart" component={ShoppingCart}></Stack.Screen>
          <Stack.Screen options={({ navigation }) => {
            return {
              title: 'Ofertas',
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerLeft: () => (<Icon name="shoppingcart" size={28} onPress={() => (navigation.navigate('ShoppingCart'))} />),
              headerRight: () => (<Icon name="logout" size={28} onPress={() => { handleLogout(); navigation.navigate('Home'); }} />),
            }
          }}
            name="Market"
            component={Market}>

          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;