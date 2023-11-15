
import { Text, TextInput, View, Image } from 'react-native'
import { Button } from '@rneui/base'
import styles from './styles'
import { useState } from 'react';


export default function Login({ navigation }: any) {

  const [login, setLogin] = useState(null);
  const [senha, setSenha] = useState(null);
  const [erro, setErro] = useState(null);


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
        <Text style={styles.text}>Jully's Cakes</Text>
      </View>
      <View style={{ marginTop: '-30%' }}>
        <Text>Login</Text>
        <TextInput style={styles.input} value={login} onChangeText={setLogin} />
        <Text>Senha</Text>
        <TextInput secureTextEntry={true} style={styles.input} value={senha} onChangeText={setSenha} />
        <Button
          title="Log in"
          buttonStyle={styles.buttonLogin}
          containerStyle={styles.buttonLoginContainer}
          titleStyle={styles.buttonLoginTitle}
          onPress={() => acessar(login, senha)}
          />
          {erro ? <Text>{erro}</Text> : null}
      </View>
    </View>
  )
}
