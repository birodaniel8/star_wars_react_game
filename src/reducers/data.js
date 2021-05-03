/* eslint-disable import/no-anonymous-default-export */
import { LOAD_DATA } from "../actions/types.js";

const initialState = {
  data: {
    movies: [],
    characters: [],
    planets: [],
    species: [],
    spaceships: [],
    vehicles: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    default:
      return state;
  }
}
