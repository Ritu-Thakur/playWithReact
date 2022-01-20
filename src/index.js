import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App1 from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App1 />
  </StrictMode>,
  rootElement
);
