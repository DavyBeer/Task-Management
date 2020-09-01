import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Todo from './Todo';
import Contact from './Contacts';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
