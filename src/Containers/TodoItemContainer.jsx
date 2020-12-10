import { connect } from 'react-redux';

import TodoItem from '../Components/TodoItem/index'
import { updateTodo, deleteItem, initTodoList } from '../action'
const mapStateToProps = (state) => ({
    todoList: state.todoList
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
        }
    };
};

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;