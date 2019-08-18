import React from 'react';
import Pagetemplate from '../components/common/PageTemplate'
import ListWrapper from '../components/projects/ListWrapper';
import ProjectListContainer from 'containers/projects/ProjectListContainer.js'
const ProjectList = () => {
    return (
        <Pagetemplate>
            <ListWrapper>
                <ProjectListContainer/>
            </ListWrapper>
        </Pagetemplate>
    );
};

export default ProjectList;