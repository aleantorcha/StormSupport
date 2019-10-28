import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class PinScreen extends Component {
  render(){
    return (
      <View style = {styles.pinformat}>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/PersonalNeedsButton.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/CommunityHazardsButton.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/SheltersButton.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("CameraScreen")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/QuesButton.png')}
          />
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pinformat: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  button: {
    // height: 100,
    // width: 100,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,

  }
});