import React from "react";
import { Provider } from "react-redux"; // wrap this around everything for redux
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import store from "../store";
import App from "./App";

export const THEME = createMuiTheme({
  typography: {
    fontFamily: `'Audiowide', cursive`,
  },
  palette: {
    primary: {
      main: "#FFCD00",
    },
  },
});

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
