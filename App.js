/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Form from './app/components/form';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
            super(props)

            this.state = {
            email: '',
            password: '',
        }
      }

_handlePress() {
console.log(this.state.email);
console.log(this.state.password);
}
  render() {
    return (
  <View style={styles.container}>

      <View style={styles.top}>
             <Text style={styles.headerText}>WELCOME BACK</Text>
             <Text style={styles.secondHeaderText}>Please log in to continue</Text>
      </View>

      <View style= {styles.center}>
           <Form />

           <TouchableOpacity onPress={() => this._handlePress()} style ={styles.button}>
               <Text style= {styles.buttonText}>Sign In</Text>
             </TouchableOpacity>

      <View style={styles.signUpText}>
              <Text style={styles.signUp}>Dont have an account? </Text>
              <TouchableOpacity>
              <Text style={styles.logInButton}>Sign Up</Text>
              </TouchableOpacity>
      </View>
      </View>
      
      <View style= {styles.bottom}>
           <Image source={require('./app/img/log.png')}  style={styles.backgroundImage} />
      </View>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'white'
  },
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  center: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '10%',
  },
  headerText:{
  fontSize: 20,
  color: '#12213a',
  marginVertical: 10,
  alignItems: 'center',
  fontWeight: '900',
  paddingTop: 80,
},
  secondHeaderText: {
  fontSize: 15,
  color: '#2e2f30',
  marginVertical: 5,
  alignItems: 'center',
  paddingBottom: 60
   },
   button: {
    width: 270,
    borderRadius: 25,
    backgroundColor: '#12213a',
    marginBottom:30,
    paddingVertical: 15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center'
  },
  signUpText: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    flexDirection: 'row',
    paddingBottom: 20
  },
  signUp:{
    fontSize: 15,
    color: 'black',
      fontWeight: '700'
  },
  logInButton: {
    fontWeight: '900',
    fontSize: 16,
    color: 'blue'
  },
});
