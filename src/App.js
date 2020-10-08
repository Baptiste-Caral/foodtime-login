import React, { useContext, useState } from 'react';
import Auth from './Components/Auth';
import ForgotPassword from './Components/ForgotPassword';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UserProvider } from "./context/UserContext";


function App() {
  

  return (
    <UserProvider>
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/">
                <Auth />
              </Route>
              <Route path="/forgot">
                <ForgotPassword />
              </Route>
            </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
