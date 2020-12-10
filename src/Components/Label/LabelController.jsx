import React, { Component } from 'react';
import "../common.css";
import LabelGroup from './LabelGroup';
import LabelGeneratorContainer from '../../Containers/LabelContainer/LabelGenertatorContainer';
import LabelGroupContainer from '../../Containers/LabelContainer/LabelGroupContainer';

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