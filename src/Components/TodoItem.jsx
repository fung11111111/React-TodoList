import React, { Component } from 'react';
import { toggleDone } from '../action';

export default class TodoListGroup extends Component {
 
    onToggleDone  = (event) =>{  
        const {item} = this.props;
        console.log(event.target);
        this.props.toggleDone(item.id);
        if(item.done){
            event.target.style.textDecorationLine = 'line-through'; 
            event.target.style.textDecorationStyle = 'solid'
        }else{
            event.target.style.textDecorationLine = 'none';
        }
    }

    deleteItem = (id) => {
        const {item} = this.props;
        this.props.deleteItem(item.id);
    }
    
    render() {
        const {text} = this.props.item;
        return (
            <div>
                <label onClick={this.onToggleDone}>{text}</label>
                <input type="button" value="X" onClick={this.deleteItem}></input>
            </div>
        
        )
    }
}