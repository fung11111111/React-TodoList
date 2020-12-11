import React, { Component } from 'react';
import "../common.css"

import DoneItem from './DoneItem';
export default class DoneList extends Component {

    // cand generate done
    render() {
        return (
            this.props.doneList.map((item) =>
            <DoneItem key={item.id} item={item} />
        )
        )
    }
}