import React from 'react';
import {View, Text, Image} from 'react-native';
import logo from "../../../assets/logo.png";

export default function Header() {
    return (
        <View>
            <Image source={logo} />
            <Text>Olá, João!</Text>
            <Text>Encontre os melhores produtores</Text>
        </View>
    )
}
