import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Platform, View, Text, StyleSheet, Button, Image } from "react-native";
import colors from "../helpers/colors";
const ImageComps = ({ addImageUri }) => {
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const res = await Permissions.askAsync(
          Permissions.CAMERA_ROLL,
          Permissions.CAMERA
        );
        if (res.status !== "granted") {
          alert("Sorry we need Your the camera permision");
        }
      }
    })();
  }, []);

  const takeAnImage = async () => {
    const res = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.5,
      aspect: [16, 9],
    });
    if (!res.cancelled) {
      setImage(res.uri);
      addImageUri(res.uri);
    }
  };
  const imageSelect = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.uri);
      setImage(result.uri);
      addImageUri(result.uri);
    }
  };
  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      {!image && <Text style={styles.titleText}>Currently no image</Text>}
      {image && (
        <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
      )}
      <View style={styles.btnCont}>
        <View style={styles.btn}>
          <Button
            title="Select Image"
            color={colors.main}
            onPress={() => imageSelect()}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="Take a Photo"
            color={colors.main}
            onPress={() => takeAnImage()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  titleText: {
    textAlign: "center",
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.main,
  },
  btn: {
    width: "50%",
    marginHorizontal: 2,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
  },
});

export default ImageComps;
