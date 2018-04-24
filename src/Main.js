import React, { Component } from "react";
import { Route, NavLink, HashRouter} from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Connect from "./Connect";

class Main extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <div className="navbar">

        <header className="header bg-black tc pv4 CinzelD mt2 mb0 i fw1 f1">Austin T. Berner<h1 className="h1 mt2 mb0 f6 fw4">A Developer's Page</h1>
        </header>
        
        <div id="nav" className="bt bb center mt4">
        <a className="active f6 f5-l bg-animate hover-bg-gunmetal pa3 phkjh4-l" href="/about"><NavLink exact to="/">About</NavLink></a>
        <a className="active f6 f5-l bg-animate hover-bg-gunmetal pa3 ph4-l" href="/portfolio"><NavLink exact to="/portfolio">Portfolio</NavLink></a>
        <a className="active f6 f5-l bg-animate hover-bg-gunmetal pa3 ph4-l" href="/connect"><NavLink exact to="/connect">Connect</NavLink></a>
        </div>
        </div>
        

        <div className= "content">
          <Route exact path= "/" component={About}/>
          <Route exact path= "/portfolio" component={Portfolio}/>
          <Route exact path= "/connect" component={Connect}/>
        </div>
      </div>
      </HashRouter>
    );
  }
}

export default Main;