import { connect } from 'react-redux';
import LabelGroup from '../../Components/Label/LabelGroup';
import { initLabels } from '../../action';

const mapStateToProps = (state) => ({
    labels: state.labels
})

const mapDispatchToProps = dispatch => {
    return {
        initLabels: (labels) => {
            dispatch(initLabels(labels));
        }
    };
};

const LabelGroupContainer = connect(mapStateToProps, mapDispatchToProps)(LabelGroup);

export default LabelGroupContainer;