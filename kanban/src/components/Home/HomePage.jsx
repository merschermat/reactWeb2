import React, { Component, Fragment } from 'react';
import '../../App.css';
import Panel from './Panel'
import Header from './Header'
import { api } from '../../service/api'


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            title:'',
            desc:''
        }
        this.getList = this.getList.bind(this)
        this.titleChange = this.titleChange.bind(this);
        this.descChange = this.descChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault()
        api({
            method: 'post',
            url: '/list',
            data: {
                name: this.state.title,
                description: this.state.desc,
            },
            withCredentials: true,
            crossdomain: true 
        }).then((data)=>{
            console.log(data)
            this.getList()
        })
    }
    getList(){
        api.get('', { withCredentials: true }
        ).then(data => {
            console.log(data.data.list);
            this.setState({ list: data.data.list })
        }).catch(err=>{
            this.props.history.replace('/')
        })
    }
    componentDidMount() {
        this.getList()
    }
    titleChange(event) {
        this.setState({ title: event.target.value })
    }
    descChange(event) {
        this.setState({ desc: event.target.value })
    }
    render() {
        return (<Fragment>
            <Header history={this.props.history}></Header>

            <div className="wrapper">
                <div className="newList">
                    <label>Adicionar nova lista </label>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text"value={this.state.title}
                        onChange={this.titleChange} name="name" id="" required placeholder="Título" />
                        <input type="text"value={this.state.desc}
                        onChange={this.descChange} name="description" id="" required placeholder="Descrição..." />
                        <button className="btn">Salvar</button>
                    </form>
                </div>
                <Panel attList={this.getList} list={this.state.list}></Panel>
            </div>
        </Fragment>
        );
    }
} export default HomePage;