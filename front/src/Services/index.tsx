import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCm4_qNqbWGkKYr3yIPHTmBbaMUlwwaupc",
  authDomain: "jullys-cakes.firebaseapp.com",
  projectId: "jullys-cakes",
  storageBucket: "jullys-cakes.appspot.com",
  messagingSenderId: "630702451947",
  appId: "1:630702451947:web:6b0f284ffd310c61dfe2ae"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Adicione a persistência com AsyncStorage
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth, app };
