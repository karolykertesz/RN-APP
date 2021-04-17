import React, { useState } from "react";

import * as Location from "expo-location";
import colors from "../helpers/colors";
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
  const [loading, setLoading] = useState(false);
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
      console.log(location);
    } catch (err) {
      alert("Location couldn't be set!!");
    }

    setLoading(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.lctText}>
        {loading ? (
          <ActivityIndicator size="large" color={colors.main} />
        ) : (
          <Text>"No Location yet!"</Text>
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
