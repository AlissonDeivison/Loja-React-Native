import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './styles'
import { Button } from '@rneui/base'

export default function CreateAccount() {
    interface User {
        full_name: String,
        login: String,
        password: String
    }

    const [user, setUser] = useState<User[] | null>([])
    const [full_name, setFullName] = useState<String>('');
    const [login, setLogin] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    const listUsers = (array: any) => {
        array.map((user: User) => { console.log(user) })
    }


    const setNewUser = () => {
        let new_user: User = { full_name, login, password };
        setUser(prevUsers => prevUsers ? [...prevUsers, new_user] : [new_user]);
    }

    useEffect(() => {
        if (user) {
            listUsers(user);
        }
    }, [user]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <Text>Nome Completo</Text>
            <TextInput style={styles.input} onChangeText={text => setFullName(text)} />
            <Text>Login</Text>
            <TextInput style={styles.input} onChangeText={text => setLogin(text)} />
            <Text>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={text => setPassword(text)} />
            <Button
                title="Cadastrar"
                buttonStyle={styles.buttonRegister}
                containerStyle={styles.buttonRegisterContainer}
                titleStyle={styles.buttonRegisterTitle}
                onPress={() => (setNewUser())}
            />
        </View>
    )
}
