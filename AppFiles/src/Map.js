import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, AppRegistry } from 'react-native';


export default class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0
    }
  }
  //keep this here in case we want to share user location
  //this can allow us to get user coordinates
  //showsUserLocation in MapView shows a marker on the user's location already
  //but we could use this to share one user's location with another
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
        showsUserLocation
        onPress={()=>this.animate()}
        > 
          <MapView.Marker 
            coordinate = {{
              latitude: 25.753899,
              longitude: -80.377045
            }}
            title = {'FIU Shelter'}
            description = {'Maximum occupancy: 50 people'}
            image = {require('./pin_images/houseMapPin.png')}
          />
          <MapView.Marker 
            coordinate = {{
              latitude: 25.683140,
              longitude: -80.306640
            }}
            title = {'Need Shutter Help'}
            description = {'John Smith needs help putting up his hurricane shutters'}
            image = {require('./pin_images/usersMapPin.png')}
          />
          <MapView.Marker 
            coordinate = {{
              latitude: 25.767991,
              longitude: -80.205879 
            }}
            title = {'Hazardous Cable'}
            description = {'There is a severed electrical cable on the road'}
            image = {require('./pin_images/warningMapPin.png')}
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
