import React from "react";
import { Progress } from "reactstrap";
function Skills() {
  return (
    <div className='skillComp' id='skills'>
      <h1 className='display-6' style={{ textAlign: "center" }}>
        Skills
      </h1>
      <h5>Programming Languages</h5>
      <div className='skills1 shadow'>
        <div className='skillSet1'>
          JavaScript/Typescript
          <Progress value='90' />
          Core Java
          <Progress value='70' />
        </div>
        <div className='skillSet2'>
          HTML5/CSS/SASS
          <Progress value='90' />
          PHP/Python
          <Progress value='30' />
        </div>
      </div>
      <br />
      <br />
      <h5>Frameworks,Platforms and Libraries</h5>
      <div className='skills2 shadow'>
        <div className='skillSet1'>
          Node
          <Progress value='85' />
          Express
          <Progress value='85' />
          Meteor/Ionic
          <Progress value='40' />
        </div>
        <div className='skillSet2'>
          React
          <Progress value='90' />
          Angular4+
          <Progress value='75' />
          Bootstrap/Reactstrap/Material UI
          <Progress value='80' />
        </div>
      </div>
      <br />
      <br />
      <h5>Tools and Techniques</h5>
      <div className='skills3 shadow'>
        <div className='skillSet1'>
          JIRA/Bitbucket Server/Git
          <Progress value='85' />
          Agile/Scrum/Consulting
          <Progress value='70' />
        </div>
        <div className='skillSet2'>
          TDD/CICD
          <Progress value='78' />
          Jenkins/Spinnaker
          <Progress value='35' />
        </div>
      </div>
    </div>
  );
}

export default Skills;
