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
                    {item.projurl ? (
                      <a href={item.projurl} target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/${item.imgurl}`} className="item-img" alt={item.name} />
                      </a>
                    ) : (
                      <img src={`${process.env.PUBLIC_URL}/${item.imgurl}`} className="item-img" alt={item.name} />
                    )}
                    <div className="overlay">
                      <div className="portfolio-item-meta" style={{ display: 'block' }}>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                      </div>
                      {item.repo && <p><a href={item.repo} target="_blank" rel="noopener noreferrer">Github Repository</a></p>}
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
