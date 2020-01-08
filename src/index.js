import "@babel/polyfill";
import React from "react";
import ReactDom from "react-dom";
import Routes from "./config/router";

ReactDom.render(<Routes />, document.getElementById("root"));
