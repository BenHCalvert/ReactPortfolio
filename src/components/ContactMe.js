import React from 'react';

const ContactMe = ({ resumeData }) => {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="twelve columns">
          <h2 className="contact-heading">Get In Touch</h2>
        </div>
      </div>
      <div className="row">
        <div className="four columns contact-card">
          <i className="fa fa-envelope contact-card-icon"></i>
          <h4>Email</h4>
          <a href={resumeData.email}>benhcalvert@gmail.com</a>
        </div>
        <div className="four columns contact-card">
          <i className="fa fa-linkedin contact-card-icon"></i>
          <h4>LinkedIn</h4>
          <a href={resumeData.linkedinId} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
        </div>
        <div className="four columns contact-card">
          <i className="fa fa-map-marker contact-card-icon"></i>
          <h4>Location</h4>
          <p>{resumeData.address}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
