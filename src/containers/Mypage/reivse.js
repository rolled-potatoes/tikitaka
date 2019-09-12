import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindCreateAction} from 'redux'
import {Map,fromJS} from 'immutable'
import ReviseComponent from 'components/revise/Revise/index.js'
class reivse extends Component {
    constructor(props){
        super(props);
        this.state=Map({
            cahchInfo:{},
        })
    }
    componentDidUpdate(prevProps){
        if(this.props.myInfo != prevProps.myInfo){
            this.initialState()
        }
    }
    initialState=()=>{
        this.setState({
            cahchInfo :this.state.set('cahchInfo',fromJS(this.props.myInfo))
        })
    }
    render() {
        const{
            myInfo
        } = this.props;
        const {
            cahchInfo
        } = this.state;
        if(cahchInfo != undefined)
            console.log(cahchInfo.toJS());
        if(cahchInfo !=undefined){
            return (
                <ReviseComponent
                    info ={cahchInfo.toJS().cahchInfo}
                />
            )
        }
        else{
            return(
                <div></div>
            )
        }
        
        
    }
}

export default connect(
    (state)=>({
        myInfo: state.base.get('myInfo'),
    }),
    (dispatch)=>({

    })
)(reivse);