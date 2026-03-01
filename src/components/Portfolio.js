import React from 'react';

const Portfolio = ({ resumeData }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here is a selection of my work:</h1>
          <div id="portfolio-wrapper" className="bgrid-halves cf">
            {
              resumeData.portfolio && resumeData.portfolio.map((item) => (
                <div key={item.name} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={item.projurl} target="_blank" rel="noopener noreferrer">
                      <img src={`${process.env.PUBLIC_URL}/${item.imgurl}`} className="item-img" alt={item.name} />
                    </a>
                    <div className="overlay">
                      <a href={item.projurl} target="_blank" rel="noopener noreferrer" className="portfolio-item-meta" style={{ display: 'block' }}>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </a>
                      <p><a href={item.repo} target="_blank" rel="noopener noreferrer">Github Repository</a></p>
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
