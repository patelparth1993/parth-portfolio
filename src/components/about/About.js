import React from "react";
import { Jumbotron } from "reactstrap";
function About() {
  return (
    <div className='aboutComp shadow'>
      <Jumbotron>
        <h1 className='display-6' style={{ textAlign: "center" }}>
          About
        </h1>
        <p>
          My experience in both as a Software Developer in a fast growing
          start-up in India, as a Web Developer at Associated Student Inc.,
          CSULB in Long Beach, CA and as a Full Stack Engineer at Kin+Carta
          (Solstice) has given me an industrial experience and made me capable
          enough to work beyond traditional company as proficient and passionate
          Software/ Full Stack Developer. <br />
          <br />I completed my Masters in Computer Science at California State
          University, Long Beach where I studied many challenging courses like
          Advanced Analysis of Algorithms, Advanced Software Engineering,
          Advanced Programming Languages, Information Security, Software
          Architecture, Advanced Database Administrator etc. <br />
          <br />I am currently working as a XP Full stack engineer at Kin+Carta
          (Solstice Consulting). As a part of a cloud development team,
          currently I am working on a eCommerce ordering platform for North
          American Food Distributor which gained me experience in Industry
          leading latest tools and technologies.
        </p>
      </Jumbotron>
    </div>
  );
}

export default About;
