import React, { Component } from 'react';
import { getLabels } from '../../apis/label';
import LabelContainer from '../../Containers/LabelContainer/LabelContainer';
import Label from './Label';


export default class LabelGroup extends Component {
    componentDidMount() {
        getLabels().then((response) => {
            this.props.initLabels(response.data);
        })
    }

    render() {
        return this.props.labels.map((label) =>
            <LabelContainer key={label.id} label={label} />
        )
    }
}