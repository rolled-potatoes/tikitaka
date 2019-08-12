
import React from 'react'
import ProjectPost from 'components/projects/ProjectPost'
import * as ProjectPostActions from 'store/modules/ProjectPost.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class ProjectPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount(){

  }

  render() {
    return (
      <div className="ProjectPost-container">
      </div>
    );
  }
}

export default ProjectPost
