import React from 'react'
import { Button, Text, TextInput, View, StyleSheet } from 'react-native'

export default function Login() {
    return (
        <View style={styles.container}>
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