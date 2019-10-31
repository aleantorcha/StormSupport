import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default class PinInput extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.TitleText}>Title:</Text> 
        <TextInput
          style={{height: 30, width:300, borderColor:'#45818eff', borderWidth: 1, borderRadius: 6}}
          placeholder="Write here..."
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
        <Text style = {styles.TitleText}>Description:</Text> 
        <TextInput
          style={{height: 150, width: 300, borderColor:'#45818eff', borderWidth: 1, borderRadius: 6}}
          placeholder="Write here..."
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        <Text style = {styles.TitleText}>Address:</Text> 
        <TextInput
          style={{height: 30, width:300, borderColor:'#45818eff', borderWidth: 1, borderRadius: 6}}
          placeholder="Write here..."
          onChangeText={(text3) => this.setState({text3})}
          value={this.state.text3}
        />

        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate("CameraScreen")} 
        style = {styles.nextButton}>
          <Image
          resizeMode = 'contain'
          style = {{width: 70, height: 70}}
          source={require('./otherButtons/nextButton.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 15,
    left: 10,
    bottom: 0,
    right: 0,
  },
  TitleText: {
    fontSize: 30,
    padding: 10,    
    color: 'black',
  },
  nextButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    alignItems:'center',
    justifyContent:'center'
  },

});