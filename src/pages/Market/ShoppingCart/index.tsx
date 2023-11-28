import React, { useContext, useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { CartContext } from '../../CartContext'
import styles from './styles';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
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
      console.log(uid);
    }
  });

  useEffect(() => {
    const db = getFirestore(app);
    const tryConnection = async () => {
      try {
        console.log('Conexão com o banco de dados bem sucedida');

        const carrinhosDeCompra = collection(db, 'carrinhosDeCompra');
        const carrinhosSnapshot = await getDocs(carrinhosDeCompra);

        const carrinhoDoUsuario = carrinhosSnapshot.docs.find((doc) => doc.id === uid);
        if (carrinhoDoUsuario) {
          setShoppingCart(carrinhoDoUsuario.data().produtos);
        } else {
          setShoppingCart([]);
        }
      } catch (error) {
        console.error('Erro ao conectar ao servidor: ', error);
      }
    };
    tryConnection();
  }, []);


  useEffect(() => {
    console.log('Produto criado:',shoppingCart)
    // console.log(shoppingCart.map(produto => console.log(produto)))
  }, [shoppingCart])


  return (
    <ScrollView>
      {shoppingCart && (
        <Card>
          <Card.Title>{shoppingCart.name}</Card.Title>
          <Card.Divider />
          <Text >Descrição do recheio: {shoppingCart.description}</Text>
          <Text >Comentário do usuário: {shoppingCart.userComment}</Text>
          <Text >Orçamento: R$ {shoppingCart.price}</Text>
        </Card>
      )}
    </ScrollView>
  )

}