import React, { Component } from 'react';
import '../../App.css';
import List from './List'
import { api } from '../../service/api'


class Panel extends Component {


    render() {
        return (
            <div id="panel">
                {this.props.list.map(el => {
                    return <List attList={this.props.attList} list={this.props.list} el={el}></List>
                })}
            </div>

        );

    }
} export default Panel;
