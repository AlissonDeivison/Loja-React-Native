import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import NumeroFatias from './NumeroFatias'
import TipoRecheio from './TipoRecheio'
import Description from './Descricao';
import { Button } from '@rneui/base';
import styles from './styles';


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

    //Bloco de código usado apenas na depuração
    // useEffect(() => {
    //     if (fatias !== null) {
    //         numeroFatias = Number(fatias);
    //         if (numeroFatias !== 0) {
    //             valorOrcamento = orcamento(numeroFatias).toFixed(2)
    //             console.log(`R$: ${valorOrcamento}`)
    //         }
    //     }
    // }, [fatias]);

    // useEffect(() => {
    //     if (recheio !== null) {
    //         console.log(recheio);
    //     }
    // }, [recheio]);
    
    // useEffect(() => {
    //     if (descricao !== null) {
    //         console.log(descricao);
    //     }
    // }, [descricao]);

    return (
        <View>
            <Text >Monte seu bolo</Text>
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
                        setShoppingCart(produto)
                        console.log(produto);
                    }catch (err){
                        
                    }
                }}
            />
        </View>
    )
}
