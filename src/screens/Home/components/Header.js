import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import logo from "../../../assets/logo.png";
import {loadHeader} from "../../../services/loadData";

export default class Header extends React.Component {
    state = {
        Header : {
            welcome : null,
            subText: null,
        },
    }

    updateHeader() {
        const returnHeader = loadHeader();
        this.setState({Header: returnHeader})
    }

    componentDidMount() {
        this.updateHeader();
    }

    render() {
        return (
            <View style={style.Header}>
                <Image source={logo} style={style.image} />
                <Text style={style.welcomeText}>{this.state.Header.welcome}</Text>
                <Text style={style.subText}>{this.state.Header.subText}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    Header: {
        backgroundColor: '#f6f6f6',
        padding: 16,
    },
    image: {
        height: 28,
        width: 70,
    },
    welcomeText: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        lineHeight: 42,
        color: '#a1a1a1',
    },
})