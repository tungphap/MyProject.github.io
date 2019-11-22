import React from 'react';
import {
    View, TextInput,
    TouchableOpacity, Text,
    ImageBackground, Image,
    StyleSheet, Dimensions,
    Alert, AsyncStorage
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import background from '../icon/backgroundImg.png'
import logo from '../icon/logo.png'

export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    valid = () => {
        const { username, password } = this.state;
        if (username == "" && password == "") {
            Alert.alert('username and password is wrong')
        } else {
            this.props.navigation.navigate('Home')
        }
    }
    render() {
        return (
            <ImageBackground source={background} style={styles.ImgBg}>
                <View style={styles.container}>
                    <Image source={logo} style={styles.imageLg} />
                    <Text style={styles.textLg}>REACT NATIVE</Text>
                </View>
                <View style={styles.formInput}>
                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.inputForm}
                            placeholder='Username'
                            onChangeText={username => this.setState({ username })}>
                        </TextInput>
                        <TextInput
                            style={styles.inputForm}
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}>
                        </TextInput>


                        <TouchableOpacity
                            style={styles.buttonLg}
                            onPress={this.valid}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }} >Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageLg: {
        width: 150,
        height: 150 
    },
    textLg: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20
    },
    ImgBg: {
        flex: 1,
    },
    formInput: {
        flex: 2,
    },
    inputForm: {
        height: 40,
        width: DEVICE_WIDTH - 40,
        marginHorizontal: 20,
        borderRadius: 20,
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginBottom: 5
    },
    buttonLg: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1aff1a',
        height: 40,
        borderRadius: 20,
        zIndex: 100,
        width: DEVICE_WIDTH - 40,
        marginHorizontal: 20,
    }
})