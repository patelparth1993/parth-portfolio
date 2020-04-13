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
        <a id='contactMeBtn' href='#contactMe'>
          Contact Me
        </a>
        <a
          rel='noopener noreferrer'
          href='https://drive.google.com/open?id=1vjLvcJttlj5D0L0OaMdP55T-eJfnUGkF'
          id='resumeBtn'
          target='_blank'
          style={{ marginLeft: "5px" }}
        >
          Resume
        </a>
        <br />
        <br />
        <div className='socialConnect'>
          <a
            id='linkedin'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/parth-patel-b67a98bb/'
            target='_blank'
          >
            <i className='fa fa-linkedin'></i>
          </a>
          <a
            id='github'
            rel='noopener noreferrer'
            href='https://github.com/patelparth1993'
            target='_blank'
            style={{ marginLeft: "5px" }}
          >
            <i className='fa fa-github'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
