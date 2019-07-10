import React, { Component } from 'react';
import '../../App.css';
import { api } from '../../service/api'
import Task from './Task'


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            desc: ''
        }
        this.add = this.add.bind(this)
        this.descChange = this.descChange.bind(this);
        this.nameChange = this.nameChange.bind(this);
    }
    nameChange(event) {
        this.setState({ name: event.target.value })
    }
    descChange(event) {
        this.setState({ desc: event.target.value })
    }

    add(event) {
        event.preventDefault()
        api({
            method: 'post',
            url: '/task',
            data: {
                listId: this.props.el.id,
                name: this.state.name,
                description: this.state.desc,
            },
            withCredentials: true,
            crossdomain: true
        }).then((data) => {
            console.log(data)
            this.props.attList()
        })
    }

    render() {
        return (
            <div className="list">
                <h2>{this.props.el.name}</h2>
                <div>
                    {this.props.el.task.map(task => {
                        return <Task listId={this.props.el.id} list={this.props.list} task={task}></Task>
                    })}
                </div>
                <input type="text" name="name" value={this.state.name}
                    onChange={this.nameChange} id="" required placeholder="Título" />
                <textarea rows="2" cols="50" name="description" value={this.state.desc}
                    onChange={this.descChange} required placeholder="Descrição..." />
                <button className="btn" onClick={this.add}>Adicionar</button>
            </div>
        );
    }
} export default List;
