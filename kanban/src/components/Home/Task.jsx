import React, { Component } from 'react';
import '../../App.css';
import Move from './Move'
import { api } from '../../service/api'


class Task extends Component {
    render() {
        return (
            <div className="task">
                <Move listId={this.props.listId} list={this.props.list}/>
                <h3>{this.props.task.name}</h3>
                <p>{this.props.task.description}</p>
            </div>

        );

    }
} export default Task;
