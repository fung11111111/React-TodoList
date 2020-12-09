import React, { Component } from 'react';
import "./common.css"

import DoneItem from './DoneItem';
export default class DoneList extends Component {

    render() {
        return (
            this.props.doneList.map((item) =>
            <DoneItem key={item.id} item={item} />
        )
        )
    }
}