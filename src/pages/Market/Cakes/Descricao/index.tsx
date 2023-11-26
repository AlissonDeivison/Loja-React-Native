import React, { useState } from 'react'
import { Text, TextInput } from 'react-native'
import { View } from 'react-native'
import styles from './styles'

export default function Description({onValueChange}) {

  return (
    <View>
        <Text>Descreva a temática do bolo, ideias que você possui para o mesmo</Text>
        <TextInput style={styles.input} onChangeText={(text) => {
          onValueChange(text)
        }} />
    </View>
  )
}
