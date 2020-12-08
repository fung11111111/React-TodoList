import React, { Component } from 'react';

export default class TodoListGroup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                testings
                <span>{this.props.id}</span>
            </div>
        
        )
    }
}