import { connect } from 'react-redux';
import Label from '../../Components/Label/Label';
import { initLabels, deleteLabel } from '../../action';

const mapStateToProps = (state) => ({
    labels: state.labels
})

const mapDispatchToProps = dispatch => {
    return {
        initLabels: (labels) => {
            dispatch(initLabels(labels));
        },
        deleteLabel: (id) => {
            dispatch(deleteLabel(id));
        }
    };
};

const LabelContainer = connect(mapStateToProps, mapDispatchToProps)(Label);

export default LabelContainer;