import React from 'react';
import {
    FlatList,
} from 'react-native';
import Items from '../../components/Items';
import book1 from '../icon/book1.jpg';
import book2 from '../icon/book2.jpg'
import book3 from '../icon/book3.jpg'
import book4 from '../icon/book4.jpg'
import book5 from '../icon/book5.jpg'
import book6 from '../icon/book6.jpg'

const Data = [
    { id: 1, name: 'Item 1', image: book1, price: 2000 },
    { id: 2, name: 'Item 2', image: book2, price: 2500 },
    { id: 3, name: 'Item 3', image: book3, price: 3000 },
    { id: 4, name: 'Item 4', image: book4, price: 3500 },
    { id: 5, name: 'Item 5', image: book5, price: 4000 },
    { id: 6, name: 'Item 6', image: book6, price: 4500 },

];

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home'
    }
    render() {
        const { navigation } = this.props;
        return (
            <FlatList
                data = {Data}
                renderItem = {({item}) => 
                    <Items 
                        product={item}
                        onPress = {()=>navigation.navigate('DetailProduct',{
                            title: item.name,
                            info: item
                        })}
                        />}
                keyExtractor={item => `${item.id}`}
            />
        );
    }
} 