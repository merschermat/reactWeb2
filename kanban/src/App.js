import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './components/Login/LoginPage'
import HomePage from './components/Home/HomePage'


class App extends Component{
    render() {
        return(
            <Router>
            <div>
                <Route exact path="/" component={LoginPage}/>
                <Route path="/home" component={HomePage}/>
            </div>
            </Router>
        );
    }
}export default App;