import React from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
function Experience() {
  return (
    <div className='experienceComp' id='experience'>
      <h1 className='display-6' style={{ textAlign: "center" }}>
        Work Experience
      </h1>
      <ListGroup>
        <div className='timeline'>
          <div className='container'>
            <div className='content'>
              <ListGroupItem>
                <ListGroupItemHeading>Software Developer</ListGroupItemHeading>
                <p style={{ float: "right" }}>Mar,2020 - Apr,2020</p>
                <p>Veriday Inc, Mississauga, Ontario</p>
                <p className='projectDesc' style={{ fontWeight: "500" }}>
                  Liferay Upgradation from 6.2 to DXP
                </p>
                <ul>
                  <li>Assisted in upgrading portlets and hooks using JSP</li>{" "}
                  <li>
                    {" "}
                    Built customized web-responsive themes for liferay portal
                    using FTL,SASS, ES6
                  </li>
                  <li>Trained in liferay</li>
                </ul>
                <ul className='techStack row'>
                  <li>ES6</li>
                  <li>Java</li>
                  <li>JSP</li>
                  <li>FreeMarker</li>
                  <li>SASS</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JIRA</li>
                  <li>Kanban</li>
                </ul>
              </ListGroupItem>
            </div>
          </div>
        </div>
        <div className='timeline'>
          <div className='container'>
            <div className='content'>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Full Stack Developer
                </ListGroupItemHeading>
                <p style={{ float: "right" }}>May,2018 - Jan,2020</p>
                <p>Infosys Ltd, Hyderabad, India</p>
                <p className='projectDesc' style={{ fontWeight: "500" }}>
                  eCommerce ordering platform for North American Food
                  Distributor
                </p>
                <ul>
                  <li>
                    Applied PassportJs middleware for user authentication using
                    Google O-Auth.
                  </li>{" "}
                  <li>
                    {" "}
                    Developed dark theme using SASS and CSS only for smaller
                    devices(mobiles and tablets)
                  </li>
                  <li>Exposure to Heroku configuration and deployment</li>
                </ul>
                <ul className='techStack row'>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>ES6</li>
                  <li>Jest</li>
                  <li>Enzyme</li>
                  <li>Mocha</li>
                  <li>Git</li>
                  <li>Heroku</li>
                  <li>JIRA</li>
                </ul>
              </ListGroupItem>
            </div>
          </div>
        </div>
        <div className='timeline'>
          <div className='container'>
            <div className='content'>
              <ListGroupItem>
                <ListGroupItemHeading>
                  Full Stack Developer
                </ListGroupItemHeading>
                <p style={{ float: "right" }}>Feb,2017 - Apr,2018</p>
                <p>Infosys Ltd, Hyderabad, India</p>
                <p className='projectDesc' style={{ fontWeight: "500" }}>
                  Angular 4 Upgrade and Enhancement for CRM
                </p>
                <ul>
                  <li>
                    Built Angular services to generate reports of sales, service
                    request, monthly ticket analysis etc
                  </li>{" "}
                  <li>
                    {" "}
                    Enhanced Rest APIs for Account, Service Request, Product and
                    Opportunities module in CRM.
                  </li>
                  <li>Developed global themes for the application.</li>
                </ul>
                <ul className='techStack row'>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Angular4+</li>
                  <li>ES6</li>
                  <li>Jest</li>
                  <li>Karma</li>
                  <li>Enzyme</li>
                  <li>Github</li>
                  <li>JIRA</li>
                </ul>
              </ListGroupItem>
            </div>
          </div>
        </div>
        <div className='timeline'>
          <div className='container'>
            <div className='content'>
              <ListGroupItem>
                <ListGroupItemHeading>PLSQL Developer</ListGroupItemHeading>
                <p style={{ float: "right" }}>May,2016 - Jan,2017</p>
                <p>Infosys Ltd, Hyderabad, India</p>
                <p className='projectDesc' style={{ fontWeight: "500" }}>
                  Loan Origination System Migration
                </p>
                <ul>
                  <li>
                    Developed/Enhanced application screens(Customer on Boarding,
                    Account Contract details etc) using Oracle Forms Builder
                  </li>{" "}
                  <li>
                    {" "}
                    Created database artifacts like Packages, Procedures,
                    Triggers to integrate LOS with TIBCO(ESB) and Cassiopae
                  </li>
                  <li>
                    Performed Unit tests, System Integration Tests, Regression
                    Tests, Daily Sanity checks with documentation
                  </li>
                </ul>
                <ul className='techStack row'>
                  <li>PLSQL</li>
                  <li>Scripting</li>
                  <li>Oracle Forms</li>
                  <li>HPQC</li>
                  <li>SoapUI</li>
                </ul>
              </ListGroupItem>
            </div>
          </div>
        </div>
      </ListGroup>
    </div>
  );
}

export default Experience;
