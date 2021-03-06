import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import cartIC from '../icon/cart.png'
import cartT from '../icon/carttab.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Cart extends React.Component {
    static navigationOptions = {
        title: 'Cart',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="cart" size={20} color='white' />
        )
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Image source={cartIC} style={styles.img} />
                <Text>This is Cart Screen</Text>
            </View>
        );
    }
}
const Width_Windown = Dimensions.get('window').width;
const Height_Windown = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200
    }
})