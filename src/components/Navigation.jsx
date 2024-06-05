import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';

const Navigation = () => {
  const navigate=useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleLogin = () => {
    navigate('/loginform');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const scrollToWithOffset = (id, offset) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: offset
    });
  };

  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{ fontFamily: 'Times New Roman, Times, serif', backgroundColor: '#43033c', position: 'fixed', top: '0', width: '100%', zIndex: 1000 }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <RouterLink to="/" className="navbar-brand" style={{ marginLeft: '20px' }}>
              EMS Company
            </RouterLink>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <ScrollLink to="home" className="nav-link" spy={true} smooth={true} duration={200} offset={-50}>Home <span className="sr-only">(current)</span></ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink to="story" className="nav-link" spy={true} smooth={true} duration={200} offset={-80}>Story</ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink to="support" className="nav-link" spy={true} smooth={true} duration={200} offset={-80}>Support</ScrollLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                style={{
                  color: 'white',
                  marginRight: '20px',
                  backgroundColor: isHovered ? '#43033c' : 'transparent',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
