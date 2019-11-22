import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from './src/screens/Login';
import Products from './src/screens/Products';
import DetailProduct from './src/screens/DetailProduct';
import Setting from './src/screens/Setting';
import Cart from './src/screens/Cart';
import Home from './src/screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginStack = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Home },
});

const ProductsStack = createStackNavigator({
  Products: { screen: Products },
  DetailProduct: { screen: DetailProduct },
});

const CartStack = createStackNavigator({
  Cart
});

const SettingStack = createStackNavigator({
  Setting
});

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: ProductsStack, 
  },
  Cart: {
    screen: Cart,
  },
  Setting: {
    screen: Setting,
  }
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      backgroundColor: '#a369ff',
    }
  }
});

module.exports.LoginHome = LoginStack;
module.exports.TabNavigator = MainNavigator;