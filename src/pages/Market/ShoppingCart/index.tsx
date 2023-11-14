import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'


export default function ShoppingCart({ route }) {
  const {shoppingCart} = route.params;
  return (
    <ScrollView>
      {Array.isArray(shoppingCart) && shoppingCart.map((produto, index) => (
        <Card key={index}>
          <Card.Title>{produto.name}</Card.Title>
          <Card.Divider />
          <Text>Orçamento: {produto.price.toString()}</Text>
          <Text>Descição informada pelo cliente: {produto.description}</Text>
        </Card>
        )
      )}

    </ScrollView>
  )
}
