import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaces } from "../store/actions/index";
import MapView from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from "react-native";
import colors from "../helpers/colors";
import ImageComps from "../componets/ImageComps";
import LocationG from "../components/Location";

const NewPlaceScreen = ({ navigation }) => {
  const [imgUrl, setImgUrl] = useState();
  const [title, setValue] = useState("");
  const dispatch = useDispatch();
  const savePlaces = () => {
    dispatch(addPlaces(title, imgUrl));
    navigation.goBack();
  };
  const addImageUri = (uri) => {
    setImgUrl(uri);
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.form}>
        <Text style={styles.titText}>Title</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={(text) => setValue(text)}
          value={title}
        />
        <ImageComps addImageUri={addImageUri} />
        <LocationG />
        <MapView
          style={{ width: "100%", height: 150 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Button
          title="Add my Place"
          color={colors.main}
          onPress={() => savePlaces()}
        />
      </View>
    </ScrollView>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titText: {
    textAlign: "center",
    fontSize: 16,
    color: colors.main,
    marginBottom: 10,
  },
  form: {
    margin: 30,
  },
  input: {
    borderBottomColor: "#8888",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});
