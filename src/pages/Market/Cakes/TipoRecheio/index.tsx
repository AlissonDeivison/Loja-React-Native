import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
import { app } from '../../../../Services'

interface IRecheio {
    title: string,
    image: string | undefined,
    disponibility: boolean,
    description: string,
}

export default function TipoRecheio({ onValueChange }) {

    const auth = getAuth();

    const [recheiosData, setRecheiosData] = useState([]);
    const [recheioEscolhido, setRecheioEscolhido] = useState(null);
    const [favorito, setFavorito] = useState([]);
    const [favoritosDoUsuario, setFavoritosDoUsuario] = useState();
    const [recarregar, setRecarregar] = useState(false)

    let uid = null;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            uid = user.uid;
            //console.log(uid);
        }
    });

    useEffect(() => {
        const db = getFirestore(app);

        const tryConnection = async () => {
            try {
                console.log('Conexão com o banco de dados bem sucedida');

                // Carrega os recheios
                const recheiosCollection = collection(db, 'recheios');
                const recheiosSnapshot = await getDocs(recheiosCollection);
                const recheios = recheiosSnapshot.docs.map(doc => doc.data());
                setRecheiosData(recheios);

                // Carrega os favoritos do usuário logado
                const favoritosCollection = collection(db, 'informacoesDoUsuario');
                const favoritosDoc = doc(favoritosCollection, uid);
                const favoritosSnapshot = await getDoc(favoritosDoc);

                if (favoritosSnapshot.exists()) {
                    // Se o documento existir, você pode acessar os dados assim:
                    const favoritosDoUsuarioLogado = favoritosSnapshot.data();
                    //console.log('Favoritos do usuário logado:', favoritosDoUsuarioLogado);
                    setFavoritosDoUsuario(favoritosDoUsuarioLogado)
                } else {
                    console.log('Documento de favoritos não encontrado para o usuário:', uid);
                }
            } catch (error) {
                console.error('Erro ao conectar ao servidor: ', error);
            }
        };

        tryConnection();
    }, [uid,favorito]);


    // const toggleFavorito = (recheio) => {
    //     setFavorito(() => {
    //       const novoFavorito = { ...recheio, recheio };
    //       adicionarFavorito();
    //       return novoFavorito;
    //     });
    //   };

    //Adiciona o favorito ao banco 
    const adicionarFavorito = async (recheio) => {
        const db = getFirestore(app);
        setFavorito(recheio)
        await setDoc(doc(db, 'informacoesDoUsuario', uid), recheio);
        setRecarregar(true);
        //console.log("Documento adicionado com ID: ", uid);
    };


    // Apenas para depuração
    useEffect(() => {
        onValueChange(recheioEscolhido);
        console.log(recheioEscolhido)
    }, [recheioEscolhido])

    useEffect(() => {
        onValueChange(recarregar);
    }, [recarregar]);

    return (
        <View style={styles.container}>
            {recheiosData && recheiosData.map((recheio: IRecheio, i: number) => (
                <TouchableOpacity key={i} onPress={() => setRecheioEscolhido(recheio)}>
                    <View style={[styles.card, recheioEscolhido === recheio ? styles.selectedBackground : null]}>
                        <Text style={styles.cardTitle}>Recheio de {recheio.title}</Text>
                        <Text style={styles.cardText}>{recheio.description}</Text>
                        <View style={styles.favorite}>
                            <TouchableOpacity key={i} onPress={() => adicionarFavorito(recheio)}>
                                {/* Renderização do ícone de favorito baseado na comparação */}
                                {favoritosDoUsuario && favoritosDoUsuario.title === recheio.title ? (
                                    <AntDesign name="heart" size={24} color="red" />
                                ) : (
                                    <AntDesign name="hearto" size={24} color="black" />
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>

    );

};