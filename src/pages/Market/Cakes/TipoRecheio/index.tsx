import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
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
    const [favoritosDoUsuario, setFavoritosDoUsuario] = useState([]);

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
                console.log('Conexão com o banco de dados bem sucedida')

                const recheiosCollection = collection(db, 'recheios');
                const recheiosSnapshot = await getDocs(recheiosCollection);
                const recheios = recheiosSnapshot.docs.map(doc => doc.data());
                setRecheiosData(recheios);

                const favoritosCollection = collection(db, 'informacoesDoUsuario');
                const favoritosSnapshot = await getDocs(favoritosCollection);

                const favoritosArray = favoritosSnapshot.docs.map(doc => doc.data().favorito);

                setFavoritosDoUsuario(favoritosArray);
            } catch (error) {
                console.error('Erro ao conectar ao servidor: ', error)
            }
        };
        tryConnection();
    }, []);


    const toggleFavorito = (i) => {
        setFavorito((prevFavorito) => {
            const novoFavorito = { ...prevFavorito, [i]: !prevFavorito[i] };
            adicionarFavorito(novoFavorito);
            return novoFavorito;
        });
    };

    //Adiciona o favorito ao banco 
    const adicionarFavorito = async (favorito) => {
        const db = getFirestore(app);
        await setDoc(doc(db, 'informacoesDoUsuario', uid), { favorito });
        //console.log("Documento adicionado com ID: ", uid);

    };

    // Apenas para depuração
    useEffect(() => { 
        onValueChange(recheioEscolhido);
    }, [recheioEscolhido]) 

    // useEffect(()=>{
    //     console.log(favoritosDoUsuario[1]);
    // },[favoritosDoUsuario])

    return (
        <View style={styles.container}>
            {recheiosData && recheiosData.map((recheio: IRecheio, i: number) => (
                <TouchableOpacity key={i} onPress={() => setRecheioEscolhido(recheio)}>
                    <View style={[styles.card, recheioEscolhido === recheio ? styles.selectedBackground : null]}>
                        <Text style={styles.cardTitle}>Recheio de {recheio.title}</Text>
                        <Text style={styles.cardText}>{recheio.description}</Text>
                        <View style={styles.favorite}>
                            <TouchableOpacity onPress={() => toggleFavorito(i)}>

                                {favorito[i] ? (
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