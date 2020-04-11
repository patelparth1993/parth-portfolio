import React from "react";
import { Progress } from "reactstrap";
function Skills() {
  return (
    <div className='skillComp'>
      <h1 className='display-6' style={{ textAlign: "center" }}>
        Skills
      </h1>
      <h5>Programming Languages</h5>
      <div className='skills1 shadow'>
        <div className='skillSet1'>
          JavaScript ES6
          <Progress value='90' />
          React
          <Progress value='90' />
          Node
          <Progress value='90' />
        </div>
        <div className='skillSet2'>
          JavaSt ES6
          <Progress value='90' />
          React
          <Progress value='90' />
          Node
          <Progress value='90' />
        </div>
      </div>
      <br />
      <h5>Frameworks,Platforms and Libraries</h5>
      <div className='skills2 shadow'>
        <div className='skillSet1'>
          JavaScript ES6
          <Progress value='90' />
          React
          <Progress value='90' />
          Node
          <Progress value='90' />
        </div>
        <div className='skillSet2'>
          JavaSt ES6
          <Progress value='90' />
          React
          <Progress value='90' />
          Node
          <Progress value='90' />
        </div>
      </div>
      <br />
      <h5>Tools and Techniques</h5>
      <div className='skills3 shadow'>
        <div className='skillSet1'>
          JavaScript ES6
          <Progress value='90' />
          React
          <Progress value='90' />
          Node
          <Progress value='90' />
        </div>
        <div className='skillSet2'>
          JavaSt ES6
          <Progress value='90' />
          React
          <Progress value='90' />
          Node
          <Progress value='90' />
        </div>
      </div>
    </div>
  );
}

export default Skills;
