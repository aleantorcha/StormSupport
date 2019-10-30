import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, AppRegistry } from 'react-native';


export default class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      //0, 0 is default user longitude and latitude
      latitude: 0, 
      longitude: 0
    }
  }
//componentDidMount called once when the app is opened
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
//this function will animate the map to the user's position if the position has been retrieved

  animate(){
    let myLocation = {latitude: this.state.latitude, longitude: this.state.longitude}
    let r = {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };
    if ((this.state.latitude != 0) && (this.state.longitude != 0))
    {
      this.mapView.animateToRegion(r, 2000);
    }
  }
  render() {
    //initial region is Miami
    //it cannot be set to user location because it takes a couple of seconds to retreive the user location
    let initialRegion = {
      latitude: 25.761,
      longitude: -80.191,
      longitudeDelta:0.01,
      latitudeDelta: 0.01
    }
    return (
      //create mapview
      <View style = {styles.container}>
        <MapView style = {styles.map} initialRegion = {initialRegion}
        ref={ref=>this.mapView = ref} 
        showsUserLocation //mark users location
        onLongPress={()=>this.animate()} //zoom in on user location on long press
        > 
          <MapView.Marker //shelter
            coordinate = {{
              latitude: 25.753899,
              longitude: -80.377045
            }}
            title = {'FIU Shelter'}
            description = {'Maximum occupancy: 50 people'}
            image = {require('./pin_images/houseMapPin.png')}
          />
          <MapView.Marker //question
            coordinate = {{
              latitude: 25.881729,
              longitude: -80.275040
            }}
            title = {'Looking for Supplies'}
            description = {'Where do I find water and flashlight'}
            image = {require('./pin_images/questionmarkMapPin.png')}
          />
          <MapView.Marker //personal issue
            coordinate = {{
              latitude: 25.674129,
              longitude: -80.310287
            }}
            title = {'Need Shutter Help'}
            description = {'John needs help putting up his hurricane shutters'}
            image = {require('./pin_images/usersMapPin.png')}
          />
          <MapView.Marker //community issue
            coordinate = {{
              latitude: 25.767991,
              longitude: -80.205879 
            }}
            title = {'Hazardous Cable'}
            description = {'There is a severed electrical cable on the road'}
            image = {require('./pin_images/warningMapPin.png')}
          />
        </MapView>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate("PinInput")} style = {styles.button}>
          <Image
          resizeMode = 'contain'
          style={styles.addButton}
          source={require('./otherButtons/addButton.png')}
          />
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
    //Should take up whole screen
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  addButton: {
    position: 'absolute',
    width:50,height:50,
    bottom:30, right:30,
    alignItems:'center',
    justifyContent:'center'
  },
  plus: {
    color: 'white',
    fontSize:25
  }
});


/*<MapView.Marker //hazard
coordinate = {{
  latitude: 25.695510,
  longitude: -80.298660
}}
title = {'Tree Down'}
description = {'Tree fell on road near 92nd street'}
image = {require('./pin_images/warningMapPin.png')}
/>
