import React, { Component } from 'react';
import './TodoItemStyle.css';
export default class TodoListGroup extends Component {

    onToggleDone = (event) => {
        const { item } = this.props;
        this.props.toggleDone(item.id);
    }

    deleteItem = () => {
        const { item } = this.props;
        this.props.deleteItem(item.id);
    }

    render() {
        const { text,done } = this.props.item;
        const textSyle = done ? "textStyle" : "";
        return (
            <div>
                <label className={textSyle} onClick={this.onToggleDone}>{text}</label>
                <input type="button" value="X" onClick={this.deleteItem}></input>
            </div>

        )
    }
}