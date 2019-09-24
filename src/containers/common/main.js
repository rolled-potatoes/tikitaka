import React, { Component } from 'react';
import MainComponent from 'components/Main/main/index.js'
import {withRouter} from 'react-router-dom'

class main extends Component {
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
    }
    render() {
        const {
            LinkToProject,
            LinkToFree,
            LinkToLogin,
            LinkToSign,
        } = this;
        return (
            <MainComponent
                LinkToProject={LinkToProject}
                LinkToFree={LinkToFree}
                LinkToLogin={LinkToLogin}
                LinkToSign={LinkToSign}
            />
        );
    }
}

export default withRouter(main);