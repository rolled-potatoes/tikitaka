import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindCreateAction } from 'redux'
import { Map, fromJS, List } from 'immutable'
import ReviseComponent from 'components/revise/Revise/index.js'
class reivse extends Component {

    state = {
        nickname:"",
        careerList:"",
        educationList:"",
        skills:"",
        licenseList:"",
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { myInfo } = nextProps;
        return {
            nickname: myInfo.nickName,
            careerList: fromJS(myInfo.careeList),
            educationList: fromJS(myInfo.educationList),
            skills: fromJS(myInfo.categoryList),
            licenseList: fromJS(myInfo.licenseList),
        }
    }

    render() {
        const {
            myInfo
        } = this.props;
        if (myInfo != "") {
            return (
                <ReviseComponent
                    inputdata ={this.state}
                    info={myInfo}
                />
            )
        }
        else {
            return (
                <div></div>
            )
        }


    }
}

export default connect(
    (state) => ({
        myInfo: state.base.get('myInfo'),
    }),
    (dispatch) => ({

    })
)(reivse);