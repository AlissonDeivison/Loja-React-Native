import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Image } from 'react-native'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../../Config'



export default function PreLoadingScreen() {

  const navigation = useNavigation();

  useEffect(() => {
    const tryConnection = async () => {
      try {
        const db = getFirestore(app);
        const usersCollection = collection(db, 'usuarios');
        await getDocs(usersCollection);
        navigation.navigate('Home');
        console.log('Conexão com o banco de dados bem sucedida')
      } catch (error) {
        console.error('Erro ao conectar ao servidor: ', error)
      }
    };
    tryConnection();
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