import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { useContext } from 'react';
import ActionButton from 'react-native-action-button';
import IncidentTile from '../components/IncidentTile';

interface MyProps {
  navigation:  any
}
interface MyState { 
}

class HomeScreen extends React.Component<MyProps, MyState> {
  static navigationOptions = {
    title: 'Home',
  };
  
  render() {
    let nameData = [
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
    ];

    const {navigation} = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View>
         <FlatList
          data={nameData}
          renderItem={({item}) => <IncidentTile title={item.key} />}
        />
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => navigation.navigate('Settings')}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


export default HomeScreen;