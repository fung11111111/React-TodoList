import React, { Component } from 'react';
import { addNewToDo } from '../apis/todo';
export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    changeTodo = (event) => {
        this.setState({ todo: event.target.value });
    }

    submitTodo = () => {
        if (this.state.todo.length > 0) {
            addNewToDo(this.state.todo).then((response) => {
                console.log(response.data);
                this.props.create(response.data);
            })
            this.setState({ todo: '' });
        }
    }

    render() {
        const { todo } = this.state;

        return (
            <div>
                <input type="text" placeholder="add todo..." value={todo} onChange={this.changeTodo} />
                <input type="submit" onClick={this.submitTodo} value="add" />
            </div>
        )
    }
}