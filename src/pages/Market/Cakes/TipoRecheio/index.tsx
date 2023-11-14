import React, { useState } from 'react'
import { Text, View } from 'react-native';
import uuid from 'react-native-uuid'
import styles from './styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const recheios =
    [
        { "id": uuid.v4(), "tipo": "Brigadeiro" },
        { "id": uuid.v4(), "tipo": "Bem casado" },
        { "id": uuid.v4(), "tipo": "Ninho" },
        { "id": uuid.v4(), "tipo": "Beijinho" },
        { "id": uuid.v4(), "tipo": "Amendoim" },
        { "id": uuid.v4(), "tipo": "Crocante" },
    ];


export default function TipoRecheio({onValueChange}) {
        const [value, setValue] = useState(null);
        const [isFocus, setIsFocus] = useState(false);

        const renderLabel = () => {
            if (value || isFocus) {
                return (
                    <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                        Selecione
                    </Text>
                );
            }
            return null;
        };

        return (
            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={recheios}
                    search
                    maxHeight={300}
                    labelField="tipo"
                    valueField="id"
                    placeholder={!isFocus ? 'Tipo de Recheio' : '...'}
                    searchPlaceholder="Buscar..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                        if (onValueChange) {
                            onValueChange(item.tipo);
                        }
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'blue' : 'black'}
                            name="Safety"
                            size={20}
                        />
                    )}
                />
                
            </View>
        );
    };





