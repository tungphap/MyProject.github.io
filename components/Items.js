import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';


export default function Items(props) {
    const { product, onPress } = props;
    return (
        <TouchableOpacity
            style={styles.container}
            onPress = {onPress}
        >
            <Image source={product.image} />
            <Text style={styles.textName}>{product.name}</Text>
        </TouchableOpacity>
        
    );
}
const WidthDrive = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        marginLeft:0,
    },
    textName:{
        fontWeight: 'bold',
        fontSize: 15
    }
});