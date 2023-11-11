import React from 'react'
import { Button } from '@rneui/base'
import styles from './styles'
import { View, Image, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={styles.container.gradient.gradientStart}
      end={styles.container.gradient.gradientEnd}
      colors={styles.container.gradient.colors}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image
          source={require('../../../assets/iconv2.png')}
          style={styles.logo_img}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Cadastre-se"
          buttonStyle={styles.buttonSignUp}
          containerStyle={styles.buttonSignUpContainer}
          titleStyle={styles.buttonSignUpTitle}
          onPress={() => {navigation.navigate('createAccount')}}
        />
        <Button
          title="Log in"
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.buttonLoginTitle}
          onPress={() => {navigation.navigate('login')}}
        />
        <View>
          <Text onPress={() => { navigation.navigate('forgotPassword') }} style={styles.forgotLink}>Esqueci a senha</Text>
        </View>
      </View>
    </LinearGradient>
  )
}
