import React, { Component } from 'react';
import './TodoItemStyle.css';
import { deleteToDo, updateTodo } from '../../apis/todo';
import '../common.css';
import { Row, Col } from 'antd';
import { Button, Radio } from 'antd';
import { Tag, Divider } from 'antd';
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
        this.setState({ selectedOption: selectedOption });
        console.log(selectedOption);
      };

    onToggleDone = () => {
        const { id, text, done } = this.props.item
        updateTodo(id, text, !done).then((response) => {
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
                    defaultValue={[options[0], options[1]]}
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