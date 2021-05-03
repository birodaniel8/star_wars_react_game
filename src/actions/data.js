import { LOAD_DATA } from "../actions/types.js";

// Set Data:
export const loadData = (data) => (dispatch) => {
  dispatch({
    type: LOAD_DATA,
    payload: data,
  });
};
