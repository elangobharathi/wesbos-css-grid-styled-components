import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./GlobalStyles";
import Wrapper from "./components/layouts/Wrapper";

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Wrapper />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
