import React, { Component } from 'react';

import TodoItem from './TodoItem';

export default class TodoListGroup extends Component {
    render() {
        return this.props.todoList.map((item) =>
            <TodoItem key={item.id} id={item.id}/>
        )
    }
}