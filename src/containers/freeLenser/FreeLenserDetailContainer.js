import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as freeActions from 'store/modules/freePost.js'
import FreeLenserDetailComponent from 'components/freeLenser/FreeLenserDetail/index.js'

class FreeLenserDetailContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            visibles:[true,false,false,false]
        }
    }

    componentDidMount(){
        this.initial();
        window.scrollTo(0, 0)

    }   
    
    initial=async()=>{
        const {id} = this.props.match.params
        const {FreeActions} = this.props
        FreeActions.getFree({id:id})
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
        const {
            visibles,
        } = this.state;

        const {
            info,
            myInfo
        }= this.props
        const {
            onClickMenuitem
        } =  this
        //const follow_check = myInfo =="" ? false : true;

        let follow_check = false;
        if(myInfo !="")
            follow_check=  myInfo.follow.find(item=>{
            return item == info.email
        }) ===undefined? false :true
        return (
            <FreeLenserDetailComponent
                freeInfo={info}
                follow_check={follow_check}
                visibles={visibles}
                onClickMenuitem={onClickMenuitem}
            />
        );
    }
}

export default connect(
    (state)=>({
        myInfo : state.base.get('myInfo'),
        info : state.freePost.get('info'),
    }),
    (dispatch)=>({
        FreeActions : bindActionCreators(freeActions,dispatch),
    })
)(withRouter(FreeLenserDetailContainer))