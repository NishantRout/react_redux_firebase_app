import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project Title - {id}</span>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure rerum et exercitationem doloribus eius sed est, temporibus libero, praesentium voluptatibus culpa, fugiat dolor aspernatur repellendus nam dignissimos! Est, ipsam odio?</p>   
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by Perfect Shades</div>
                        <div>2nd Sept, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
