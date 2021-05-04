/* eslint-disable import/no-anonymous-default-export */
import { SET_GAME_SETTINGS, ADD_TO_COUNTER, RESET_COUNTER } from "../actions/types.js";

const initialState = {
  settings: {
    on: false,
    target: null,
    level: "easy",
    explore: false,
  },
  counter: -1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_GAME_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    case ADD_TO_COUNTER:
      return {
        ...state,
        counter: action.payload
      }
    case RESET_COUNTER:
      return {
        ...state,
        counter: -1,
      }
    default:
      return state;
  }
}
