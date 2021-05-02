/* eslint-disable import/no-anonymous-default-export */
import { SET_CARD } from "../actions/types.js";

const initialState = {
  selectedCard: {
    type: null,
    id: null,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        selectedCard: action.payload,
      };
    default:
      return state;
  }
}
