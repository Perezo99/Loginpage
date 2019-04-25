import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Header} from 'react-native';


export default class App extends Component<Props> {

  render() {
    return (
        <View style={styles.container}>
        <TextInput style = {styles.inputBox}
            placeholder="Email"
            placeholderTextColor="#313233"
            keyboardType="email-address"
              onChangeText={(text) => this.setState({email:text})}
              onSubmitEditing={()=> this.password.focus()}
            />

        <TextInput style = {styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#313233"
           onChangeText={(text) => this.setState({password:text})}
           ref={(input) => this.password = input}
           />
           
            <Text style= {styles.forgotPassword}>Forgot Password?</Text>
        </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
   borderRadius: 15,
    backgroundColor:'white',
    margin: 0,
    paddingBottom: 40,
  },
  inputBox: {
    alignSelf: 'stretch',
    margin: 15,
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
      width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40
  },
  forgotPassword: {
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    textAlign: 'right'
  }
});
