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
