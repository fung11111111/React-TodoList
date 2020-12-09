import React, { Component } from 'react';
import './TodoItemStyle.css';
import { deleteToDo, updateTodo } from '../../apis/todo';
import '../common.css';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import Select from 'react-select'

const options = [
    { value: 'sports', label: 'Sports' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'movie', label: 'Movie' },
    { value: 'reading', label: 'Reading' },
    { value: 'music', label: 'Music' },
    { value: 'training', label: 'Training' },
    { value: 'work', label: 'Work' }
  ];

export default class TodoItem extends Component {
    state = {
        selectedOption: '',
      };

    handleChange = selectedOption => {
        const { id, text, done} = this.props.item
        this.setState({ selectedOption: selectedOption });
        updateTodo(id, text, done, selectedOption ).then((response) => {
            this.props.toggleDone(response.data);
        })
      };

    onToggleDone = () => {
        const { id, text, done, options } = this.props.item
        updateTodo(id, text, !done, options ).then((response) => {
            this.props.toggleDone(response.data);
        })
    }

    deleteItem = () => {
        const { item } = this.props;
        deleteToDo(item.id).then((response) => {
            this.props.deleteItem(response.data.id);
        })
    }

    render() {
        const { text, done } = this.props.item;
        const textSyle = done ? "textStyle" : "";
       
        return (
            <div className="item">
                <Row>
                    <Col span={12}><label className={textSyle} onClick={this.onToggleDone}>{text}</label></Col>
                    <Col span={4} offset={8}> 
                    <Button type="primary" shape="circle" onClick={this.deleteItem} danger>X</Button>
                    </Col>
                </Row>
                <Row>
                <div className="selector">
                    <Select
                    closeMenuOnSelect={false}
                    value={this.props.item.options}
                    onChange={this.handleChange}
                    isMulti
                    options={options}
                     />
                </div>
                </Row>
            </div>
        )
    }
}