import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as baseActions from 'store/modules/base.js'


class Base extends Component {
    initialize= async() =>{
        const {BaseActions} = this.props;
        if(localStorage.logged === 'true'){
            BaseActions.tempLogin()
        }
        BaseActions.checkLogin();
        console.log('initialize');
        
    }
    componentDidMount(){
        this.initialize();
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch)=>({
        BaseActions : bindActionCreators(baseActions,dispatch)
    })
)(Base);