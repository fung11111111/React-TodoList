import { connect } from 'react-redux';

import TodoItem from '../Components/TodoItem/index'
import { updateTodo, deleteItem, initTodoList, initLabels } from '../action'
const mapStateToProps = (state) => ({
    todoList: state.todoList,
    labels: state.labels
})

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: (item) => {
            dispatch(updateTodo(item));
        },
        deleteItem: () => {
            dispatch(deleteItem());
        },
        initTodoList: (todos) => {
            dispatch(initTodoList(todos));
        },
        initLabels: (labels) => {
            dispatch(initLabels(labels));
        },
    };
};

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;