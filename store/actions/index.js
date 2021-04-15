import * as FileSystem from "expo-file-system";

export const ADD_PLACES = "ADD_PLACES";

export const addPlaces = (title, url) => {
  return async function (dispatch) {
    const imgPath = FileSystem.documentDirectory;
    const imgName = url.split("/").pop();
    try {
      await FileSystem.moveAsync({
        from: url,
        to: imgPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
    dispatch({
      type: ADD_PLACES,
      title,
      imgPath,
    });
  };
};
