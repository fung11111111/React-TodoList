import React, { Component } from 'react';
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import "./common.css";

export default class Navitation extends Component {
    render() {
        return (
            <Menu style={{background: "rgb(242, 242, 242)"}}>
                <Menu.Item key="1">
                    <Link to="/">Go to list page</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/done">Go to done page</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/label">Generate Label</Link>
                </Menu.Item>
            </Menu>
        )
    }
}