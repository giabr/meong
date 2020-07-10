import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, FlatList, ListView } from 'react-native';
import Thumbnail from './Thumbnail'

export default class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: [
                {name: 'Michael',bio: 'I want to be a fucboy', img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', distance: '2', like: ['chicken','female cat', 'female girl'], dislike: ['potato','water']},           
            ]
        }
    }

    render(){
        let cat = this.state.data[0]
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('../assets/logo.png')} resizeMode='contain' style={{alignSelf:'flex-start', height: 50, width: 50}}/>
                    <Text style={styles.titlePage}>{cat.name}</Text>
                    <Image source={{uri: 'https://static.tumblr.com/9361c8f5f109caee374b7840e2eb314c/opx8xju/QB3nn8jjq/tumblr_static_9k7sljublkgsw4wcosg4g84wk.jpg'}} style={{width: 50, height: 50, borderRadius: 50/ 2}}/>
                </View>
                <View style={{paddingHorizontal: 25}}>
                    <Image style={styles.image} source={{uri: cat.img}} />
                    <Text style={styles.detailName}>{cat.name}</Text>
                    <Text style={styles.detailBio}>{cat.bio}</Text>
                </View>
                <View style={styles.listBox}>
                    <Text style={styles.titleDiv}>Like</Text>
                    {
                        cat.like.map((item, key)=>(
                        <Text style={styles.listItem} key={key}>{key+1}. {item}</Text>
                        ))
                    }
                </View>
                <View style={styles.listBox}>
                    <Text style={styles.titleDiv}>Dislike</Text>
                    {
                        cat.dislike.map((item, key)=>(
                        <Text style={styles.listItem} key={key}>{key+1}. {item}</Text>
                        ))
                    }
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
        borderBottomColor: '#e1a55e',
        marginBottom: 20
    },
    titlePage: {
        color: '#e1a55e', 
        textAlign:'center', 
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'lowercase'
    },
    titleDiv: {
        color: '#e1a55e',  
        fontSize: 24,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        paddingBottom: 10,
        borderBottomColor: '#e1a55e',
        marginBottom: 5
    },
    image: {
      width: 350,
      height: 170,
      borderRadius: 15,
      alignSelf: 'center',
      marginBottom: 10
    },
    detailName: {
      color: '#e1a55e',
      paddingTop: 10,
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center'
    },
    detailBio: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    listBox: {
        paddingVertical: 15
    },
    listItem: {
        color: 'white',
        fontWeight: 'bold',
        paddingVertical: 5,
        textTransform: 'capitalize',
        fontSize: 16
    }
  });
