import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import setting from '../icon/setting.png'


export default class Setting extends React.Component {
    static navigationOptions = {
        title: 'Setting'
    }
    render(){
        return(
            <View style={styles.container}>
                <Image source={setting} style={styles.img}/>
                <Text>This is Setting Screen</Text>
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