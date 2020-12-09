import React, { Component } from 'react';
import './TodoItemStyle.css';
import { deleteToDo, updateTodo } from '../apis/todo';
export default class TodoListGroup extends Component {

    onToggleDone = () => {
        const { item } = this.props;
        item.done = !item.done;
        updateTodo(item).then((response) =>{
            this.props.toggleDone(response.id);
         })
    }

    deleteItem = () => {
        const { item } = this.props;
        deleteToDo(item.id).then((response) =>{
           this.props.deleteItem(response.data.id);
        })
      
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