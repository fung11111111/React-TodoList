import React, { Component } from 'react';
import { toggleDone } from '../action';

export default class TodoListGroup extends Component {
    constructor(props){
        super(props);
    }

    

    searchById = () => {
        const {todoList, id} = this.props;
        console.log("123");
        for (let i = 0; i < todoList.length; i++) {
            console.log(todoList[i].id);
                if(id == todoList[i].id){
                    let customStyles = todoList[i].done ? { textDecorationLine: 'line-through', textDecorationStyle: 'solid'
                } : {};
                    return (<div>
                        <span style={customStyles} onClick = {this.props.toggleDone(todoList[i].id)}>{todoList[i].text}</span>
                        <button>X</button>
                        </div>
                        );
                }
          }
    }

    render() {
        return (
            <div>
                <span>{this.searchById()}</span>
            </div>
        
        )
    }
}