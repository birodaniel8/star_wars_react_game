import { SET_GAME_SETTINGS, ADD_TO_COUNTER, RESET_COUNTER } from "../actions/types.js";

// Set Game Settings:
export const setGameSettings = (settings) => (dispatch) => {
  dispatch({
    type: SET_GAME_SETTINGS,
    payload: settings,
  });
};

// Add to counter:
export const addToCounter = (currentCounter) => (dispatch) => {
  dispatch({
    type: ADD_TO_COUNTER,
    payload: currentCounter + 1,
  });
};

// Add to counter:
export const resetCounter = () => (dispatch) => {
  dispatch({
    type: RESET_COUNTER,
    payload: null,
  });
};