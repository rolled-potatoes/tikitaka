import React from 'react';
import Pagetemplate from '../components/common/PageTemplate'
import ProjectLists from '../components/projects/ProjectList'
import ListWrapper from '../components/projects/ListWrapper';

const ProjectList = () => {
    return (
        <Pagetemplate>
            <ListWrapper>
                <ProjectLists/>
            </ListWrapper>
        </Pagetemplate>
    );
};

export default ProjectList;