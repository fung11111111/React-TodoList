import React, { Component } from 'react';
import { Row, Col, Tag } from 'antd';
import "../common.css";
export default class DoneItem extends Component {
    generateTag = () => {
        const { item } = this.props

        return item.labels.map(label =>
            <Tag key={label.id} color={label.color}>{label.content}</Tag>
        )

    }
    render() {
        const { item } = this.props;
        return (
            <div className="doneItem">
                <Row>
                    <Col span={24}>{item.text}</Col>
                </Row>
                <div >
                    {this.generateTag()}
                </div>
            </div>

        )
    }
}