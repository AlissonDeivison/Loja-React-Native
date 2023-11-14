import React, { useState, useEffect, useLayoutEffect } from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './styles';
import Cakes from './Cakes';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/AntDesign"
import { Button } from '@rneui/base';


export interface Produto {
  name: String,
  price: Number,
  description: String,
  image: String
}


export default function Market() {

  const [shoppingCart, setShoppingCart] = useState<Produto[]>([])
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Icon name="logout" size={28} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('shoppingCart', { shoppingCart })}>
          <Icon name="shoppingcart" size={28} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <Cakes setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />
      <Button onPress={() => {console.log(shoppingCart)}} />
    </ScrollView>
  )
}
