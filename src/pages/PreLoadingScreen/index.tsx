import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'



export default function PreLoadingScreen() {

  const navigation = useNavigation();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('home');
    }, 2000); // Atraso de 2 segundos

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, []);


  return (
    <LinearGradient
      start={styles.container.gradient.gradientStart}
      end={styles.container.gradient.gradientEnd}
      colors={styles.container.gradient.colors}
      style={styles.container}
    >

      <View style={styles.container}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.logo}
        />
      </View>

    </LinearGradient>
  )
}