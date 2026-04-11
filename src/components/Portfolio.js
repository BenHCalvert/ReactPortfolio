import React from 'react';

const Portfolio = ({ resumeData }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>What I've Built</h1>
          <div id="portfolio-wrapper" className="bgrid-halves cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item) => (
                <div key={item.name} className="columns portfolio-item">
                  <div className="item-wrap">
                    <div className="portfolio-card-hero" style={{ background: item.gradient }}>
                      <span className="portfolio-card-icon">{item.icon}</span>
                    </div>
                    <div className="portfolio-card-text">
                      <h5>{item.name}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
