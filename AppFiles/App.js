import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Button } from 'react-native';
export default function App() {

  return (
    <View style = {styles.container}>
      <MapView style = {styles.map}
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
    </View>
  );
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
  }
});
