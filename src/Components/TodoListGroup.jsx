import React, { Component } from 'react';
import TodoItemContainer from '../Containers/TodoItemContainer';

import TodoItem from './TodoItem';

export default class TodoListGroup extends Component {
    render() {
        return this.props.todoList.map((item) =>
            <TodoItemContainer key={item.id} id={item.id}/>
        )
    }
}