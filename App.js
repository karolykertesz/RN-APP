import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Places from "./store/reducers/index";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/MainStackNavigator";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { init } from "./helpers/sqlite";

init()
  .then(() => console.log("data inserted"))
  .catch((err) => console.log(err));
const reducer = combineReducers({ places: Places });
const store = createStore(reducer, applyMiddleware(thunk));
export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
