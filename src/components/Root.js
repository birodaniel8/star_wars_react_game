import React from "react";
import { Provider } from "react-redux"; // wrap this around everything for redux
import store from "../store";
import App from "./App";

const Root = () => {
  return (
    <Provider store={store}>
      <div>
        <App />
      </div>
    </Provider>
  );
};

export default Root;
