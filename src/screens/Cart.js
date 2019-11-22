import React from 'react'
import { View, Text } from 'react-native'


export default class Cart extends React.Component {
    static navigationOptions = {
        title: 'Cart'
    }
    render(){
        return(
            <Text>This is Cart Screen</Text>
        );
    }
}