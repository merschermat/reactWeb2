import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { api } from '../../service/api'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            messageLogin: '',
            logged: false
        }
        this.emailChange = this.emailChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.Login = this.Login.bind(this);
    }
    Login(event) {
        event.preventDefault();
        api({
            method: 'post',
            url: '/login',
            data: {
                email: this.state.email,
                password: this.state.password,
            }
        }).then((res) => {
            Cookies.set('login', res.data.token)
            this.props.history.push('/home')
        }).catch((err) => {
            this.setState({ messageLogin: err.messageLogin })
        })
    }

    emailChange(event) {
        this.setState({ email: event.target.value })
    }
    passChange(event) {
        this.setState({ password: event.target.value })
    }


    render() {

        return (
            <div>
                <form className="blocks" onSubmit={this.Login}>
                    <h2>Fazer Login</h2>
                    <label>{this.state.messageLogin}</label>
                    <label>Email</label>
                    <input name="email" type="email" value={this.state.email}
                        onChange={this.emailChange} required placeholder="Insira o email" />
                    <label> Password</label>
                    <input name="password" type="password" value={this.state.password}
                        onChange={this.passChange} required placeholder="Insira a senhra" />
                    <button className="btn">Entrar</button>
                </form>
            </div>
        )
    }
} export default Login;