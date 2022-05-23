import React from "react";
import emojipedia from "../emojipedia";
import Card from "../components/Card";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Card)}</dl>
    </div>
  );
}

export default App;
