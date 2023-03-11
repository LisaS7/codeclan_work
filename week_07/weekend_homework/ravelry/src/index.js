import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Theme from "./theme/theme.jsx";
import GlobalStyle from "./theme/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>
);
