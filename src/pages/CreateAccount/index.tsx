import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import styles from './styles'

export default function Cadastro() {

    interface User {
        full_name: String,
        login: String,
        password: String
    }

    const [user, setUser] = useState<User | null>(null)
    const [full_name, setFullName] = useState<String>('');
    const [login, setLogin] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const setNewUser = () => {
        let new_user: User={full_name,login,password};
        setUser(new_user);
        console.log(new_user);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <Text>Nome Completo</Text>
            <TextInput style={styles.input} onChangeText={text => setFullName(text)} />
            <Text>Login</Text>
            <TextInput style={styles.input} onChangeText={text => setLogin(text)} />
            <Text>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={text => setPassword(text)}/>
            <Button title="Cadastrar" onPress={setNewUser}/>
        </View>
    )
}
