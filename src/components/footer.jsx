import React from 'react';
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="/">About</a>
          <a href="/">Our Location</a>
          <a href="/">FAQs</a>
          <a href="/">News</a>
          <a href="/">Careers</a>
          <a href="/">Contact Us</a>
        </div>
        <p className='footer-text'>Design by Luca</p>
      </footer>
    </>
  );
}
