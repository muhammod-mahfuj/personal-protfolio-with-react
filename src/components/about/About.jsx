/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import Me from '../../asset/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderOpened} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about-content">
           <div className="about-cards">
              <article className='about-card'>
                <FaAward className='about-icon'/>
                <h5>Experience</h5>
                <small>2 Years Working</small>
              </article>

              <article className='about-card'>
                <FiUsers className='about-icon'/>
                <h5>Clients</h5>
                <small>100+ WorldWide</small>
              </article>

              <article className='about-card'>
                <VscFolderOpened className='about-icon'/>
                <h5>Projects</h5>
                <small>50+ completed</small>
              </article>
           </div>

           <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing
              tempore labore, pariatur saepe cupiditate mollitia nulla
              tempora aut atque maiores illum! Ab omnis sit corporis.
           </p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;