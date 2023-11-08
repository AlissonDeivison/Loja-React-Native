import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import styles from './styles'

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
