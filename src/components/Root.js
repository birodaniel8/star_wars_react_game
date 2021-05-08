import React from "react";
import { Provider } from "react-redux"; // wrap this around everything for redux
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import store from "../store";
import App from "./App";

const Root = () => {
  const THEME = createMuiTheme({
    typography: {
      fontFamily: `'Audiowide', cursive`,
      // fontFamily: `'Source Code Pro', monospace`,
    },
    palette: {
      primary: {
        main: "#FFCD00",
      }
    }
  });

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
