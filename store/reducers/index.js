import { ADD_PLACES, ADD_DATA } from "../actions/index";
import Place from "../../models/places";

const initialState = {
  places: [],
};
const Places = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        places: action.places.map(
          (item) => new Place(item.id.toString(), item.title, item.imgUrl)
        ),
      };
    case ADD_PLACES:
      const addedPlace = new Place(
        action.id.toString(),
        action.title,
        action.url
      );
      return {
        places: state.places.concat(addedPlace),
      };
    default:
      return state;
  }
};

export default Places;
