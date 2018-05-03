import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

{/*My React Router Components*/}
import Header from './components/Header';
import Home from "./components/Home";
import Twitter from "./components/Twitter";
import Edit from "./components/Edit";
import Help from "./components/Help";
import Dashboard from "./components/Dashboard";
import Contacts from "./components/Contacts";
import FourOhFour from "./components/FourOhFour";

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/Twitter" component={Twitter} />
        <Route path="/Edit" component={Edit} />
        <Route path="/Help" component={Help} />
        <Route path="/Contacts" component={Contacts}/>
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
