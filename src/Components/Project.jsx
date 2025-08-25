import React, { Component } from "react";
import Fade from "react-awesome-reveal";

let id = 0;
class Project extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <a style={{ textDecoration: "none" }} href={projects.url}>
            <div className="item-wrap">
              <img alt={projects.category} src={projectImage} />
              <span className="session">{projects.session}</span>
              <div className="item-content">
                <p>{projects.title}</p>
                <div className="tags">
                  {projects.tags.map((tag) => {
                    return <span key={tag}>{"#" + tag}</span>;
                  })}
                </div>
              </div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out My Projects</h1>
              <div id="portfolio-wrapper">{projects}</div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Project;
