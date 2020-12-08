import {connect} from 'react-redux';

import TodoItem from '../Components/TodoItem'
import {toggleDone, deleteItem} from '../action'
const mapStateToProps = (state) =>({
    todoList: state.todoList
})

const mapDispatchToProps = dispatch => {
    return{
        toggleDone: (id) => {
            dispatch(toggleDone(id));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        }
    };
};

const TodoItemContainer = connect(mapStateToProps,mapDispatchToProps)(TodoItem);

export default TodoItemContainer;