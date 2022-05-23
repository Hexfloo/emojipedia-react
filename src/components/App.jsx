import React from "react";
import emojipedia from "../emojipedia";
import Card from "../components/Card";

function App() {
  return (
    <React.StrictMode>
      <div>
        <h1>
          <span>emojipedia</span>
        </h1>
        <dl className="dictionary">{emojipedia.map(Card)}</dl>
      </div>
    </React.StrictMode>
  );
}

export default App;
