import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../../App.css';
import Login from './Login'
import Singup from './Singup'
import { api } from '../../service/api'


class LoginPage extends Component {
    componentWillMount() {
        if (Cookies.get('login'))
            api.get()
    }
    render() {
        return (
            <div className="wrapper login">
                <Route component={Login} />
                <Route component={Singup} />
            </div>
        );
    }
} export default LoginPage;