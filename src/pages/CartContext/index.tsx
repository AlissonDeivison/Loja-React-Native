import app from '../../Config'
import { collection, doc, getFirestore, setDoc } from 'firebase/firestore';
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

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


export const CartContext = createContext<CartContextType>({ shoppingCart: [], setShoppingCart: () => {} });

export const CartProvider: React.FC <{children: React.ReactNode}> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<Produto[]>([]);

  return (
    <CartContext.Provider value={{ shoppingCart, setShoppingCart }}>
      {children}
    </CartContext.Provider>
  );
};

export async function criarCarrinhoDeCompras (usuarioId, carrinhoDeCompras){
  const db = getFirestore(app);
  const user = doc(db, 'usuarios', usuarioId);

  const carrinhoDeComprasData = {
    ...carrinhoDeCompras,
    usuario: usuarioId
  };

  const carrinhoDeComprasRef = doc(collection(db, 'carrinhoDeCompras'));
  await setDoc(carrinhoDeComprasRef, carrinhoDeComprasData)
}