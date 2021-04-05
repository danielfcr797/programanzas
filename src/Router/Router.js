import React from "react";
import {BrowserRouter , Switch, Route } from "react-router-dom";
import Home from "../containers/home/index";
<<<<<<< HEAD
import Login from "../containers/login/index";
import Mode from '../containers/mode/index';
import Levels from '../containers/levels/index';
=======
import Login from "../containers/login/index"
import Levels from "../containers/levels/index"
import Seleccion from "../containers/seleccionMultiple/index";
>>>>>>> origin/carta

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/mode" component={Mode}/>
        <Route exact path="/levels" component={Levels}/>
      </Switch>
=======
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/levels" component={Levels}/>
      <Route exact path="/seleccion" component={Seleccion}/>
    </Switch>
>>>>>>> origin/carta
    </BrowserRouter>
  );
}

export default App;
