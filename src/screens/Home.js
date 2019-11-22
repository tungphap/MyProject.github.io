import React from 'react';
import {Text} from 'react-native'
import { createAppContainer } from 'react-navigation'
import AppNavigator from '../../AppNavigator'

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    render(){
        const AppNavigat = createAppContainer(AppNavigator.TabNavigator)
        return(
            <AppNavigat/>
        );
    }
}