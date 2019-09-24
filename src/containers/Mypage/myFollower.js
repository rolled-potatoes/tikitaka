import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { bindCreateAction } from 'redux'
import MyFollowerComponent from 'components/mypage/myFollowerComponent'
import {getFollowerInfo} from 'lib/api.js'
class myFoller extends Component {
    state={
        followerInfo :[],
    }
    componentDidMount(){
        this.getFollow();

    }
    componentDidUpdate(prevProps, prevState, snapshot){
        if(this.state.followerInfo.length === 0)
            this.getFollow();
    }
    getFollow=async()=>{
        const {myInfo} =this.props;
        
        if(myInfo !=""){

            const list = await getFollowerInfo({follow: myInfo.follow})
            this.setState({
                followerInfo:list,
            })
        }
    }
    render() {
        const {
            myInfo
        } = this.props;
        const {
            followerInfo
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