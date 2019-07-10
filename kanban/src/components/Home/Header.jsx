import React, { Component, Fragment } from 'react';
import Cookies from 'js-cookie'

const Header = (props) => {

    return (
        <Fragment>
            <h1>Kanban</h1>
            <button onClick={() => {
                Cookies.remove('login')
                props.history.replace('/')
            }}>
                <label id="logout">Sair</label>
            </button>
        </Fragment>)
}
export default Header;
