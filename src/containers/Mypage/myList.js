import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import MyListComponent from 'components/mypage/myList/index.js'
class myList extends Component {

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