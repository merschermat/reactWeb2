import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { api } from '../../service/api'

class Singup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            messageCreate: ''
        }
        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.usernameChange = this.usernameChange.bind(this);
        this.singup = this.singup.bind(this);
    }
    singup(event) {
        event.preventDefault()
        api.post('/user', {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
        }).then((data) => {
            if (data.data.message) {
                Cookies.set('login', data.data.token)
                this.props.history.push('/home')
            }
            this.setState({ messageCreate: data.data.messageCreate })
        })
    }
    emailChange(event) {
        this.setState({ email: event.target.value })
    }
    passChange(event) {
        this.setState({ password: event.target.value })
    }
    usernameChange(event) {
        this.setState({ username: event.target.value })
    }

    render() {
        return (
            <div>
                <form className="blocks" onSubmit={this.singup} accept-charset="utf-8">
                    <label>{this.state.messageCreate}</label>
                    <h2>Criar Conta</h2>
                    <label>Email</label>
                    <input name="email" type="email" value={this.state.email} onChange={this.emailChange} required placeholder="Insira o email" />
                    <label> Username </label>
                    <input name="name" type="text" value={this.state.username} onChange={this.usernameChange} required placeholder="Insira o username" />
                    <label> Password</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.passChange} required placeholder="Insira a senha" />
                    <button className="btn" type="submit">Criar Conta</button>
                </form>
            </div>
        );
    }
} export default Singup;