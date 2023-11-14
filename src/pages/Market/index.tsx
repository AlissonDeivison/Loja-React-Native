import React, { useState, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import styles from './styles';
import Cakes from './Cakes';
import ShoppingCart from './ShoppingCart';


export interface Produto {
    name: String,
    price: Number,
    description: String,
    image: String
}


export default function Market() {
    
    const [shoppingCart, setShoppingCart] = useState<Produto[]>([])
    
    const verificarCarrinho = () => {
        shoppingCart.map((produto)=>{
            console.log(produto)
        })
    }

    useEffect(()=>{
        verificarCarrinho()
    },[setShoppingCart]);
    
    return (
        <ScrollView style={styles.container}>
            <Cakes setShoppingCart={setShoppingCart}/>
            <ShoppingCart shoppingCart={shoppingCart} />
        </ScrollView>
    )
}
