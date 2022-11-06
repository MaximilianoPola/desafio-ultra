import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Transaction from "./components/Transaction";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/profile/:id' component={Profile}/>
        <Route path='/transaction/:id' component={Transaction}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
