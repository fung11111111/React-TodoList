import React, { Component } from 'react';
import TodoGeneratorContainer from '../../Containers/TodoContainer/TodoGeneratorContainer';
import TodoListGroupContainer from '../../Containers/TodoContainer/TodoListGroupContainer';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoListGroupContainer />
                <TodoGeneratorContainer />
            </div>
        )
    }
}