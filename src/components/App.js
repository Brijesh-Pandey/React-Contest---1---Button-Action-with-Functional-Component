import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [para, setPara] = useState("");
  function handleClick() {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>
        Button
      </button>
      {para ? <p id="para">{para}</p> : ""}
      {/* <p id="para">{this.state.para}</p> */}
    </div>
  );
}

export default App;
