import React from 'react';

const Resume = ({ resumeData }) => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          {
            resumeData.education && resumeData.education.map((item, index) => (
              <div key={`${item.UniversityName}-${item.YearOfPassing}-${index}`} className="row item">
                <div className="twelve columns">
                  <h3>{item.UniversityName}</h3>
                  <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {
            resumeData.work && resumeData.work.map((item, index) => (
              <div key={`${item.CompanyName}-${item.YearOfStarting}-${index}`} className="row item">
                <div className="twelve columns">
                  <h3>{item.CompanyName}</h3>
                  <p className="info">
                    {item.specialization}
                    <span>&bull;</span> <em className="date">{item.MonthOfStarting} {item.YearOfStarting} - {item.YearOfLeaving ? `${item.MonthOfLeaving} ${item.YearOfLeaving}` : 'Present'}</em>
                  </p>
                  {Array.isArray(item.Achievements) ? (
                    <ul className="disc">
                      {item.Achievements.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  ) : (
                    <p>{item.Achievements}</p>
                  )}
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>{resumeData.skillsDescription || 'Skills'}</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="skill-tags">
            {
              resumeData.skills && resumeData.skills.map((item) => (
                <span key={item.skillname} className="skill-tag">{item.skillname}</span>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
