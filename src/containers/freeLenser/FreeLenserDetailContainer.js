import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import datas from 'data/datas.json'
import {List} from 'immutable'
import FreeLenserDetailComponent from 'components/freeLenser/FreeLenserDetail/index.js'

class FreeLenserDetailContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            info: null,
            visibles:[true,false,false,false]
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params
        const {freeLenserList} = datas;
        
        const freeInfo = freeLenserList.find(n=>{
            return n.id == id
        })
        this.setState({
            info : freeInfo
        })

    }   
    onClickMenuitem=(e)=>{
        const {id} =e.target;
        const{visibles} =this.state;
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
            info,
            visibles
        } = this.state;
        const {
            onClickMenuitem
        } =  this
        return (
            <FreeLenserDetailComponent
                freeInfo={info}
                visibles={visibles}
                onClickMenuitem={onClickMenuitem}
            />
        );
    }
}

export default connect(
    (state)=>({

    }),
    (dispatch)=>({

    })
)(withRouter(FreeLenserDetailContainer))