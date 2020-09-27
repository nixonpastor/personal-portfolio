import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Footer from "../Footer";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAIL_API
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contactBackground">
      <h1 className="contactHeader">Contact Me</h1>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="inputField">
            <div className="col-8 form-group mx-auto">
              <input type="text" placeholder="Your Name" name="name" />
            </div>
            <div className="inputField">
              <input
                type="text"
                placeholder="Your Email Address"
                name="email"
              />
            </div>
            <div className="inputField">
              <input type="text" placeholder="Subject" name="subject" />
            </div>
            <div className="textBox">
              <textarea
                type="text"
                placeholder="Your Message"
                name="message"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                className="btn--outline"
                value="Send Message"
              ></input>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
