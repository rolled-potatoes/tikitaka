import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindCreateAction } from 'redux'
import MyFollowerComponent from 'components/mypage/myFollowerComponent'
import {getFollowerInfo} from 'lib/api.js'
import Axios from 'axios';
class myFoller extends Component {
    state={
        followerInfo :[],
        flag: false
    }
    componentDidMount(){
        if(this.props.myInfo !== ''){
            console.log('asd');
            
            this.getFollow();
        }
    }
    componentDidUpdate(preProps,prevState){
        if(preProps.myInfo.followUserList != this.props.myInfo.followUserList){
            this.getFollow();
        }
    }
    getFollow=async()=>{
        const {followUserList} = this.props.myInfo
        let follows = [];
        if(followUserList){
            
            follows = await this.getUnit(followUserList)
            
            this.setState({
                followerInfo:follows,
                flag :true
            })
        }
        
    }
    getUnit=async(followUserList)=>{
        let follows=[];
        for(let item of followUserList){
            let result = await Axios.get(`/user/${item}`)
            follows.push(result.data.user);
        }

        return new Promise(resolve=>resolve(follows))
    }
    render() {
        const {
            myInfo
        } = this.props;
        
        const {
            followerInfo,
            flag
        } = this.state;
        
        return (
            <Fragment>
                {myInfo !== "" && followerInfo !==[] &&
                    < MyFollowerComponent
                        myInfo={myInfo}
                        followerInfo={followerInfo}
                    />
                }
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        myInfo: state.base.get('myInfo'),
    }),
    (dispatch) => ({

    })
)(myFoller);