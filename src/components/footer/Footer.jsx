/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import {ImFacebook2} from 'react-icons/im';
import {RiInstagramFill} from 'react-icons/ri';
import {FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
          <div className='footer-logo' >
            <a href="#">IT'S MAHFUJ</a>
          </div>

          <ul className='section-links'>
            <li><a href="#">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#protfolio">PROTFOLIO</a></li>
            <li><a href="#testimonials">TESTIMONIALS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">< ImFacebook2/></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">< RiInstagramFill/></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" >< FaTwitter/></a>
          </div>
      </div>
      
      <div className="footer-copyright" >
         <small >&copy; It's MaHFuJ.  All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer;