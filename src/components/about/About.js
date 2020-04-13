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
          During my experience as a full stack developer for around 3 years, my
          front-end to back-end tasks involvement ratio was 3:2. I have gained
          decent knowledge in popular front-end frameworks/libraries like
          React/Angular during this period. Having had the opportunities of
          developing server with JavaScript/TypeScript using Node+Express, has
          made me competent in back-end as well, right from planning till
          unit/E2E testing.
          <br />
          <br />I have always been a part of agile delivered project, hence
          activities like daily stand ups, sprints, having TDD approach etc come
          at ease to me.
        </p>
      </Jumbotron>
    </div>
  );
}

export default About;
