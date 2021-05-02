import { SET_CARD } from "../actions/types.js";

// Set card:
export const setCard = (cardType, selectedId) => (dispatch) => {
  dispatch({
    type: SET_CARD,
    payload: {
      type: cardType,
      id: selectedId,
    },
  });
};
