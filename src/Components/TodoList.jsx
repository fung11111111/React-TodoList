import React, { Component } from 'react';
import TodoGeneratorContainer from '../Containers/TodoGeneratorContainer';
import TodoListGroupContainer from '../Containers/TodoListGroupContainer';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <span>Hello, TodoList</span>
                <TodoListGroupContainer />
                <TodoGeneratorContainer />
            </div>
        )
    }
}