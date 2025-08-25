import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import { Fade } from "react-awesome-reveal";
import { ReactTyped } from "react-typed";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const leetcode = this.props.data.leetcode;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li>
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Education
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <Fade duration={1500}>
            <div className="banner-text">
              <p className="greeting">👋Hello, I'm</p>
              <h1>
                <ReactTyped
                  strings={[name, "Software Engineer"]}
                  typeSpeed={70}
                  backSpeed={70}
                  loop
                />
              </h1>
              <h3>{description}.</h3>
              <hr />
              <ul className="social">
                <a href={leetcode} className="button btn project-btn">
                  <i className="fa fa-code"></i> Leetcode
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i> Github
                </a>
              </ul>
            </div>
          </Fade>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
