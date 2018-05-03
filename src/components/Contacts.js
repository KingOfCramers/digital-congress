import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ContactTable from "./ContactTable";
import contacts from "./senateData.json";

export default class Contacts extends React.Component {
    render() {
        return (
            <div>
                <ContactTable contacts={contacts}/>
            </div>
        );
    }
}