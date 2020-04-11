import React from "react";
import profilePic from "../../images/Profile_pic.JPG";
import "font-awesome/css/font-awesome.min.css";
function Profile() {
  return (
    <div className='profileComp'>
      <img id='profilePic' src={profilePic} alt='logo' />
      <br />
      <br />
      <h1>Parth Patel</h1>
      <h5>Full Stack Developer</h5>
      <br />
      <div className='profileConnect'>
        <a id='contactMeBtn' href='#'>
          Contact Me
        </a>
        <a href='#' id='resumeBtn' style={{ marginLeft: "5px" }}>
          Download Resume
        </a>
        <br />
        <br />
        <div className='socialConnect'>
          <a id='linkedin' href='#'>
            <i className='fa fa-linkedin'></i>
          </a>
          <a id='github' href='#' style={{ marginLeft: "5px" }}>
            <i className='fa fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
