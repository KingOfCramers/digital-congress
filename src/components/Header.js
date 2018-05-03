import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Congress Tracker</h1>
                <Link to="/">Home </Link>
                <Link to="/Edit">Edit </Link>
                <Link to="/Help">Help </Link>
                <Link to="/Twitter">Twitter </Link>
            </div>
        );
    }
}