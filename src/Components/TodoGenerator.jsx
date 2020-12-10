import React, { Component } from 'react';
import { addNewToDo } from '../apis/todo';
import { Input } from 'antd';
import "./common.css";
import { Form, Button } from 'antd';

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class TodoGenerator extends Component {
    changeTodo = (event) => {
        this.setState({ todo: event.target.value });
    }

    submitTodo = () => {
        if (this.state.todo.length > 0) {
            addNewToDo(this.state.todo).then((response) => {
                this.props.create(response.data);
            })
            this.setState({ todo: '' });
        }
    }

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