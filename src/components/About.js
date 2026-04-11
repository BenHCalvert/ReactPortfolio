import React from 'react';

const About = ({ resumeData }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={`${process.env.PUBLIC_URL}/images/profilepic.jpg`} alt={resumeData.name} />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{resumeData.name}</span>
                <br />
                <span>{resumeData.address}</span>
                <br />
                <span>{resumeData.website}</span>
              </p>
            </div>
            {resumeData.resumeDownload && (
              <div className="columns download">
                <p>
                  <a href={`${process.env.PUBLIC_URL}/${resumeData.resumeDownload}`} className="button" download>
                    <i className="fa fa-download"></i> Download Resume
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
