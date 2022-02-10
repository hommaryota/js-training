import React from "react";
import ReactDom from "react-dom";

const App = () => {
  // Jsx記法
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
