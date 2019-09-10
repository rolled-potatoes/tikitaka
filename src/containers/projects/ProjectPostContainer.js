import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import datas from 'data/datas.json'

// 디자인 영상 번역 코딩 음악 공학 스터디 기타
import ProjectPost from 'components/projects/ProjectPost/index.js'
class ProjectPostContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            post:null,
        }
    }
    componentDidMount(){
        const {id} =this.props.match.params        
        const {projectList} = datas;
        const post = projectList.find(function(n){
            return n.id == id;
        })
        this.setState({
            post: post
        })
    }
    render() {
        const {post} = this.state;
        const {id} =this.props.match.params        

        return (
            <ProjectPost
                id={id}
                post ={post}
            />
        );
    }
}
export default connect(
    (state)=>({

    }),
    (dispath)=>({

    })
)(withRouter(ProjectPostContainer));

