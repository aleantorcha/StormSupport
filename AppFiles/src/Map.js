import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, AppRegistry } from 'react-native';

/*const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATTITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO*/
export default class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0
      /*initialPosition: {
        lattitude: 0,
        longitude: 0,
        lattitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        //Miami
        lattitude: 25.7617,
        longitude: -80.1918
      }*/
    }
  }
  //watchID: ?number = null
  componentDidMount(){
    this.watchID = navigator.geolocation.getCurrentPosition(
      (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
      },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 2000, maximumAge: 1})
  }

  render() {
    let initialRegion = {
      latitude: 200,
      longitude: 200,
      longitudeDelta:0.01,
      latitudeDelta: 0.01
    }
    let myLocation = {latitude: this.state.latitude, longitude: this.state.longitude}
    return (
      <View style = {styles.container}>
        <MapView style = {styles.map} initialRegion = {initialRegion}>
          <MapView.Marker
            coordinate = {myLocation}
            title = {'My marker title'}
            description = {'My marker description'}
          />
        </MapView>
        <TouchableOpacity style = {styles.addButton} 
        onPress={()=>this.props.navigation.navigate("PinScreen")}>
        <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  addButton: {
    position: 'absolute',
    width:50,height:50,
    backgroundColor: '#2f83ac',
    borderRadius:50,
    bottom:30, right:30,
    alignItems:'center',
    justifyContent:'center'
  },
  plus: {
    color: 'white',
    fontSize:25
  }
});
