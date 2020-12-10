
import React, { Component } from 'react';
import { addNewToDo } from '../apis/todo';
import { Input } from 'antd';
import "./common.css";

const { Search } = Input;

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
                this.props.create(response.data);
            })
            this.setState({ todo: '' });
        }
    }

    render() {
        const { todo } = this.state;
        return (
            <div className="item-generator">
                <Search
                    placeholder="add todo..."
                    enterButton="Add"
                    size="large"
                    value={todo}
                    onChange={this.changeTodo}
                    onSearch={this.submitTodo}
                />
            </div>
        )
    }
}