import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          userName: '',
          password: '',
          isError: false,
        }
    }

    loginHandler(){
        const {navigate} = this.props.navigation
        navigate('Home', {name: this.state.userName})
    }

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/logo.png')} resizeMode='contain' style={{alignSelf:'center', height: 80, width: 80}}/>
                    <Text style={styles.title}>meong!</Text>
                    <Text style={styles.secondTitle}>unite your cat togeter -nyan</Text>
                        <TextInput style={styles.textInput}
                        placeholder="username"
                        onChangeText={userName => this.setState({ userName })}
                        placeholderTextColor="#E5E5E5"/>
                    <TextInput style={styles.textInput}
                        placeholder="password"
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true}
                        placeholderTextColor="#E5E5E5"/>
                </View>
                <View style={{alignItems: 'center', paddingTop: 70}}>
                    <TouchableOpacity style={styles.buttonMasuk} onPress={()=> this.loginHandler()}>
                        <Text style={{color: 'white', fontSize: 18}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical : 100,
    backgroundColor: '#FAD195'
  },
  logo: {
      paddingVertical: 60
  },
  title: {
      color: '#e1a55e', 
      textAlign:'center', 
      fontSize: 42,
      fontWeight: 'bold',
  },
  secondTitle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      paddingTop: 10,
      paddingBottom: 40,
  },
  textInput: {
      height: 60,
      borderColor: 'white',
      backgroundColor: 'white',
      borderRadius: 15,
      borderWidth: 1,
      marginBottom: 40,
      padding: 20
  },
  buttonMasuk:{
    borderRadius: 15,
    justifyContent: 'center', 
    backgroundColor: '#E1A55E',
    alignItems: "center", 
    width: 150,
    paddingVertical: 10,
    marginVertical: 15
  }
});
