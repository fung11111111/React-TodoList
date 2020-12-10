import React, { Component } from 'react';
import "../common.css"
import { Form, Input, Button, Select } from 'antd';
import { createLabel } from '../../apis/label';


const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 16 },
};

const { Option } = Select;

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class LabelGenerator extends Component {

  
      onFinish = values => {
        console.log(values.color);
        console.log(values.label);


        createLabel(values.label, values.color).then((response) => {
            console.log(response.data);
        })

      };

    render() {
        return (
            <Form {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
                <Form.Item name="label" label="Label" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="color" label="Color" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a color for your label"
                        allowClear
                    >
                        <Option value="yellow">yellow</Option>
                        <Option value="green">green</Option>
                        <Option value="red">red</Option>
                    </Select>
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