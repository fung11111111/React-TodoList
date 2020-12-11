import React, { Component } from 'react';
import { deleteToDo, updateTodo, getTodoList } from '../../apis/todo';
import { getLabels } from '../../apis/label';
import { Row, Col, Button } from 'antd';
import Select from 'react-select'
import './TodoItemStyle.css';
import '../common.css';
import { customStyles } from './SelectorStyle';
// const { Option } = Select;


const reactSelectoptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]


const myStyle = customStyles;
export default class TodoItem extends Component {

    componentDidMount() {
        getLabels().then((response) => {
            this.props.initLabels(response.data);
        })
    }

    //todo refactor the logic
    handleChange = selectedOption => {
        const { id, text, done } = this.props.item;
        const { labels } = this.props;
        const addLabel = [];
        if (Array.isArray(selectedOption)){
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

    // remove 204 status
    // add catch
    // shd call action to dipatch
    deleteItem = () => {
        const { item } = this.props;
        deleteToDo(item.id).then((response) => {
            getTodoList().then((response) => {
                this.props.initTodoList(response.data);
            })
        })
    }

    //can extract the const in a method to initiate
    render() {
        const { text, done } = this.props.item;
        const textSyle = done ? "textStyle" : "";

        const labelOptions = [];
        //todo refactor the logic
        const { labels } = this.props;
        labels.map((label) => {
            labelOptions.push({ value: label.id, label: label.content });
        });

        console.log(labelOptions);

        //todo refactor the logic
        const defaultLabel = [];
        this.props.item.labels.map((label) => {
            defaultLabel.push({value: label.id, label: label.content});
        })
        // select style
        return (
            <div className="item">
                <Row>
                    <Col span={12}><label className={textSyle} onClick={this.onToggleDone}>{text}</label></Col>
                    <Col span={4} offset={8}>
                        <Button type="primary" shape="circle" onClick={this.deleteItem} danger>X</Button>
                    </Col>
                </Row>
                {/* <Row>
                    <div className="selector-block">
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
                    </div>
                </Row> */}
                <Row>
                    <Select
                        closeMenuOnSelect={false}
                        defaultValue={defaultLabel}
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