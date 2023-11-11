import React from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import { Button } from '@rneui/base'
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
        <Button
          title="Log in"
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.buttonLoginTitle}
          onPress={() => {navigation.navigate('market')}}
        />
      </View>
    </View>
  )
}
