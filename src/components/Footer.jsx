import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3><span>EMS</span>Company</h3>
              <p>EMS Company provides comprehensive solutions for managing employee information. Our goal is to help organizations 
                achieve efficiency and improve productivity through our innovative platform.</p>
              <div className="footer-icons">
                <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
                <FontAwesomeIcon icon={faTwitter} className="fa-icon" />
                <FontAwesomeIcon icon={faInstagram} className="fa-icon" />
                <FontAwesomeIcon icon={faLinkedinIn} className="fa-icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                <Link
                  className="nav-link"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </Link>
                </li>
                <li className="nav-item">
                <Link
                  className="nav-link"
                  to="story"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  Story
                </Link>
                </li>
                <li className="nav-item">
                <Link
                  className="nav-link"
                  to="support"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  Support
                </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us </h5>
              <p><FontAwesomeIcon icon={faPhoneVolume} className="fa-icon" /> +94 789867521</p>
              <p><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> sew@gmail.com</p>
              <p><FontAwesomeIcon icon={faPaperPlane} className="fa-icon" /> Embilipitiya, Sri Lanka.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Last-footer'>
        <p>Design By EMS Company</p>
      </div>
    </>
  );
};

export default Footer;
