import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapComp = ({ latitude, longitude }) => {
  return (
    <View style={{ width: "100%" }}>
      <MapView
        style={{ width: "100%", height: 150 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        zoomEnabled={true}
        zoomTapEnabled={true}
        maxZoomLevel={10}
        showsUserLocation={true}
      />
    </View>
  );
};

export default MapComp;
