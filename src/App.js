import React from "react";
import "./App.css";
import "./bootstrap.min.css";

import Nav from "./Nav";
import Sec1 from "./sec1";
import Sec2 from "./sec2";
import Sec3 from "./sec3";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    return (
      <div>
        <Nav />
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Footer />
      </div>
    );
  }
}

export default App;
