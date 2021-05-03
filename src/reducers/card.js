/* eslint-disable import/no-anonymous-default-export */
import { SET_CARD, SET_SPECIAL_CARD } from "../actions/types.js";

const initialState = {
  selectedCard: {
    type: null,
    name: null,
    propertyInfo: {},
  },
  selectedSpecialCard: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CARD:
      return {
        ...state,
        selectedCard: action.payload,
      };
    case SET_SPECIAL_CARD:
      return {
        ...state,
        selectedSpecialCard: action.payload,
      };
    default:
      return state;
  }
}
