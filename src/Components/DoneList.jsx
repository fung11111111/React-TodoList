import React, { Component } from 'react';



export default class DoneList extends Component {
    render() {
        return this.props.doneList.map((item) =>
            <div>{item.text}</div>
        )
    }
}