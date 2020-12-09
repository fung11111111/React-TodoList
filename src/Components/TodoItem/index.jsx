import React, { Component } from 'react';
import './TodoItemStyle.css';
import { deleteToDo, updateTodo } from '../../apis/todo';
import '../common.css';
import { Row, Col } from 'antd';
import { Button, Radio } from 'antd';


export default class TodoItem extends Component {

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
                    <Col span={12}><label className={textSyle} onClick={this.onToggleDone}>{text}</label>-8</Col>
                    <Col span={4} offset={8}>
                        <Button type="primary" shape="circle" onClick={this.deleteItem}>X</Button>
                    </Col>
                </Row>
            </div>

        )
    }
}