import React, { Component } from 'react';
import ProjectListComponent from 'components/projects/ProjectList/index.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import datas from 'data/datas.json'

/**
 * 넘겨줄 값 : 페이지 번호 , 필터, 검색어
 * 받을 값 : 페이지 마지막 번호, 프로젝트 리스트 10개
 */

class ProjectListContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            searchString : '',
        }
    }
    /**
     * 검색어 입력할 때 state에 저장
     */
    changeSearchString=(e)=>{
        const {value} =e.target;
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
        history.push(`/project/1?search=${searchString}`)
    }
    render() {
        const {projectList} =datas;
        const {
            changeSearchString,
            keyPressSearchSring,
            onClickSearch,
        } = this
        const {
            searchString
        } = this.state;
        return (
            <ProjectListComponent 
                projectList = {projectList}
                searchString= {searchString}
                changeSearch = {changeSearchString}
                keyPressSearchSring={keyPressSearchSring}
                onClickSearch={onClickSearch}
            />
        );
    }
}

export default connect (
    (state)=>({

    }),
    (dispath)=>({

    })
)(withRouter(ProjectListContainer));
