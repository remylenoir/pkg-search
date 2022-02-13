import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { appTheme, ThemeProvider, Preflight, GlobalStyles } from "framework";
import { SearchProvider } from "framework";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <Preflight />
      <GlobalStyles />

      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
