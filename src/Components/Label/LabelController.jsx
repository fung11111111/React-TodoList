import React, { Component } from 'react';
import LabelGeneratorContainer from '../../Containers/LabelContainer/LabelGenertatorContainer';
import LabelGroupContainer from '../../Containers/LabelContainer/LabelGroupContainer';
import "../common.css";
export default class LabelController extends Component {

    render() {
        return (
            <div>
            <LabelGroupContainer />
            <LabelGeneratorContainer />
            </div>
        )
    }
}