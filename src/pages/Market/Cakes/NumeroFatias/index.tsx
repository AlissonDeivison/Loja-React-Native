import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import styles from './styles';
import {app} from '../../../../Services';

interface ITamanhos {
  id: string;
  tamanho: number;
}

export default function NumeroFatias({ onValueChange }) {
  const auth = getAuth();
  const [qtdFatias, setQtdFatias] = useState<ITamanhos[]>([]);
  const [qtdEscolhida, setQtdEscolhida] = useState<ITamanhos | null>(null);

  useEffect(() => {
    const db = getFirestore(app);
    const tryConnection = async () => {
      try {
        console.log('Conexão com o banco de dados bem sucedida');

        const fatiasCollection = collection(db, 'tamanhos');
        const fatiasSnapshot = await getDocs(fatiasCollection);

        const fatias = fatiasSnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() } as ITamanhos;
        });

        setQtdFatias(fatias);
      } catch (error) {
        console.error('Erro ao conectar ao servidor: ', error);
      }
    };
    tryConnection();
  }, []);

  useEffect(() => {
    onValueChange(qtdEscolhida);
  }, [qtdEscolhida, onValueChange]);

  return (
    <View style={styles.container}>
      {qtdFatias &&
        qtdFatias
          .slice()
          .sort((a, b) => a.tamanho - b.tamanho)
          .map((qtd: ITamanhos, i: number) => (
            <TouchableOpacity key={qtd.id} onPress={() => setQtdEscolhida(qtd)}>
              <View style={[styles.card, qtdEscolhida === qtd ? styles.selectedBackground : null]}>
                <Text>{qtd.tamanho} fatias</Text>
              </View>
            </TouchableOpacity>
          ))}
    </View>
  );
}
