import "normalize.css/normalize.css";
import "./styles/global.css";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import App from "./App";

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
