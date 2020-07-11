import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button } from 'react-native';


export default class App extends React.Component {
  render(){    
    let cat = this.props.data
    console.log(cat)
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: cat.img}} />
            <View style={styles.detail}>
                <Text style={styles.detailName}>{cat.name}</Text>
                <Text style={styles.detailJarak}>{cat.distance} km</Text>
            </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical : 20,
    backgroundColor: '#FAD195'
  },
  image: {
    width: 350,
    height: 170,
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
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  detailJarak: {
    color: 'white',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  }
});
