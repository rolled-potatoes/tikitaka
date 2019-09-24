import React, { Component,Fragment } from 'react';
import ProjectListComponent from 'components/projects/ProjectList/index.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as projectAction from 'store/modules/ProjectList.js'
import Pagenation from 'containers/common/Pagenation.js'

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
        const { page } = this.props.match.params
        window.scrollTo(0, 0)
        const { ProjectAction } = this.props
        ProjectAction.getList({ page: page });
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
    onClickSearch = () => {
            
    }
    render() {
        const {
            changeSearchString,
            keyPressSearchSring,
            onClickSearch,
            dropdown_onToggle,
            dropdown_onClick,
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
