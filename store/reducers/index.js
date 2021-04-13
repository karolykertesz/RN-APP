import { ADD_PLACES } from "../actions/index";
import Place from "../../models/places";

const initialState = {
  places: [],
};
const Places = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACES:
      const id = new Date().toString();
      const addedPlace = new Place(id, action.title);
      return {
        places: state.places.concat(addedPlace),
      };
    default:
      return state;
  }
};

export default Places;
