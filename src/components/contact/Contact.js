import React from "react";
import "font-awesome/css/font-awesome.min.css";
function Contact() {
  return (
    <React.Fragment>
      <div className='contactComp ' id='contactMe'>
        <div className='card mb-0'>
          <div className='h1 text-center title'>Contact Me</div>
          <div className='row'>
            <div className='card-body'>
              <div>
                <i
                  aria-hidden='true'
                  className='fa fa-globe  fa-2x '
                  style={{ marginRight: "8px" }}
                ></i>
                <b> https://parth-patel-portfolio.herokuapp.com/ </b>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='card-body' style={{}}>
              <strong>Phone:&nbsp;</strong>
              +1 (647)-787-1899 &nbsp;
              <strong>Email:&nbsp;</strong>
              patelparth3555@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className='media-links  text-center'>
        <a
          className='cc-linkedin btn btn-link'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/parth-patel-b67a98bb/'
          target='_blank'
        >
          <i aria-hidden='true' className='fa fa-linkedin fa-2x '></i>
        </a>
        <a
          className='cc-github btn btn-link'
          rel='noopener noreferrer'
          href='https://github.com/patelparth1993'
          target='_blank'
        >
          <i aria-hidden='true' className='fa fa-github fa-2x '></i>
        </a>
      </div>
    </React.Fragment>
  );
}

export default Contact;
