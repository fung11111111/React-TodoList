import { connect } from 'react-redux';

import TodoListGroup from '../Components/TodoListGroup/index'
import { initTodoList, initLabels } from '../action'
const mapStateToProps = (state) => ({
    todoList: state.todoList,
    labels: state.labels
})

const mapDispatchToProps = dispatch => {
    return {
        initTodoList: (todos) => {
            dispatch(initTodoList(todos));
        },
        initLabels: (labels) => {
            dispatch(initLabels(labels));
        }
       
    };
};

const TodoListGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListGroup);

export default TodoListGroupContainer;