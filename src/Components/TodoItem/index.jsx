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
        const { id, text, done } = this.props.item;
        const { labels } = this.props;
        const newLabel = labels.filter(label => 
            selectedOption.includes(label.id)
        )
        updateTodo(id, text, done, newLabel).then((response) => {
            console.log("update");
            this.props.updateTodo(response.data);
        })
    };

    onToggleDone = () => {
        const { id, text, done, labels } = this.props.item
        updateTodo(id, text, !done, labels).then((response) => {
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

    // generateDefaulLabel = () => {
    //     const defaultLabel = [];
    //     if(this.props.item.labels != null){
    //         this.props.item.labels.map((label) => {
    //             defaultLabel.push(label.content);
    //         })
    //     }
    //     return defaultLabel;
    // }

    // generateLabelOptions = () => {
    //     const labelOptions = [];
    //     const { labels } = this.props;
    //     labels.map((label) => {
    //         labelOptions.push(<Option key={label.id}>{label.content}</Option>);
    //     });

    //     return labelOptions;
    // }

    render() {
        const { text, done } = this.props.item;
        const textSyle = done ? "textStyle" : "";
        
        const labelOptions = [];
        const { labels } = this.props;
        labels.map((label) => {
            labelOptions.push(<Option key={label.id}>{label.content}</Option>);
        });

        const defaultLabel = [];
        if(this.props.item.labels != null){
            this.props.item.labels.map((label) => {
                defaultLabel.push(label.content);
            })
        }

    
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
                        <Col span={24}>
                            <Select
                                mode="tags"
                                size="small"
                                placeholder="Please select"
                                defaultValue={defaultLabel}
                                onChange={this.handleChange}
                                style={{ width: '200px' }}
                            >
                                {labelOptions}
                            </Select>
                        </Col>
                    </div>
                </Row>
            </div>
        )
    }
}