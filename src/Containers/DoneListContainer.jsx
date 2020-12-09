import { connect } from 'react-redux';
import DoneList from '../Components/DoneList'



const mapStateToProps = (state) => ({
    doneList: state.todoList.filter(item => item.done === true)
})

const DoneListConatiner = connect(mapStateToProps)(DoneList);

export default DoneListConatiner;