import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../views/Home.jsx';
import About from '../views/About.jsx';
import User from '../views/User.jsx';

export default function App() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
        </Router>
    );
}
