import { connect } from 'react-redux';
import LabelGenerator from '../../Components/Label/LabelGenerator';
import { create_label, initLabels } from '../../action';

const mapDispatchToProps = dispatch => {
    return {
        create_label: (label) => {
            dispatch(create_label(label));
        },
        initLabels: (labels) => {
            dispatch(initLabels(labels));
        }
        
    };
};

const LabelGeneratorContainer = connect(null, mapDispatchToProps)(LabelGenerator);

export default LabelGeneratorContainer;