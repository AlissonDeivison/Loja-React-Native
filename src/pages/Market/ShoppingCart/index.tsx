import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'

interface Produto {
  name: String,
  price: Number,
  description: String,
}

interface Props {
  shoppingCart: Produto[]
}

export default function ShoppingCart({ shoppingCart }: Props) {
  return (
    <ScrollView>

      {shoppingCart.map((produto) => (
        <Card>
          <Card.Title>{produto.name}</Card.Title>
          <Card.Divider />
          <Text>Orçamento: {produto.price.toString()}</Text>
          <Text>Descição informada pelo cliente: {produto.description}</Text>
        </Card>
      ))}

    </ScrollView>
  )
}
