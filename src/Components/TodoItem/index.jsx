import React, { Component } from 'react';
import './TodoItemStyle.css';
import { deleteToDo, updateTodo, getTodoList } from '../../apis/todo';
import { getLabels } from '../../apis/label';
import '../common.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';

import { options, customStyles } from './SelectorStyle'

import { Select, Radio } from 'antd';
const { Option } = Select;


export default class TodoItem extends Component {

    componentDidMount() {
        getLabels().then((response) => {
            this.props.initLabels(response.data);
        })
    }

    handleChange = selectedOption => {
        const { id, text, done } = this.props.item
        console.log(selectedOption);
        // updateTodo(id, text, done, selectedOption).then((response) => {
        //     this.props.updateTodo(response.data);
        // })
    };

    onToggleDone = () => {
        const { id, text, done, options } = this.props.item
        updateTodo(id, text, !done, options).then((response) => {
            this.props.updateTodo(response.data);
        })
    }

    deleteItem = () => {
        const { item } = this.props;
        deleteToDo(item.id).then((response) => {
            if (response.status === 204) {
                getTodoList().then((response) => {
                    this.props.initTodoList(response.data);
                })
            }
        })
    }


    render() {
        const { text, done } = this.props.item;
        const textSyle = done ? "textStyle" : "";
        const { labels } = this.props;
        const labelTexts = [];
        labels.map((label) => {
            labelTexts.push(<Option key={label.id}>{label.content}</Option>);
        })
        console.log(labelTexts);

        return (
            <div className="item">
                <Row>
                    <Col span={12}><label className={textSyle} onClick={this.onToggleDone}>{text}</label></Col>
                    <Col span={4} offset={8}>
                        <Button type="primary" shape="circle" onClick={this.deleteItem} danger>X</Button>
                    </Col>
                </Row>
                <Row>
                    <div className="selector-block">
                        {/* <Select
                            styles={customStyles}
                            closeMenuOnSelect={false}
                            value={this.props.item.options}
                            onChange={this.handleChange}
                            isMulti
                            options={options}
                        /> */}
                        <Col span={24}>
                            <Select
                                mode="tags"
                                size="small"
                                placeholder="Please select"
                                defaultValue={[]}
                                onChange={this.handleChange}
                                style={{ width: '200px' }}
                            >
                                {labelTexts}
                            </Select>
                        </Col>
                    </div>
                </Row>
            </div>
        )
    }
}