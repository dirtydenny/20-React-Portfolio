import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Projects({ projects }) {
  return (
    <div className="row">
      {/* Here we map over each grocery item and return a new array of `li` elements that contains the grocery name */}
      {/* When using map you must provide a unique key attribute to each item. Ours is `item.id` */}
      {projects.map((item) => (
        <div className="col-md-4 col-sm-12" key={item.id}>
          <div className="card">
            <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <a href="{item.deployed}" className="btn btn-primary">Deployed at</a>
                <a href="{item.repo}" className="btn btn-primary">Github Repo</a>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
