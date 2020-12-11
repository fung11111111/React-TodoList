import React, { Component } from 'react';
import { deleteToDo, updateTodo, getTodoList } from '../../apis/todo';
import { getLabels } from '../../apis/label';
import { Row, Col, Button } from 'antd';
import Select from 'react-select';
import { customStyles } from './SelectorStyle';
import { DeleteOutlined } from '@ant-design/icons';
import './TodoItemStyle.css';
import '../common.css';


const myStyle = customStyles;
export default class TodoItem extends Component {

    componentDidMount() {
        getLabels().then((response) => {
            this.props.initLabels(response.data);
        })
    }

    handleChange = selectedOption => {
        const { id, text, done } = this.props.item;
        const { labels } = this.props;
        const addLabel = [];
        if (Array.isArray(selectedOption)) {
            for (let i = 0; i < selectedOption.length; i++) {
                addLabel.push(labels.find(label => label.id === selectedOption[i].value));
            }
        }

        updateTodo(id, text, done, addLabel).then((response) => {
            console.log(response.data);
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
            this.props.deleteItem(item.id);
        })
    }

    render() {
        const { text, done } = this.props.item;
        const textSyle = done ? "textStyle" : "";

        const labelOptions = [];
        const { labels } = this.props;
        labels.map((label) => {
            labelOptions.push({ value: label.id, label: label.content });
        });

        const preSetLabel = [];
        this.props.item.labels.map((label) => {
            preSetLabel.push({ value: label.id, label: label.content });
        })

        return (
            <div className="item">
                <Row>
                    <Col span={20}><label className={textSyle} onClick={this.onToggleDone}>{text}</label></Col>
                    <Col span={2} offset={1}>
                        <Button shape="circle" onClick={this.deleteItem} danger icon={<DeleteOutlined />} ></Button>
                    </Col>
                </Row>
                <Row>
                    <Select
                        closeMenuOnSelect={false}
                        defaultValue={preSetLabel}
                        isMulti
                        options={labelOptions}
                        styles={myStyle}
                        onChange={this.handleChange}
                    />
                </Row>
            </div>
        )
    }
}