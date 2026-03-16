import React, { useState } from "react";
import "./Contact.css";
import API from "../../data/axios";

const Contact = () => {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    msg: ""
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("api/v1/contact/", contact)
      .then((res) => {
        alert("Message sent successfully!");

        setContact({
          name: "",
          email: "",
          msg: ""
        });

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contact-container">

      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Have questions, suggestions, or feedback? We'd love to hear from you.
      </p>

      <div className="contact-layout">

        {/* Contact Info */}
        <div className="contact-info">

          <h2>Get in Touch</h2>

          <p>
            If you have any inquiries about our blog, collaboration ideas,
            or just want to say hello, feel free to contact us using the
            form or the information below.
          </p>

          <div className="info-item">
            <strong>Email:</strong> contact@blogsite.com
          </div>

          <div className="info-item">
            <strong>Phone:</strong> +91 9876543210
          </div>

          <div className="info-item">
            <strong>Location:</strong> Kerala, India
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form">

          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={contact.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={contact.email}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="msg"
              placeholder="Your Message"
              required
              value={contact.msg}
              onChange={handleChange}
            />

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;