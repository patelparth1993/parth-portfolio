import React from "react";
import "font-awesome/css/font-awesome.min.css";
function Contact() {
  return (
    <div className='contactComp'>
      <div className='card mb-0'>
        <div className='h1 text-center title'>Contact Me</div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card-body'>
              <div className='container text-center'>
                <a
                  className='cc-linkedin btn btn-link'
                  href='https://www.linkedin.com/in/parth-patel-b67a98bb/'
                  target='_blank'
                >
                  <i aria-hidden='true' className='fa fa-linkedin fa-2x '></i>
                </a>
                <a
                  className='cc-github btn btn-link '
                  href='https://github.com/patelparth1993'
                  target='_blank'
                >
                  <i aria-hidden='true' className='fa fa-github fa-2x '></i>
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "16px",
                }}
              >
                <i
                  aria-hidden='true'
                  className='fa fa-globe  fa-2x '
                  style={{ marginRight: "8px" }}
                ></i>
                <b> http://patelparth.heroku.com/ </b>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <p className='mb-0'>
                <strong>Phone</strong>
              </p>
              <p className='pb-2'>+1 (647)-787-1899</p>
              <p className='mb-0'>
                <strong>Email</strong>
              </p>
              <p>patelparth3555@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
