import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PinInput extends Component {
  render(){
    return (
      <View>
        <Text>Title:</Text> 
        <Text>Description:</Text> 
        <TouchableOpacity 
        onPress={()=>this.props.navigation.navigate("CameraScreen")}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  TitleText: {
    fontSize: 30,    
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  }
});