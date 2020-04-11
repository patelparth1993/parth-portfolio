import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function Project() {
  return (
    <div className='projectComp'>
      <h1 className='display-6' style={{ textAlign: "center" }}>
        Projects
      </h1>
      <div className='projectDisplay'>
        <Card>
          <CardHeader tag='h3'>Header</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>

        <Card>
          <CardHeader tag='h3'>Featured</CardHeader>
          <CardBody>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </CardBody>
          <CardFooter className='text-muted'>Footer</CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Project;
