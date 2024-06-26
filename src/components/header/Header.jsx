import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../asset/me.jpg';
import HeaderSocial from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hi I'm</h5>
        <h1>Mahfujur Rahman</h1>
        <h5 className="text-light">FronEnd Developer</h5>
        <CTA />
        <HeaderSocial/>
        
        <a href="#contact" className="scroll_down">Scroll Down</a>
        
        <div className="me">
           <img src={ME} alt="me" />
        </div>


      </div>
    </header>
  )
}

export default Header