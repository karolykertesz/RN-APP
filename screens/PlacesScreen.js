import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import OnePlace from "../components/OnePlace";
import { addData } from "../store/actions";
const PlacesScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addData());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <OnePlace
            image={itemData.item.url}
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
