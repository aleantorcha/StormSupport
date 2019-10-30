import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }

  render() {
    return (
      <View>
        <Text style = {styles.TitleText}>Title:</Text> 
        <TextInput
          style={{height: 100, boarderColor:'gray', borderWidth: 1,}}
          placeholder="Write here..."
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />
        <Text style = {styles.TitleText}>Description:</Text> 
        <TextInput
          style={{height: 100, boarderColor:'gray', boarderWidth: 1,}}
          placeholder="Write here..."
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />
        <TouchableOpacity style = {style.Button}
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
    padding: 10,    
    color: 'gray',
  },
  Button: {
    position: 'absolute',
    width:50,height:50,
    backgroundColor: '#2f83ac',
    borderRadius:50,
    bottom:30, right:30,
    alignItems:'center',
    justifyContent:'center'
  }
});