import React, {useEffect} from 'react';

const Contact = () => {
  useEffect(() => {
      document.title = "Contact Us| One Solutions";
    }, []);
  return (
    <div>
      {/* Page Title */}
      <div className="page-title light-background">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Contact</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* End Page Title */}

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="contact-main-wrapper">
            
            {/* Map */}
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="contact-content">
              <div className="contact-cards-container" data-aos="fade-up" data-aos-delay="300">
                
                <div className="contact-card">
                  <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>8721 Broadway Avenue, New York, NY 10023</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="icon-box"><i className="bi bi-envelope"></i></div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@examplecompany.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="icon-box"><i className="bi bi-telephone"></i></div>
                  <div className="contact-text">
                    <h4>Call</h4>
                    <p>+1 (212) 555-7890</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="icon-box"><i className="bi bi-clock"></i></div>
                  <div className="contact-text">
                    <h4>Open Hours</h4>
                    <p>Monday-Friday: 9AM - 6PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-container" data-aos="fade-up" data-aos-delay="400">
                <h3>Get in Touch</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua consectetur adipiscing.
                </p>

                <form className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>

                  <div className="form-submit mt-3">
                    <button type="submit">Send Message</button>
                    <div className="social-links">
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
};

export default Contact;
