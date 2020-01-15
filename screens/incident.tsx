import React, {Component} from 'react';
import { FlatList,StyleSheet, Text, View, Picker, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import {Input, Button} from 'react-native-elements';
import DateTimePicker from "react-native-modal-datetime-picker";
import RNPickerSelect,{ defaultStyles } from 'react-native-picker-select';
import { RNCamera, FaceDetector } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';


const flashModeOrder = {
  off: 'on',
  on: 'auto',
  auto: 'torch',
  torch: 'off',
};

const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

const landmarkSize = 2;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   marginLeft: 20,
   marginRight: 20
  },
  formContainer: {
    margin: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  textInput: {
    marginBottom: 20,
    paddingBottom: 20
  },
  submitButton: {
    marginTop: 20
  }
});

interface MyProps {}
interface MyState { 
  isDateTimePickerVisible: boolean,
  language: string,
  date: string
}

class IncidentScreen extends React.Component<{}, MyState> {
  static navigationOptions = {
    title:'Incident',
    headerTitleStyle :{textAlign: "center", alignSelf:'center',flex: 1,},
    headerStyle:{
    backgroundColor:'white',
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      language: 'java',
      date: ''
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({date: date.toString()})
    this.hideDateTimePicker();
  };

  render() {
    const {date} = this.state;
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 15, letterSpacing: 1}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
          </Text>
        <View style={styles.formContainer}>
          <Input inputStyle={{'marginTop': 20, marginBottom: 20}} placeholder='Observed By' style={styles.textInput}/>
          <Input inputStyle={{'marginTop': 20,  marginBottom: 20}} placeholder='Observed Contact Info' style={styles.textInput} />
          <Input inputStyle={{'marginTop': 20,  marginBottom: 20}} placeholder='Observation' style={styles.textInput} />
          <TouchableOpacity onPress={this.showDateTimePicker}>
            <Input
             inputStyle={{'marginTop': 20,  marginBottom: 20}} 
              pointerEvents="none"
              value= {date}
            />
          </TouchableOpacity>
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}

          />
          <RNPickerSelect
            style={pickerSelectStyles}
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
          />
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40}}>
            <View style={{width:'50%'}}>
              <TouchableOpacity style={{marginRight: 5}}>
                <View style={{height: 80, backgroundColor: "gray"}}>
                  <Icon style={{textAlign: 'center',fontSize: 15, color: 'white', paddingTop: 30, padding: 10, borderRadius: 10}} name="ios-refresh"></Icon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width:'50%'}}>   
              <TouchableOpacity style={{marginLeft: 5}}>
                <View style={{height: 80, backgroundColor: "gray"}}>
                  <Icon style={{textAlign: 'center',fontSize: 15, color: 'white', paddingTop: 30, borderRadius: 10}} name="ios-refresh"></Icon>
                </View>
              </TouchableOpacity>
             </View> 
        </View>
        <Button title="Submit"  buttonStyle={[{ marginTop: 70 }]}  onPress={(value) => console.log('The value is',value)} />

        </View>
      </View>
    );
  }
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 20,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    marginTop: 10,
    marginBottom: 20,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
export default IncidentScreen;