import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindCreateAction} from 'redux'
import MyPagecomponent from 'components/mypage/Mypage/index.js'
class mypage extends Component {

    constructor(props){
        super(props)
        this.state={
            visibles:[true,false,false,false]
        }
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
        const{
            myInfo
        } = this.props
        const {
            onClickMenuitem
        } = this
        const {
            visibles,
        } = this.state;

        return (
            <MyPagecomponent
                myInfo= {myInfo}
                onClickMenuitem={onClickMenuitem}
                visibles={visibles}
            />
        );
    }
}

export default connect(
    (state)=>({
        myInfo : state.base.get('myInfo'),
    }),
    (dispatch)=>{

    }
)(mypage);