import React from 'react';
import {AppRegistry, Text} from 'react-native'
import {Actions} from 'react-native-router-flux';

export default class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    saveData = async()=>{
        const {username, password} = this.state;
        //save data with asyncstorage

        let loginDetail = {
            username: username,
            password: password,
        }
    }
}