import { LOAD_DATA } from "../actions/types.js";

// async function loadMovies(data) {
//   fetch(`${process.env.PUBLIC_URL}/sw_api_data/films.json`)
//     .then((response) => response.json())
//     .then((response) => {
//       return { ...data, movies: response["items"] };
//     });
// }

// Set Data:
export const loadData = (data) => (dispatch) => {
  dispatch({
    type: LOAD_DATA,
    payload: data,
  });
};
