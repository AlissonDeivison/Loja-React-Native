import React, { useContext } from 'react'
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { CartContext } from '../../CartContext'
import styles from './styles';


export default function ShoppingCart() {

  const {shoppingCart} = useContext(CartContext)

  return (
    <ScrollView>
      {Array.isArray(shoppingCart) && shoppingCart.map((produto, index) => (
        <Card key={index}>
          <Card.Title>{produto.name}</Card.Title>
          <Card.Divider />
          <Text >Descrição do recheio: {produto.description}</Text>
          <Text >Comentário do usuário: {produto.userComment}</Text>
          <Text >Orçamento: R$ {produto.price.toString()}</Text>
        </Card>
        )
      )}
    </ScrollView>
  )
}