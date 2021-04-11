import React from "react";
// import { View, Text, TouchableOpacity, Touchable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PlacesScreen from "../screens/PlacesScreen";
import DetailScreen from "../screens/DetailsScreen";
import NewPlaceScreen from "../screens/NewPlacesScreen";
import ListScreen from "../screens/ListScreen";
import colors from "../helpers/colors";
import IconHeaderButton from "../UI/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
export const MainStackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="PlacesScreen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: colors.main,
        },
      }}
    >
      <Stack.Screen
        name="PlacesScreen"
        component={PlacesScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={IconHeaderButton}>
              <Item
                iconName="plus"
                onPress={() => navigation.navigate("NewPlaceScreen")}
                color="#fff"
              />
            </HeaderButtons>
          ),
          headerTitle: "Places",
        })}
      />
      <Stack.Screen component={ListScreen} name="ListScreen" />

      <Stack.Screen component={DetailScreen} name="DetailScreen" />
      <Stack.Screen
        component={NewPlaceScreen}
        name="NewPlaceScreen"
        options={{
          headerTitle: "Add New Place",
        }}
      />
    </Stack.Navigator>
  );
};
