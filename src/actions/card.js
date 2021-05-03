import { SET_CARD } from "../actions/types.js";

// Set card:
export const setCard = (cardType, name, propertyCard = false) => (dispatch) => {
  dispatch({
    type: SET_CARD,
    payload: {
      type: cardType,
      name: name,
      propertyCard: propertyCard,
    },
  });
};
