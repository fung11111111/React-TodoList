import React, { Component } from 'react';
import TodoGeneratorContainer from '../../Containers/TodoGeneratorContainer';
import TodoListGroupContainer from '../../Containers/TodoListGroupContainer';
import Navitation from '../Navigation';
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