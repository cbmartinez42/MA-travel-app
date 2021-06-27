import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Admin from "./components/Pages/Admin"
// import { StoreProvider } from "./utils/GlobalState";  IF YOU NEED GLOBAL STUFF
// import Nav from "./components/Nav";

import './App.css';
import Header from './components/Header'

function App() {
  return (
    <Router>
        <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin" component={Admin} />
        </Switch>
        </div>
    </Router>
    
  );
}

export default App;
