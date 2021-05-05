import { SET_CARD, SET_SPECIAL_CARD } from "../actions/types.js";

// Set card:
export const setCard = (cardType = null, name = null, propertyInfo = {}) => (dispatch) => {
  dispatch({
    type: SET_CARD,
    payload: {
      type: cardType,
      name: name,
      propertyInfo: propertyInfo,
    },
  });
};

// Set special card:
export const setSpecialCard = (type) => (dispatch) => {
  dispatch({
    type: SET_SPECIAL_CARD,
    payload: type,
  });
};
