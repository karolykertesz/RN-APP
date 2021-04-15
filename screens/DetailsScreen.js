import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
const DetailScreen = ({ route, navigation }) => {
  const { title, id } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Text>Details Screen</Text>
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({});
