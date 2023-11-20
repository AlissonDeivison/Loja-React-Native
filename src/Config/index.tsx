import { initializeApp, getApps } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCm4_qNqbWGkKYr3yIPHTmBbaMUlwwaupc",
    authDomain: "jullys-cakes.firebaseapp.com",
    projectId: "jullys-cakes",
    storageBucket: "jullys-cakes.appspot.com",
    messagingSenderId: "630702451947",
    appId: "1:630702451947:web:6b0f284ffd310c61dfe2ae"
};

let app;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
}

export default app;