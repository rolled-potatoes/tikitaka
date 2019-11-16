import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {getCandidateInfo,applyProject,agreeApply,DenyApply} from 'lib/api.js'
import * as projectPostActions from 'store/modules/ProjectPost.js'
import ProjectPost from 'components/projects/ProjectPost/index.js'
import ProjectCandidate from 'components/projects/ProjectPost/ProjectCandidate'

// 디자인 영상 번역 코딩 음악 공학 스터디 기타
class ProjectPostContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            post:null,
            candiList:[{}],
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
        const {id} =this.props.match.params  
        const {ProjectPostActions} = this.props;  
        ProjectPostActions.getPost(id);
    }
    onModals=async()=>{
        const {ProjectPostActions,project,modalVisible} = this.props;
        
        if(!modalVisible){
            
            let res = await getCandidateInfo(project.candiList)
            this.setState({
                candiList : res
            })
        }
        ProjectPostActions.onModal();
    }
    applyProjectAction =async() =>{
        const {ProjectPostActions} = this.props;
        const {id} =this.props.match.params  
        let res = await applyProject(id)
        ProjectPostActions.getPost(id);
        alert(res.message)

    }
    agreeApplyAction = async(e)=>{
        const {id} =this.props.match.params  
        const {ProjectPostActions} = this.props;
        const {value} = e.target;
        await agreeApply(id,value);
        ProjectPostActions.getPost(id).then(async ()=>{
            let res = await getCandidateInfo(this.props.project.candiList)
            this.setState({
                candiList : res
            })
        })
    }
    DenyApplyAction = async(e)=>{
        const {id} =this.props.match.params  
        const {value} = e.target;
        const {ProjectPostActions} = this.props;

        await DenyApply(id,value)
        ProjectPostActions.getPost(id).then(async ()=>{
            let res = await getCandidateInfo(this.props.project.candiList)
            this.setState({
                candiList : res
            })
        })
    }
    render() {
        const {
            project,
            myInfo,
            modalVisible,
            logged
        } = this.props;
        const {
            onModals,
            applyProjectAction,
            agreeApplyAction,
            DenyApplyAction,
        } = this;
        const {
            candiList
        } = this.state
        const {id} =this.props.match.params 
        let mycontent = false
        if(logged)
            mycontent = (myInfo.userId === project.userId) ? true : false
        return (
            <Fragment>
                <ProjectPost
                    id={id}
                    mycontent={mycontent}
                    post ={project}
                    applyProject={applyProjectAction}
                    onModals={onModals}
                    logged={logged}
                    />
                {mycontent&&
                    <ProjectCandidate
                        agreeApplyAction={agreeApplyAction}
                        DenyApplyAction={DenyApplyAction}
                        data={candiList}
                        onModals={onModals}
                        visible ={modalVisible}
                    />
                }
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
        logged : state.base.get('logged')
    }),
    (dispath)=>({
        ProjectPostActions : bindActionCreators(projectPostActions,dispath)
    })
)(withRouter(ProjectPostContainer));

