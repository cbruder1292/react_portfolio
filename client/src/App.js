import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio'
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
