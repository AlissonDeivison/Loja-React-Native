import React, { useState } from 'react'
import { Text, View } from 'react-native';
import uuid from 'react-native-uuid'
import styles from './styles';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const tamanhos =
    [
        { "id": uuid.v4(), "numero_fatias": '10' },
        { "id": uuid.v4(), "numero_fatias": '15' },
        { "id": uuid.v4(), "numero_fatias": '20' },
        { "id": uuid.v4(), "numero_fatias": '25' },
        { "id": uuid.v4(), "numero_fatias": '30' },
        { "id": uuid.v4(), "numero_fatias": '40' },
        { "id": uuid.v4(), "numero_fatias": '50' },
    ];

export default function NumeroFatias({onValueChange}) {
    
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
                    data={tamanhos}
                    search
                    maxHeight={300}
                    labelField="numero_fatias"
                    valueField="id"
                    placeholder={!isFocus ? 'Quantidade de fatias' : '...'}
                    searchPlaceholder="Buscar..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                        if (onValueChange) {
                            onValueChange(item.numero_fatias);
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





