import React, { Component } from "react";
import ReactGA from "react-ga";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import About from "./Components/About.jsx";
import Resume from "./Components/Resume.jsx";
import Project from "./Components/Project.jsx";
// Resume-Data :
import ResumeData from "./Context/Data.js";
import { HashLoader } from "react-spinners";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      loading: false,
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  componentDidMount() {
    this.setState({ resumeData: ResumeData });
    this.setLoading(true);
    setTimeout(() => {
      this.setLoading(false);
    }, 4000);
  }

  setLoading = (value) => {
    this.setState({ loading: value });
  };
  // Random Color Maker :
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <div className="loader-container">
            <div className="loader">
              <HashLoader
                color={this.getRandomColor()}
                loading={this.state.loading}
                size={75}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>
        ) : (
          <div>
            <Header data={this.state.resumeData.main} />
            <About data={this.state.resumeData.main} />
            <Resume data={this.state.resumeData.resume} />
            <Project data={this.state.resumeData.portfolio} />
            <Footer data={this.state.resumeData.main} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
