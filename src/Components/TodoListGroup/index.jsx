import React, { Component } from 'react';
import { getTodoList } from '../../apis/todo';
import { getLabels } from '../../apis/label';
import TodoItemContainer from '../../Containers/TodoItemContainer';
import '../common.css';

export default class TodoListGroup extends Component {
    componentDidMount() {
        getTodoList().then((response) => {
            this.props.initTodoList(response.data);
        })
    }

    render() {
        return this.props.todoList.map((item) =>
            <TodoItemContainer key={item.id} item={item} />
        )
    }
}
    
