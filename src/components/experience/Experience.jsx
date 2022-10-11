import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experiences</h2>

      <div className="container experience_container">
          <div className="experience-frontend">
                <h3>FrontEnd Languages</h3>
             <div className="experience-content">
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermated</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>Javascript</h4>
                    <small className='text-light'>Begainner</small>
                  </div>
                </article>
             </div>
          </div>

          <div className="experience-backend">
                <h3>FrameWork & Library</h3>
             <div className="experience-content">
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>React</h4>
                    <small className='text-light'>Experienced</small> 
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div>
                    <h4>Jquery</h4>
                    <small className='text-light'>Intermated</small>
                  </div>
                </article>
                <article className='experience-details'>
                  <BsPatchCheckFill className='experience-details-icon'/>
                  <div> 
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Begainner</small>
                  </div>
                </article>

             </div>
          </div>
      </div>
    </section>
  )
}

export default Experience