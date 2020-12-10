import React, { Component } from 'react';
import "./common.css"
import { Row, Col } from 'antd';
import { Tag } from 'antd';
export default class DoneList extends Component {
    generateTag = () => {
        const { item } = this.props
        console.log(item.options);
        if (item.options != null) {
            return item.options.map(item =>
                <Tag key={item.value} color="#2db7f5">{item.label}</Tag>
            )
        }
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