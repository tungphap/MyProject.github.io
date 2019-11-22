import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native'
import {  } from 'react-native-gesture-handler';


export default class DetailProduct extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title')
        }
    }
    render() {
        const info = this.props.navigation.getParam('info');
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image source={info.image} />
                    <Text style={styles.textTit}>{info.name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={{fontSize:20, fontWeight: 'bold'}}>Price: {info.price}$</Text>
                    <TouchableOpacity
                        style={styles.touchableOpacity}>
                        <Text style={styles.textDet}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        margin: 16
    },
    textTit: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    row: {
        flex : 1,
        alignItems: 'center'
    },
    touchableOpacity: {
        backgroundColor: '#ffbf80',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 2,
        width: 200,
        marginTop: 5,
    },
    textDet: {
        fontWeight: 'bold',
        color: '#fff'
    }
})
