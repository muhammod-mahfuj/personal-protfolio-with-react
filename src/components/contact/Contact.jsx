import React from 'react';
import './contact.css';
import {MdMarkEmailRead} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
// import { useRef } from 'react';
// import emailjs from "@emailjs-com";

const Contact = () => {
  // const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_y7d5rff', 'template_2r2yp6l', form.current, 'e2YgpVGq25iUX04go')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact-options">
          <article className='contact-option'>
            <MdMarkEmailRead className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>mdmahfujurrahman2580@</h5>
            <a href="mailto:mdmahfujurrahman2580@gmail.com" target="_blank" rel="noreferrer">Send Massage</a>
          </article>
          <article className='contact-option'>
            <BsMessenger className='contact-option-icon' />
            <h4>messenger</h4>
            <h5>Md Mahfujur Rahman</h5>
            <a href="https://www.messenger.com/" target="_blank" rel="noreferrer">Send Massage</a>
          </article>
          <article className='contact-option'>
            <BsInstagram className='contact-option-icon' />
            <h4>Instagram</h4>
            <h5>its_mahfuj000</h5>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >Send Massage</a>
          </article>
        </div>
        {/* end of contact option */}
        {/*  ref={form}  */}
        <form onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="massage"  rows="5" placeholder='Your Valuable Advise'></textarea>
          <button type ="submit" className='submit btn btn-primary'>Send Massage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact