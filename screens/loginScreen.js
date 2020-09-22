import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

import firebase from 'firebase';
import db from '../config'

export default class LoginScreen extends React.Component{
    constructor(){
        super()
this.state={
    userId:'',
    password:''
}
    }
    login=async(email,password)=>{
        if(email && password){
            try{
                const response=await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
                    this.props.navigation.navigate('Transaction')
                }
            }
            catch (error){
                switch(error.code){
                    case ' auth/user-not-found':
                        alert('user does not exist')
                        
                    break;
case 'auth/invalid-email':
    alert('incorrect email or password')
                }
            }
        };
            else{
                alert('enter email and password')
            }
            
        
    }
  render(){
      return(
          <KeyboardAvoidingView>
              <View>
                  <Image
                  source={require('../assets/booklogo.jpg')}
                  style={{width:200,height:200}}
                  ></Image>
              </View>
              <View>
                  <TextInput
                  placeholder='email'
                  keyboardType='email-address'
                  onChangeText={(text)=>{
                      this.setState({
                          userId:text
                      })
                  }}
                  ></TextInput>
                  <TextInput
                  placeholder='password'
                  secureTextEntry={true}
                  onChangeText={(text)=>{
                      this.setState({
                          password:text
                      })
                  }}
                  ></TextInput>
                  <TouchableOpacity
                  onPress={()=>{
                      this.login(this.state.userId,this.state.password)
                  }}
                  >
                      <Text>
                          login
                      </Text>
                  </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>
      )

  }  
}