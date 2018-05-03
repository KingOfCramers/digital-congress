import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from "./Header";
export default class FourOhFour extends React.Component {
    render(){
        return (
            <div>
                <p>This page does not exist.</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}