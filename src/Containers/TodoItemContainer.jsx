import { connect } from 'react-redux';

import TodoItem from '../Components/TodoItem/index'
import { toggleDone, deleteItem } from '../action'
const mapStateToProps = (state) => ({
    todoList: state.todoList
})

const mapDispatchToProps = dispatch => {
    return {
        toggleDone: (item) => {
            dispatch(toggleDone(item));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    };
};

const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;