import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
