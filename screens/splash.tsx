import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useContext } from 'react';


class SplashScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}}
        />
      </View>
    );
  }
}


  export default SplashScreen;