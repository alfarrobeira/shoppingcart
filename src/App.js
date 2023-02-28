import React from "react";
import Eshop from "./components/Eshop";
import Instructions from "./components/Instructions";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="block">
        <Instructions />
      </div>
      <div className="block">
        <Eshop />
      </div>
    </div>
  );
};

export default App;
