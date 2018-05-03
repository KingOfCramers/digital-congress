import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

export default class Footer extends React.Component {
    render(){
        return (
            <div>
                <a href="/auth/google">Login</a>
                <a href="/auth/google/logout">Logout</a>
                <a href="">Contact Me</a>
            </div>
        );
    }
}