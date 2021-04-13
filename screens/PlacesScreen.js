import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import OnePlace from "../components/OnePlace";
const PlacesScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  console.log(places);
  return (
    <View style={styles.screen}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <OnePlace
            image={null}
            title={itemData.item.title}
            address={null}
            onSelect={() =>
              navigation.navigate("DetailScreen", {
                title: itemData.item.title,
                id: itemData.item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

export default PlacesScreen;
