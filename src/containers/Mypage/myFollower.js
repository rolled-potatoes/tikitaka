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

    getFollow=async()=>{
        const {followUserList} = this.props.myInfo
        let follows = [];
        if(followUserList){
            for(let item of followUserList){
                let result = await Axios.get(`/user/${item}`)
                follows.push(result.data.user);
            }
            this.setState({
                followerInfo:follows,
                flag :true
            })
        }
        
    }
    render() {
        const {
            myInfo
        } = this.props;
        
        const {
            followerInfo,
            flag
        } = this.state;
        if(myInfo !=="" && !flag)
            this.getFollow();
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