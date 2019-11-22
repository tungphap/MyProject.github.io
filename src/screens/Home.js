import React from 'react';
import { Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import AppNavigator from '../../AppNavigator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default class Home extends React.Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => (
            <Icon name="cart" size={20} color='white' />
        )
    }

    render() {
        const AppNavigat = createAppContainer(AppNavigator.TabNavigator)
        return (
            <AppNavigat />
        );
    }
}