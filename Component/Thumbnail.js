import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';


export default class App extends React.Component {
    render(){
        let data = this.props.data
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: data.img}} />
                <View style={styles.detail}>
                    <Text style={styles.detailName}>{data.name}</Text>
                    <Text style={styles.detailJarak}>`${data.distance} km`</Text>
                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical : 30,
    backgroundColor: '#FAD195'
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 15,
    alignSelf: 'center'
  },
  detail: {
    justifyContent:'space-between', 
    flexDirection:'row', 
    alignItems:'center',
  },
  detailName: {
    color: '#e1a55e',
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 16
  },
  detailJarak: {
    color: 'white',
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 16
  }
});
