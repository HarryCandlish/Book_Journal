import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homegrid">
          <div className="titlegrid">
            <h1>Book Journal</h1>
            <p className="famousquote">
              "Because not everyone needs to know what you are reading."
            </p>
            <p>-anonymous</p>
          </div>
          <div className="imagegrid">
            <img className="titleimage" src="images/waitingForGodot.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
