import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import datas from 'data/datas.json'

import FreeLenserListComponent from 'components/freeLenser/FreeLenserList/index.js'

class FreeLenserListContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            searchString: '',
        }
    }
    changeSearchString=(e)=>{
        const{value} = e.target;
        this.setState({
            searchString : value
        })
    }
    keyPressSearchSring=(e)=>{
        const {key} = e
        if(key ==='Enter'){
            this.onClickSearch();
        }   
    }
    onClickSearch=()=>{
        const {history} = this.props;
        const {searchString} = this.state;
        history.push(`/freeLenser/1?search=${searchString}`)
    }
    render() {
        const{
            searchString
        } = this.state
        const {
            changeSearchString,
            keyPressSearchSring,
            onClickSearch,
        } = this
        return (
            <FreeLenserListComponent
                list={datas.freeLenserList}
                searchString={searchString}
                onChange ={changeSearchString}
                onClickSearch={onClickSearch}
                onKeyPress={keyPressSearchSring}
            />
        );
    }
}

export default connect(
    (state)=>({

    }),
    (dispatch)=>({

    })
)(withRouter(FreeLenserListContainer));