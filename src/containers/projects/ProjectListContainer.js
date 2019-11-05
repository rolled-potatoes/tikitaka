import React, { Component,Fragment } from 'react';
import ProjectListComponent from 'components/projects/ProjectList/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as projectAction from 'store/modules/ProjectList.js'
import Pagenation from 'containers/common/Pagenation.js'
import { timingSafeEqual } from 'crypto';
/**
 * 넘겨줄 값 : 페이지 번호 , 필터, 검색어
 * 받을 값 : 페이지 마지막 번호, 프로젝트 리스트 10개
 */

class ProjectListContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown_dispaly: false,
        }
    }
    /**
     * 검색어 입력할 때 state에 저장
     */
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }
    onRouteChanged = () => {
        const { page } = this.props.match.params
        const { ProjectAction } = this.props
        ProjectAction.getList({ page: page });
        window.scrollTo(0, 0)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        const { page } = this.props.match.params
        const { ProjectAction } = this.props
        ProjectAction.getList({pageId:1,size:10});
    }
    changeSearchString = (e) => {
        const { value } = e.target;
        const {ProjectAction} = this.props;
        ProjectAction.changetSearch({value:value})
        
    }
    keyPressSearchSring = (e) => {
        const { key } = e
        if (key === 'Enter') {
            this.onClickSearch();
        }
    }
    dropdown_onToggle = () => {
        const { dropdown_dispaly } = this.state

        this.setState({
            dropdown_dispaly: !dropdown_dispaly
        })
    }
    dropdown_onClick = (e) => {
        const { value } = e.target;
        const {ProjectAction} = this.props;
        ProjectAction.changeCategory({value:value});
        
    }
    onOrderFilter=(event)=>{
        let elem = event.target;
        const {ProjectAction} = this.props;
        
        while(!elem.classList.contains('filter-btn')){
            elem = elem.parentNode;

            if(elem.nodeName=='BODY')
                return ;
        }
        if(elem.dataset.value== 0){
            ProjectAction.changetSearch({value:""});
            setTimeout(() => {
                this.onClickSearch(elem.dataset.value)
            }, 500)
        }else{

            this.onClickSearch(elem.dataset.value)
        }
    }
    onClickSearch = (order) => {
        const {ProjectAction,searchText,searchCategory} = this.props;
        const cat = searchCategory === '제목'? 'title':'categoryList';
        console.log(order);
        
        ProjectAction.getList({
            pageId: 1,
            size:10,
            cat :cat,
            text:searchText,
            order : order
        });        
    }
    render() {
        const {
            changeSearchString,
            keyPressSearchSring,
            onClickSearch,
            dropdown_onToggle,
            dropdown_onClick,
            onOrderFilter,
        } = this
        const {
            dropdown_dispaly,
        } = this.state;
        const {
            projectList,
            lastPage,
            searchText,
            searchCategory
        } = this.props

        return (
            <Fragment>
                <ProjectListComponent
                    onOrderFilter={onOrderFilter}
                    ontoggle={dropdown_onToggle}
                    dropdownOnClick={dropdown_onClick}
                    dropdownName={searchCategory}
                    dropdowndispaly={dropdown_dispaly}
                    projectList={projectList}
                    searchString={searchText}
                    changeSearch={changeSearchString}
                    keyPressSearchSring={keyPressSearchSring}
                    onClickSearch={onClickSearch}
                />
                <Pagenation 
                    lastPage={lastPage}
                />
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        projectList: state.ProjectList.get('projectList'),
        lastPage : state.ProjectList.get('lastPage'),
        searchText: state.ProjectList.get('searchText'),
        searchCategory: state.ProjectList.get('searchCategory'),
    }),
    (dispath) => ({
        ProjectAction: bindActionCreators(projectAction, dispath)
    })
)(withRouter(ProjectListContainer));
