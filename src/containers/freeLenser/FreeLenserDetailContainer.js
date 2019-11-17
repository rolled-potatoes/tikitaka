import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as freeActions from 'store/modules/freePost.js'
import FreeLenserDetailComponent from 'components/freeLenser/FreeLenserDetail/index.js'
import Axios from 'axios';
import {checkLogin} from 'store/modules/base.js'

class FreeLenserDetailContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            visibles:[true,false,false,false],
            follow_check:false,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.myInfo!==''){
            let followFlag = nextProps.myInfo.followUserList.find(item => {
                return item == nextProps.info._id
            })
            this.setState({
                follow_check: followFlag ? true : false
            })
        }
    }
    componentDidMount(){
        this.initial();
        window.scrollTo(0, 0)
    }   
    
    initial=async()=>{
        const {id} = this.props.match.params
        const {FreeActions,myInfo,info} = this.props
        FreeActions.getFree(id)
    }
    onFollowClick=async (e)=>{
        // ?follow = 0 언팔
        // ?follow = 1 팔로우
        //followUserList : 내가 팔로우 한 사람 목록
        //followerList: 나를 팔로우 한 사람 목록
        let elem = e.target;
        const {FreeActions,CheckLogin} = this.props

        while(!elem.classList.contains('profil-follow')){
            elem = elem.parentNode
            if(elem.nodeName =='BODY')
                return;
        }
        const {value} = elem.dataset;
        const {_id:uid} = this.props.myInfo // 나의 id
        const post = this.props.myInfo
        const {_id} = this.props.info; //  상대방 id 
        let query = `/user/${uid}?follow=${value}&useroid=${_id}`
        let res = await Axios.put(query,post)
        CheckLogin()
    }
    onClickMenuitem=(e)=>{
        const {id} =e.target;
        let tempVisible = [false,false,false,false]
        for(let i = 0 ; i < 4; i++){
            if(i === id -1){
                tempVisible[i] = true;
            }
        }
        this.setState({
            visibles :tempVisible
        })
    }
    render() {
        const {
            visibles,
            follow_check,
        } = this.state;

        const {
            info,
            logged,
            myInfo
        }= this.props

        const {
            onClickMenuitem,
            onFollowClick,

        } =  this
        let isme= false;
        if(myInfo !==""){
            isme = myInfo.userId === info.userId
        }
        return (
            <FreeLenserDetailComponent
                freeInfo={info}
                onFollowClick={onFollowClick}
                follow_check={follow_check}
                visibles={visibles}
                onClickMenuitem={onClickMenuitem}
                logged={logged}
                isme={isme}
            />
        );
    }
}

export default connect(
    (state)=>({
        myInfo : state.base.get('myInfo'),
        info : state.freePost.get('info'),
        logged : state.base.get('logged'),
    }),
    (dispatch)=>({
        FreeActions : bindActionCreators(freeActions,dispatch),
        CheckLogin : bindActionCreators(checkLogin,dispatch)
    })
)(withRouter(FreeLenserDetailContainer))