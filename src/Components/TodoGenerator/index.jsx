import React, { Component } from 'react';
import { addNewToDo } from '../../apis/todo';
import { Input } from 'antd';
import { Form, Button, Col, Row } from 'antd';
import "../common.css";

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class TodoGenerator extends Component {

    onFinish = values => {
        if (values.todo.length > 0) {
            addNewToDo(values.todo).then((response) => {
                this.props.create(response.data);
            })
        }
    };

    render() {
        return (
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Col span={16} offset={4}><Form.Item name="todo" label="Todo" >
                    <Input />
                </Form.Item>
                </Col>
                <Col span={10} offset={4}>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Add
                    </Button>
                    </Form.Item>
                </Col>
            </Form>
        )
    }
}