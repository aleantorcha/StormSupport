import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <MapView style = {[styles.map, styles.container]}
          region ={{
            latitude: 25.7617,
            longitude: -80.1918,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
        >
          <MapView.Marker
            coordinate = {{
              latitude: 25.7617,
              longitude: -80.1918
            }}
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
