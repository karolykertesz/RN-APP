import React, { useState } from "react";
import MapComp from "./mapComp";
import * as Location from "expo-location";
import colors from "../helpers/colors";
import MapView from "react-native-maps";
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
const LocationG = () => {
  const [loc, setLoc] = useState(null);
  const [loci, setLoci] = useState(false);
  const [lat, setlangi] = useState(null);
  const [longi, setLongi] = useState(null);
  const [loading, setLoading] = useState(false);
  const setMapLocation = (lati, lon) => {
    setlangi(lati);
    setLongi(lon);
  };
  const setLocation = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      alert("We need acces to the location on your device!!!");
    }
    try {
      setLoading(true);
      let location = await Location.getCurrentPositionAsync({
        timeInterval: 5000,
      });
      if (location) {
        console.log(location);
        setMapLocation(location.coords.latitude, location.coords.longitude);
      }
    } catch (err) {
      alert("Location couldn't be set!!");
    }

    setLoading(false);
  };

  return (
    <View style={styles.screen}>
      {loading && <ActivityIndicator size="large" color={colors.main} />}
      <View style={styles.lctText}>
        {lat ? (
          <MapView
            style={{ width: "100%", height: 150 }}
            region={{
              latitude: lat,
              longitude: longi,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomEnabled={true}
            zoomTapEnabled={true}
            maxZoomLevel={10}
            showsUserLocation={true}
          />
        ) : (
          <Text>No location added Yet</Text>
        )}
      </View>
      <Button
        title="Add Location"
        onPress={() => setLocation()}
        color={colors.main}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginBottom: 10,
  },
  lctText: {
    marginBottom: 10,
    width: "100%",
    height: 150,
    borderColor: "#8888",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationG;
