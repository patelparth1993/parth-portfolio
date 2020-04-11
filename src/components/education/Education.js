import React from "react";

function Education() {
  return (
    <div className='educationComp' id='education'>
      <h1 className='display-6' style={{ textAlign: "center" }}>
        Education
      </h1>
      <div className='card'>
        <div className='row'>
          <div className='col-md-3 '>
            <div className='card-body cc-education-header'>
              <p> 2012 - 2016</p>
              <div className='h5'>Bachelors</div>
            </div>
          </div>
          <div className='col-md-9 '>
            <div className='card-body'>
              <div className='h5'>Instrumentation And Controls Engineering</div>
              <h4 className='category'>Dharmsinh Desai University </h4>
              <ul>
                <li>
                  <b>8.6 CGPA</b>
                </li>
                <li>
                  Completed successfully B.Tech in IC with 8.6 CGPA with getting
                  Straight AA(10) in final year project in which I developed Web
                  Based Smart Home{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
