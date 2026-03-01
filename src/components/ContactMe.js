import React from 'react';

const ContactMe = ({ resumeData }) => {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me on <a href={resumeData.linkedinId} target="_blank" rel="noopener noreferrer"> LinkedIn</a> or send me an email at <a href={resumeData.email} target="_blank" rel="noopener noreferrer">benhcalvert@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
