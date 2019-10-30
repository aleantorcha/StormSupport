import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default class PinScreen extends Component {
  render(){
    return (
      <View style = {styles.pinformat}>
      
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("PinInput")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/PersonalNeedsButton.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("PinInput")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/CommunityHazardsButton.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("PinInput")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.button}
          source={require('./pin_images/SheltersButton.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate("PinInput")} style = {styles.button}>
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
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    
  },
  button: {
    flex: 3/5, //3/5 flex fits an iPhone X screen
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  }
});