import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Newfeed from 'components/common/Newfeed'
import * as baseActions from 'store/modules/base.js'
import classnames from 'classnames'
import styles from './Base.scss'

const cx = classnames.bind(styles)

class Base extends Component {
    state={
        visibleNewFeed : false,
    }
    onClickOutSide=()=>{
        const {visibleNewFeed} =this.state;
        if(visibleNewFeed !== false){
            this.setState({
                visibleNewFeed:false
            })
        }
    }
    initialize= async() =>{
        const {BaseActions} = this.props;
        if(localStorage.logged === 'true'){
            BaseActions.tempLogin()
        }
        await BaseActions.checkLogin();
        
    }
    componentDidMount(){
        this.initialize();
    }
    
    onClickBell=()=>{
        const {visibleNewFeed} = this.state;
        this.setState({
            visibleNewFeed : !visibleNewFeed,
        })
    }
    render() {
        const {pageNot,timeline,logged} = this.props;
        const {onClickBell} = this
        const {visibleNewFeed} = this.state;
        const temp = document.getElementById('pagetem');
        if(timeline !=""){
            if(!pageNot)
                temp.addEventListener('click',this.onClickOutSide);
        }
        return (
            
            <div className={cx({'base-wrapper':visibleNewFeed,'base-wrapper-close':!visibleNewFeed})}>
                {!pageNot && logged === true &&
                <Fragment>
                    <span style={{"fontSize": "30px","color":"#FFD74F"}} className={cx({"noneDisplay":visibleNewFeed})}>
                        <div className='timeline-background'>

                            <i className="fas fa-bell" onClick={onClickBell}></i>
                        </div>
                    </span>
                    
                    <Newfeed timeline={timeline} visible={visibleNewFeed} onCloseClick={onClickBell}/>
                </Fragment>
                }
                
            </div>
        );
    }
}

export default connect(
    (state)=>({
        logged : state.base.get('logged'),
        timeline: state.base.get('timeline'),
        pageNot : state.base.get('pageNot'),
    }),
    (dispatch)=>({
        BaseActions : bindActionCreators(baseActions,dispatch),
    })
)(Base);