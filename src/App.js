import React from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/profile/Profile";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
//import Project from "./components/projects/Project";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <div id='header'>
        <NavBar />
        <div className='container'>
          <br />
          <Profile />
        </div>
      </div>
      <div className='container'>
        <About />
        <Experience />
        {/* <Project /> */}
        <Skills />
        <Education />
      </div>
      <Contact />
    </React.Fragment>
  );
}

export default App;
