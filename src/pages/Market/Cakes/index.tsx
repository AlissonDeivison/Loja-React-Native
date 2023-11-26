import React, { useState } from 'react'
import { Text, View } from 'react-native'
import NumeroFatias from './NumeroFatias'
import TipoRecheio from './TipoRecheio'
import Description from './Descricao';
import { Button } from '@rneui/base';
import styles from './styles';
import { criarCarrinhoDeCompras } from '../../CartContext'
import { getAuth, onAuthStateChanged } from "firebase/auth";



interface Produto {
    name: String,
    price: Number,
    description: String,
}

function orcamento(numeroFatias) {
    const valorFatia = 6.50;
    return numeroFatias * valorFatia;
}

function gerarProduto(fatias, recheio, descricao, orcamento) {
    const produto: Produto = {
        name: `Bolo de ${fatias} fatias com recheio de ${recheio}`,
        price: orcamento,
        description: descricao
    };
    return produto;
}


export default function Cakes({ setShoppingCart }) {

    const [fatias, setFatias] = useState(null)
    const [recheio, setRecheio] = useState(null)
    const [descricao, setDescricao] = useState(null)


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)
        } else {

        }
    });

    return (
        <View>
            <Text>Monte seu bolo</Text>
            <NumeroFatias onValueChange={(value) => setFatias(value)} />
            <TipoRecheio onValueChange={(value) => setRecheio(value)} />
            <Description onValueChange={(value) => setDescricao(value)} />
            <Button
                title="Adicionar ao carrinho"
                buttonStyle={styles.buttonAddToCart}
                containerStyle={styles.buttonAddToCartContainer}
                titleStyle={styles.buttonAddToCartTitle}
                onPress={() => {
                    try {
                        const produto = gerarProduto(fatias, recheio, descricao, orcamento(fatias).toFixed(2));
                        setShoppingCart(oldCart => [...oldCart, produto]);
                        criarCarrinhoDeCompras

                    } catch (err) {
                        console.log(err)
                    }
                }}
            />
        </View>
    )
}
