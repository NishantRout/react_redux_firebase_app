import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
    const projList = projects ? (
        projects.map(project => {
            return(
                <Link to={'/project/' + project.id} key={project.id}>
                    <ProjectSummary project={project} />
                </Link>
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