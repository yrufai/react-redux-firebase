import React from "react";

const ProjectDetail = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Projects Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aut veritatis consequatur cum placeat quos, enim eaque odit! Omnis,
            est. Molestias iusto suscipit commodi optio eius nemo provident quis
            distinctio.
          </p>
        </div>
        <div className="card-action gret lighen-4 grey-text">
          <div>Posted by Mahatma Ghandhi</div>
          <div>2nd september, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
