import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect} from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

import HomeScreen from './screens/home';
import IncidentScreen from './screens/incident';
import SettingsScreen from './screens/settings';
import SplashScreen from './screens/splash';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

class App extends React.Component {
  static navigationOptions = {
    title:'Home',
    headerTitleStyle :{textAlign: "center", alignSelf:'center',flex: 1,},
    headerStyle:{
    backgroundColor:'white',
    }
  };
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      </View>
    );
  }
}
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Incident: IncidentScreen,
    Settings: SettingsScreen,
    Splash: SplashScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      
    }),
    initialRouteName: 'Home'
  }
);

export default createAppContainer(AppNavigator);