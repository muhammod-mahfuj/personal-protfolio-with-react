import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials