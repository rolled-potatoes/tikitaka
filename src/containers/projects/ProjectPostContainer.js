import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as projectPostActions from 'store/modules/ProjectPost.js'
import ProjectPost from 'components/projects/ProjectPost/index.js'
import ProjectCandidate from 'components/projects/ProjectPost/ProjectCandidate'

// 디자인 영상 번역 코딩 음악 공학 스터디 기타
class ProjectPostContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            post:null,
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        const {id} =this.props.match.params  
        const {ProjectPostActions} = this.props;  
        ProjectPostActions.getPost({id:id});
    }
    onModals=async()=>{
        const {ProjectPostActions,project} = this.props;
        await ProjectPostActions.getCandiInfo({list:project.candiList});
        ProjectPostActions.onModal();
    }
    render() {
        const {
            project,
            myInfo,
            modalVisible,
            candidateList,
        } = this.props;
        const {
            onModals
        } = this;
        const {id} =this.props.match.params   

        const mycontent = (myInfo.nickName === project.nickName) ? true : false;
        return (
            <Fragment>
                <ProjectPost
                    id={id}
                    mycontent={mycontent}
                    post ={project}
                    onModals={onModals}
                />
                <ProjectCandidate
                    data={candidateList}
                    onModals={onModals}
                    visible ={modalVisible}
                />
            </Fragment>
            
        );
    }
}
export default connect(
    (state)=>({
        myInfo :state.base.get('myInfo'),
        project : state.ProjectPost.get('project'),
        modalVisible : state.ProjectPost.get('modalVisible'),
        candidateList: state.ProjectPost.get('candidateList'),
    }),
    (dispath)=>({
        ProjectPostActions : bindActionCreators(projectPostActions,dispath)
    })
)(withRouter(ProjectPostContainer));

