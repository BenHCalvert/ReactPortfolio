import React, { useEffect } from 'react';

const Header = ({ resumeData }) => {
  // Highlight the active nav section as the user scrolls
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.querySelectorAll('#nav-wrap li').forEach(li => li.classList.remove('current'));
            const activeLink = document.querySelector(`#nav-wrap a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.closest('li').classList.add('current');
          }
        });
      },
      { rootMargin: '-35% 0px -65% 0px', threshold: 0 }
    );
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Fade nav out mid-scroll through hero, add opaque bg once past hero
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const nav = document.getElementById('nav-wrap');
      if (!header || !nav) return;
      const h = header.offsetHeight;
      const y = window.scrollY;
      if (y > h * 0.2 && y < h && window.innerWidth > 768) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
        if (y >= h) {
          nav.classList.add('opaque');
        } else {
          nav.classList.remove('opaque');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#nav-wrap" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{resumeData.name}</h1>
            <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>I am a {resumeData.role}.{resumeData.roleDescription ? ` ${resumeData.roleDescription}` : ''}</h3>
            <hr />
            <ul className="social">
              {
                resumeData.socialLinks && resumeData.socialLinks.map(item => (
                  <li key={item.name}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;
