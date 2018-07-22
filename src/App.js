import React, { Component } from "react";
import "./App.css";
import { OpenMarketPage } from "./react-parts/OpenMarketPage.js";

class App extends Component {
  render() {
    return (
      <div>
        <OpenMarketPage />
      </div>
    );
  }
}

export default App;
