import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="navgrid">
          <header>
            <div className="container">
              <nav>
                <ul>
                  <li>
                    <a href="/#/Dash">Personal-Dash</a>
                  </li>
                  <li>
                    <a href="/#/Books">Books</a>
                  </li>
                  <li>
                    <a href="/#/Reviews">Reviews</a>
                  </li>
                  <li>
                    <a href="/#/About">About</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      </div>
    );
  }
}
export default Nav;
