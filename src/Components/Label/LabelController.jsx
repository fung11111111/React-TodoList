import React, { Component } from 'react';
import "../common.css";
import LabelGroup from './LabelGroup';
import LabelGeneratorContainer from '../../Containers/LabelContainer/LabelGenertatorContainer';

export default class LabelController extends Component {

    render() {
        return (
            <div>
            <LabelGroup />
            <LabelGeneratorContainer />
            </div>
        )
    }
}