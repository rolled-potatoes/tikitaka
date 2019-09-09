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
            searchString: '',
            dropdown_dispaly: false,
            dropdown_name: "카테고리",
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
        const { ProjectAction } = this.props
        ProjectAction.getList({ page: page });
    }
    changeSearchString = (e) => {
        const { value } = e.target;
        this.setState({
            searchString: value
        })
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
        this.setState({
            dropdown_name: value
        })
    }
    onClickSearch = () => {
        const { history } = this.props;
        const { searchString } = this.state;
        history.push(`/project/1?search=${searchString}`)
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
            searchString,
            dropdown_name,
            dropdown_dispaly,
        } = this.state;
        const {
            projectList,
            lastPage
        } = this.props

        return (
            <Fragment>
                <ProjectListComponent
                    ontoggle={dropdown_onToggle}
                    dropdownOnClick={dropdown_onClick}
                    dropdownName={dropdown_name}
                    dropdowndispaly={dropdown_dispaly}
                    projectList={projectList}
                    searchString={searchString}
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
        lastPage : state.ProjectList.get('lastPage')
    }),
    (dispath) => ({
        ProjectAction: bindActionCreators(projectAction, dispath)
    })
)(withRouter(ProjectListContainer));
