import * as FileSystem from "expo-file-system";
import { inserIntoDb, fetchData } from "../../helpers/sqlite";

export const ADD_PLACES = "ADD_PLACES";
export const ADD_DATA = "ADD_DATA";

export const addPlaces = (title, url) => {
  return async function (dispatch) {
    const fileName = url.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: url,
        to: newPath,
      });
      const res = await inserIntoDb(
        title,
        newPath,
        "Paskomliget utca 20",
        "39.23",
        "28.23"
      );

      dispatch({
        type: ADD_PLACES,
        id: res.insertId,
        title,
        url: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const addData = () => {
  return async function (dispatch) {
    try {
      const data = await fetchData();
      const { rows } = data;
      dispatch({ type: ADD_DATA, places: rows._array });
    } catch (err) {
      console.log(err);
    }
  };
};
