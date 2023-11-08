import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Text>Cadastre-se</Text>
            <Text>Nome Completo</Text>
            <TextInput style={styles.input} />
            <Text>Login</Text>
            <TextInput style={styles.input} />
            <Text>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} />
            <Button title="Cadastrar" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      padding: 40,
    },
    input: {
      height: 40,
      width: "100%",
      borderColor: "#848484",
      borderWidth: 1,
      marginTop: "3%",
      marginBottom: "5%",
    },
  
    createForgotLink: {
      flexDirection:"row",
      alignSelf:"flex-end",
    },
    links:{
      marginLeft:8,
      marginBottom:10,
      color:"#2196F3"
    }
  });