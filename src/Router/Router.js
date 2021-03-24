import React from "react";
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Home from "../containers/home/index";
import Login from "../containers/login/index"
import Mode from '../containers/mode/index'
import Levels from '../containers/levels/index'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/mode" component={Mode}/>
      <Route exact path="/levels" component={Levels}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
