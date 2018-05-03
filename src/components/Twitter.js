import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import D3 from "./D3";

export default class Help extends React.Component {
    render(){
        return (
            <div>
                {/*This is where I need the Twitter node fetch*/}
                Place Twitter stream here.
                <D3 />
            </div>
        );
    }
}