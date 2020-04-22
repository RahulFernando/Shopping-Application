import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Shared/Navigation";

import LoginForm from "./components/User/LoginForm";
import RegisterForm from "./components/User/RegisterForm";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Router>
          <Navigation />
          <Switch>
            {/* <Route path="/" exact component={LoginForm} /> */}
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
