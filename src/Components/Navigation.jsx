import React, { Component } from 'react';
import "./common.css";
import { Menu } from 'antd'
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

export default class Navitation extends Component {
    render() {
        return (
            <Menu>
                <Menu.Item key="1">
                    <Link to="/">Go to list page</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/done">Go to done page</Link>
                </Menu.Item>
            </Menu>
        )
    }
}