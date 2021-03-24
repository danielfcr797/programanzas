import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Home from "../containers/home";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
