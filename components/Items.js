import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native';


export default function Items(props) {
    const { product, onPress } = props;
    return (
        <TouchableOpacity
            style={styles.container}
            onPress = {onPress}
        >
            <Image source={product.image} />
            <Text>{product.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        margin: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    }
});