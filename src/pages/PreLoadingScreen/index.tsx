import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import Login from '../Login';


export default function PreLoadingScreen() {

  const navigation = useNavigation();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('login');
    }, 2000); // Atraso de 2 segundos

    return () => clearTimeout(timer); // Limpar o timer se o componente for desmontado
  }, []);


  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon.png')}
        style={styles.logo}
      />
    </View>
  )
}