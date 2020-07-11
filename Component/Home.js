import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, FlatList, ScrollView } from 'react-native';
import Thumbnail from './Thumbnail'

export default class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: [
                {name: 'Michael',bio: 'I want to be a fucboy', img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', distance: '2', like: ['chicken','female cat', 'female girl'], dislike: ['potato','water']},           
                {name: 'Deborah',bio: 'Love myself', img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', distance: '2', like: ['chicken','female cat', 'female girl'], dislike: ['potato','water']},           
                {name: 'James',bio: 'Just a nerd guy', img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', distance: '2', like: ['chicken','female cat', 'female girl'], dislike: ['potato','water']},           
                {name: 'Sebastian',bio: 'Love traveling', img: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg', distance: '2', like: ['chicken','female cat', 'female girl'], dislike: ['potato','water']},           
            ],
            me: 
                {name: 'Me' ,bio: 'I want to be a fucboy', img: 'https://static.tumblr.com/9361c8f5f109caee374b7840e2eb314c/opx8xju/QB3nn8jjq/tumblr_static_9k7sljublkgsw4wcosg4g84wk.jpg', distance: '2', like: ['female human','female cat', 'tuna'], dislike: ['hamburger','watermelon']},           
            
        }
    }

    pageHandler(page, param){
        const {navigate} = this.props.navigation
        navigate(page, {data: param})
    }

    render(){
        let me = this.state.me
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    <Image source={require('../assets/logo.png')} resizeMode='contain' style={{alignSelf:'flex-start', height: 50, width: 50}}/>
                    <Text style={styles.titlePage}>home</Text>
                    <TouchableOpacity onPress={()=> this.pageHandler('Profile',me) }>
                        <Image source={{uri: 'https://static.tumblr.com/9361c8f5f109caee374b7840e2eb314c/opx8xju/QB3nn8jjq/tumblr_static_9k7sljublkgsw4wcosg4g84wk.jpg'}} style={{width: 50, height: 50, borderRadius: 50/ 2}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <ScrollView>
                    <FlatList 
                        style={styles.list}
                        data={this.state.data}
                        renderItem={({item}) =>
                            <TouchableOpacity onPress={()=> this.pageHandler('Profile',item)}>
                                <Thumbnail data={item} />
                            </TouchableOpacity>
                        }
                    />
                    </ScrollView>
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
  list: {
      marginBottom: 40
  }
});
