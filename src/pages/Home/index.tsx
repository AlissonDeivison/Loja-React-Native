import React from 'react'
import {Button, ButtonGroup} from '@rneui/base'
import styles from './styles'
import { View, Image } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
          source={require('../../../assets/iconv2.png')}
          style={styles.logo_img}
      />
      
      <Button title='Log in' style={styles.button}></Button>
      <Button title='Register' style={styles.button}></Button>
      
    </View>
  )
}
