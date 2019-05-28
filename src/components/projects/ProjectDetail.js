import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";

const ProjectDetail = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">projects {id} </span>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="card-action gret lighen-4 grey-text">
          <div>Posted by </div>
          <div>2nd september, 2am</div>
        </div>
      </div>
    </div>
  );
};
/*const mapStateToProps = (state, ownProps) => {    
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return { project};
};

export default compose(
  connect(mapStateToProps),
  firebaseConnect([{ collection: "projects" }])
)*/
export default ProjectDetail;
