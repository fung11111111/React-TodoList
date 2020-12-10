import { connect } from 'react-redux';
import LabelGenerator from '../../Components/Label/LabelGenerator';
import { create_label } from '../../action';

const mapDispatchToProps = dispatch => {
    return {
        create_label: (label) => {
            dispatch(create_label(label));
        },
    };
};

const LabelGeneratorContainer = connect(null, mapDispatchToProps)(LabelGenerator);

export default LabelGeneratorContainer;