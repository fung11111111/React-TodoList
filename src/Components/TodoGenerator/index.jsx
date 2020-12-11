import React, { Component } from 'react';
import { addNewToDo } from '../../apis/todo';
import { Input } from 'antd';
import { Form, Button } from 'antd';
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

    // remove old data
    render() {
        return (
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item name="todo" label="Todo" >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}