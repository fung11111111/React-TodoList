import React, { Component } from 'react';
import {Tag, Button } from 'antd';
import { deleteLabel, getLabels } from '../../apis/label';
import { DeleteOutlined } from '@ant-design/icons';
import "./label.css";
export default class Label extends Component {

    deleteItem = () => {
        const { label } = this.props;
        deleteLabel(label.id).then((response) => {
            if (response.status === 204) {
                getLabels().then((response) => {
                    this.props.initLabels(response.data);
                 })
            }
        })
    }

    render() {
        const { content, color } = this.props.label;
        return (
            <div className="labelBlock">
                <Tag color={color}>{content}</Tag>
                <Button shape="circle" onClick={this.deleteItem} danger icon={<DeleteOutlined />} size="small"></Button>
            </div>
        )
    }
}