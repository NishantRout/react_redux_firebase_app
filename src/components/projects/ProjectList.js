import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
    const projList = projects ? (
        projects.map(project => {
            return(
                <ProjectSummary project={project} key={project.id} />
            )
        })
    ) : (
        <div className="project-list section" >No posts yet !!</div>
    );

    return(
        <div className="project-list section">
            {projList}
        </div>
    )
}

export default ProjectList;