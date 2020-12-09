import { connect } from 'react-redux';

import TodoListGroup from '../Components/TodoListGroup/index'
import { initTodoList } from '../action'
const mapStateToProps = (state) => ({
    todoList: state.todoList
})

const mapDispatchToProps = dispatch => {
    return {
        initTodoList: (todos) => {
            dispatch(initTodoList(todos));
        }
       
    };
};

const TodoListGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListGroup);

export default TodoListGroupContainer;