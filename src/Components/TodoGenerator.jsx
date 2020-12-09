import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
            let newTodoItem = {
                id: uuidv4(),
                text: this.state.todo,
                done: false
            }
            this.props.create(newTodoItem);
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