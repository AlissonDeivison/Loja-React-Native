import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { app } from '../../../Services';

interface IProduto {
  name: string,
  description: string,
  price: number,
  userComment: string
}
export default function ShoppingCart() {

  const [shoppingCart, setShoppingCart] = useState<IProduto>({} as IProduto)
  const auth = getAuth();
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
        console.log('Carrinho de compras carregado com sucesso');
        const carrinhosDeCompra = collection(db, 'carrinhosDeCompra');
        const carrinhosSnapshot = await getDocs(carrinhosDeCompra);
        const carrinhoDoUsuario = carrinhosSnapshot.docs.find((doc) => doc.id === uid);
        if (carrinhoDoUsuario) {
          setShoppingCart(carrinhoDoUsuario.data().produtos);
        } 
      } catch (error) {
        console.error('Erro ao tentar carregar o carrinho: ', error);
      }
    };
    tryConnection();
  }, []);


  const limparCarrinho = async () => {

    const db = getFirestore(app);
    const carrinhoRef = doc(db, 'carrinhosDeCompra', uid);

    try {
      // Remove o documento do carrinho de compra
      await deleteDoc(carrinhoRef);
      console.log('Carrinho limpo com sucesso.');
      setShoppingCart({} as IProduto);
    } catch (error) {
      console.error('Erro ao limpar o carrinho: ', error);
    }
  };

  return (
    <ScrollView>
      {shoppingCart && Object.keys(shoppingCart).length > 0 ? (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{shoppingCart.name}</Text>
          <Text style={styles.cardText}>Descrição do recheio: {shoppingCart.description}</Text>
          <Text style={styles.cardText}>Informações sobre seu bolo: {shoppingCart.userComment}</Text>
          <Text style={styles.cardTextValue}>
            Valor do pedido: R$ <Text style={styles.cardTextPrice}>{shoppingCart.price}</Text>
          </Text>
          <Button
            title="Limpar o carrinho"
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={limparCarrinho}
          />
        </View>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Seu carrinho está vazio.</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>

      </View>
    </ScrollView>
  );

}