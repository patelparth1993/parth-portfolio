import React from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
function Experience() {
  return (
    <div className='experienceComp'>
      <h1 className='display-6' style={{ textAlign: "center" }}>
        Work Experience
      </h1>
      <ListGroup>
        <ListGroupItem>
          <ListGroupItemHeading>Software Developer</ListGroupItemHeading>
          <p>Veriday Inc, Mississauga, Ontario</p>
          <p className='projectDesc'>Project Description</p>
          <ListGroupItemText>Job responsibilities</ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
            eget risus varius blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Experience;
