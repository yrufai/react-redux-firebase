import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
