import React from 'react'
import { Button, Text, TextInput, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles'

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name='shopping-store' size={150} color={'#FF9900'} />
        <Text style={styles.text}>Lajota</Text>
      </View>
      <Text>Login</Text>
      <TextInput style={styles.input} />
      <Text>Senha</Text>
      <TextInput secureTextEntry={true} style={styles.input} />
      <View style={styles.createForgotLink}>
        <Text style={styles.links}>Create Account</Text>
        <Text style={styles.links}>Forgot Password</Text>
      </View>
      <Button title="Entrar" />
    </View>
  )
}
