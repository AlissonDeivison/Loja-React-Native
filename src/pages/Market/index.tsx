import React, { useEffect, useContext } from 'react'
import { ScrollView } from 'react-native'
import styles from './styles';
import Cakes from './Cakes';
import { CartContext } from '../CartContext';


export default function Market() {

  const {shoppingCart, setShoppingCart} = useContext(CartContext)
  
  useEffect(() => {
    if (shoppingCart) {
    }
  }, [shoppingCart]);

  return (
      <ScrollView style={styles.container}>
        <Cakes setShoppingCart={setShoppingCart} />
      </ScrollView>
  )
}
