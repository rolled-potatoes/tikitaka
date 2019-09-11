import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import * as projectPostActions from 'store/modules/ProjectPost.js'
import ProjectPost from 'components/projects/ProjectPost/index.js'


// 디자인 영상 번역 코딩 음악 공학 스터디 기타
class ProjectPostContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            post:null,
        }
    }
    componentDidMount(){
        const {id} =this.props.match.params  
        const {ProjectPostActions} = this.props;  
        ProjectPostActions.getPost({id:id});
    }
    
    render() {
        const {
            project,
            myInfo,
        } = this.props;

        const {id} =this.props.match.params   

        const mycontent = (myInfo.nickName === project.nickName) ? true : false;
        return (
            <ProjectPost
                id={id}
                mycontent={mycontent}
                post ={project}
            />
        );
    }
}
export default connect(
    (state)=>({
        myInfo :state.base.get('myInfo'),
        project : state.ProjectPost.get('project'),
    }),
    (dispath)=>({
        ProjectPostActions : bindActionCreators(projectPostActions,dispath)
    })
)(withRouter(ProjectPostContainer));

