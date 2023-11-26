import { Text, TextInput, View, Image } from 'react-native'
import { Button } from '@rneui/base'
import styles from './styles'
import { useState } from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Services';


export default function Login({ navigation }: any) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [erro, setErro] = useState(null);


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user)
        if(user){
          navigation.navigate('Market')
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  function acessar(login: string, senha: string) {
    try {
      if (login === 'Admin' && senha === 'Admin') {
        navigation.navigate('Market')
      }
    } catch (err) {
      setErro('Login ou senha inválidos!')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          source={require('../../../assets/iconv2.png')}
          style={styles.logo_img}
        />
        <Text style={styles.text}>Jully's Cake</Text>
      </View>
      <View style={{ marginTop: '-30%' }}>
        <Text>Login</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
        <Text>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.input} value={password} onChangeText={setPassword} />
        <Button
          title="Log in"
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.buttonLoginTitle}
          onPress={handleLogin}
        />
        {erro ? <Text>{erro}</Text> : null}
      </View>
    </View>
  )
}