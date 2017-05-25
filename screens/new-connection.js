/**
 * new-connection.js
 */

import React, {Component} from 'react';
import{
    View,
    Text,
    TextInput,
    StyleSheet,
    Switch,
    TouchableHighlight,
    Alert,
} from 'react-native';

export class NewConnection extends Component{
    constructor(props){
        super(props);
        this.state = {
            host: '',
            port: '',
            user: '',
            password: '',
            useSSL: false
        };
    }

    connect(){
        let data = `host: ${this.state.host}
        port: ${this.state.port}
        user: ${this.state.user}
        pswd: ${this.state.password}
        ssl: ${this.state.useSSL}`;
        Alert.alert('data',
         data, 
        {text: 'OK', onPress: () => console.log(data)});
    }

    render(){
        return         <View>
            <Text style={styles.label}>Host</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={(host) => this.setState({host})}
                value={this.state.host}
            />

            <Text style={styles.label}>Port</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={(port) => this.setState({port})}
                value={this.state.port}
            />

            <Text style={styles.label}>User</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={(user) => this.setState({user})}
                value={this.state.user}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.inputText}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
            />

            <Text style={styles.label}>Use SSL</Text>
            <Switch
                value={this.state.useSSL}
                onValueChange={(useSSL) => this.setState({useSSL})}
                style={{marginBottom: 10}}
                
            />

            <TouchableHighlight style={styles.fullWidthButton} onPress={this.connect.bind(this)}>
                <Text style={styles.fullWidthButtonText}>Connect</Text>
            </TouchableHighlight>
        </View>
    }
}

const styles = StyleSheet.create({
    label: {
        color: 'black',
        marginTop: 30
    },
    inputText : {
        height: 20,
        borderColor: 'gray', 
        borderWidth: 1
    },
    fullWidthButton: {
        backgroundColor: '#69B141',
        height:40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf:'stretch'
    },
    fullWidthButtonText: {
        fontSize:32,
        color: 'white',
        textAlign: 'center'
    },
});

module.exports = NewConnection;