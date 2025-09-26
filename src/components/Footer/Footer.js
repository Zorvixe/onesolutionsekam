import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {


  return (
    <>
      <footer id="footer" className="footer accent-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <Link to="/" className="logo d-flex align-items-center me-auto">
                <img
                  src="/assets/img/ONE_SOLUTIONS_NEW_LOGO.png"
                  alt="logo"
                  style={{ borderRadius: "6px", objectFit: "contain" }}
                />
              </Link>
              <p>
                At <strong>One Solutions</strong>, we provide innovative web,
                digital, and software solutions tailored to help businesses grow
                and succeed in today’s competitive digital world.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="https://www.instagram.com/onesolutionsekam/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100015794794387" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/one-solutions-ekam-ose-131947329" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/@OneSolutionsEkam" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>


              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/terms">Terms of service</Link></li>
                <li><Link to="/privacy">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Our Courses</h4>
              <ul>
                <li><Link to="/fullstackdevelopment">Full Stack Development</Link></li>
                <li><Link to="/digital_marketing">Digital Marketing</Link></li>
                <li><Link to="/data_analyst">Data Analyst</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>Hyderabad, Telangana, Banglore, India</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 83285 90444</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>onesolutionsekam@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} All Rights Reserved. Designed, Developed & Maintained by
            <a href="https://www.zorvixetechnologies.com" target="_blank" rel="noopener noreferrer"> | | zorvixetechnologies</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
