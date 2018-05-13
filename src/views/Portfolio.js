import React, { Component } from "react";

 class Portfolio extends Component {
  render() {
    return (
      <div className="_portfolio">
        <div className="_portfolio-body">
        <h3>Portfolio</h3>
          <h4>Take a look at my projects and please feel free to give me any feedback!<br />Thank You</h4>
            <ul className="_portfolio-list">
              <li>My_Portfolio @ <a href="https://github.com/austinberner360/My_Portfolio"target="_blank" className="github">GitHub</a></li>
            </ul>
            </div>
      </div>
    );
  }
}

export default Portfolio;
