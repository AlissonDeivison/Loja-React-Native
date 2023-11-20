import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import styles from './styles'
import { Button } from '@rneui/base'
import app from '../../Config'
import { getFirestore, doc, setDoc, addDoc, collection } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'


export default function CreateAccount() {
    interface User {
        full_name: String,
        email: String,
        password: String
    }
    //Importação do banco de dados

    const db = getFirestore(app);
    const navigation = useNavigation();

    const [full_name, setFullName] = useState<String>('');
    const [email, setEmail] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const [fullNameError, setFullNameError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)

    const createNewUser = async (full_name, email, password) => {
        try {
            let newUser: User = {
                full_name: full_name,
                email: email,
                password: password,
            }
            await addDoc(collection(db, "usuarios"), newUser);
        } catch (error) {
            console.error("Error adding document: ", error)
        }
    }

    //Função para validar a entrada de password do usuário
    function passwordValidate(password: String) {
        if (password.length < 7) { return false };
        if (!/[A-Z]/.test(password)) { return false };
        if (!/[a-z]/.test(password)) { return false };
        if (!/[!@#$%^&*]/.test(password)) { return false };
        if (!/[0-9]/.test(password)) { return false };
        return true;
    }

    //Função para validar a entrada de email do usuário
    function emailValidate(email: String) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLocaleLowerCase())
    }

    //Função para validar a entrada de nome do usuário
    function nameValidate(name: String) {
        if (/[0-9]/.test(name)) { return false };
        if (/[!@#$%^&*]/.test(name)) { return false };
        if (name.length < 7) { return false };
        return true;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <Text>Nome Completo</Text>
            <TextInput style={styles.input} onChangeText={text => {
                setFullNameError(null);
                if (nameValidate(text)) {
                    setFullName(text)
                } else {
                    setFullNameError('Pelo menos 7 caracteres, não deve conter símbolos e números')
                }
            }} />
            {fullNameError && <Text style={styles.errorMessage}>{fullNameError}</Text>}

            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={text => {
                setEmailError(null);
                if (emailValidate(text)) {
                    setEmail(text);
                } else {
                    setEmailError('Email inválido')
                }
            }} />
            {emailError && <Text style={styles.errorMessage}>{emailError}</Text>}

            <Text>Senha</Text>
            <TextInput style={styles.input} secureTextEntry={true} onChangeText={text => {
                setPasswordError(null);
                if (passwordValidate(text)) {
                    setPassword(text)
                } else {
                    setPasswordError('Pelo menos 7 caracteres, deve conter letras maísculas e menúsculas, números e símbolos')
                }
            }} />
            {passwordError && <Text style={styles.errorMessage}>{passwordError}</Text>}

            <Button
                title="Cadastrar"
                buttonStyle={styles.buttonRegister}
                containerStyle={styles.buttonRegisterContainer}
                titleStyle={styles.buttonRegisterTitle}
                onPress={async () => {
                    if (nameValidate(full_name) && emailValidate(email) && passwordValidate(password)) {
                        await createNewUser(full_name, email, password);
                        setFullName('');
                        setEmail('');
                        setPassword('');
                        setFullNameError(null);
                        setEmailError(null);
                        setPasswordError(null);
                        Alert.alert('Sucesso', 'Cadastro realizado com sucesso',[
                            {text:'OK', onPress:() => navigation.navigate('Home')}
                        ],{cancelable:false})
                    } else {
                        console.log('Erro ao tentar criar uma conta')
                    }
                }}
            />
        </View>
    )
}
