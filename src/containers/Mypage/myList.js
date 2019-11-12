import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import MyListComponent from 'components/mypage/myList/index.js'
import Axios from 'axios';
class myList extends Component {
    state={
        projects : [],
        flag: false
    }
    componentDidMount(){
        this.init()
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(!prevState.flag){
            this.init()
        }
    }
    init=async()=>{
        const {proList} = this.props.myInfo
        let projects = [];
        if(proList){
            projects=await this.initUnit(proList);
            this.setState({
                projects:projects,
                flag:true
            })
        }
    }
    initUnit=async(proList)=>{
        let projects = [];

        for(let item of proList){
            let result = await Axios.get(`/project/${item}`)
            projects.push(result.data.project)
        }
        return new Promise(resolve => resolve(projects))
    }
    LinkToPost=(e)=>{
        const {value} =e.currentTarget;
        const {history} = this.props;
        history.push(`/project/post/${value}`)
    }
    render() {
        const{
            myInfo
        } = this.props
        
        const {
            LinkToPost,
        } = this;
        return (
            <MyListComponent
                myInfo={myInfo}
                projects={this.state.projects}
                LinkToPost={LinkToPost}
            />
        );
    }
}
export default connect(
    (state)=>({
        myInfo : state.base.get('myInfo'),
    }),
    (dispatch)=>{

    }
)(withRouter(myList));