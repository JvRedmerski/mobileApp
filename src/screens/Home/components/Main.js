import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';
import {loadProducts} from "../../../services/loadData";

export default class Main extends React.Component {
    state = {
        name: null,
        image: null,
        distance: null,
        starts: null,
    }

    updateMain() {
        const returnMain = loadProducts();
        this.setState({Main: returnMain});
    }

    componentDidMount() {
        this.updateMain()
    }

    render() {
        return (
            <FlatList
                data={}
                renderItem={}
                keyExtractor={}
                ListHeaderComponent={}
            >
            </FlatList>
            )

    }
}


const style = StyleSheet.create({

})