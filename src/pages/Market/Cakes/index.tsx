import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import NumeroFatias from './NumeroFatias'
import TipoRecheio from './TipoRecheio'
import Description from './Descricao';
import { Button } from '@rneui/base';
import styles from './styles';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import {  getFirestore, setDoc, doc } from 'firebase/firestore';
import { app } from '../../../Services';


interface Produto {
    name: String,
    price: Number,
    description: String,
    userComment: String,
}

function orcamento(numeroFatias) {
    const valorFatia = 6.50;
    return numeroFatias * valorFatia;
}

function gerarProduto(fatias: any, recheio: any, descricao, orcamento) {

    const produto: Produto = {
        name: `Bolo de ${fatias.tamanho} fatias com recheio de ${recheio.title}`,
        price: orcamento,
        description: recheio.description,
        userComment: descricao,
    };
    return produto;
}


export default function Cakes({ setShoppingCart }) {

    const navigation = useNavigation();

    const [fatias, setFatias] = useState(null);
    const [recheio, setRecheio] = useState(null);
    const [descricao, setDescricao] = useState(null);

    const auth = getAuth();

    let uid = null; 

    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid; 
        }
    });
    
    const salvarCarrinho = async (produtos) => {
        const db = getFirestore(app);
        await setDoc(doc(db, 'carrinhosDeCompra', uid), { produtos });
        console.log("Documento adicionado com ID: ", uid);
    }
    

    const resetForm = () => {
        setFatias(null);
        setRecheio(null);
        setDescricao(null);
    };
    return (
        <View>
            <View>
                <Text style={styles.textTitle}>MAKE YOUR CAKE</Text>
            </View>

            <View>
                <Text style={styles.inputEscolha}>Escolha o número de fatias</Text>
            </View>

            <NumeroFatias onValueChange={(value) => setFatias(value)} />

            <View>
                <Text style={styles.inputEscolha}>Escolha seu recheio</Text>
            </View>

            <TipoRecheio onValueChange={(value) => setRecheio(value)} />

            <View>
                <Text style={styles.inputEscolha}>Agora descreva a temática do seu bolo</Text>
            </View>

            <Description onValueChange={(value) => setDescricao(value)} />
            <Button
                title="Adicionar ao carrinho"
                buttonStyle={styles.buttonAddToCart}
                containerStyle={styles.buttonAddToCartContainer}
                titleStyle={styles.buttonAddToCartTitle}
                onPress={() => {
                    try {
                        const produto = gerarProduto(fatias, recheio, descricao, orcamento(fatias.tamanho).toFixed(2));
                        setShoppingCart(oldCart => [...oldCart, produto]);

                        resetForm();
                        salvarCarrinho(produto);

                        Alert.alert(
                            'Produto adicionado ao carrinho',
                            'Seu produto foi adicionado ao carrinho com sucesso!',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        // Redirecionar para a tela do carrinho
                                        navigation.navigate('ShoppingCart'); // Substitua 'Carrinho' pelo nome da sua tela de carrinho
                                    },
                                },
                            ]
                        );


                    } catch (err) {
                        console.log(err)
                    }
                }}
            />
        </View>
    )
}
