import React from "react";
import { Provider } from "react-redux"; // wrap this around everything for redux
import { MuiThemeProvider } from "@material-ui/core/styles";

import { THEME } from "../styles";
import store from "../store";
import App from "./App";

const Root = () => {
  return (
    <MuiThemeProvider theme={THEME}>
      <Provider store={store}>
        <div>
          <App />
        </div>
      </Provider>
    </MuiThemeProvider>
  );
};

export default Root;
