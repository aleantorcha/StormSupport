import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class PinScreen extends Component {
  render(){
    return (
      <View style = {styles.pinformat}>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")}>
          <Image
          style={{width: 165, height: 175}}
          source={require('./pin_images/warningPin.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")}>
          <Image
          style={{width: 165, height: 175}}
          source={require('./pin_images/workPin.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")}>
          <Image
          style={{width: 165, height: 175}}
          source={require('./pin_images/usersPin.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")}>
          <Image
          style={{width: 165, height: 175}}
          source={require('./pin_images/housePin.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")}>
          <Image
          style={{width: 165, height: 175}}
          source={require('./pin_images/questionmarkPin.png')}
          />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pinformat: {
    flexDirection: 'row',
  }
});