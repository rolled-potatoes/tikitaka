import React, { Component } from 'react';
import MainComponent from 'components/Main/main/index.js'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Axios from 'axios';

class main extends Component {
    state={
        count:{

        }
    }
    LinkToProject=()=>{
        const {history} = this.props;
        history.push('/project/1')
    }
    LinkToFree=()=>{
        const {history} = this.props;
        history.push('/freeLenser')
    }
    LinkToLogin=()=>{
        const {history} = this.props;
        history.push('/login')
    }
    LinkToSign=()=>{
        const {history} = this.props;
        history.push('/Sign')
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        this.init();
    }
    init=async()=>{
        let res = await Axios.get('/project').then( data=> data = data.data)
        this.setState({
            count : res
        })
    }
    render() {
        const {
            LinkToProject,
            LinkToFree,
            LinkToLogin,
            LinkToSign,
        } = this;
        const {
            logged
        } = this.props;
        const {
            count
        } = this.state;
        
        return (
            <MainComponent
                logged={logged}
                count={count}
                LinkToProject={LinkToProject}
                LinkToFree={LinkToFree}
                LinkToLogin={LinkToLogin}
                LinkToSign={LinkToSign}
            />
        );
    }
}

export default connect(
    (state)=>({
        logged : state.base.get('logged'),
    }),
    ()=>({

    })
)(withRouter(main));