import React, { Component } from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import Header from '../../components/common/Header';
import * as baseActions from 'store/modules/base.js'
class HeaderContainer extends Component {

    handleLogout=async()=>{
        const{BaseActions} = this.props;

        try{
            localStorage.logged = 'false'
            BaseActions.logout();
        }
        catch(e){
            console.log(e);
        }
    }
    render() {
        const{
            logged
        } =this.props
        const {
            handleLogout
        } = this
        return (
            <Header
                onClickLogout= {handleLogout}
                logged= {logged}
            />
        );
    }
}

export default connect(
    (state)=>({
        logged : state.base.get('logged')
    }),
    (dispatch) =>({
        BaseActions : bindActionCreators(baseActions,dispatch)
    })
)(HeaderContainer);