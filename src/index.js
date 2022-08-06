import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/styles/global.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import reportWebVitals from "./reportWebVitals";
library.add(fas, fab, far);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
