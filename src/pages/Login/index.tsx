import React from 'react'
import { Button, Text, TextInput, View, Image } from 'react-native'
import styles from './styles'


export default function Login({navigation}:any) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/iconv2.png')}
          style={styles.logo_img}
        />
        <Text style={styles.text}>Jully's Cakes</Text>
      </View>
      <View style={{marginTop:'-30%'}}>
        <Text>Login</Text>
        <TextInput style={styles.input} />
        <Text>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.input} />
        <View style={styles.createForgotLink}>
          <Text onPress={() => { navigation.navigate('createAccount') }} style={styles.links}>Criar uma conta</Text>
          <Text onPress={() => { navigation.navigate('forgotPassword') }} style={styles.links}>Esqueci a senha</Text>
        </View>
        <Button onPress={() => { navigation.navigate('home') }} title="Entrar" />
      </View>
    </View>
  )
}
