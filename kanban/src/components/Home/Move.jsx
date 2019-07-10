

import React, { Component } from 'react';
import '../../App.css';
import { api } from '../../service/api';


class Move extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    handleClick = () => {
        api({
            method: 'post',
            url: '/task/' + this.props.listId,
            data: {
                listId: this.state.list
            },
            withCredentials:true
        })
    }
    handleChange(event){
        this.setState({ list: event.target.value })
    }
    render() {
        return (
            <div>
                Mover Para:
                <select value={this.state.list} onChange={this.handleChange} name="listId" required>
                    <option defaultValue disabled>selecione</option>
                    {this.props.list.map(item => {
                        return <option value={item.id}>{item.name}</option>
                    })}
                </select>
                <button id="move" className="btn" onClick={this.handleClick}>mover</button>
            </div>

        )
    }
}
export default Move;


