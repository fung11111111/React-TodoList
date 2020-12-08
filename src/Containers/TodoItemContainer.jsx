import {connect} from 'react-redux';

import TodoItem from '../Components/TodoItem'
import {toggleDone} from '../action'
const mapStateToProps = (state) =>({
    todoList: state.todoList
})

const mapDispatchToProps = dispatch => {
    return{
        toggleDone: (id) => {
            dispatch(toggleDone(id));
        },
    };
};

const TodoItemContainer = connect(mapStateToProps,mapDispatchToProps)(TodoItem);

export default TodoItemContainer;