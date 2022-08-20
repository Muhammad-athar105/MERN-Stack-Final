import React from 'react';
import './App.css';
//import * as ReactBootStrap from "./react-bootstrap";
import Home from "./Components/Home";
import Link from "./Components/Link";
import NavBar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home" component={Home}>
              <Home />
          </Route>
          <Route path="/link" component={Link}>
            <Link/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
