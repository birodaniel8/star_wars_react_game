import { combineReducers } from "redux";
import card from "./card";
import data from "./data";
import game from "./game";

export default combineReducers({
  card,
  data,
  game,
});
