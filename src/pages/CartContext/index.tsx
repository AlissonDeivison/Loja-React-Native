import app from '../../Services'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";



export interface Produto {
  name: String,
  price: Number,
  description: String,
  image: String
}

interface CartContextType {
  shoppingCart: Produto[];
  setShoppingCart: Dispatch<SetStateAction<Produto[]>>;
}

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // console.log(user)
  } else {

  }
});

export async function criarCarrinhoDeCompras(usuarioId, carrinhoDeCompras) {

  const db = getFirestore(app);

  const carrinhoDeComprasData = {
    ...carrinhoDeCompras,
    usuario: usuarioId
  };

  const carrinhoDeComprasRef = doc(collection(db, 'carrinhoDeCompras'));
  await setDoc(carrinhoDeComprasRef, carrinhoDeComprasData)
}

export const CartContext = createContext<CartContextType>({ shoppingCart: [], setShoppingCart: () => { } });

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<Produto[]>([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </CartContext.Provider>
  );
};

