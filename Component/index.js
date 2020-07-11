import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import LoginScreen from './Login';
import HomeScreen from './Home';
import ProfileScreen from './Profile';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
