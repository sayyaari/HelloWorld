import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Username'/>
                <TextInput placeholder='Password'/>
                <Button title='Login' onPress={this.loginButtonPressed}/>
            </View>
        );
    }

    loginButtonPressed() {
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    }
});