import React from 'react';
import Pagetemplate from '../components/common/PageTemplate'

import ProjectPostContainer from 'containers/projects/ProjectPostContainer.js'
const PostPage = () => {
    return (
        <Pagetemplate>
            <ProjectPostContainer/>
        </Pagetemplate>
    );
};

export default PostPage;