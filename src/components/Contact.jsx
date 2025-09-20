import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact() {
  const [msg, setMsg] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setMsg('Message sent successfully!');
    setTimeout(() => setMsg(''), 5000);
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fas fa-paper-plane"></i> tejaswinih9@gmail.com</p>
            <p><i className="fas fa-phone"></i> 9353853129</p>
            <div className="social-icons">
              <a href="https://github.com/TejaswiniH123/"><i className="fab fa-github"></i></a>
              <a href="https://www.instagram.com/htejaswinii/"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/tejaswini-h/"><i className="fab fa-linkedin"></i></a>
            </div>
            <a href="https://drive.google.com/file/d/1kiGZog_qI8bAjs7t9uyv60mfPgELpKpF/view?usp=drivesdk" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
