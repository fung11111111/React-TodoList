import { connect } from 'react-redux';

import TodoItem from '../Components/TodoItem/index'
import { updateTodo, deleteItem } from '../action'
const mapStateToProps = (state) => ({
    todoList: state.todoList
})

const mapDispatchToProps = dispatch => {
    return {
        updateTodo: (item) => {
            dispatch(updateTodo(item));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    };
};

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;