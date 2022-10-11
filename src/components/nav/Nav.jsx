/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {AiOutlineUser} from 'react-icons/ai';
import {BsBookmarkFill} from 'react-icons/bs';
import {RiServiceFill} from 'react-icons/ri';
import {TbMassage} from 'react-icons/tb';
import { useState } from 'react';

const Nav = () => {
  const [navactive , setnavactive] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setnavactive('#')} className={navactive === "#" ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={() => setnavactive('#about')} className={navactive === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setnavactive('#experience')} className={navactive === '#experience' ? 'active' : ''}><BsBookmarkFill/></a>
      <a href="#services" onClick={() => setnavactive('#services')} className={navactive === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact" onClick={() => setnavactive('#contact')} className={navactive === '#contact' ? 'active' : ''}><TbMassage/></a>
    </nav>
  )
}

export default Nav