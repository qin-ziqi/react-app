import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../views/home/index.tsx";
import About from "../views/about/index.tsx";
import User from "../views/user/index.tsx";

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/user" component={User} />
    </Router>
  );
}
