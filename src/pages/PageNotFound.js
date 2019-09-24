import React, { Component } from 'react';
import './PageNotFound.scss'
import pageNotFound from 'imgs/pagenotfoundimg.png'
import {Link,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as baseActions from 'store/modules/base.js'
class PageNotFound extends Component {
    componentDidMount(){
        const {BaseActions} =this.props;
        BaseActions.notFound();
    }
    componentWillUnmount(){
        const {BaseActions} =this.props;
        BaseActions.notFound();
    }
    render() {
        const {history} = this.props;
        return (
            <div className='pageNotFound-wrapper'>
                    <img src={pageNotFound} onClick={()=>{
                        history.push('/')
                    }}/>
            </div>
        );
    }
}

export default connect(
    (state)=>({
        pageNot : state.base.get('pageNot'),
    }),
    (dispatch)=>({
        BaseActions: bindActionCreators(baseActions,dispatch)
    })
)(withRouter(PageNotFound));