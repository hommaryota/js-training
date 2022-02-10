import React from "react";
import ReactDom from "react-dom";
// ./Appの階層にあるApp関数をindex.jsファイルで使える様に記述している
import App from "./App";

ReactDom.render(<App />, document.querySelector("#root"));
