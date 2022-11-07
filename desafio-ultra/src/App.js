import React from "react";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Transaction from "./components/Transaction";
//Se utiliza Swtich en lugar de Routes por un problema con la importacion desde router-dom
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/transaction' component={Transaction}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
