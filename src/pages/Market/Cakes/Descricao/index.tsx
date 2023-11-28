// Description.js

import React from 'react';
import { Text, TextInput } from 'react-native';
import { View } from 'react-native';
import styles from './styles';

export default function Description({ onValueChange }) {
  return (
    <View>
      <Text style={styles.aviso}>
        Você pode colocar todos os detalhes que imaginar, mas se faltar alguma
        coisa, não se preocupe, é só falar conosco
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onValueChange(text);
        }}
        multiline={true}
      />
    </View>
  );
}
