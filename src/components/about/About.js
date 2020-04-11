import React from "react";
import { Jumbotron } from "reactstrap";
function About() {
  return (
    <div className='aboutComp' id='about'>
      <Jumbotron className='shadow'>
        <h1 className='display-6' style={{ textAlign: "center" }}>
          About
        </h1>
        <p>
          My experience in both as a Full Stack Developer at Infosys, one of the
          best IT consulting firms in India, and as a Software Developer at
          Veriday Inc, Mississauga has given me an industrial exposure and made
          me capable enough to work beyond traditional paradigm as a proficient
          and passionate Software/ Full Stack Developer.
          <br />
          <br />
          <br />
          <br />I am actively seeking new opportunities in software development
        </p>
      </Jumbotron>
    </div>
  );
}

export default About;
