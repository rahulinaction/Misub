import React,  {Component} from 'react';
import { StyleSheet,Image, View } from 'react-native';
import { Card, ListItem, Avatar, Text } from 'react-native-elements';
import { useContext } from 'react';

class IncidentTile extends React.Component<{title: string},{}> {
  
  render() {
    const {title} = this.props;
    const subTitle = "SubTitle";
    return (
      
            <ListItem
              title= {title}
              subtitle={subTitle}
              leftAvatar={{
                title: title,
                source: { uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' },
                showEditButton: true,
              }}
              
            />

    );
  }
}
  
export default IncidentTile;