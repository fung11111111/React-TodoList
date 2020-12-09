import React, { Component } from 'react';
import "./common.css"

export default class DoneList extends Component {

    render() {
        return (
            this.props.doneList.map((item) =>
                <div key={item.id} className="doneItem">{item.text}</div>
            )
        )
    }
}