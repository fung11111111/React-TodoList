import React, { Component } from 'react';

export default class TodoGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo : ''
        }
    }

    changeTodo = (event) =>{
        this.setState({todo: event.target.value});
    }

    submitTodo = () =>{
        this.props.create(this.state.todo);
        this.setState({todo: ''});
    }

    render() {
        const {todo} = this.state;

        return (
            <div>
                 <input type="text" value={todo} onChange={this.changeTodo}/>
                 <input type="submit" onClick={this.submitTodo}/>
            </div>
        )
    }
}