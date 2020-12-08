import {connect} from 'react-redux';
import { create } from '../action';

import TodoGenerator from '../Components/TodoGenerator'

const mapDispatchToProps = dispatch => {
    return{
        create: (todoTask) => {
            dispatch(create(todoTask));
        },
    };
};

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;