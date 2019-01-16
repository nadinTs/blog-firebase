import React from 'react';


const ProjectDetails = (props) => {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title: {props.match.params.id}</span>
                    <p>How to Deploy Angular 6, React, VUE, any HTML/JS App on Firebase hosting</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Nadya</div>
                    <div>2019 16 January, 2am</div>
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails;
