import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Nav from "/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Nav} />
        </div>
      </Router>
    );
  }
}

export default App;
