import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, FlatList } from 'react-native';
import Thumbnail from './Thumbnail'

const data = [
    {"name": 'Michael',"img": 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', "distance": '2'},
    {"name": 'Michael',"img": 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', "distance": '2'},
    {"name": 'Michael',"img": 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', "distance": '2'},
]

export default class App extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('../assets/logo.png')} resizeMode='contain' style={{alignSelf:'flex-start', height: 50, width: 50}}/>
                    <Text style={styles.titlePage}>home</Text>
                    <Image source={{uri: 'https://static.tumblr.com/9361c8f5f109caee374b7840e2eb314c/opx8xju/QB3nn8jjq/tumblr_static_9k7sljublkgsw4wcosg4g84wk.jpg'}} style={{width: 50, height: 50, borderRadius: 50/ 2}}/>
                </View>
                <View>
                    <FlatList />
                    <Thumbnail 
                        data={data}
                        renderItem={(data)=><Thumbnail data={data.item} />}
                        keyExtractor={(data)=>data.id}
                    />
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
  logo: {
      paddingVertical: 60
  },
  navBar: {
      justifyContent:'space-between', 
      flexDirection:'row', 
      alignItems:'center',
      borderBottomWidth: 2,
      paddingBottom: 10,
      borderBottomColor: '#e1a55e'
    },
  titlePage: {
      color: '#e1a55e', 
      textAlign:'center', 
      fontSize: 18,
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
