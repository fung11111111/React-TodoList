import React, { Component } from 'react';
import { getLabels } from '../../apis/label';



export default class LabelGroup extends Component {
    componentDidMount() {
        getLabels().then((response) => {
           console.log(response.data);
        })
    }
    render() {
        return (
           <div>label group</div>
        )
    }
}