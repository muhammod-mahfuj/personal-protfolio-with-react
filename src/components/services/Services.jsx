import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        {/* web browsing */}

            <article className="service">
              <div className="service-head">
                  <h3>Web Browsing</h3>
              </div>
              <ul className="service-list">
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
              </ul>
            </article>

        {/* web design */}

            <article className="service">
              <div className="service-head">
                  <h3>Web Design</h3>
              </div>
              <ul className="service-list">
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
              </ul>
            </article>

        {/* Video Editing */}

            <article className="service">
              <div className="service-head">
                  <h3>Video Editing</h3>
              </div>
              <ul className="service-list">
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
                <li>
                    <BiCheck className='service-list-icon'/>
                    <p>Lorem ipsum dolor sit amet consectetur. </p>
                </li>
              </ul>
            </article>
      </div>
    </section>
  )
}

export default Services