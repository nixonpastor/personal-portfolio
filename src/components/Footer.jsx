import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>GET IN TOUCH</h2>
            <section className="social-media">
              <div className="social-media-wrap">
                <div className="footer-logo">
                  <div className="social-icons">
                    <Link
                      className="social-icon-link github"
                      to="//github.com/nixonpastor"
                      target="_blank"
                      aria-label="Github"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                    <Link
                      className="social-icon-link linkedin"
                      to="//linkedin.com/in/nixon-pastor-guzman/"
                      target="_blank"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                    <a
                      className="social-icon-link email"
                      href="mailto:nixonpastorguzman@gmail.com"
                      aria-label="Email"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <small className="website-rights">Nixon Pastor © {year}</small>
      </div>
    </div>
  );
}

export default Footer;
