import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import {Button, Divider} from 'react-native-material-ui';
import { useContext } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const 
  BODY_COLOR = '#000022',
  TEXT_MUTED = '#888888';

// custom constants
const constants = {
  BODY_COLOR, TEXT_MUTED,
};

let width = Dimensions.get('window').width; //full width
// custom classes
const classes = {
  title: {
    color: 'red',
  },
  rowContainer: {
    width: width
  },
  resetConfiguration: {

  }
};


class SettingsScreen extends React.Component {
  static navigationOptions = {
    title:'Settings',
    headerTitleStyle :{textAlign: "center", alignSelf:'center',flex: 1,},
    headerStyle:{
        backgroundColor:'white',
    }
  };
  

  
  render() {
    //const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={classes.rowContainer}>
          
         <ScrollView> 
            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Connection Url:</Text>
              <TouchableOpacity style={{flex:1 , alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <Icon style={{textAlign: 'right', color: 'white', backgroundColor: 'red' , padding: 10, borderRadius: 10}} name="ios-refresh">Refresh</Icon>
              </TouchableOpacity> 
            </View>  
            
            <TextInput style={{ padding: 30, borderColor: 'gray', borderWidth: 1 }}/>
            <Divider />
            <View style={{flexDirection:'row', flexWrap:'wrap', marginTop: 20, marginBottom: 20, marginLeft: 20, marginRight: 20}}>
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>Configuration Loaded: </Text>
              <TouchableOpacity style={{flex:1 , alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                <Icon style={{textAlign: 'right', color: 'white', backgroundColor: 'red', padding: 10, borderRadius: 10}} name="ios-refresh">Refresh</Icon>
              </TouchableOpacity> 
            </View> 
            <Divider />

            <View style={{ alignItems: 'center',flex: 1,justifyContent: 'center'}}>
              <Image style={{width: 150, height: 150, alignContent: 'center', marginBottom: 20,  marginTop: 20}} source={{uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'}} />
            </View>  
            
          </ScrollView>
        </View>

        <Button style={{position: 'absolute', left: 0, right: 0, bottom: 0, justifyContent: 'flex-end'}} primary text="Reset Configuration" />
      </View>
    );
  }
}
  
export default SettingsScreen;